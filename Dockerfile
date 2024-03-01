FROM ubuntu:22.04
RUN mkdir app
WORKDIR app
COPY . .
RUN apt-get update 
RUN apt-get install curl -y
RUN curl -sL https://deb.nodesource.com/setup_20.x | bash -E -
RUN apt-get install apt install -y nodejs
RUN npm install
RUN npm start
