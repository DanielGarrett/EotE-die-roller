QUnit.test( "die pool accumulator exists", function( assert ) {
  assert.strictEqual(typeof(accumulateDieRolls) , "function" );
});
QUnit.test( "die pool accumulator returns array", function( assert ) {
  assert.strictEqual(typeof(accumulateDieRolls([])) , "object" );
});