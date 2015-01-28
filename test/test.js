var assert = require("assert"),
    createPool = require("../src/index");


describe("createPool(Constructor)", function() {
    it("should create object with create destroy methods", function() {
        var pool = createPool(Constructor);

        function Constructor() {}

        assert.equal(pool.create() instanceof Constructor, true);
        pool.destroy(pool.create());
    });
});
