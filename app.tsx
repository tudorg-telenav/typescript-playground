import * as React from 'react';
import * as ReactDOM from 'react-dom';

import Layout from "./pane_components/Layout"

// import * as fs from 'fs';

// navigator.mediaDevices.getUserMedia({
//         video: true,
//         audio: false
//     }).then((videoStream) => {
//         let camera: HTMLImageElement =  document.getElementById('camera') as HTMLImageElement;
//         camera.src = URL.createObjectURL(videoStream);
//     });

// window.onload = function() {

//     fs.readFile('tsconfig.json', {encoding: 'utf8'}, (err: NodeJS.ErrnoException, buffer: string) => {

//         let fileContent: JSON = JSON.parse(buffer);
//         ReactDOM.render(
//             <pre>{JSON.stringify(fileContent, null, 4)}</pre>,
//             document.getElementById('app')
//         );
//     });
// }

const appElement: Element = document.getElementById('app');
ReactDOM.render(<Layout/>, appElement);