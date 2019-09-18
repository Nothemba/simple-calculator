var calculator = new Calculator()
describe("Add",function(){
    it ("should add two numbers", function(){
        let result = calculator.add(0,0);
        result = calculator.add(calculator.Last(),0,0);
        expect(result).toBe(0);
});
    it ("should be able to add multiple numbers", function(){
        var result = calculator.add(1,2,4);
        result = calculator.add(calculator.Last(),1,2,4)
        expect(result).toBe(14);
    });
});

describe("Multiply",function(){
    it ("should multiply two numbers", function(){
        let result = calculator.multiply(2,4);
         result = calculator.multiply(calculator.Last(),2,4);
        expect(result).toBe(64);
    } );
    it ("should multiply as many numbers as possible", function(){
        let result = calculator.multiply(2,5,7);
         result = calculator.multiply(calculator.Last(),2,5,7);
        expect(result).toBe(4900);
    });
       
})
describe("last", function(){
    it ("should remember the last result", function(){
        let result = calculator.Last()
        expect(result).toBe(calculator.Last());

    });
})
describe("Momory slots", function(){
    it ("should remember more stuff", function(){
        expect(calculator.add(3, 4)).toBe(7);
        expect(calculator.setSlot(1));
        expect(calculator.getSlot(1)).toBe(7);

        expect(calculator.add(2,5,7)).toBe(14);
        expect(calculator.setSlot(2));
        expect(calculator.getSlot(2)).toBe(14);
        

        expect(calculator.add(calculator.getSlot(1), 5));
        expect(calculator.multiply(calculator.getSlot(2), 7));
    
    });
});
