## Setup Guide

The command below is used to build a docker image
```bash 
docker build -t movipedia:dev .
```

The second command below is used to run a docker container from the above created image.
```bash
docker run -v ${PWD}:/app -v /app/node_modules -p 3001:3000 --rm movipedia:dev
```

After that open browser and hit the URL below
http://localhost:3001/