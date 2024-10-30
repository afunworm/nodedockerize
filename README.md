![nodedockerize](nodedockerize.png)

# nodedockerize | Dockerize Your Node JS Apps

## THE WHY?

The purposee of this barebone docker image is to run a NodeJS server with docker. By doing this, the process can be automatically started, restarted, monitored, logged, etc. with other Docker-compatible apps such as Portainer, or just by Docker, without having to rely on things such as PM2, nodemonit, etc.

## THE HOW

Simply mount the folder at `/app` to the local directory `.`. This will allow the container to mimic whatever files you have to deploy your app:

```yml
# docker-compose.yml
# ...
volumes:
    - "./:/app"
#...
```

And start your server by starting the container:

```bash
docker compose up -d
```

You can also configure things like restart policy:

```yml
# docker-compose.yml
# ...
restart: unless-stopped
volumes:
    - "./:/app"
#...
```

Just don't forget to expose the ports that your app is using, for example:

```yml
# docker-compose.yml
# ...
restart: unless-stopped
volumes:
    - "./:/app"
ports:
    - 8080:8080
#...
```

To update your app, simply change the files as if you were developing it, and restart the container.

## docker-compose.yml Example

```yaml
services:
    nodedockerize:
        container_name: sample_nodejs_app
        restart: unless-stopped
        volumes:
            - ./:/app
        # Only expose the ports the server is running on
        # If your app is listening on port 8080, you can map it to 8080 outside
        # or any other port you desire
        # ports:
        #   - 8080:8080
        environment:
            # You can set the entry file, such as index.mjs
            - ENTRY=index.js
        image: afunworm/nodedockerize:latest
```
