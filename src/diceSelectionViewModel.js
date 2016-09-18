var diceSelectionViewModel = function() {
    var self = this;
    self.AbilityDiceCount = ko.observable(0);
    self.ProficiencyDiceCount = ko.observable(0);
    self.BoostDiceCount = ko.observable(0);
    self.DifficultyDiceCount = ko.observable(0);
    self.ChallengeDiceCount = ko.observable(0);
    self.SetbackDiceCount = ko.observable(0);
    
    var abilityDie = new diceViewModel('symbol symbol-ability', rollAbilityDie);
    var proficiencyDie = new diceViewModel('symbol symbol-proficiency', rollProficiencyDie);
    var boostDie = new diceViewModel('symbol symbol-boost', rollBoostDie);
    var difficultyDie = new diceViewModel('symbol symbol-difficulty', rollDifficultyDie);
    var challengeDie = new diceViewModel('symbol symbol-challenge', rollChallengeDie);
    var setbackDie = new diceViewModel('symbol symbol-setback', rollSetbackDie);

    self.DicePool = ko.computed(function() {
        var diceArray = [];
        for(var x = 0; x < self.AbilityDiceCount(); x++){
            diceArray.push(abilityDie);
        }
        for(var x = 0; x < self.ProficiencyDiceCount(); x++){
            diceArray.push(proficiencyDie);
        }
        for(var x = 0; x < self.BoostDiceCount(); x++){
            diceArray.push(boostDie);
        }
        for(var x = 0; x < self.DifficultyDiceCount(); x++){
            diceArray.push(difficultyDie);
        }
        for(var x = 0; x < self.ChallengeDiceCount(); x++){
            diceArray.push(challengeDie);
        }
        for(var x = 0; x < self.SetbackDiceCount(); x++){
            diceArray.push(setbackDie);
        }
        return diceArray;
    });

    self.RollResults = ko.observableArray([]);
    function sumDieRolls(){
        RollResults.removeAll();
        var rolls = accumulateDieRolls(self.DicePool());
        var passSum = rolls[DIE_SUCCESS_RESULT] + rolls[DIE_TRIUMPH_RESULT] - rolls[DIE_FAILURE_RESULT] - rolls[DIE_DESPAIR_RESULT];
        if(passSum > 0){
            for(var x = 0; x < passSum; x++){
                RollResults.push("symbol symbol-success");
            }
        } else if(passSum < 0){
            for(var x = 0; x > passSum; x--){
                RollResults.push("symbol symbol-failure");
            }
        }
        var sideEffectSum = rolls[DIE_ADVANTAGE_RESULT] - rolls[DIE_THREAT_RESULT];
        if(sideEffectSum > 0){
            for(var x = 0; x < sideEffectSum; x++){
                RollResults.push("symbol symbol-advantage");
            }
        } else if(sideEffectSum < 0){
            for(var x = 0; x > sideEffectSum; x--){
                RollResults.push("symbol symbol-threat");
            }
        }

        if(rolls[DIE_TRIUMPH_RESULT] > 0){
            for(var x = 0; x < rolls[DIE_TRIUMPH_RESULT]; x++){
                RollResults.push("symbol symbol-triumph");
            }
        }
        if(rolls[DIE_DESPAIR_RESULT]){
            for(var x = 0; x < rolls[DIE_DESPAIR_RESULT]; x++){
                RollResults.push("symbol symbol-despair");
            }
        }
    }

};

var diceViewModel = function(spanClass, rollFunction) {
    var self = this;
    self.SpanClass = spanClass;
    self.Role  = rollFunction;
};

(function(){
    ko.bindingHandlers.diceCount =  {
        init: function(element, valueAccessor) {
            $(element).click(function() {
                var buttonValue = parseInt($(element).text());
                var value = valueAccessor();
                value(buttonValue);
            });
        },
        update: function(element, valueAccessor) {
            var value = valueAccessor();
            var valueUnwrapped = ko.unwrap(value);
            var buttonValue = parseInt($(element).text());
            if(buttonValue === valueUnwrapped) {
                $(element).addClass('active');
            } else {
                $(element).removeClass('active');
            }
        }
    }
})();