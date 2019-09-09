FROM node:10.0-alpine
WORKDIR /app
EXPOSE 8080
ADD . /app
RUN npm install
CMD ["npm", "start"]

# docker run -d --network haider-net --name backendms -p 9001:8080 backendms