const {app, BrowserWindow} = require('electron');

import {Server} from './server';

let mainWindow: Electron.BrowserWindow;

app.on('ready', () => {
    mainWindow = new BrowserWindow({height: 835});

    mainWindow.loadURL('file://' + __dirname + '/index.html');
});

var server = new Server();

server.start();