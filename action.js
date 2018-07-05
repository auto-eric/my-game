const out = require('./out')

const readline = require('readline');

function startGame() {
    const rl = readline.createInterface(process.stdin, process.stdout);
    rl.setPrompt('command> ');

    out.welcome();
    out.startGameDescription();
    
    
    rl.on('line', function (line) {
        
    })
    
    return {name: "test"}
}


function runGame(state) {

}

module.exports = {startGame, runGame}
