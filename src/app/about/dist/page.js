"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.generateMetadata = void 0;
var components_1 = require("@/once-ui/components");
var resources_1 = require("@/app/resources");
var TableOfContents_1 = require("@/components/about/TableOfContents");
var about_module_scss_1 = require("@/components/about/about.module.scss");
var content_1 = require("@/app/resources/content");
function generateMetadata() {
    return __awaiter(this, void 0, void 0, function () {
        var title, description, ogImage;
        return __generator(this, function (_a) {
            title = content_1.about.title;
            description = content_1.about.description;
            ogImage = "https://" + resources_1.baseURL + "/og?title=" + encodeURIComponent(title);
            return [2 /*return*/, {
                    title: title,
                    description: description,
                    openGraph: {
                        title: title,
                        description: description,
                        type: "website",
                        url: "https://" + resources_1.baseURL + "/about",
                        images: [
                            {
                                url: ogImage,
                                alt: title
                            },
                        ]
                    },
                    twitter: {
                        card: "summary_large_image",
                        title: title,
                        description: description,
                        images: [ogImage]
                    }
                }];
        });
    });
}
exports.generateMetadata = generateMetadata;
function About() {
    var structure = [
        {
            title: content_1.about.intro.title,
            display: content_1.about.intro.display,
            items: []
        },
        {
            title: content_1.about.work.title,
            display: content_1.about.work.display,
            items: content_1.about.work.experiences.map(function (experience) { return experience.company; })
        },
        {
            title: content_1.about.studies.title,
            display: content_1.about.studies.display,
            items: content_1.about.studies.institutions.map(function (institution) { return institution.name; })
        },
        {
            title: content_1.about.technical.title,
            display: content_1.about.technical.display,
            items: content_1.about.technical.skills.map(function (skill) { return skill.title; })
        },
    ];
    return (React.createElement(components_1.Column, { maxWidth: "m" },
        React.createElement("script", { type: "application/ld+json", suppressHydrationWarning: true, dangerouslySetInnerHTML: {
                __html: JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "Person",
                    name: content_1.person.name,
                    jobTitle: content_1.person.role,
                    description: content_1.about.intro.description,
                    url: "https://" + resources_1.baseURL + "/about",
                    image: resources_1.baseURL + "/images/" + content_1.person.avatar,
                    sameAs: content_1.social
                        .filter(function (item) { return item.link && !item.link.startsWith("mailto:"); }) // Filter out empty links and email links
                        .map(function (item) { return item.link; }),
                    worksFor: {
                        "@type": "Organization",
                        name: content_1.about.work.experiences[0].company || ""
                    }
                })
            } }),
        content_1.about.tableOfContent.display && (React.createElement(components_1.Column, { left: "0", style: { top: "50%", transform: "translateY(-50%)" }, position: "fixed", paddingLeft: "24", gap: "32", hide: "s" },
            React.createElement(TableOfContents_1["default"], { structure: structure, about: content_1.about }))),
        React.createElement(components_1.Flex, { fillWidth: true, mobileDirection: "column", horizontal: "center" },
            content_1.about.avatar.display && (React.createElement(components_1.Column, { className: about_module_scss_1["default"].avatar, minWidth: "160", paddingX: "l", paddingBottom: "xl", gap: "m", flex: 3, horizontal: "center" },
                React.createElement(components_1.Avatar, { src: content_1.person.avatar, size: "xl" }),
                React.createElement(components_1.Flex, { gap: "8", vertical: "center" },
                    React.createElement(components_1.Icon, { onBackground: "accent-weak", name: "globe" }),
                    content_1.person.location),
                content_1.person.languages.length > 0 && (React.createElement(components_1.Flex, { wrap: true, gap: "8" }, content_1.person.languages.map(function (language, index) { return (React.createElement(components_1.Tag, { key: index, size: "l" }, language)); }))))),
            React.createElement(components_1.Column, { className: about_module_scss_1["default"].blockAlign, flex: 9, maxWidth: 40 },
                React.createElement(components_1.Column, { id: content_1.about.intro.title, fillWidth: true, minHeight: "160", vertical: "center", marginBottom: "32" },
                    content_1.about.calendar.display && (React.createElement(components_1.Flex, { fitWidth: true, border: "brand-alpha-medium", className: about_module_scss_1["default"].blockAlign, style: {
                            backdropFilter: "blur(var(--static-space-1))"
                        }, background: "brand-alpha-weak", radius: "full", padding: "4", gap: "8", marginBottom: "m", vertical: "center" },
                        React.createElement(components_1.Icon, { paddingLeft: "12", name: "calendar", onBackground: "brand-weak" }),
                        React.createElement(components_1.Flex, { paddingX: "8" }, "Schedule a call"),
                        React.createElement(components_1.IconButton, { href: content_1.about.calendar.link, "data-border": "rounded", variant: "secondary", icon: "chevronRight" }))),
                    React.createElement(components_1.Heading, { className: about_module_scss_1["default"].textAlign, variant: "display-strong-xl" }, content_1.person.name),
                    React.createElement(components_1.Text, { className: about_module_scss_1["default"].textAlign, variant: "display-default-xs", onBackground: "neutral-weak" }, content_1.person.role),
                    content_1.social.length > 0 && (React.createElement(components_1.Flex, { className: about_module_scss_1["default"].blockAlign, paddingTop: "20", paddingBottom: "8", gap: "8", wrap: true, horizontal: "center", fitWidth: true }, content_1.social.map(function (item) {
                        return item.link && (React.createElement(React.Fragment, null,
                            React.createElement(components_1.Button, { className: "s-flex-hide", key: item.name, href: item.link, prefixIcon: item.icon, label: item.name, size: "s", variant: "secondary" }),
                            React.createElement(components_1.IconButton, { className: "s-flex-show", size: "l", key: item.name + "-icon", href: item.link, icon: item.icon, variant: "secondary" })));
                    })))),
                content_1.about.intro.display && (React.createElement(components_1.Column, { textVariant: "body-default-l", fillWidth: true, gap: "m", marginBottom: "xl" }, content_1.about.intro.description)),
                content_1.about.work.display && (React.createElement(React.Fragment, null,
                    React.createElement(components_1.Heading, { as: "h2", id: content_1.about.work.title, variant: "display-strong-s", marginBottom: "m" }, content_1.about.work.title),
                    React.createElement(components_1.Column, { fillWidth: true, gap: "l", marginBottom: "40" }, content_1.about.work.experiences.map(function (experience, index) { return (React.createElement(components_1.Column, { key: experience.company + "-" + experience.role + "-" + index, fillWidth: true },
                        React.createElement(components_1.Flex, { fillWidth: true, horizontal: "space-between", vertical: "end", marginBottom: "4" },
                            React.createElement(components_1.Text, { id: experience.company, variant: "heading-strong-l" }, experience.company),
                            React.createElement(components_1.Text, { variant: "heading-default-xs", onBackground: "neutral-weak" }, experience.timeframe)),
                        React.createElement(components_1.Text, { variant: "body-default-s", onBackground: "brand-weak", marginBottom: "m" }, experience.role),
                        React.createElement(components_1.Column, { as: "ul", gap: "16" }, experience.achievements.map(function (achievement, index) { return (React.createElement(components_1.Text, { as: "li", variant: "body-default-m", key: experience.company + "-" + index }, achievement)); })),
                        experience.images.length > 0 && (React.createElement(components_1.Flex, { fillWidth: true, paddingTop: "m", paddingLeft: "40", wrap: true }, experience.images.map(function (image, index) { return (React.createElement(components_1.Flex, { key: index, border: "neutral-medium", radius: "m", 
                            //@ts-ignore
                            minWidth: image.width, 
                            //@ts-ignore
                            height: image.height },
                            React.createElement(components_1.SmartImage, { enlarge: true, radius: "m", 
                                //@ts-ignore
                                sizes: image.width.toString(), 
                                //@ts-ignore
                                alt: image.alt, 
                                //@ts-ignore
                                src: image.src }))); }))))); })))),
                content_1.about.studies.display && (React.createElement(React.Fragment, null,
                    React.createElement(components_1.Heading, { as: "h2", id: content_1.about.studies.title, variant: "display-strong-s", marginBottom: "m" }, content_1.about.studies.title),
                    React.createElement(components_1.Column, { fillWidth: true, gap: "l", marginBottom: "40" }, content_1.about.studies.institutions.map(function (institution, index) { return (React.createElement(components_1.Column, { key: institution.name + "-" + index, fillWidth: true, gap: "4" },
                        React.createElement(components_1.Text, { id: institution.name, variant: "heading-strong-l" }, institution.name),
                        React.createElement(components_1.Text, { variant: "heading-default-xs", onBackground: "neutral-weak" }, institution.description))); })))),
                content_1.about.technical.display && (React.createElement(React.Fragment, null,
                    React.createElement(components_1.Heading, { as: "h2", id: content_1.about.technical.title, variant: "display-strong-s", marginBottom: "40" }, content_1.about.technical.title),
                    React.createElement(components_1.Column, { fillWidth: true, gap: "l" }, content_1.about.technical.skills.map(function (skill, index) { return (React.createElement(components_1.Column, { key: skill + "-" + index, fillWidth: true, gap: "4" },
                        React.createElement(components_1.Text, { variant: "heading-strong-l" }, skill.title),
                        React.createElement(components_1.Text, { variant: "body-default-m", onBackground: "neutral-weak" }, skill.description),
                        skill.images && skill.images.length > 0 && (React.createElement(components_1.Flex, { fillWidth: true, paddingTop: "m", gap: "12", wrap: true }, skill.images.map(function (image, index) { return (React.createElement(components_1.Flex, { key: index, border: "neutral-medium", radius: "m", 
                            //@ts-ignore
                            minWidth: image.width, 
                            //@ts-ignore
                            height: image.height },
                            React.createElement(components_1.SmartImage, { enlarge: true, radius: "m", 
                                //@ts-ignore
                                sizes: image.width.toString(), 
                                //@ts-ignore
                                alt: image.alt, 
                                //@ts-ignore
                                src: image.src }))); }))))); }))))))));
}
exports["default"] = About;
