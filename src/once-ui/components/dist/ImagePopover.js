"use strict";
exports.__esModule = true;
var react_1 = require("react");
var components_1 = require("@/once-ui/components");
var image_1 = require("next/image");
var ImagePopover = function (_a) {
    var src = _a.src, _b = _a.alt, alt = _b === void 0 ? "" : _b, onClose = _a.onClose;
    react_1.useEffect(function () {
        var handleEscape = function (event) {
            if (event.key === "Escape") {
                onClose();
            }
        };
        document.addEventListener("keydown", handleEscape);
        document.body.style.overflow = "hidden";
        return function () {
            document.removeEventListener("keydown", handleEscape);
            document.body.style.overflow = "auto";
        };
    }, [onClose]);
    return (react_1["default"].createElement(components_1.Flex, { horizontal: "center", vertical: "center", position: "fixed", background: "overlay", top: "0", left: "0", style: {
            width: "100vw",
            height: "100vh",
            zIndex: 1000,
            overflow: "auto"
        }, onClick: onClose },
        react_1["default"].createElement(components_1.Flex, { style: {
                maxWidth: "90vw",
                maxHeight: "90vh",
                boxShadow: "0 0 24px rgba(0,0,0,0.5)"
            }, onClick: function (e) { return e.stopPropagation(); } },
            react_1["default"].createElement(image_1["default"], { src: src, alt: alt, fill: true, sizes: "90vw", style: {
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                    objectPosition: "top",
                    borderRadius: 30,
                    background: "transparent"
                } }),
            react_1["default"].createElement("button", { onClick: onClose, style: {
                    position: "fixed",
                    top: 52,
                    right: "5.5rem",
                    background: "rgba(0,0,0,0.6)",
                    color: "#fff",
                    border: "none",
                    borderRadius: "50%",
                    width: 32,
                    height: 32,
                    cursor: "pointer",
                    fontSize: 20,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
                }, "aria-label": "Close" }, "\u00D7"))));
};
exports["default"] = ImagePopover;
