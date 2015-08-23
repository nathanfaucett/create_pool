var tape = require("tape"),
    createPool = require("../src/index");


tape("createPool(Constructor) should create object with create destroy methods", function(assert) {
    var instance;

    function Constructor0() {}
    createPool(Constructor0);
    instance = Constructor0.getPooled();
    assert.equal(instance instanceof Constructor0, true);
    Constructor0.release(instance);

    function Constructor1(a0) {
        this.a0 = a0;
    }
    createPool(Constructor1);
    instance = Constructor1.getPooled(0);
    assert.equal(instance instanceof Constructor1, true);
    assert.equal(instance.a0, 0);
    Constructor1.release(instance);

    function Constructor2(a0, a1) {
        this.a0 = a0;
        this.a1 = a1;
    }
    createPool(Constructor2);
    instance = Constructor2.getPooled(0, 1);
    assert.equal(instance instanceof Constructor2, true);
    assert.equal(instance.a0, 0);
    assert.equal(instance.a1, 1);
    Constructor2.release(instance);

    function Constructor3(a0, a1, a2) {
        this.a0 = a0;
        this.a1 = a1;
        this.a2 = a2;
    }
    createPool(Constructor3);
    instance = Constructor3.getPooled(0, 1, 2);
    assert.equal(instance instanceof Constructor3, true);
    assert.equal(instance.a0, 0);
    assert.equal(instance.a1, 1);
    assert.equal(instance.a2, 2);
    Constructor3.release(instance);

    function Constructor4(a0, a1, a2, a3) {
        this.a0 = a0;
        this.a1 = a1;
        this.a2 = a2;
        this.a3 = a3;
    }
    createPool(Constructor4);
    instance = Constructor4.getPooled(0, 1, 2, 3);
    assert.equal(instance instanceof Constructor4, true);
    assert.equal(instance.a0, 0);
    assert.equal(instance.a1, 1);
    assert.equal(instance.a2, 2);
    assert.equal(instance.a3, 3);
    Constructor4.release(instance);

    function Constructor5(a0, a1, a2, a3, a4) {
        this.a0 = a0;
        this.a1 = a1;
        this.a2 = a2;
        this.a3 = a3;
        this.a4 = a4;
    }
    createPool(Constructor5);
    instance = Constructor5.getPooled(0, 1, 2, 3, 4);
    assert.equal(instance instanceof Constructor5, true);
    assert.equal(instance.a0, 0);
    assert.equal(instance.a1, 1);
    assert.equal(instance.a2, 2);
    assert.equal(instance.a3, 3);
    assert.equal(instance.a4, 4);
    Constructor5.release(instance);

    function Constructor6(a0, a1, a2, a3, a4, a5) {
        this.a0 = a0;
        this.a1 = a1;
        this.a2 = a2;
        this.a3 = a3;
        this.a4 = a4;
        this.a5 = a5;
    }
    createPool(Constructor6);
    instance = Constructor6.getPooled(0, 1, 2, 3, 4, 5);
    assert.equal(instance instanceof Constructor6, true);
    assert.equal(instance.a0, 0);
    assert.equal(instance.a1, 1);
    assert.equal(instance.a2, 2);
    assert.equal(instance.a3, 3);
    assert.equal(instance.a4, 4);
    assert.equal(instance.a5, 5);
    Constructor6.release(instance);

    function Constructor7(a0, a1, a2, a3, a4, a5, a6) {
        this.a0 = a0;
        this.a1 = a1;
        this.a2 = a2;
        this.a3 = a3;
        this.a4 = a4;
        this.a5 = a5;
        this.a6 = a6;
    }
    createPool(Constructor7);
    instance = Constructor7.getPooled(0, 1, 2, 3, 4, 5, 6);
    assert.equal(instance instanceof Constructor7, true);
    assert.equal(instance.a0, 0);
    assert.equal(instance.a1, 1);
    assert.equal(instance.a2, 2);
    assert.equal(instance.a3, 3);
    assert.equal(instance.a4, 4);
    assert.equal(instance.a5, 5);
    assert.equal(instance.a6, 6);
    Constructor7.release(instance);

    assert.end();
});
