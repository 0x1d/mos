FROM docker

ENV LANG C.UTF-8
RUN apt-get clean && rm -rf /var/lib/apt/lists/*
RUN apt-get update
RUN apt-get install -y curl git
RUN curl -fsSL https://mongoose-os.com/downloads/mos/install.sh | /bin/bash
RUN git clone https://github.com/cesanta/mongoose-os.git
EXPOSE 1992
RUN mkdir -p /root/.mos/apps-2.1/app
ADD . ./app
WORKDIR /root/.mos/apps-2.1
#CMD ["/root/.mos/bin/mos", "--http-addr","0.0.0.0:1992","ui"]
