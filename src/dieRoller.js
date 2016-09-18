var BOOST_DIE_SIDES = [[],[],[DIE_ADVANTAGE_RESULT, DIE_ADVANTAGE_RESULT],[DIE_ADVANTAGE_RESULT],[DIE_SUCCESS_RESULT, DIE_ADVANTAGE_RESULT],[DIE_SUCCESS_RESULT]];

var SETBACK_DIE_SIDES = [[],[],[DIE_FAILURE_RESULT],[DIE_FAILURE_RESULT],[DIE_THREAT_RESULT],[DIE_THREAT_RESULT]];

var ABILITY_DIE_SIDES = [[],[DIE_SUCCESS_RESULT],[DIE_SUCCESS_RESULT],[DIE_SUCCESS_RESULT, DIE_SUCCESS_RESULT],[DIE_ADVANTAGE_RESULT],[DIE_ADVANTAGE_RESULT],[DIE_SUCCESS_RESULT, DIE_ADVANTAGE_RESULT],[DIE_ADVANTAGE_RESULT, DIE_ADVANTAGE_RESULT]];

var DIFFICULTY_DIE_SIDES = [[],[DIE_FAILURE_RESULT],[DIE_FAILURE_RESULT, DIE_FAILURE_RESULT],[DIE_THREAT_RESULT],[DIE_THREAT_RESULT],[DIE_THREAT_RESULT],[DIE_THREAT_RESULT, DIE_THREAT_RESULT],[DIE_FAILURE_RESULT, DIE_THREAT_RESULT]];

var PROFICIENCY_DIE_SIDES = [[],[DIE_SUCCESS_RESULT],[DIE_SUCCESS_RESULT],[DIE_SUCCESS_RESULT, DIE_SUCCESS_RESULT],[DIE_SUCCESS_RESULT, DIE_SUCCESS_RESULT],[DIE_ADVANTAGE_RESULT],[DIE_SUCCESS_RESULT, DIE_ADVANTAGE_RESULT],[DIE_SUCCESS_RESULT, DIE_ADVANTAGE_RESULT],[DIE_SUCCESS_RESULT, DIE_ADVANTAGE_RESULT],[DIE_ADVANTAGE_RESULT, DIE_ADVANTAGE_RESULT],[DIE_ADVANTAGE_RESULT, DIE_ADVANTAGE_RESULT],[DIE_TRIUMPH_RESULT]];

var CHALLENGE_DIE_SIDES = [[],[DIE_FAILURE_RESULT],[DIE_FAILURE_RESULT],[DIE_FAILURE_RESULT, DIE_FAILURE_RESULT],[DIE_FAILURE_RESULT, DIE_FAILURE_RESULT],[DIE_THREAT_RESULT],[DIE_THREAT_RESULT],[DIE_FAILURE_RESULT, DIE_THREAT_RESULT],[DIE_FAILURE_RESULT, DIE_THREAT_RESULT],[DIE_THREAT_RESULT, DIE_THREAT_RESULT],[DIE_THREAT_RESULT, DIE_THREAT_RESULT],[DIE_DESPAIR_RESULT]];

//s is # of sides (d8, etc.)
function rollDie(s){
    return Math.floor(Math.random() * s) + 1;
}

//alternateRoller parameter is optional, to be used for testing
function rollBoostDie(alternateRoller){
    var roller = alternateRoller || rollDie;
    return BOOST_DIE_SIDES[roller(BOOST_DIE_SIDES.length)];
}

function rollSetbackDie(alternateRoller){
    var roller = alternateRoller || rollDie;
    return SETBACK_DIE_SIDES[roller(SETBACK_DIE_SIDES.length)];
}

function rollAbilityDie(alternateRoller){
    var roller = alternateRoller || rollDie;
    return ABILITY_DIE_SIDES[roller(ABILITY_DIE_SIDES.length)];
}

function rollDifficultyDie(alternateRoller){
    var roller = alternateRoller || rollDie;
    return DIFFICULTY_DIE_SIDES[roller(DIFFICULTY_DIE_SIDES.length)];
}

function rollProficiencyDie(alternateRoller){
    var roller = alternateRoller || rollDie;
    return PROFICIENCY_DIE_SIDES[roller(PROFICIENCY_DIE_SIDES.length)];
}

function rollChallengeDie(alternateRoller){
    var roller = alternateRoller || rollDie;
    return CHALLENGE_DIE_SIDES[roller(CHALLENGE_DIE_SIDES.length)];
}

//for testing
function fakeRoller(n){
    return new{
        getRandom: function(){
            return n;
        }
    }
}