var diceSelectionViewModel = function() {
    var self = this;
    self.AbilityDiceCount = ko.observable(0);
    self.ProficiencyDiceCount = ko.observable(0);
    self.BoostDiceCount = ko.observable(0);
    self.DifficultyDiceCount = ko.observable(0);
    self.ChallengeDiceCount = ko.observable(0);
    self.SetbackDiceCount = ko.observable(0);
    
    var abilityDie = new diceViewModel('ability', rollAbilityDie);
    var proficiencyDie = new diceViewModel('proficiency', rollProficiencyDie);
    var boostDie = new diceViewModel('boost', rollBoostDie);
    var difficultyDie = new diceViewModel('difficulty', rollDifficultyDie);
    var challengeDie = new diceViewModel('challenge', rollChallengeDie);
    var setbackDie = new diceViewModel('setback', rollSetbackDie);

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

};

var diceViewModel = function(spanClass, rollFunction) {
    var self = this;
    self.SpanClass = spanClass;
    self.Roll = rollFunction;
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