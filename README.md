VIDEO 1 - INTRODUCTION TO WHAT THE COURSE IS ABOUT =====================================================================================

VIDEO 2 - HOW TO SETUP THE ENVIRONMENT,
          DIFFERENCE BETWEEN COMPILER AND INTERPRETER,
          HISTORY OF JS(earlier written in browser and now written in the ide),
          NODE JS IS USED TO RUN JS FILES,
          INSTALLATION OF NODE JS {using LTS(Long Term Support) version},
          USING IDE (Visual Studio Code) (Jetbranins Fleet also good editor),
          EXECUTION OF JS CODE => "node filename.js".

VIDEO 3 - INTRO TO GIT AND GITHUB ======================================================================================================
          CREATING OF GITHUB PROFILE
            -> CREATING NEW REPOSITORY
            -> CREATING CODESPACE FOR THAT REPOSITORY
            -> INSTALLING NODE JS ON CODESPACE
                --> Go to menu,
                --> Go to view,
                --> Go to Command Palette (ctrl+shift+p)
                --> Type container and click on codespace: Add Dev Container Configuration Files...
                --> Search nodejs and click on show all defination. Search again nodejs and select the one that we want in this case we want nodejs with js
                --> Select the default version.
                --> Click on OK.
                --> Machine will be Rebuild now.
            -> MAKING A NEW FILE AND EXECUTING THAT FILE.
            -> USING GIT (STAGING, COMMITING, PUSHING).
            -> DELETE THE CODESPACE AFTER FINISHING WORK ON IT (because we get only limited Hours from github codespaces).

VIDEO 4 - INTRO TO VARIABLES ===========================================================================================================
            -> VAR - var accountId || var is a keyword
                --> In Scope if we declare variable using 'var' keyword.
                    It can be used outside the scope also.
                    Which is not a correct thing to do.
                    so to tackle this problem 'let' is introduced in ES6

            -> LET - let accountId || let is a keyword
                --> In scope now if we declare any variable using the 'let' keyword then it will not be used oustside the scope.
                    We dont use 'var' keyword anymore.
                    Because of issue in block scope and functional scope.
            -> CONST - const accountId || const is a keyword
                --> 'const' keyword is a keyword which is if declared and assinged.
                    cannot be reassigned.

          INTRO TO COMMENTS
            1.) PUT // IN FRONT OF A LINE OR STARTING OF A LINE THEN THAT LINE WILL BE COMMENTED OUT
            2.) /* _ _ _ */ THIS IS A MULTILINE COMMENT WHICH CAN CONTAINER MULTIPLE LINES

          INTRO TO console.table()
            -> Syntax : console.table([variableName1, variableName2, variableName3, ...]) => This provides printed values in a Tabular Form

VIDEO 5 - INTRO TO DATATYPES =============================================================================================================

          -> "use strict" KEYWORD IS USED TO TREAT JS CODE AS NEWER VERSION.

          -> alert() => THIS IS A FUNCTION WHICH SHOW POP UP MESSAGE ON BROWSER WINDOW. || THIS ONLY WORKS IN BROWSER NOT IN NODEJS ENVIRONMENT.
          -> prompt() => THIS IS A FUNCTION WHICH TAKES INPUT BY SHOWING POPUP ON BROWSER WINDOW || THIS ALSO ONLY WORKS IN BROWSERS NOT IN NODEJS ENV.
          -> console.log() => THIS IS A FUNCTION WHICH PRINTS THE VALUE IN TERMINAL OR CONSOLE.

          ***CODE READABILITY SHOULD BE UTMOST PRIORITY***
          ***OFFICIAL JS DOCUMENTATION (https://tc39.es/ecma262/#sec-intro)***
          ***OR WE CAN USE MDN (mdn is not official documentation though)***

          => DATATYPES

            PRIMITIVE DATATYPES

                ==> STRING
                ==> NUMBERS
                ==> BIGINT
                ==> BOOLEAN
                ==> NULL // standalone value || type is object
                ==> UNDEFINED // type is undefined
                ==> SYMBOL

            NON PRIMITIVE DATATYPES

                ==> OBJECTS
                ==> ARRAY

          -> 'typeof' is a keyword which is used to check the type of the value whether it is string, number, boolean etc.

VIDEO 6 - DATATYPES CONVERSION AND OPERATIONS ===========================================================================================

          1.) CONVERSIONS
          ->  INSTANCE 1 => let score = "33";
                            let valueInNumber = Number(score);
                            console.log(typeof valueInNumber); // OUTPUT : number
                            console.log(valueInNumber); // OUTPUT : 33
              INSTANCE 2 => let score = "33abc";
                            let valueInNumber = Number(score);
                            console.log(typeof valueInNumber); // OUTPUT : number
                            console.log(valueInNumber); // OUTPUT : NaN (not a number)

          -> Above Examples are showing that 33 is a string which is converted into a number and there is no problem converting it to number.
             But in 2nd Example we have 33abc as a string which got converted into a number but have NaN as a value.
          -> NOTE: {IN NUMBER CONVERSION}
                   "33" => 33
                   "33abc" => NaN (not a number)
                   true => 1
                   false => 0
                   undefined => NaN
                   "string" => NaN
                   NULL => 0

                   {IN BOOLEAN CONVERSION}
                   1 => true
                   0 => false
                   "" => false
                   "abc" => true

                   {IN STRING CONVERSION}
                   33 => 33 (type is string)

