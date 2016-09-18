var diceSelectionViewModel = function() {
    var self = this;
    self.AbilityDiceCount = ko.observable(0);
    self.ProficiencyDiceCount = ko.observable(0);
    self.BoostDiceCount = ko.observable(0);
    self.DifficultyDiceCount = ko.observable(0);
    self.ChallengeDiceCount = ko.observable(0);
    self.SetbackDiceCount = ko.observable(0);

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