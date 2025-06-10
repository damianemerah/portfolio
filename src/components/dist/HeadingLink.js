"use client";
"use strict";
exports.__esModule = true;
exports.HeadingLink = void 0;
var react_1 = require("react");
var components_1 = require("@/once-ui/components");
var HeadingLink_module_scss_1 = require("@/components/HeadingLink.module.scss");
exports.HeadingLink = function (_a) {
    var id = _a.id, level = _a.level, children = _a.children, style = _a.style;
    var addToast = components_1.useToast().addToast;
    var copyURL = function (id) {
        var url = "" + window.location.origin + window.location.pathname + "#" + id;
        navigator.clipboard.writeText(url).then(function () {
            addToast({
                variant: "success",
                message: "Link copied to clipboard."
            });
        }, function () {
            addToast({
                variant: "danger",
                message: "Failed to copy link."
            });
        });
    };
    var variantMap = {
        1: "display-strong-xs",
        2: "heading-strong-xl",
        3: "heading-strong-l",
        4: "heading-strong-m",
        5: "heading-strong-s",
        6: "heading-strong-xs"
    };
    var variant = variantMap[level];
    var asTag = "h" + level;
    return (react_1["default"].createElement(components_1.Flex, { style: style, onClick: function () { return copyURL(id); }, className: HeadingLink_module_scss_1["default"].control, vertical: "center", gap: "4" },
        react_1["default"].createElement(components_1.Heading, { className: HeadingLink_module_scss_1["default"].text, id: id, variant: variant, as: asTag }, children),
        react_1["default"].createElement(components_1.IconButton, { className: HeadingLink_module_scss_1["default"].visibility, size: "s", icon: "openLink", variant: "ghost", tooltip: "Copy", tooltipPosition: "right" })));
};
