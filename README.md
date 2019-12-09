## Introduction

Moviepedia lets you search and get information about latest movies and shows

## Setup Guide

The command below is used to build a docker image
```bash 
docker build -t movipedia:dev .
```

The command below is then used to run a docker container from the image created above.
```bash
docker run -v ${PWD}:/app -v /app/node_modules -p 3001:3000 --rm movipedia:dev
```

After that open browser and hit the URL below
http://localhost:3001/