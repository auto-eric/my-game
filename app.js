#!/usr/bin/env node

const readline = require('readline');
const util = require('util')

const out = require('./out')
const Status = require('./status');
const Context = require('./context');

function runGame() {

    const rl = readline.createInterface(process.stdin, process.stdout);
    rl.setPrompt('action> ');

    out.welcome();
    out.startGameDescription();

    rl.prompt();

    const CONTEXT = new Context(Status.START);

    rl.on('line', function (line) {
        let currentStatus = CONTEXT.currentStatus;
        console.log(util.inspect(currentStatus, false, null));
        if (Status.EXIT === currentStatus) {
            rl.close();
        } else {
            CONTEXT.currentStatus = currentStatus.run(line, CONTEXT);
            rl.prompt();
        }
    }).on('close', function () {
        process.exit(0);
    });
}

runGame();
