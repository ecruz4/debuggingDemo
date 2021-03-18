require('./index');

/*
 *
 *
 * INSTRUCTIONS:
 *  - There are 5 tests that you will need to make pass.
 *  - FILL_ME_IN -> fill in the value you expect it to be
 *  - FIX_ME -> refactor that line of code to make the test pass.
 */

describe('this and the global context', () => {

  it('can reference the window or global object', () => {
    expect(window.color).toBe('red');
  })

  it('can be a bit tricky', () => {
    var myVar = 100;

    function WhoIsThis() {
        this.myVar = 200;

        this.display = function() {
            var myVar = 300;

            return myVar;
        };
    }
    var obj = new WhoIsThis();
    expect(obj.display()).toBe(300);
  });
});

describe('this and method invocation', () => {

  var bike = {
    brand: 'Specialized',
    getBrand: function () {
        return this.brand;
    }
  }

  it('refers to an object when used inside the invocation of a method', () => {
    expect(bike.getBrand()).toBe('Specialized');
  })

  it('can be bound to a specific object', () => {

    //??I don't understand why this method needs to be bound back to its own object it was created from??

    //Understand now: var brand = function() {return this.brand} <== BUT, when this get's invoked on its own, it thinks 'this' is the global object.
    //This is why it needs to get BINDED back to itself (only in this case). It could also be bound to other objects or you could leave it alone if you really wanted it bound to the global object
    var brand = bike.getBrand.bind(bike); // FIX_ME

    expect(brand()).toBe('Specialized');
  })

  it('can invoke a method in the context of another object', () => {

    var anotherBike = {
      brand: 'Cannondale'
    }

    //I understand why this needs to be binded to the 'anotherBike' variable
    var brand = bike.getBrand.bind(anotherBike); // FIX_ME

    expect(brand()).toBe('Cannondale');
  })

});

