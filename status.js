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
 *      -> create avatar
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
const RUN_GAME = new RunGame();
const EXIT = new Exit();

function StartGame() {
    this.run = function (input, context) {
        if (input === 'load') {
            console.log("load game");
            return LOAD;
        } else if (input === 'new') {
            console.log("please, provide a name");
            return NEW;
        } else {
            console.log("unknown input: either 'load' or 'new'");
            return this;
        }
    };
}

function LoadGame() {
    this.run = function (input, context) {
        return RUN_GAME;
    };
}

function NewGame() {
    this.run = function (input, context) {
        context.avatar = input;
        console.log("Welcome " + context.avatar);
        return RUN_GAME;
    };
}


function RunGame() {
    this.run = function (input, context) {
        console.log("Player: " + context.avatar);



        if (input === "exit") {
            console.log("you want to leave :-(");
            return EXIT;
        }
        return RUN_GAME;
    };
}

function Exit() {
    this.run = function (input, context) {
        console.log("not expected to be called");
        return EXIT;
    }
}

module.exports = {
    START, LOAD,
    NEW,
    RUN_GAME,
    EXIT
};
