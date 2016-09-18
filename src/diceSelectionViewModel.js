var diceSelectionViewModel = function() {
    var self = this;
    self.AbilityDiceCount = ko.observable(0);
    self.ProficiencyDiceCount = ko.observable(0);
    self.BoostDiceCount = ko.observable(0);
    self.DifficultyDiceCount = ko.observable(0);
    self.ChallengeDiceCount = ko.observable(0);
    self.SetbackDiceCount = ko.observable(0);
    
    var abilityDie = new diceViewModel('http://game2.ca/eote/abilitybg.png', rollAbilityDie);
    var proficiencyDie = new diceViewModel('http://game2.ca/eote/proficiencybg.png', rollProficiencyDie);
    var boostDie = new diceViewModel('http://game2.ca/eote/boostbg.png', rollBoostDie);
    var difficultyDie = new diceViewModel('http://game2.ca/eote/difficultybg.png', rollDifficultyDie);
    var challengeDie = new diceViewModel('http://game2.ca/eote/challengebg.png', rollChallengeDie);
    var setbackDie = new diceViewModel('http://game2.ca/eote/setbackbg.png', rollSetbackDie);

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

var diceViewModel = function(url, rollFunction) {
    var self = this;
    self.ImageUrl = url;
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