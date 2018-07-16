#Create image based on the official Node 8 Image
FROM node:8

#Create directory where our app will be placed.
RUN mkdir -p /usr/src/app

#Change directory to start working on the new directory
WORKDIR /usr/src/app

#copy dependency definitions
COPY package.json /usr/src/app

#Installing angular globally
RUN npm install -g @angular/cli

#Install the dependencies in the container
RUN npm install

#Get the codes copied to the container
COPY . /usr/src/app

#Expose the port that runs the app
EXPOSE 4200

#serve the app
CMD ng serve --host 0.0.0.0