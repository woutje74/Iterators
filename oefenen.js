/*const isEven = (n) => {
    return n % 2 == 0;
  }
  
  let printMsg = (evenFunc, num) => {
    const isNumEven = evenFunc(num);
    console.log(`The number ${num} is an even number: ${isNumEven}.`)
  }
  
  // Pass in isEven as the callback function
  printMsg(isEven, 4); 
  // Prints: The number 4 is an even number: True.*/


  function isEven(n) {
    return n % 2 == 0;
  }
  
  function printMsg(evenFunc, num) {  //higher order functie
    const isNumEven = evenFunc(num);
    console.log(`The number ${num} is an even number: ${isNumEven}.`);
  };
  
  // Pass in isEven as the callback function
  printMsg(isEven, 7);  //In de higher order functie printMsg wordt de callback functie isEven opgegeven als parameter voor evenFunc
  // Prints: The number 4 is an even number: True.