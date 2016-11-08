"use strict";
const { app, BrowserWindow } = require('electron');
const server_1 = require('./server');
let mainWindow;
app.on('ready', () => {
    mainWindow = new BrowserWindow({});
    mainWindow.loadURL('file://' + __dirname + '/index.html');
});
var server = new server_1.Server();
server.start();
//# sourceMappingURL=main.js.map