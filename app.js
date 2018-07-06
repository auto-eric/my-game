#!/usr/bin/env node

const out = require('./out')

const readline = require('readline');
const States = require('./states');

function runGame() {

    const rl = readline.createInterface(process.stdin, process.stdout);
    rl.setPrompt('action> ');

    out.welcome();
    out.startGameDescription();

    var currentState = States.START;
    rl.prompt();

    rl.on('line', function (line) {
        currentState = currentState.run(line);
        if (currentState === States.EXIT) {
            rl.close();
        } else {
            rl.prompt();
        }
    }).on('close', function () {
        process.exit(0);
    });
}


runGame();
