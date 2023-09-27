/*

    TYPES OF MEMORY

        1.) STACK (PRIMITIVE)
        
            Stack is used for primitive datatypes which stacks values over values or variables over variable. In stack when we assign variable_1 value to other variable_2. for instance:-
            1) first we take variable_1 and value and then we take variable_2 which is equal to variable_1 then we are not changing the value of variable one even if we change value of variable_2. 

            ln1 : variable_1 = 15
            ln2 : variable_2 = variable_1
            ln3 : variable_2 = 20

            in stack memory above variable_2 is not going to change the value of variable_1 as on ln2 variable_2 is just copying the value of variable_1. so that is the reason that is why the variable_1 value will not be changed.


        2.) HEAP (NON-PRIMITIVE)

            Heap is used for non primitive datatypes i.e. objects, arrays, strings, etc. In Heap memory we have variable_1 and variable_2 which are stored in a memory and if any variable is pointing towards the other variable then it is not copying the variable value like in stack memory. It is simply pointing towards it. so, if one variables value is changed then the other variable's value will change too.

            ln1: variable_1 = 15 // example is taken as primitive but should be non-primitive.
            ln2: varibale_2 = variable_1
            ln3: variable_2 = 20

            Now, in heap memory value of variable_1 is also changed to 20. The main reason for it to be is that variable_2 is pointing towards variable_1

            {call by reference and call by value}

*/