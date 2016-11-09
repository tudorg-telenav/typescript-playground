
import * as React from 'react';
import * as ReactDOM from 'react-dom';

const fs = require('fs');

navigator.mediaDevices.getUserMedia({
        video: true,
        audio: false
    }).then((videoStream) => {
        var camera =  document.getElementById('camera') as HTMLImageElement;
        camera.src = URL.createObjectURL(videoStream);
    });

window.onload = function() {

    var file = fs.readFile('tsconfig.json', {encoding: 'utf8'}, (err: any, buffer: any) => {

        let fileContent = JSON.parse(buffer);
        ReactDOM.render(
            <pre>{JSON.stringify(fileContent, null, 4)}</pre>,
            document.getElementById('hello')
        );
    });
}