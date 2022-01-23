# Technical test - Frontend

Hello! This is my small view for frontend using:

- HTML
- CSS (with Materialize)
- CSS
- Docker (with Docker compose)

## Starting up

If you are in a Linux/OSX machine, open a terminal in the root of the project and type:

- `make build`
- `make up`

You MUST have installed [Docker Desktop](https://www.docker.com/products/docker-desktop) to run the commands.

To stop the docker instance: `make down`

In case that you are using a Windows machine you need to execute:

- `docker-compose build`
- `docker-compose up -d`

To stop: `docker-compose down`

## API Routing

### new.html

Add a new user

### edit.html?id=1

Edit a user

### list.html

Get all users in database
