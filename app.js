"use strict";
const React = require('react');
const ReactDOM = require('react-dom');
navigator.getUserMedia({
    video: true
}, function (stream) {
    var camera = document.getElementById('camera');
    camera.src = URL.createObjectURL(stream);
    ReactDOM.render(React.createElement("h4", null, "Hello, world!"), document.getElementById('hello'));
}, function () {
    alert('could not connect stream');
});
//# sourceMappingURL=app.js.map