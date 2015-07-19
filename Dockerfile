FROM node:0.12.7
ADD . /cssocket
WORKDIR /cssocket
RUN npm install
RUN npm install -g gulp supervisor
CMD npm run supervisor
