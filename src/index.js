module.exports = function createPool(Constructor) {
    var pool = [];

    return {
        create: function() {
            return pool.length !== 0 ? pool.pop() : new Constructor();
        },
        destroy: function(instance) {
            pool[pool.length] = instance;
        }
    };
};
