# Use the latest Node.js version with the Alpine Linux base
FROM node:22-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy everything in the current folder over
COPY . .

# Set default entry file
ENV ENTRY=index.js

# Run the server
CMD [ "sh", "-c", "node $ENTRY" ]