# Use the official Node.js 14 image as the base image
FROM node:14

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy the package.json and package-lock.json files to the working directory
COPY express-app/package*.json ./

# Install project dependencies
RUN npm install

# Copy the application code to the working directory
COPY express-app/ .

# Expose port 4000
EXPOSE 4000

# Set the command to start the application
CMD ["npm", "start"]
