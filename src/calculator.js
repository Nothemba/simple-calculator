class Calculator{
  constructor(){
     this.slotArr = [];
  }
  add(){
      let result = 0;
      for(let i = 0; i < arguments.length; i++){
          result += parseFloat(arguments[i]);
      }
      return result;
  }
  multiply(){
      let result = 1;
      for(let i = 0; i < arguments.length; i++){
          result *= parseFloat(arguments[i]);
      }
      return result;
    }
}

