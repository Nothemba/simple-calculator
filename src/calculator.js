class Calculator{
    constructor(){
       this.slotArr = [];
    }
    add(){
        let result = 0;
        for(let i = 0; i < arguments.length; i++){
            result += parseFloat(arguments[i]);
            this.last = result;
    }
    return result;
    }
  
    multiply(){
        let result = 1;
        for(let i = 0; i < arguments.length; i++){
            result *= parseFloat(arguments[i]);
            this.last = result;
        } 
        return result;
          
    }
    Last(){
        return this.last;
    }
  
  
    setSlot(number){
        this.slotArr.push(this.last);
        return this.slotArr[number - 1];
    }
    getSlot(number){
        return this.slotArr[number - 1];
    }
  
  }
  
