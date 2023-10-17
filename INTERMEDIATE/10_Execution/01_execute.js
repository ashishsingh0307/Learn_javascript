// JAVASCRIPT EXECUTION CONTEXT

/*

    -> Javascript divides your program or code in 2 Phases

        => Whenever JS executes your code it makes a Global Execution Context(GEC). (whenever this keyword is used in a global scope it will give you GEC).
            -> When we use browser and type console.log(this); it will give use window object.
            -> When run in node environment it gives us blank object.
            etc.

            There are 3 Types of Execution Context
                1) Global Execution Context.
                2) Function/Functional Execution Context.
                3) Eval Execution Context.

        => Javascript divides your program or code in 2 Phases which are as follows

            -> Memory Creation Phase / Memory Phase / Creation Phase
                --> When we are in our memory allocation phase varibale are allocated some space with a initial value i.e. undefined.
                --> and when some functions get stored it stores the defination of that function.
                --> Now, whenever that function is called a "new variable environment" + "execution thread" is made. In this again it devides into 2 phases
                    ---> i.e. Memory Allocation Phase and execution phase.
                    ---> now the function block is being solved.
                    ---> first assigning variable a initial space and value i.e. undefined.
                    ---> then execution happen according to the function block.
                    ---> when this return any value it goes into the GEC and that value is stored there.
                    ---> After that
            -> Execution Phase.

*/