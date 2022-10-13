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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Secundary = exports.Primary = exports.Basic = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var Label_1 = require("../../components/Label");
exports.default = {
    title: 'UI/Label',
    component: Label_1.Label,
    argTypes: {
        size: { control: 'select' },
        color: { control: 'select' },
        fontColor: { control: 'color' }
    }
}; // Tipamos con interfaz de Label
// Instancia del Componente para los Tipos - Tipamos los argumentos
var Template = function (args) { return (0, jsx_runtime_1.jsx)(Label_1.Label, __assign({}, args)); };
// Diferentes tipos de Componente - bind permite copiar el template
exports.Basic = Template.bind({});
exports.Basic.args = {
    size: 'normal',
    label: 'Label - Basico',
    allCaps: true
};
exports.Primary = Template.bind({});
exports.Primary.args = {
    size: 'h1',
    label: 'Label - Primary',
    color: 'text-secundary'
};
exports.Secundary = Template.bind({});
exports.Secundary.args = {
    size: 'h2',
    label: 'Label - Secundary',
    color: 'text-tertiary'
};
