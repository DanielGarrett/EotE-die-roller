function accumulateDieRolls(dieArray, rand) {
    var result = new {};
    result[DIE_SUCCESS_RESULT] = 0;
    result[DIE_TRIUMPH_RESULT] = 0;
    result[DIE_ADVANTAGE_RESULT] = 0;
    result[DIE_FAILURE_RESULT] = 0;
    result[DIE_DESPAIR_RESULT] = 0;
    result[DIE_THREAT_RESULT] = 0;

    $.each(dieArray, function(idx, obj) {
        $.each(obj(rand), function(idx, obj) {
            result[obj] += 1;
        });
    });

    return result;
}