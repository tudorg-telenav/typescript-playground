const {app, BrowserWindow} = require('electron');

import {Server} from './server';

let mainWindow: Electron.BrowserWindow;

app.on('ready', () => {
    mainWindow = new BrowserWindow({});

    mainWindow.loadURL('file://' + __dirname + '/index.html');
});

var server = new Server();

server.start();

// TODO: nu am stiut ca trebuie rulat task.json manual si deci am tot iesit si reintrat in VSCode... e posibil ca typeingurile de electron sa nu trebuiasca