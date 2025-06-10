"use strict";
exports.__esModule = true;
var cookie = require("cookie");
function handler(req, res) {
    var cookies = cookie.parse(req.headers.cookie || "");
    if (cookies.authToken === "authenticated") {
        return res.status(200).json({ authenticated: true });
    }
    else {
        return res.status(401).json({ authenticated: false });
    }
}
exports["default"] = handler;
