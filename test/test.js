test('testing my function', () => {
    const obj = {name: 'Маг', health: 90}
    
    const myFunction = (obj) => {
        if (obj.health > 50) {
            return 'healthy'
        } 
        if (obj.health <= 50 && obj.health >= 15) {
            return 'wounded'
        }
        if (obj.health > 15) {
            return 'critical'
        }
    }

    const received = myFunction(obj);
    const expected = 'healthy';

    expect(received).toBe(expected);
})