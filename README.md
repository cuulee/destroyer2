# Destroyer2

A realtime multiplayer battleship game

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

You will need redis and nodejs with npm installed on your machine to get started

### Installing

A step by step series of examples that tell you how to get a development env running

Clone the git repository

```
git clone https://github.com/umcconnell/destroyer2.git
```

And install npm dependencies

```
npm install
```

Finally, start the redis server

```
redis-server ./db/redis.conf
```

And start the webserver

```
npm run debug
```

Navigate to http://localhost:8080 to get started!

## Deployment

Change the database password in the [.env ](.env) file and in the [redis.conf](db/redis.conf) file

## Built With

-   [node](https://nodejs.org/) - The server backend
-   [redis](https://redis.io/) - The database
-   [node_redis](https://github.com/NodeRedis/node_redis) - The redis client for node
-   [ws](https://github.com/websockets/ws) - The WebSocket server

## Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/your/project/tags).

## Authors

Ulysse McConnell - [umcconnell](https://github.com/umcconnell/)

See also the list of [contributors](https://github.com/your/project/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

-   [node](https://nodejs.org/) - The server backend
-   [redis](https://redis.io/) - The database
-   [node_redis](https://github.com/NodeRedis/node_redis) - The redis client for node
-   [ws](https://github.com/websockets/ws) - The WebSocket server
-   Billie Thompson - [PurpleBooth](https://github.com/PurpleBooth) for the README and CONTRIBUTING template