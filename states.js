/**
 * Games states
 *  GameStart
 *      -> Load saved game
 *      -> Start new game
 *      -> Exit
 *  Load saved game
 *      -> Run game (game loaded)
 *      -> Start new game (no saved game available)
 *  Start new game
 *      -> Run Game (created character)
 *  Run Game
 *      -> explore
 *      -> exit (and save)
 *  Explore
 *      -> Explore
 *      -> if enemy then fight
 */

const START = new StartGame();
const LOAD = new LoadGame();
const NEW = new NewGame();
const RUN = new RunGame();
const EXIT = new Exit();

function StartGame() {
    this.run = function (input) {
        if (input === 'load') {
            console.log("load game");
            return LOAD;
        } else if (input === 'new') {
            console.log("new game");
            return NEW;
        } else {
            console.log("unknown input");
            return this;
        }
    };
}

function LoadGame() {
    this.run = function (input) {
        return RUN;
    };
}

function NewGame() {
    this.run = function (input) {
        return RUN;
    };
}

function RunGame() {
    this.run = function (input) {
        if (input == "exit") {
            return EXIT;
        }
        return RUN;
    };
}

function Exit() {
}

module.exports = {START, LOAD, NEW, RUN, EXIT};
