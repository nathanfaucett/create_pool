createPool
=======

creates a pooler function for a Constructors


```javascript
var createPool = reqiure("@nathanfaucett/create_pool");

function Vector(x, y) {
    this.x = x;
    this.y = y;
}

var createVector = createPool(Vector),
    vec = createVector(10, 5); // Vector {x: 10, y: 5}
```
