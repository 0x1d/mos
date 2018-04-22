# local docker build
docker build -f build/Dockerfile -t 0x1d/mos .


docker run -it --rm --device=/dev/ttyUSB0 -v /var/run/docker.sock:/var/run/docker.sock -v $PWD:/root/.mos/apps-2.1/ 0x1d/mongoose mos build --platform esp8266 --local --verbose