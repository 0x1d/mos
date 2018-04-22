load('api_config.js');
load('api_events.js');
load('api_gpio.js');
load('api_mqtt.js');
load('api_net.js');
load('api_sys.js');
load('api_timer.js');

let SENSOR = 0;
//let led = Cfg.get('pins.led');
let topic = '/devices/' + Cfg.get('device.id') + '/events';

let getInfo = function() {
  return JSON.stringify({
    total_ram: Sys.total_ram(),
    free_ram: Sys.free_ram()
  });
};

GPIO.set_mode(SENSOR, GPIO.MODE_INPUT);

Timer.set(2000 /* 2 sec */ , true /* repeat */ , function () {
  let motion = GPIO.read(SENSOR);
  let message = JSON.stringify({
    data: {
      movement: motion
    }
  });
  //lastMotion = Timer.now();
  print('motion: ', motion);
  let ok = MQTT.pub(topic, message, 1);
  print(ok ? 'published' : 'not published', 'topic:', topic, 'message:', message);
}, null);

// Monitor network connectivity.
Event.addGroupHandler(Net.EVENT_GRP, function(ev, evdata, arg) {
  let evs = '???';
  if (ev === Net.STATUS_DISCONNECTED) {
    evs = 'DISCONNECTED';
  } else if (ev === Net.STATUS_CONNECTING) {
    evs = 'CONNECTING';
  } else if (ev === Net.STATUS_CONNECTED) {
    evs = 'CONNECTED';
  } else if (ev === Net.STATUS_GOT_IP) {
    evs = 'GOT_IP';
  }
  print('== Net event:', ev, evs);
}, null);
