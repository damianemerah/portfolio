"use strict";
exports.__esModule = true;
var cookie = require("cookie");
function handler(req, res) {
    if (req.method === "POST") {
        var password = req.body.password;
        var correctPassword = process.env.PAGE_ACCESS_PASSWORD;
        if (!correctPassword) {
            console.error("PAGE_ACCESS_PASSWORD environment variable is not set");
            return res.status(500).json({ message: "Internal server error" });
        }
        if (password === correctPassword) {
            res.setHeader("Set-Cookie", cookie.serialize("authToken", "authenticated", {
                httpOnly: true,
                secure: process.env.NODE_ENV === "production",
                maxAge: 60 * 60,
                sameSite: "strict",
                path: "/"
            }));
            return res.status(200).json({ success: true });
        }
        else {
            return res.status(401).json({ message: "Incorrect password" });
        }
    }
    return res.status(405).json({ message: "Method Not Allowed" });
}
exports["default"] = handler;
