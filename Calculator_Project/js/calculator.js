//Create object to keep track of values.
const Calculator = {
    //display 0 on screen.
    Display_Value: '0',
    //Hold the first operand for any expressions, we set it to null for now.
    First_Operand: null,
    //Check whether or not the second operand has been inputted by the user.
    Wait_Second_Operand: false,
    //Hold the operator, we set it to null for now.
    operator: null,
};

//Modify values each time a button is clicked on.
function Input_Digit(digit) {
    const {Display_Value, Wait_Second_Operand} = Calculator;
    //Check if the wait second operand is true and sets display_value
    //to the key that was clicked on.
    if (Wait_Second_Operand === true) {
        Calculator.Display_Value = digit;
        Calculator.Wait_Second_Operand = false;
    } else {
        //This overwrites Display_Value if the current value is 0
        //Other wise it adds onto it
        Calculator.Display_Value = Display_Value === '0' ? digit : Display_Value + digit;
    }
}

//This section handles decimal points.
function Input_Decimal(dot) {
    //Ensuring accidental clicking of decimal point doesn't cause bugs.
    if (Calculator.Wait_Second_Operand === true) return;
    if (!Calculator.Display_Value.includes(dot)) {
        //We are saying that if the Display_value doesn't have a decimal, we want to add one.
        Calculator.Display_Value += dot;
    }
}

//This section handles operators
function Handle_Operator(Next_Operator) {
    const {First_Operand, Display_Value, operator} = Calculator;
    //When an operator key is pressed we convert the current number displayed on the screen to
    //a number and then store the result in Calculator.First_Operand if it doesn't already exist.
    const Value_of_Input = parseFloat(Display_Value);
    //Check if an operator already exists and if Wait_second_operand is true,
    //Then updates the operator and exits from the function
    if (operator && Calculator.Wait_Second_Operand) {
        Calculator.operator = Next_Operator;
        return;
    }
    if (First_Operand == null) {
        Calculator.First_Operand = Value_of_Input;
    } else if (operator) {
        //Checks if an operator already exists
        const Value_Now = First_Operand || 0;
        //If oerator exists, property lookup is performed for the operator in the Perform_Calculation object
        //and the function that matches the operator is executed.
        let result = Perform_Calculation[operator](Value_Now, Value_of_Input);
        //Adding a fixed amount of numbers after decimal:
        result = Number(result).toFixed(9);
        //remove any trailing 0's
        result = (result * 1).toString();
        Calculator.Display_Value = parseFloat(result);
        Calculator.First_Operand = parseFloat(result);
    }
    Calculator.Wait_Second_Operand = true;
    Calculator.operator = Next_Operator;
}

const Perform_Calculation = {
    '/':(First_Operand, Second_Operand) => First_Operand / Second_Operand,
    '*':(First_Operand, Second_Operand) => First_Operand * Second_Operand,
    '+':(First_Operand, Second_Operand) => First_Operand + Second_Operand,
    '-':(First_Operand, Second_Operand) => First_Operand - Second_Operand,
    '=':(First_Operand, Second_Operand) => Second_Operand
};
function Calculator_Reset() {
    Calculator.Display_Value = '0';
    Calculator.First_Operand = null;
    Calculator.Wait_Second_Operand = false;
    Calculator.operator = null;
}

//Update calculator screen with contens of Display_Value
function Update_Display() {
    //Makes use of calculator-screen class to target the input tag in the HTML
    const display = document.querySelector('.calculator-screen');
    display.value = Calculator.Display_Value;
}
Update_Display();
//This section monitors button clicks
const keys = document.querySelector('.calculator-keys');
keys.addEventListener('click', (event) => {
    //The target variable is an object that represents the element that was clicked
    const { target } = event;
    //If element that was clicked on is not a button, exit the function.
    if (!target.matches('button')) {
        return;
    }
    if (target.classList.contains('operator')) {
        Handle_Operator(target.value);
        Update_Display();
        return;
    }
    if (target.classList.contains('decimal')) {
        Input_Decimal(target.value);
        Update_Display();
        return;
    }
    //Ensures that AC clears all inputs from screen.
    if (target.classList.contains('all-clear')) {
        Calculator_Reset();
        Update_Display();
        return;
    }
    Input_Digit(target.value);
    Update_Display();
})