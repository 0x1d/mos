FROM bitnami/minideb

ENV LANG C.UTF-8
ENV PATH="/root/.mos/bin:${PATH}"

# install dependencies
RUN apt-get clean && rm -rf /var/lib/apt/lists/*
RUN apt-get update
RUN apt-get install -y \
     apt-transport-https \
     ca-certificates \
     gnupg2 \
     software-properties-common \
     curl \
     git

# install mongoose-os and tools
RUN git clone https://github.com/cesanta/mongoose-os.git
RUN curl -fsSL https://mongoose-os.com/downloads/mos/install.sh | /bin/bash
# install docker
RUN curl -fsSL https://download.docker.com/linux/debian/gpg | apt-key add -
RUN add-apt-repository \
   "deb [arch=amd64] https://download.docker.com/linux/debian \
   $(lsb_release -cs) \
   stable"
RUN apt-get update
RUN apt-get install -y docker-ce
EXPOSE 1992
#ADD $PWD ./app
#WORKDIR /app
#RUN mkdir -p /root/.mos/apps-2.1/app
RUN git clone https://github.com/cesanta/mongoose-os.git
WORKDIR /root/.mos/apps-2.1
ADD $PWD app
#CMD ["/root/.mos/bin/mos", "--http-addr","0.0.0.0:1992","ui"]
