"use client";
"use strict";
exports.__esModule = true;
exports.Header = void 0;
var navigation_1 = require("next/navigation");
var react_1 = require("react");
var components_1 = require("@/once-ui/components");
var Header_module_scss_1 = require("@/components/Header.module.scss");
var resources_1 = require("@/app/resources");
var content_1 = require("@/app/resources/content");
var TimeDisplay = function (_a) {
    var timeZone = _a.timeZone, _b = _a.locale, locale = _b === void 0 ? "en-GB" : _b;
    var _c = react_1.useState(""), currentTime = _c[0], setCurrentTime = _c[1];
    react_1.useEffect(function () {
        var updateTime = function () {
            var now = new Date();
            var options = {
                timeZone: timeZone,
                hour: "2-digit",
                minute: "2-digit",
                second: "2-digit",
                hour12: false
            };
            var timeString = new Intl.DateTimeFormat(locale, options).format(now);
            setCurrentTime(timeString);
        };
        updateTime();
        var intervalId = setInterval(updateTime, 1000);
        return function () { return clearInterval(intervalId); };
    }, [timeZone, locale]);
    return React.createElement(React.Fragment, null, currentTime);
};
exports["default"] = TimeDisplay;
exports.Header = function () {
    var _a;
    var pathname = (_a = navigation_1.usePathname()) !== null && _a !== void 0 ? _a : "";
    return (React.createElement(React.Fragment, null,
        React.createElement(components_1.Fade, { hide: "s", fillWidth: true, position: "fixed", height: "80", zIndex: 9 }),
        React.createElement(components_1.Fade, { show: "s", fillWidth: true, position: "fixed", bottom: "0", to: "top", height: "80", zIndex: 9 }),
        React.createElement(components_1.Flex, { fitHeight: true, className: Header_module_scss_1["default"].position, as: "header", zIndex: 9, fillWidth: true, padding: "8", horizontal: "center" },
            React.createElement(components_1.Flex, { paddingLeft: "12", fillWidth: true, vertical: "center", textVariant: "body-default-s" }, resources_1.display.location && React.createElement(components_1.Flex, { hide: "s" }, content_1.person.location)),
            React.createElement(components_1.Flex, { fillWidth: true, horizontal: "center" },
                React.createElement(components_1.Flex, { background: "surface", border: "neutral-medium", radius: "m-4", shadow: "l", padding: "4", horizontal: "center" },
                    React.createElement(components_1.Flex, { gap: "4", vertical: "center", textVariant: "body-default-s" },
                        resources_1.routes["/"] && (React.createElement(components_1.ToggleButton, { prefixIcon: "home", href: "/", selected: pathname === "/" })),
                        React.createElement(components_1.Line, { vert: true, maxHeight: "24" }),
                        resources_1.routes["/about"] && (React.createElement(React.Fragment, null,
                            React.createElement(components_1.ToggleButton, { className: "s-flex-hide", prefixIcon: "person", href: "/about", label: content_1.about.label, selected: pathname === "/about" }),
                            React.createElement(components_1.ToggleButton, { className: "s-flex-show", prefixIcon: "person", href: "/about", selected: pathname === "/about" }))),
                        resources_1.routes["/work"] && (React.createElement(React.Fragment, null,
                            React.createElement(components_1.ToggleButton, { className: "s-flex-hide", prefixIcon: "grid", href: "/work", label: content_1.work.label, selected: pathname.startsWith("/work") }),
                            React.createElement(components_1.ToggleButton, { className: "s-flex-show", prefixIcon: "grid", href: "/work", selected: pathname.startsWith("/work") }))),
                        resources_1.routes["/blog"] && (React.createElement(React.Fragment, null,
                            React.createElement(components_1.ToggleButton, { className: "s-flex-hide", prefixIcon: "book", href: "/blog", label: content_1.blog.label, selected: pathname.startsWith("/blog") }),
                            React.createElement(components_1.ToggleButton, { className: "s-flex-show", prefixIcon: "book", href: "/blog", selected: pathname.startsWith("/blog") }))),
                        resources_1.routes["/gallery"] && (React.createElement(React.Fragment, null,
                            React.createElement(components_1.ToggleButton, { className: "s-flex-hide", prefixIcon: "gallery", href: "/gallery", label: content_1.gallery.label, selected: pathname.startsWith("/gallery") }),
                            React.createElement(components_1.ToggleButton, { className: "s-flex-show", prefixIcon: "gallery", href: "/gallery", selected: pathname.startsWith("/gallery") })))))),
            React.createElement(components_1.Flex, { fillWidth: true, horizontal: "end", vertical: "center" },
                React.createElement(components_1.Flex, { paddingRight: "12", horizontal: "end", vertical: "center", textVariant: "body-default-s", gap: "20" },
                    React.createElement(components_1.Flex, { hide: "s" }, resources_1.display.time && React.createElement(TimeDisplay, { timeZone: content_1.person.location })))))));
};
