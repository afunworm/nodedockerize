# Use the latest Node.js version with the Alpine Linux base
FROM node:20-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy everything in the current folder over
COPY . .

# Run the server
CMD [ "node", "index.js" ]