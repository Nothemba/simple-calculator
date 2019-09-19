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
});

