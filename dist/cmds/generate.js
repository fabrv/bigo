"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generate = void 0;
var Component_ts_1 = require("../templates/typescript/Component.ts");
var Component_html_1 = require("../templates/html/Component.html");
var fs_1 = __importDefault(require("fs"));
/**
 * Generate a new empty component
 * @param componentName {string} The component class and file name
 */
function generate(componentName) {
    componentName = componentName.replace(/[^a-z0-9]/gi, '');
    var compTs = new Component_ts_1.CmpTsComponent({ componentName: componentName });
    var compHtml = new Component_html_1.CmpHtmlComponent({ componentName: componentName });
    var path = process.cwd() + "\\" + componentName;
    fs_1.default.mkdirSync(path, { recursive: true });
    fs_1.default.writeFileSync(path + "\\" + componentName + ".ts", compTs.render(), 'utf8');
    fs_1.default.writeFileSync(path + "\\" + componentName + ".html", compHtml.render(), 'utf8');
}
exports.generate = generate;
