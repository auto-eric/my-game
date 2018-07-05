#!/usr/bin/env node


const action = require('./action')

action.runGame(action.startGame());

/*

rl.prompt();

rl.on('line', function (line) {
    if (line === "exit") {
        rl.close();
    }
    rl.prompt();
}).on('close', function () {
    process.exit(0);
});
*/