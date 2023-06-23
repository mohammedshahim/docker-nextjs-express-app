# Use the official Node.js 14 image as the base image
FROM node:16

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy the package.json and package-lock.json files to the working directory
COPY next-app/package*.json ./

# Install project dependencies
RUN npm install

# Copy the application code to the working directory
COPY next-app/ .

# Build the Next.js application
RUN npm run build

# Expose port 3000
EXPOSE 3000

# Set the command to start the application
CMD ["npm", "start"]