VIDEO 7 - DATATYPES CONVERSION AND OPERATIONS ===========================================================================================

          2.) OPERATIONS
          -> ADDITION (+)
          -> SUBTRACTION (-)
          -> MULTIPLICATION (*)
          -> DIVISION (/)
          -> POWER (**)
          -> MODULAS (%)

          -> ADDING 2 STRINGS
          -> ADDING 1 NUMBER AND 1 STRING (WHATEVER COMES FIRST EITHER 'STRING' OR 'NUMBER' WILL BE CONVERTED TO THE FIRST DATATYPE)
                example:
                    ("1" + 2) => 12
                    (1 + "2") => 12
                    ("1" + 2 + 2) => 122
                    (1 + 2 + "2") => 32
                if we print true it will give true but if we do the following
                    +true => 1
                    +"" => 0
          -> INCREMENT AND DECREMENT (PREFIX AND POSTFIX)
                PREFIX - IT CHANGES OR INCREMENT THE VALUE BEFORE THE OPERATION AND GIVE THE CHANGED VALUE
                POSTFIX - IT CHANGES OR INCREMENT THE VALUE AFTER THE OPERATION AND GIVE THE UNCHANGED VALUE


VIDEO 8 - COMPARISION IN DATATYPES ======================================================================================================

          -> COMPARISIONS OPERATORS
                --> LESS THAN (<)
                --> LESS THAN EQUAL (<=)
                --> GREATER THAN (>)
                --> GREATER THEN EQUAL (>=)
                --> EQUAL TO (==)
                --> NOT EQUAL TO (!=)
                --> TRIPLE EQUAL TO (===)
                --> NOT DOUBLE EQUAL TO (!==)

                Some Examples

                -> console.log("2" > 1); // true
                -> console.log("02" > 1); // true

                -> console.log(null > 0); // false
                -> console.log(null == 0); // false
                -> console.log(null >= 0); // true

                The Reason is that an equality check '==' and comparisons '> < >= <=' work differently.
                Because Comparisons convert null to a number, treating it as 0.
                That's why (3) null>=0 is true and (1) null>0 is false.

                -> console.log(undefined > 0); // false
                -> console.log(undefined == 0); // false
                -> console.log(undefined < 0); // true

