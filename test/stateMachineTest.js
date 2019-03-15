var State = require("../status");
var assert = require('assert');

describe("start game", function(){
    var startGameState = State.START;
    describe("goes to load game", function () {
        console.log("start => load");
        var state = startGameState.run("load", null);
        assert.equal(State.LOAD, state)
    });
    describe("goes to new game", function () {
        console.log("start => new");
        var state = startGameState.run("new", null);
        assert.equal(State.NEW, state)
    })
});

describe("load game", function(){
    var startGameState = State.LOAD;
    describe("goes to load game", function () {
        console.log("load => run");
        var state = startGameState.run("load", null);
        assert.equal(State.RUN, state)
    });
});

describe("new game", function(){
    var startGameState = State.NEW;
    describe("goes to run game", function () {
        console.log("new => run");
        var state = startGameState.run();
        assert.equal(State.RUN, state)
    });
});

describe("run game", function(){
    var startGameState = State.RUN;
    describe("goes to run game", function () {
        console.log("start => load");
        var state = startGameState.run();
        assert.equal(State.RUN, state)
    });
});
