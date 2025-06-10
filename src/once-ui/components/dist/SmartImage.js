"use client";
"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
exports.__esModule = true;
exports.SmartImage = void 0;
var react_1 = require("react");
var image_1 = require("next/image");
var ImagePopover_1 = require("./ImagePopover");
var fa_1 = require("react-icons/fa");
var components_1 = require("@/once-ui/components");
var SmartImage = function (_a) {
    var aspectRatio = _a.aspectRatio, height = _a.height, _b = _a.alt, alt = _b === void 0 ? "" : _b, _c = _a.isLoading, isLoading = _c === void 0 ? false : _c, _d = _a.objectFit, objectFit = _d === void 0 ? "cover" : _d, _e = _a.enlarge, enlarge = _e === void 0 ? false : _e, src = _a.src, _f = _a.unoptimized, unoptimized = _f === void 0 ? false : _f, priority = _a.priority, _g = _a.sizes, sizes = _g === void 0 ? "100vw" : _g, rest = __rest(_a, ["aspectRatio", "height", "alt", "isLoading", "objectFit", "enlarge", "src", "unoptimized", "priority", "sizes"]);
    var _h = react_1.useState(false), showPopover = _h[0], setShowPopover = _h[1];
    var _j = react_1.useState(false), isHovered = _j[0], setIsHovered = _j[1];
    var imageRef = react_1.useRef(null);
    var handleClick = function (e) {
        if (enlarge) {
            setShowPopover(true);
        }
        if (rest.onClick)
            rest.onClick(e);
    };
    var isYouTubeVideo = function (url) {
        var youtubeRegex = /(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
        return youtubeRegex.test(url);
    };
    var getYouTubeEmbedUrl = function (url) {
        var match = url.match(/(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/);
        return match
            ? "https://www.youtube.com/embed/" + match[1] + "?controls=0&rel=0&modestbranding=1"
            : "";
    };
    var isVideo = src === null || src === void 0 ? void 0 : src.endsWith(".mp4");
    var isYouTube = isYouTubeVideo(src);
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement(components_1.Flex, __assign({ ref: imageRef, fillWidth: true, overflow: "hidden", position: "relative", zIndex: 0, cursor: enlarge ? "interactive" : "", style: {
                outline: "none",
                isolation: "isolate",
                height: aspectRatio ? "" : height ? height + "rem" : "100%",
                aspectRatio: aspectRatio,
                borderRadius: undefined
            }, onClick: handleClick, onMouseEnter: function () { return setIsHovered(true); }, onMouseLeave: function () { return setIsHovered(false); } }, rest),
            isLoading && react_1["default"].createElement(components_1.Skeleton, { shape: "block" }),
            !isLoading && isVideo && (react_1["default"].createElement("video", { src: src, autoPlay: true, loop: true, muted: true, playsInline: true, style: {
                    width: "100%",
                    height: "100%",
                    objectFit: objectFit
                } })),
            !isLoading && isYouTube && (react_1["default"].createElement("iframe", { width: "100%", height: "100%", src: getYouTubeEmbedUrl(src), frameBorder: "0", allow: "accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture", allowFullScreen: true, style: {
                    objectFit: objectFit
                } })),
            !isLoading && !isVideo && !isYouTube && (react_1["default"].createElement(image_1["default"], { src: src, alt: alt, priority: priority, sizes: sizes, unoptimized: unoptimized, fill: true, style: {
                    objectFit: objectFit
                } })),
            enlarge && isHovered && !isLoading && !isVideo && !isYouTube && (react_1["default"].createElement("span", { style: {
                    position: "absolute",
                    top: 8,
                    right: 8,
                    background: "rgba(0,0,0,0.5)",
                    color: "#fff",
                    borderRadius: "50%",
                    padding: 6,
                    zIndex: 2,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
                } },
                react_1["default"].createElement(fa_1.FaSearchPlus, { size: 20 })))),
        showPopover && enlarge && !isVideo && !isYouTube && (react_1["default"].createElement(ImagePopover_1["default"], { src: src, alt: alt, onClose: function () { return setShowPopover(false); } }))));
};
exports.SmartImage = SmartImage;
SmartImage.displayName = "SmartImage";
