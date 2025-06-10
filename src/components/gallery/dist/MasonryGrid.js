"use client";
"use strict";
exports.__esModule = true;
var react_masonry_css_1 = require("react-masonry-css");
var components_1 = require("@/once-ui/components");
var Gallery_module_scss_1 = require("./Gallery.module.scss");
var content_1 = require("@/app/resources/content");
function MasonryGrid() {
    var breakpointColumnsObj = {
        "default": 4,
        1440: 3,
        1024: 2,
        560: 1
    };
    return (React.createElement(react_masonry_css_1["default"], { breakpointCols: breakpointColumnsObj, className: Gallery_module_scss_1["default"].masonryGrid, columnClassName: Gallery_module_scss_1["default"].masonryGridColumn }, content_1.gallery.images.map(function (image, index) { return (React.createElement(components_1.SmartImage, { priority: index < 10, sizes: "(max-width: 560px) 100vw, (max-width: 1024px) 50vw, (max-width: 1440px) 33vw, 25vw", key: index, radius: "m", aspectRatio: image.orientation === "horizontal" ? "16 / 9" : "9 / 16", src: image.src, alt: image.alt, className: Gallery_module_scss_1["default"].gridItem, enlarge: true })); })));
}
exports["default"] = MasonryGrid;
