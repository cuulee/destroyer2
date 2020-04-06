let express = require("express");
let router = express.Router();
let root = require("app-root-path");

let validate = require(`${root}/frontend-server/middlewares/validator`);
let sanitize = require(`${root}/frontend-server/middlewares/sanitizer`);
let auth = require(`${root}/frontend-server/middlewares/auth`);

let { openRooms, newRoom, deleteRoom } = require("./room");
let { login } = require("./user");

let { uuid } = require(`${root}/helpers/helpers`);
let Users = require(`${root}/models/users`);
let Rooms = require(`${root}/models/rooms`);
let { validatorSchema, roomSchema } = require(`${root}/models/schemas`);

let { pub } = require(`${root}/db/pubsub`);

// API show available endpoints.
router.get("/", function (req, res) {
    res.sendFile("/api.html", { root: "./frontend-server/public" });
});

router.get("/openrooms", openRooms);

router.post(
    "/login",
    sanitize("body"),
    validate("body", validatorSchema.userName),
    login
);

router.post(
    "/newroom",
    auth,
    sanitize("body"),
    validate("body", validatorSchema.roomName),
    validate("body", validatorSchema.roomSecret),
    newRoom
);

router.delete(
    "/deleteroom",
    auth,
    validate("body", validatorSchema.roomId),
    deleteRoom
);

module.exports = router;