"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import serve from 'local-api';
// serve();
var commander_1 = require("commander");
var serve_1 = require("./commands/serve");
commander_1.program
    .addCommand(serve_1.serveCommand);
commander_1.program.parse(process.argv);
