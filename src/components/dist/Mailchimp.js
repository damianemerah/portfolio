"use client";
"use strict";
exports.__esModule = true;
exports.Mailchimp = void 0;
var resources_1 = require("@/app/resources");
var components_1 = require("@/once-ui/components");
var react_1 = require("react");
function debounce(func, delay) {
    var timeout;
    return (function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        clearTimeout(timeout);
        timeout = setTimeout(function () { return func.apply(void 0, args); }, delay);
    });
}
exports.Mailchimp = function (_a) {
    var newsletter = _a.newsletter;
    var _b = react_1.useState(""), email = _b[0], setEmail = _b[1];
    var _c = react_1.useState(""), error = _c[0], setError = _c[1];
    var _d = react_1.useState(false), touched = _d[0], setTouched = _d[1];
    var validateEmail = function (email) {
        if (email === "") {
            return true;
        }
        var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email);
    };
    var handleChange = function (e) {
        var value = e.target.value;
        setEmail(value);
        if (!validateEmail(value)) {
            setError("Please enter a valid email address.");
        }
        else {
            setError("");
        }
    };
    var debouncedHandleChange = debounce(handleChange, 2000);
    var handleBlur = function () {
        setTouched(true);
        if (!validateEmail(email)) {
            setError("Please enter a valid email address.");
        }
    };
    return (React.createElement(components_1.Column, { overflow: "hidden", position: "relative", fillWidth: true, padding: "xl", radius: "l", marginBottom: "m", horizontal: "center", align: "center", background: "surface", border: "neutral-medium" },
        React.createElement(components_1.Background, { mask: {
                cursor: resources_1.mailchimp.effects.mask.cursor,
                x: resources_1.mailchimp.effects.mask.x,
                y: resources_1.mailchimp.effects.mask.y,
                radius: resources_1.mailchimp.effects.mask.radius
            }, gradient: {
                display: resources_1.mailchimp.effects.gradient.display,
                x: resources_1.mailchimp.effects.gradient.x,
                y: resources_1.mailchimp.effects.gradient.y,
                width: resources_1.mailchimp.effects.gradient.width,
                height: resources_1.mailchimp.effects.gradient.height,
                tilt: resources_1.mailchimp.effects.gradient.tilt,
                colorStart: resources_1.mailchimp.effects.gradient.colorStart,
                colorEnd: resources_1.mailchimp.effects.gradient.colorEnd,
                opacity: resources_1.mailchimp.effects.gradient.opacity
            }, dots: {
                display: resources_1.mailchimp.effects.dots.display,
                color: resources_1.mailchimp.effects.dots.color,
                size: resources_1.mailchimp.effects.dots.size,
                opacity: resources_1.mailchimp.effects.dots.opacity
            }, grid: {
                display: resources_1.mailchimp.effects.grid.display,
                color: resources_1.mailchimp.effects.grid.color,
                width: resources_1.mailchimp.effects.grid.width,
                height: resources_1.mailchimp.effects.grid.height,
                opacity: resources_1.mailchimp.effects.grid.opacity
            }, lines: {
                display: resources_1.mailchimp.effects.lines.display,
                opacity: resources_1.mailchimp.effects.lines.opacity
            } }),
        React.createElement(components_1.Heading, { style: { position: "relative" }, marginBottom: "s", variant: "display-strong-xs" }, newsletter.title),
        React.createElement(components_1.Text, { style: {
                position: "relative",
                maxWidth: "var(--responsive-width-xs)"
            }, wrap: "balance", marginBottom: "l", onBackground: "neutral-medium" }, newsletter.description),
        React.createElement("form", { style: {
                width: "100%",
                display: "flex",
                justifyContent: "center"
            }, action: resources_1.mailchimp.action, method: "post", id: "mc-embedded-subscribe-form", name: "mc-embedded-subscribe-form" },
            React.createElement(components_1.Flex, { id: "mc_embed_signup_scroll", fillWidth: true, maxWidth: 24, gap: "8" },
                React.createElement(components_1.Input, { formNoValidate: true, labelAsPlaceholder: true, id: "mce-EMAIL", name: "EMAIL", type: "email", label: "Email", required: true, onChange: function (e) {
                        if (error) {
                            handleChange(e);
                        }
                        else {
                            debouncedHandleChange(e);
                        }
                    }, onBlur: handleBlur, errorMessage: error }),
                React.createElement("div", { style: { display: "none" } },
                    React.createElement("input", { type: "checkbox", readOnly: true, name: "group[3492][1]", id: "mce-group[3492]-3492-0", value: "", checked: true })),
                React.createElement("div", { id: "mce-responses", className: "clearfalse" },
                    React.createElement("div", { className: "response", id: "mce-error-response", style: { display: "none" } }),
                    React.createElement("div", { className: "response", id: "mce-success-response", style: { display: "none" } })),
                React.createElement("div", { "aria-hidden": "true", style: { position: "absolute", left: "-5000px" } },
                    React.createElement("input", { type: "text", readOnly: true, name: "b_c1a5a210340eb6c7bff33b2ba_0462d244aa", tabIndex: -1, value: "" })),
                React.createElement("div", { className: "clear" },
                    React.createElement(components_1.Flex, { height: "48", vertical: "center" },
                        React.createElement(components_1.Button, { id: "mc-embedded-subscribe", value: "Subscribe", size: "m", fillWidth: true, onClick: function () {
                                alert("clicked");
                            } }, "Subscribe")))))));
};
