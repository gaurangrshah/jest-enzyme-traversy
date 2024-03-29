const functions = require('./functions/');

test('Adds 2 + 2 to equal 4', () => {
    expect(functions.add(2, 2)).toBe(4);
})

test('Adds 2 + 2 to NOT equal 5', () => {
    expect(functions.add(2, 2)).not.toBe(5);
})

test('should be null', () => {
    expect(functions.isNull()).toBeNull();
});

test('should be falsy', () => {
    expect(functions.checkValue(null)).toBeFalsy();
});

test('user should be Brad Traversy object', () => {
    console.log(functions);
    expect(functions.createUser()).toEqual({
        firstName: 'Brad',
        lastName: 'Traversy'
    });
});

test('user should be Brad Traversy object', () => {
    const load1 = 600;
    const load2 = 800;
    expect(load1 + load2).toBeLessThanOrEqual(1600);
});