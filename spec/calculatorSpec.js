var calculator = new Calculator()
describe("Add",function(){
    it ("should add two numbers", function(){
        expect(calculator.add(0,0)).toBe(0);
    });
    it ("should return -2 when you add -1,-1", function(){
      expect(calculator.add(-1,-1)).toBe(-2);
    });
    it ("should return 9 when 4,5 is added", function(){
        expect(calculator.add(4,5)).toBe(9);
      });

    it ("should be able to add multiple numbers", function(){
        expect(calculator.add(1,2,3,4)).toBe(10);
    });
});

describe("Multiply",function(){
    it ("should multiply two numbers", function(){
         expect(calculator.multiply(1,2)).toBe(2);
    } );
    it ("should multiply as many numbers as possible", function(){
        expect(calculator.multiply(1,2,3,4)).toBe(24);
    });   
});

describe("last", function(){
    it ("should remember the last result", function(){
        let result = calculator.Last()
        expect(result).toBe(calculator.Last())
    });
});

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