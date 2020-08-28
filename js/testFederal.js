import Federal from "./FederalTax.js";

QUnit.test("a basic test example", function (assert) {
    var value = "hello";
    assert.equal(value, "hello", "We expect value to be hello");
  });
  QUnit.test("1 braket tax", function (assert) {
    
    const oFederal = new Federal();
  
    assert.equal(
      oFederal.calculate(10000),
      1500,
      "We expect federal tax to be $1500"
    );
  });
  QUnit.test("2d braket tax", function (assert) {
    
    const oFederal = new Federal();
   
    assert.equal(
      oFederal.calculate(50000),
      775919,
      "We expect federal tax to be $775919"
    );
  });
  QUnit.test("3rd braket tax", function (assert) {
 
    const oFederal = new Federal();
    assert.equal(
      oFederal.calculate(100000),
      245362,
      "We expect federal tax to be $245362"
    );
  });
  QUnit.test("4th braket tax", function (assert) {
    
    const oFederal = new Federal();
  
    assert.equal(
      oFederal.calculate(200000),
     4631648,
      "We expect federal tax to be $ 4631648"
    );
  });
  QUnit.test("5th braket tax", function (assert) {
    
    const oFederal = new Federal();
    
    assert.equal(
      oFederal.calculate(300000),
      79317,
      "We expect federal tax to be $79317"
    );
  });