import Ontario from "./OntarioTax.js";


QUnit.test("a basic test example", function (assert) {
  var value = "hello";
  assert.equal(value, "hello", "We expect value to be hello");
});
QUnit.test("1 braket tax", function (assert) {
  const oOntario = new Ontario();
  
  assert.equal(
    oOntario.calculate(10000),
    505,
    "We expect ontario tax to be $505"
  );
  
});
QUnit.test("2d braket tax", function (assert) {
  const oOntario = new Ontario();
 
  assert.equal(
    oOntario.calculate(50000),
    2,897.637,
    "We expect ontario tax to be 2,897.637"
  );
 
});
QUnit.test("3rd braket tax", function (assert) {
  const oOntario = new Ontario();
  assert.equal(
    oOntario.calculate(90000),
   67208748,
    "We expect ontario tax to be $67208748"
  );
 
});
QUnit.test("4th braket tax", function (assert) {
  const oOntario = new Ontario();
  
  assert.equal(
    oOntario.calculate(200000),
   19497,
    "We expect ontario tax to be $19497"
  );
  
});
QUnit.test("5th braket tax", function (assert) {
  const oOntario = new Ontario();
 
  assert.equal(
    oOntario.calculate(300000),
  32457,
    "We expect ontario tax to be $32457"
  );
 
});