VIDEO 9 - DATATYPES IN JAVASCRIPT

          -> CALL BY REFERENCE & CALL BY VALUE

            --> PRIMITIVE DATATYPES / CALL BY VALUE
                ---> STRING, NUMBER, BOOLEAN, NULL, UNDEFINED, SYMBOL, BIGINT.
            --> NON PRIMITIVE DATATYPES / REFERENCE TYPE
                ---> ARRAYS, OBJECTS, FUNCTIONS

          -> JAVASCRIPT IS DAYNAMICALLY TYPED LANGUAGE OR STATICALLY TYPED LANGUAGE.
                => JavaScript is a dynamically typed language. In a dynamically typed language like JavaScript, variable data types are determined at runtime, not at the time of variable declaration. This means that you can change the type of a variable during the execution of your program.

          -> ARRAY SYNTAX
            --> const/let myArr = ["value1", "value2", "value3"];
          -> OBJECT SYNTAX
            --> const/let myobj = { key1: value1, key2: value2 }
          -> FUNCTION SYNTAX
            --> const/let myfunc = function(arguments, ... , ...){function's  definination }

VIDEO 10 - STACK AND HEAP MEMORY

           -> TYPES OF MEMORY

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

VIDEO 11 - STRINGS

           -> ALWAYS STORED IN SINGLE QUOTES(' ') OR DOUBLE QUOTES(" ")
           -> WE DONT USE CONCATINATION TO ADD STRING OR ANY STRING WITH VARIABLE VALUE. WE USE STRING INTERPOLATION.
              EXAMPLE: `This is example of string interpolation ${variable_name}`
              IN ABOVE EXAMPLE WE USED BACKTICKS AND WROTE A STRING IN IT WITH ${} AS INJECTING VARIABLE VALUE IN THE REST OF THE STRING.
           -> WE CAN DECLARE OR DEFINE VARIABLE USING ANOTHER METHOD :
              EXAMPLE :
                const gameName = new String('ashish-singh');
                => ABOVE EXAMPLE IS WAY TO DECLARE OR DEFINE STRING WITH KEY VALUE PAIRS AND ITS TYPE IS OBJECT.
                => IT GIVES US LENGTH PROPERTY.
                => IT ALSO GIVES US SO MANY PROTOTYPES.
                TO ACCESS THESE VALUES AND PROTOTYPES, WE CAN USE
                => console.log(gameName[0]);
                   console.log(gameName.__proto__);

           -> THERE ARE MANY METHODS AND PROPERTY WE CAN USE

                1) LENGTH (PROPERTY) ==> TO CHECK THE LENGTH OF THE STRING.
                    --> USAGE :
                          gameName.length // OUTPUT : 5

                2) TOUPPERCASE (METHOD) ==> TO CHANGE WHOLE STRING TO UPPERCASE || SAME GOES FOR TOLOWERCASE METHOD.
                    --> USAGE :
                          gameName.toUpperCase() // OUTPUT : 'ASHISH'

                3) CHARAT (METHOD) ==> IT IS USED TO CHECK AT THAT INDEX WHICH VALUE EXISTS.
                    --> USAGE :
                          gameName.charAt(2); // OUTPUT : h

                4) INDEXOF (METHOD) ==> IT IS USED TO CHECK THE INDEX WITH THE HELP OF VALUE.
                    --> USAGE :
                          gameName.indexOf('a'); // OUTPUT : 0

                5) SUBSTRING (METHOD) ==> IT IS USED TO EXTRACT THE SUBSTRING FROM THE ORIGINAL STRING.
                                          IT TAKES 2 ARGUMENTS (START INDEX) AND (END INDEX)
                                          (START INDEX) MEANS THAT FROM WHICH INDEX TO START FROM
                                          (END INDEX) IS NOT EXACTLY INDEX ITS THE RANGE FOR HOW MANY CHARACTER TO STORE IN SUB STRING || ITS EXCLUSIVE.
                    --> USAGE :
                          gameName.substring(0, 4); // OUTPUT : ashi

                6) SLICE (METHOD) ==> IT IS SAME AS SUBSTRING THE ONLY DIFFERENCE IS THAT WE CAN GIVE NEGATIVE VALUES TOO.
                                      IT TAKE 2 ARGUMENTS JUST LIKE SUBSTRING.
                    --> USAGE :
                          gameName.slice(-8, 4); // OUTPUT : shi

                7) TRIM (METHOD) ==> IT IS USED TO TRIM DOWN THE WHITESPACES || TRIM HAS TRIM START AND END METHODS ALSO.
                    --> USAGE :
                          gameName.trim(); // OUTPUT : IF THERE ARE ANY SPACES THEN IT WOULD JUST REMOVE THOSE EXTRA SPACES AND RETURN REST OF THE STRING

                8) REPLACE (METHOD) ==> IT IS USED TO REPLACE ANY CHARACTERS / SPECIAL CHARACTERS FROM STRING
                    --> USAGE :
                          gameName.replace('WHAT TO REPLACE', 'WHAT TO REPLACE WITH')

video 11 : 14:34