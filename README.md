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
            1.) PUT IN FRONT OF A LINE OR STARTING OF A LINE THEN THAT LINE WILL BE COMMENTED OUT
            2.) /* _ _ _ */ THIS IS A MULTILINE COMMENT WHICH CAN CONTAINER MULTIPLE LINES

          INTRO TO console.table()
            -> Syntax : console.table([variableName1, variableName2, variableName3, ...]) => This provides printed values in a Tabular Form

VIDEO 5 - INTRO TO DATATYPES =============================================================================================================

          -> "use strict" KEYWORD IS USED TO TREAT JS CODE AS NEWER VERSION.

          -> alert() => THIS IS A FUNCTION WHICH SHOW POP UP MESSAGE ON BROWSER WINDOW. || THIS ONLY WORKS IN BROWSER NOT IN NODEJS ENVIRONMENT.
          -> prompt() => THIS IS A FUNCTION WHICH TAKES INPUT BY SHOWING POPUP ON BROWSER WINDOW || THIS ALSO ONLY WORKS IN BROWSERS NOT IN NODEJS ENV.
          -> console.log() => THIS IS A FUNCTION WHICH PRINTS THE VALUE IN TERMINAL OR CONSOLE.

          ***CODE READABILITY SHOULD BE UTMOST PRIORITY***
          ***OFFICIAL JS DOCUMENTATION (https:tc39.es/ecma262/#sec-intro)***
          ***OR WE CAN USE MDN (mdn is not official documentation though)***

          => DATATYPES

            PRIMITIVE DATATYPES

                ==> STRING
                ==> NUMBERS
                ==> BIGINT
                ==> BOOLEAN
                ==> NULL standalone value || type is object
                ==> UNDEFINED type is undefined
                ==> SYMBOL

            NON PRIMITIVE DATATYPES

                ==> OBJECTS
                ==> ARRAY

          -> 'typeof' is a keyword which is used to check the type of the value whether it is string, number, boolean etc.

VIDEO 6 - DATATYPES CONVERSION AND OPERATIONS ===========================================================================================

          1.) CONVERSIONS
          ->  INSTANCE 1 => let score = "33";
                            let valueInNumber = Number(score);
                            console.log(typeof valueInNumber); OUTPUT : number
                            console.log(valueInNumber); OUTPUT : 33
              INSTANCE 2 => let score = "33abc";
                            let valueInNumber = Number(score);
                            console.log(typeof valueInNumber); OUTPUT : number
                            console.log(valueInNumber); OUTPUT : NaN (not a number)

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

                -> console.log("2" > 1); true
                -> console.log("02" > 1); true

                -> console.log(null > 0); false
                -> console.log(null == 0); false
                -> console.log(null >= 0); true

                The Reason is that an equality check '==' and comparisons '> < >= <=' work differently.
                Because Comparisons convert null to a number, treating it as 0.
                That's why (3) null>=0 is true and (1) null>0 is false.

                -> console.log(undefined > 0); false
                -> console.log(undefined == 0); false
                -> console.log(undefined < 0); true

VIDEO 9 - DATATYPES IN JAVASCRIPT =========================================================================================================

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

VIDEO 10 - STACK AND HEAP MEMORY ===========================================================================================================

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

                  ln1: variable_1 = 15 example is taken as primitive but should be non-primitive.
                  ln2: varibale_2 = variable_1
                  ln3: variable_2 = 20

                  Now, in heap memory value of variable_1 is also changed to 20. The main reason for it to be is that variable_2 is pointing towards variable_1

                  {call by reference and call by value}

VIDEO 11 - STRINGS ========================================================================================================================

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
                          gameName.length OUTPUT : 5

                2) TOUPPERCASE (METHOD) ==> TO CHANGE WHOLE STRING TO UPPERCASE || SAME GOES FOR TOLOWERCASE METHOD.
                    --> USAGE :
                          gameName.toUpperCase() OUTPUT : 'ASHISH'

                3) CHARAT (METHOD) ==> IT IS USED TO CHECK AT THAT INDEX WHICH VALUE EXISTS.
                    --> USAGE :
                          gameName.charAt(2); OUTPUT : h

                4) INDEXOF (METHOD) ==> IT IS USED TO CHECK THE INDEX WITH THE HELP OF VALUE.
                    --> USAGE :
                          gameName.indexOf('a'); OUTPUT : 0

                5) SUBSTRING (METHOD) ==> IT IS USED TO EXTRACT THE SUBSTRING FROM THE ORIGINAL STRING.
                                          IT TAKES 2 ARGUMENTS (START INDEX) AND (END INDEX)
                                          (START INDEX) MEANS THAT FROM WHICH INDEX TO START FROM
                                          (END INDEX) IS NOT EXACTLY INDEX ITS THE RANGE FOR HOW MANY CHARACTER TO STORE IN SUB STRING || ITS EXCLUSIVE.
                    --> USAGE :
                          gameName.substring(0, 4); OUTPUT : ashi

                6) SLICE (METHOD) ==> IT IS SAME AS SUBSTRING THE ONLY DIFFERENCE IS THAT WE CAN GIVE NEGATIVE VALUES TOO.
                                      IT TAKE 2 ARGUMENTS JUST LIKE SUBSTRING.
                    --> USAGE :
                          gameName.slice(-8, 4); OUTPUT : shi

                7) TRIM (METHOD) ==> IT IS USED TO TRIM DOWN THE WHITESPACES || TRIM HAS TRIM START AND END METHODS ALSO.
                    --> USAGE :
                          gameName.trim(); OUTPUT : IF THERE ARE ANY SPACES THEN IT WOULD JUST REMOVE THOSE EXTRA SPACES AND RETURN REST OF THE STRING

                8) REPLACE (METHOD) ==> IT IS USED TO REPLACE ANY CHARACTERS / SPECIAL CHARACTERS FROM STRING
                    --> USAGE :
                          gameName.replace('WHAT TO REPLACE', 'WHAT TO REPLACE WITH')

                9) INCLUDES (METHOD) ==> IT IS USED FOR CHECKING WHETHER THAT CHARACTER / SET OF CHARACTERS LIES IN THAT STRING OR NOT.
                    --> USAGE :
                          gameName.include('ish'); OUTPUT : TRUE

                10) SPLIT (METHOD) ==> IT IS USED TO SEPARATE STRING INTO AN ARRAY WITH THE HELP OF SOME COMMON CHARACTER.
                    --> USAGE :
                          gameName.split('-') OUTPUT : ['ashish', 'singh']

VIDEO 12 - NUMBERS AND MATHS ====================================================================================================================

            -> WHILE USING NUMBERS DATAYPES IN JS WE CAN STORE NUMBERS DIRECTLY IN THE VARIABLE WITHOUT TELLING IT WHETHER ITS A NUMBER OR FLOATING POINT NUMBER, etc.
            -> WE CAN DECLARE AND INITIALISE NUMBERS IN A VARIABLE AS FOLLOWS
                --> let num = 10; || let num = 10.01; OUTPUT : 10, 10.01
            -> WE HAVE ANOTHER WAY of DECLARING NUMBERS IN JS ALSO. WHICH IS AS FOLLOWS
                --> let num = new Number(value); || let num = new Number(100); OUTPUT : [Number: 100]

                EXAMPLE : const score = 400;
                          const balance = new Number(100)

            { THE ONLY DIFFERENCE IN EXPLICITY DECLARING ANY DATA TYPE IS THAT WHEN WE CONSOLE THIS VALUE IN BROWSER IT WILL GIVE US PROTOTYPES WHICH WE CAN SEE AND USE AS PER OUR REQUIREMENTS }

            -> THERE ARE METHODS AND PROPERTY WE CAN USE IN NUMBERS

                1) TOSTRING (METHOD) ==> THIS METHOD IS USED TO TURN ANY DATATYPE INTO STRING.
                    --> USAGE :
                            console.log(balance); OUTPUT : [Number: 100]
                            balance.toString(); OUTPUT : 100

                2) TOFIXED (METHOD) ==> THIS METHOD IS USED TO TAKE THE PRECISION VALUE.
                    --> USAGE :
                            balance.toFixed(number); if number = 2 || OUTPUT : 100.00

                3) TOPRECISION (METHOD) ==> THIS METHOD ACCEPTS VALUE FROM 1 TO 21.
                    --> USAGE :
                            balance.toPrecision(number from 1 to 21); if balance is 123.8966 && if number = 3 || OUTPUT : 124
                            balance.toPrecision(number from 1 to 21); if balance is 123.8966 && if number = 4 || OUTPUT : 123.9
                            balance.toPricision(number from 1 to 21); if balance is 1123.8966 && if number = 3 || OUTPUT : 1.12e+3

                4) TOLOCALSTRING (METHOD) ==> THIS IS THE METHOD WHICH CONVERTS NUMBER INTO CURRENCY FORMAT
                    --> USAGE :
                            INSTANCE :
                                const hundreds = 1000000;
                                console.log(hundreds.toLocaleString()); OUTPUT : 1,000,000
                                {TO CHANGE THE VALUE FORMAT FROM US TO INDIA WE NEED TO PASS AN ARGUMENT || THERE ARE MORE VALUES FOR ARGUMENTS}
                                console.log(hundreds.toLocaleString('en-IN')); OUTPUT : 10,00,000

            THERE IS A MATH LIBRARY IN JS

                1) ABSOLUTE {.abs()} ==> CONVERTS NEGATIVE VALUE TO POSITIVE VALUE
                    --> USAGE :
                            Math.abs(-4); OUTPUT : 4

                2) ROUND {.round()} ==> IT ROUNDS OFF THE VALUE
                    --> USAGE :
                            Math.round(4.3); OUTPUT : 4
                            Math.round(4.5); OUTPUT : 5

                3) CEIL & FLOOR {.ceil(), .floor()} ==> IT LETS US CONTROL THE VALUE OF WHICH VALUE WE WANT AFTER ROUNDING OFF
                                                        EITHER ITS CEILING VALUE (upper) OR FLOOR VALUE (lower)
                    --> USAGE :
                            Math.ceil(4.3); OUTPUT : 5 THIS TAKES THE UPPER VALUE
                            Math.floor(4.6); OUTPUT : 4 THIS TAKES THE LOWER VALUE

                4) SQUAREROOT {.sqrt()} ==> THIS FINDS OUT THE SQUARE ROOT OF ANY NUMBER
                5) POWER {.pow()} ==> THIS IS TO FIND THE EXPONENTIAL VALUE OF THE NUMBER
                6) MIN {.min} ==> THIS FINDS THE MINIMUM VALUE FROM LIST OF NUMBERS
                7) MAX {.max} ==> THIS FINDS THE MAXIMUM VALUE FROM LIST OF NUMBERS
                8) RANDOM {.random} ==> THIS IS TO GET RANDOM VALUE FROM SPECIFIC RANGE -> (0-1)
                    --> USAGE:
                            Math.random(); 0.5867695... EVERYTIME IT WILL GIVE DIFFERENT ANSWER BUT IN BETWEEN 0 TO 1
                            Math.random()*10; 1.5867695... THIS IS GOING TO GIVE US DIFFERENT VALUE BUT IN BETWEEN 0 TO 10
                            (Math.random()*10)+1; 2.5867695... THIS IS GOING TO GIVE US DIFFERENT VALUE BUT IN BETWEEN 1 TO 11
                            (Math.Floor(Math.random()*10)+1); 2 THIS IS GOING TO GIVE US ROUNDED LOWER VALUE BETWEEN 1 TO 11

                            => THERE IS A FORMULA <=

                            const min = 10;
                            const max = 20;

                            FORMULA FOR RANDOM NUMBER GEREATOR BETWEEN 2 NUMBERS.
                            console.log(Math.floor(Math.random() * (max-min + 1)) + min);

VIDEO 13 - DATE AND TIME ================================================================================================================

            -> THIS IS A PAIN POINT OF JAVASCRIPT, TO COMPARE DATES, TO STORE DATES, TO DECLARE DATES, EVERYTHING IN JS IS LITTLE TRICKY.
            -> DATES ARE STARTING FROM JANUARY 1, 1970, UTC
            -> DATES ARE CALCULATED IN MILISECONDS.
            -> TC39 IS WORKING ON DATES IN JS WHICH IS CALLED TEMPORAL (A DATE/TIME API).
            -> TO DECLARE DATE WE DO THE FOLLOWING

                --> let myDate = new Date();
                    console.log(myDate); OUTPUT : 2023-03-01T12:03:00:900Z {THIS IS NOT AT ALL READABLE}
                    => IF WE CONVERT THIS DATE IN STRING THEN WE WILL GET SOMETHING LITTLE READABLE
                    console.log(myDate.toString()); OUTPUT : WED MAR 01 2023 12:03:41 GMT+0000 (Coordinated Universal Time)
                    console.log(myDate.toDateString()); OUTPUT : Fri Sep 29 2023
                    console.log(myDate.toISOString()); OUTPUT : 2023-09-29T03:05:09.556Z
                    console.log(myDate.toJSON()); OUTPUT : 2023-09-29T03:05:09.556Z
                    console.log(myDate.toLocaleDateString); OUTPUT : [Function: toLocaleDateString]
                    console.log(myDate.toLocaleString()); OUTPUT : 9/29/2023, 8:36:39 AM

            -> DATE IS AN OBJECT IN JS.
            -> NOW IF WE DECLARE AN ARBITRARAY DATE WE CAN DO AS THE FOLLOWING

                --> let myCreatedDate = new Date(2023, 0, 23);
                    console.log(myCreatedDate); OUTPUT : 2023-01-23T00:00:00.000Z
                    => IF WE CONVERT THIS INTO STRING WE WILL GET THE FOLLOWING OUTPUT
                    console.log(myCreatedDate.toDateString()); OUTPUT : Mon Jan 23 2023

                --> let myCreatedDate = new Date(2023, 0, 23, 5, 3);
                    console.log(myCreatedDate.toLocaleString()); OUTPUT : 1/23/2023, 5:03:00 AM

                {THIS IS DONE IF WE WANT DATE IN MM/DD/YYYY OR DD/MM/YYYY FORMAT}

                --> let myCreatedDate2 = new Date("2023-01-14");
                    console.log(myCreatedDate2.toLocaleString()); OUTPUT : 1/14/2023, 5:30:00 AM

                --> let myCreatedDate3 = new Date("02-14-2023");
                    console.log(myCreatedDate3.toLocaleString()); OUTPUT : 2/14/2023, 12:00:00 AM

                {THERE ARE TIMESTAMPS TOO, THIS IS THE EXACT CURRENT TIME THAT IS ON THE CLOCK}

                --> let myTimeStamp = Date.now(); || let myTimeStamp = new Date.now(); CAN WE WRITTEN EITHER WAY.
                    console.log(myTimeStamp); OUTPUT : 1695956962495
                    console.log(myCreatedDate.getTime()); OUTPUT : 1674412200000
                    console.log(Date.now()); OUTPUT : 1695957290574
                    console.log(Date.now()/1000); OUTPUT : 1695957290.574
                    console.log(Math.floor(Date.now()/1000)); OUTPUT : 1695957290

                --> let newDate = new Date();
                    console.log(newDate); OUTPUT : 2023-09-29T13:56:15.204Z
                    console.log(newDate.getMonth()); OUTPUT : 8
                    console.log(newDate.getDay()); OUTPUT : 5

                --> newDate.toLocaleString('default', {
                        weekday : "long",
                        timeZone : '....'
                    });

                    IN TOLOCALESTRING METHODS WE DEFINE OBJECTS AND MANY PARAMETERS. ABOVE METHOD IS GOING TO WORK SAME A LINE NUMBER 368


VIDEO 14 - ARRAYS =======================================================================================================================

            -> ARRAY IS A NON PRIMITIVE DATATYPE WHICH CAN STORE ANY VALUE FROM PRIMITIVE DATATYPES OR NON PRIMITIVE DATATYPES
            -> IF WE GIVE MULTIPLE VALUES IN BRACKETS => [] THEN IT IS CALLED ARRAY
                EXAMPLE 1:
                    const myArr = [1,2,3,4,"Hi",'bye', true];
                    =>{IN ABOVE BRACKETS WE HAVE VALUE 1, 2, 3, 4 etc. THEY ARE CALLED ELEMENT FOR AN ARRAY}
                    =>{ARRAY IS CONSIST OF INDEXES AND VALUES}
                    =>{INDEXES STARTS FORM 0, 1, 2, 3 and so on}
                    SO, IF WE WANT TO FIND THE VALUE FROM ARRAY WE NEED TO FIND IT VIA INDEX AS FOLLOWS
                    myArr[0]; OUTPUT : 1
                    myArr[1]; OUTPUT : 2
                    myArr[4]; OUTPUT : "Hi"
                    myArr[6]; OUTPUT : true
                EXAMPLE 2:
                    const myHeros = ["Shaktiman", "naagraj"];
                    or
                    const myArr2 = new Array(1,2,3,4,5);
                    {IN ARRAYS WE GET THE PROPERTY 'LENGTH' and PROTOTYPE, THESE PROTOTYPES HAVE FURTHER PROTOTYPES}
            -> ARRAY METHODS THAT WE ARE GOING TO USE
                1) PUSH (METHOD) ==> THIS METHOD ADDS AN ELEMENT TO THE END OF THE ARRAY.
                    --> USAGE :
                            myArr2.push(6);
                            console.log(myArr2); OUTPUT : [1,2,3,4,5,6] {THIS METHOD CHANGES THE VALUE, AS IT IS A REFERNCE TO THAT ARRAY}

                2) POP (METHOD) ==> THIS METHOD REMOVES AN ELEMENT FROM THE END OF THE ARRAY.
                    --> USAGE :
                            myArr2.pop();
                            console.log(myArr2); OUTPUT : [1,2,3,4,5]

                3) UNSHIFT (METHOD) ==> THIS METHOD ADDS AN ELEMENT TO THE START OF THE ARRAY.
                    --> USAGE :
                            myArr2.unshift(0);
                            console.log(myArr2); OUTPUT : [0,1,2,3,4,5]

                4) SHIFT (METHOD) ==> THIS METHOD REMOVES AN ELEMENT FROM THE START OF THE ARRAY.
                    --> USAGE :
                            myArr2.shift();
                            console.log(); OUTPUT : [1,2,3,4,5]

                5) INCLUDES (METHOD) ==> THIS METHOD ONLY RETURN TRUE OR FALSE BASED ON WHETHER THAT ARRAY HAS THAT ELEMENT OR NOT.
                    --> USAGE :
                            console.log(myArr2.includes(9)); OUTPUT : false

                6) INDEXOF (METHOD) ==> THIS METHOD TELLS US THE INDEX AT WHICH THAT VALUE EXIST.
                    --> USAGE :
                            console.log(myArr2.indexOf(3)); OUTPUT : 2
                            if
                            console.log(myArr2.indexOf(9)); OUTPUT : -1 {BECAUSE THIS VALUE DOES NOT EXIST IN THE INDEX RANGE SO THAT IS WHY IT GIVES US THE INDEX -1}

                7) JOIN (METHOD) ==> THIS METHOD LETS US CONVERT ARRAY INTO STRING AND LETS US JOIN TWO ARRAY INTO STRING
                    --> USAGE :
                            cosnt newArr = myArr2.join();
                            console.log(myArr2); OUTPUT : [1,2,3,4,5]
                            console.log(newArr); OUTPUT : 0,1,2,3,4,5
                            console.log(typeOf newArr); OUTPUT : string

                8) SLICE (METHOD) ==> THIS METHOD LET US SLICE THE ARRAY FROM CERTAIN INDEX TO THE RANGE WE HAVE GIVEN. || IT DOESNOT MANIPULATE THE ORIGINAL ARRAY. AS IT MAKES THE COPY THE ARRAY. || IT RETURN A COPY OF A SECTION OF AN ARRAY.
                    --> USAGE :
                            console.log("A ", myArr2); OUTPUT : A [1,2,3,4,5]
                            const myn1 = myArr2.slice(1,3); SLICE DOESNOT MANIPULATE THE ORIGINAL ARRAY
                            console.log(myn1); OUTPUT : [2,3]
                            console.log("B ", myArr2); OUTPUT : B [1,2,3,4,5]

                9) SPLICE (METHOD) ==> THIS METHOD LET US DO THE SAME THING AS SLICE. || IT MANIPULATES THE ORIGINAL ARRAY AS IT A REFENCE TO THE ORIGINAL ARRAY
                    --> USAGE :
                            const myn2 = myArr.splice(1,3); SPLICE MANIPULATE THE ORIGINAL ARRAY
                            console.log(myn2); OUTPUT : [2,3,4] (RANGE IS INCLUSIVE)
                            console.log("C ", myArr); OUTPUT : C [1,5];

VIDEO 15 - MORE ON ARRAY ====================================================================================================================

            INSTANCE 1 -> const marvelHeros = ["Thor", "Ironman", "Spiderman"];
                          const dcHeros = ["Superman", "Flash", "Batman"];

                            --> marvelHeros.push(dcHeros);
                            ABOVE LINE IS PUSHING 'dcHeros' ARRAY AS AN ELEMENT IN THE FIRST ARRAY i.e. 'marvelHeros'. AS PUSH METHOD ALWAYS ADD TO THE LAST ELEMENT OF THE ARRAY.

                            console.log(marvelHeros); OUTPUT: ["Thor", "Ironman", "Spiderman", ["Superman", "Flash", "Batman"]]
                            console.log(marvelHeros[3][1]); OUTPUT : Flash

                            10) CONCATE (METHOD) ==> THIS OPERATOR LET US ADD TWO OR MORE ARRAY. IT WORKS ON STRINGS, ARRAYS etc.
                            const allHeros = marvelHeros.concat(dcHeros); THIS METHOD RETURN NEW ARRAY BY COMBINING THEM INTO ONE ARRAY.
                            console.log(allHeros); ["Thor", "Ironman", "Spiderman", "Superman", "Flash", "Batman"]



                            NOTE : PUSH CHNAGES THE ORIGINAL VALUE BUT CONCATE RETURN THE NEW VALUE THAT CAN BE STORED.

                            11) SPREAD OPERATOR ==> THIS OPERATOR IS USED TO SPREAD ALL THE VALUES IN AN ARRAY AND LET US CONCATINATE 2 ARRAYS

                                --> USAGE : {USING SPREAD OPERATOR FOR ABOVE CONCATINATING TASK}
                                            const allNewHeros = [...marvelHeros, ...dcHeros]; DOES THE SAME WORK AS CONCAT.
                                            console.log(allNewHeros); ["Thor", "Ironman", "Spiderman", "Superman", "Flash", "Batman"]

            INSTANCE 2 ->   const anotherArray = [1,2,3,[4,5,6],7,[6,7,[4,5]]];

                            12) FLAT (METHOD) ==> THIS METHOD IS USED TO SPREAD ALL THE ELEMENTS WITH THE HELP OF ARGUMENT IN WHICH WE CAN GIVE NUMBER WHICH TELLS US HOW MANY SUB ARRAYS ARE IN THE ARRAY. IF WE WANT WE CAN JUST GIVE 'Infinity' AND THIS METHOD WILL COUNT ALL THE SUB ARRAYS AND SPREAD THEM ACCORDINGLY.

                            const usableAnotherArray = anotherArray.flat(Infinity); THIS COUNTS AND SPREAD ALL THE ARRAYS
                            console.log(usableAnotherArray); [1,2,3,4,5,6,7,6,7,4,5];

            13) Array.isArray('value') ==> THIS METHOD RETURN TRUE OR FALSE BASED ON WHAT THE VALUE IS IF ITS ARRAY ITS GIVING IT TRUE AND IF ITS NOT AN ARRAY ITS GIVING FLASE
                --> USAGE :
                        console.log(Array.isArray("Ashish")); OUTPUT : false

            14) Array.from('value') ==> THIS METHOD RETURN THE ARRAY OF ANY DATATYPE. (Strings, numbers, objects etc)
                --> USAGE :
                        console.log(Array.from("Ashish")); OUTPUT : ['A','s','h','i','s','h']

                        console.log(Array.from(1234567890)); THIS GIVES THE EMPTY ARRAY AS AN OUTPUT TOO.
                        console.log(Array.from({name : "Ashish"})); THIS GIVES THE EMPTY ARRAY AS AN OUTPUT.

            15) Array.of(datatype1, datatype2, .... more) ==> THIS METHOD TAKES THE DIFFERENT DIFFERENT DATYPES AND ITS VALUES AND ADD IT TO A COMMON ARRAY
                --> USAGE :
                        let score1 = 100;
                        let score2 = 200;
                        let score3 = 300;
                        let score4 = [400, 500, 600];

                        console.log(Array.of(score1, score2, score3, ...score4)); OUTPUT : [100, 200, 300, 400, 500, 600]
                        ABOVE CONSOLE LOG IS USING Array.of() METHOD TO MERGE ALL THE VALUES AND AND ARRAY WE USED SPREAD OPERATOR AND MADE A NEW ARRAY

VIDEO 16 - OBJECTS ===============================================================================================================================

            -> THERE ARE 2 WAYS TO DECLARE OBJECTS
                --> LITERAL & CONSTRUCTOR

                        IF OBJECT IS MADE WITH LITERAL THEN IT WONT BE A SINGLETON OBJECT
                        BUT IF IT IS MADE WITH CONSTRUCTOR THEN IT WILL BE A SINGLETON OBJECT
                        Object.create (CUNSTROCTOR METHOD OF CREATING OBJECTS)

                --> SINGLETON - WHATEVER OBJECT WE CREATE WITH THE HELP OF CONSTRUCTURE ARE CALLED SINGLETON.

                1) OBJECT LITERALS

                    COMMON SYNTAX :

                        1) Object.create (THIS IS A CONSTRUCTURE METHOD)
                        2) const/let/var varaible_name = { key1:'value1', key2:'value2', key3:'value3', ...... }

                        "key1", "key2" and so on all keys are strings

                    INSTANCE 1 :

                        const mySymbol = Symbol("key1");

                        const jsUser = {

                            name : "Ashish",
                            "Full Name" : "Ashish Singh",
                            [mySymbol] : "mykey1", // mySymbol is a string if we are checking typeof of mySymbol, if we have to use mySymbol as a Symbol Data Object then we have to use [] these symbols.
                            age : 18,
                            location : "Delhi",
                            email : "ashish@gmail.com",
                            isLoggedIn : false,
                            lastLoginDays : ["Monday", "Saturday"]

                        }

                            ==> console.log(jsUser.email); // OUTPUT : ashish@gmail.com
                            ==> console.log(jsUser["email"]); // OUTPUT : ashish@gmail.com
                            {ABOVE 2 ARE THE WAYS TO ACCESS THE OBJECT. WE USE '.email' and '["email"]'. BUT IF WE TAKE A LOOK AT LINE 561, WE DONT HAVE ANYWAY TO ACCESS THAT VALUE IF WE ONLY USE DOT METHOD TO ACCESS OBJECTS VALUE. THAT IS WHY WE NEED TO KNOW BOTH METHODS TO ACCESS OBJECTS VALUE. IN LINE 574 WE USED ANOTHER METHOD OF ACCESSING OBJECT'S VALUE}
                            ==> console.log(jsUser["Full Name"]); // OUTPUT : Ashish Singh

                            ==> console.log(jsUser[mySymbol]); // TO ACCESS A SYMBOL WE DO NOT NEED TO MAKE IT A STRING WE CAN DIRECTLY ACCESS THE SYMBOL AS WE DID IT IN OBJECT. || OUTPUT : mykey1
                            ==> console.log(typeof jsUser[mySymbol]); // OUTPUT : string

                            ==> jsUser.email = "ashish041@gmail.com"; // jsUser OBJECTS email KEY'S VALUE WILL BE CHNAGED FROM 'ashish@gmail.com' TO 'ashish041@gmail.com'
                            ==> console.log(jsUser); // OUTPUT : RETURN AN OBJECT WITH EMAIL VALUE CAHNGED TO 'ashish041@gmail.com'

                            ==> jsUser["email"] = "singh041@gmail.com"; // jsUser OBJECTS email KEY'S VALUE WILL BE CHNAGED FROM 'ashish@gmail.com' TO 'singh041@gmail.com'
                            ==> console.log(jsUser); // OUTPUT : RETURN AN OBJECT WITH EMAIL VALUE CAHNGED TO 'singh041@gmail.com'

                            ==> Object.freeze(jsUser); // THIS IS TO FREEZE A OBJECT SO THAT IT'S VALUE CAN'T BE CHANGED.
                            ==> jsUser["isLoggedIn"] = true; // THIS WILL NOT BE WORKING BECAUSE OF ABOVE FREEZE FUNCTION OF OBJECT.
                            ==> console.log(jsUser); // IF WE LEAVE OBJECT.FREEZE AS IS THEN NOTHING WILL BE CHNAGED IN THE OBJECT BUT IF WE REMOVE OBJECT.FREEZE THEN IT WILL BE WORKING AGAIN.

                    INSTANCE 2 :

                        jsUser.greeting = function(){
                            console.log("Hello JS User");
                        }

                        jsUser.greetingTwo= function(){
                            console.log(`Hello ${jsUser["name"]}`); // USING BACKTICKS IS CALLED STRING INTERPOLATION.
                            console.log(`Hello ${this["name"]}`);
                            console.log(`Hello ${this["Full Name"]}`);
                            //all above console logs are doing the same thing except for the last one its printing full name value instead
                        }

                        console.log(jsUser.greeting); // OUTPUT : Function (anonymous) || THIS IS THE OUTPUT BECAUSE WHEN WE TRYING TO CALL THE FUNCTION WE ARE ONLY GETTING ITS REFERENCE NOT ITS VALUE. THAT IS BECASUE WE CALLED IT WITHOUT PARANTHESIS.
                        console.log(jsUser.greeting()); // OUTPUT : Hello JS User

                        console.log(jsUser.greetingTwo); // OUTPUT : Function (anonymous) || SAME REASON AS ON LINE 602
                        console.log(jsUser.greetingTwo()); // OUTPUT : Hello Ashish
                                                                       Hello Ashish
                                                                       Hello AShish Singh

VIDEO 17 - MORE ON OBJECTS ==================================================================================================================

            ->  INSTANCE 1

                const tinderUser = new Object(); // OUTPUT : {} || THIS IS SINGLETON OBJECT
                const tinderUser = {}; // OUTPUT : {} || OUTPUT SAME AS ABOVE BUT THIS IS NON SINGLETON OBJECT / LIETRAL OBJECT

                CONTINUING WITH LINE 613 :

                    tinderUser.id = "123abc";
                    tinderUser.name = "Sam";
                    tinderUser.isLoggedIn = false;

                    {WE ASSIGNED NEW KEY:VALUE PAIR TO THE ABOVE OBJECT NAMED tinderUser}

                MORE OBJECT METHODS

                    console.log("This is tinder user object: ", tinderUser); // OUTPUT :

                    console.log("These are the keys for Tinderuser object : ", Object.keys(tinderUser));
                    // OUTPUT : ['id', 'name', 'isLoggedIn']
                    {ALL THE KEYS RETURNED IN AN ARRAY. WE CAN USE LOOP TO ACCESS EACH KEY}

                    console.log("These are the Values for Tinderuser object : ", Object.values(tinderUser));
                    // OUTPUT : ['123abc', 'Sam', false]
                    {ALL THE VALUES RETURNED IN AN ARRAY. WE CAN USE LOOP TO ACCESS EACH VALUE}

                    console.log("These are the Entries for Tinderuser object : ", Object.entries(tinderUser));
                    // OUTPUT : [['id', '123abc'], ['name', 'Sam'], ['isLoggedIn', 'false']]
                    {ALL THE KEYS AND VALUE RETURN IN A ARRAY WITHIN AN ARRAY. KEY,VALUE PAIR RETURNED IN AFORM OF ARRAY}

                    console.log(tinderUser.hasOwnProperty('isLoggedIn'));
                    // OUTPUT : true
                    {RETURNS BOOLEAN VALUE IF THAT PROPERTY IS FOUND/NOT FOUND IN THE OBJECT.}

                    console.log(tinderUser.hasOwnProperty('isLogged'));
                    // OUPUT : false
                    {RETURNS BOOLEAN VALUE IF THAT PROPERTY IS FOUND/NOT FOUND IN THE OBJECT.}

            -> INSTANCE 2

                const regularUser = {
                    email : "sam@gmail.com",
                    fullName : {
                        userFullName: {
                            firstName : "Ashish",
                            lastName : "Singh"
                        }
                    }
                }

                {ACCESSING ABOVE OBJECTS VALUE}
                --> console.log(regualrUser.fullName.userFullName.firstName) // OUTPUT : Ashish
                --> console.log(regualrUser.fullName.userFullName.lastName) // OUTPUT : Singh

                {OPTIONAL CHAINING ==> THIS METHOD IS USED TO PROTECT AGAINT THE ERROR IS ONE OBJECT KEY IS NOT PRESENT FOR EXAMPLE}
                --> console.log(regularUser.fullName?.userFullName.FirstName) // OUTPUT : ASHISH || OUTPUT IS SAME
                    ---> {BUT IN ABOVE LINE IF 'fullName' KEY WAS NOT PRESENT IN 'regularUser' OBJECT THEN ALSO OUT CODE WOULD HAVE RUN BECASUE OF OPTIONAL CHAINING METHOD}

            -> INSTANCE 3

                {MERGING OBJECTS}

                const object1 = {
                    1: "a",
                    2: "b"
                }

                const object2 = {
                    3: "c",
                    4: "d"
                }

                const object3 = { object1, object2 };
                // OUTPUT :
                {
                    object1: { '1': 'a', '2': 'b', '3': 'c', '4': 'd' },
                    object2: { '3': 'c', '4': 'd' }
                }
                { THIS RETURNS 2 OBJECTS INSIDE THE OBJECT || ABOVE SITUATION IS PROBLEMATIC }

                const object4 = { ...object1, ...object2 };
                // OUTPUT : { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }
                {THIS IS THE SPREAD OPERATOR MERGING THAT IS USED ALOT}

                const object5 = Object.assign(object1, object2);
                // OUTPUT : { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }
                {THIS MEANS THAT OBJECT2 IS MERGING INTO OBJECT1}

                const object6 = Object.assign({}, object1, object2);
                // OUTPUT : { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }
                {THIS MEANS THAT OBJECT1 AND OBJECT2 GOT COMBINED INTO A NEW OBJECT {} ||
                 THIS CHANGES THE EMPTY OBJECT ON LINE 674 ||
                 IF WE DONT GIVE EMPTY ARRAY THEN IT WILL MERGE INTO THE FIRST OBJECT THAT IS GIVEN IN THE ASSIGN FUNCTION ||
                 FIRST OBJECT IN ASSIGN FUNCTION IS ALWAYS A TARGET AND REST ARE SOURCE,
                 SO IF WE GIVE EMPTY OBJECT FIRST THEN IT WILL BECOME TARGET AND REST BECOMES SOURCE, THAT WILL BE MERGED IN TAREGT OBJECT}

VIDEO 18 - DESTRUCTURING OF OBJECTS ===============================================================================================================

            Note : DESTRUCTURING CAN BE DONE FOR BOTH ARRAYS AND OBJECTS
            -> INSTANCE 1
                    const course = {
                        courseName : "JS in Hindi",
                        CoursePrice : "999",
                        courseInstructure : "Hitesh"
                    }

                    ACCESSING ABOVE OBJECTS VALUES

                        console.log(course.courseName);
                        console.log(course.CoursePrice);
                        console.log(course.courseInstructure);

                    ABOVE WRITTEN CONSOLE LOGS CAN BE WRITTEN IN ONE MORE WAY. THAT IS CALLED DESTRUCTURING.
                    BELOW WRITTEN CODE IS DESTRUCTURED OBJECT OR DESTRUCTURING OF OBJECTS

                    1) const {courseInstructure, CoursePrice, courseName} = course; // SIMPLE DESTRUCTURING
                        ==> console.log(courseInstructure); // OUTPUT : Hitesh
                            console.log(CoursePrice); // OUTPUT : 999
                            console.log(courseName); // OUTPUT : JS in Hindi

                    2) const {courseInstructure : instructure, CoursePrice : price, courseName: name} = course; // WE CAN GIVE OUR OWN NAMES WHILE DESTRUCTURING
                        ==> console.log(instructure); // OUTPUT : Hitesh
                            console.log(price); // OUTPUT : 999
                            console.log(name); // OUTPUT : JS in Hindi

            API - APPLICATION PROGRAMMING INTERFACE

            ==> THIS IS NOT AN OBJECT THIS IS JSON CODE FORMAT. THOUGH OBJECT AND JSON LOOKS SIMILAR BUT THEY ARE DIFFERENT
            {
                "name" : "hitesh",
                "coursename" : "Chai and Javascript",
                "price" : "Free"
            }

            ==> SOMETIMES WE GET API IN ARRAY FORMAT TOO WITH OBJECTS INSIDE.
            ==> SAMPLE API
                    ===> {
                            "results": [
                                {
                                    "gender": "female",
                                    "name": {
                                        "title": "Miss",
                                        "first": "Jennie",
                                        "last": "Nichols"
                                    },
                                    "location": {
                                        "street": {
                                        "number": 8929,
                                        "name": "Valwood Pkwy",
                                        },
                                        "city": "Billings",
                                        "state": "Michigan",
                                        "country": "United States",
                                        "postcode": "63104",
                                        "coordinates": {
                                        "latitude": "-69.8246",
                                        "longitude": "134.8719"
                                        },
                                        "timezone": {
                                        "offset": "+9:30",
                                        "description": "Adelaide, Darwin"
                                        }
                                    },
                                    "email": "jennie.nichols@example.com",
                                    "login": {
                                        "uuid": "7a0eed16-9430-4d68-901f-c0d4c1c3bf00",
                                        "username": "yellowpeacock117",
                                        "password": "addison",
                                        "salt": "sld1yGtd",
                                        "md5": "ab54ac4c0be9480ae8fa5e9e2a5196a3",
                                        "sha1": "edcf2ce613cbdea349133c52dc2f3b83168dc51b",
                                        "sha256": "48df5229235ada28389b91e60a935e4f9b73eb4bdb855ef9258a1751f10bdc5d"
                                    },
                                    "dob": {
                                        "date": "1992-03-08T15:13:16.688Z",
                                        "age": 30
                                    },
                                    "registered": {
                                        "date": "2007-07-09T05:51:59.390Z",
                                        "age": 14
                                    },
                                    "phone": "(272) 790-0888",
                                    "cell": "(489) 330-2385",
                                    "id": {
                                        "name": "SSN",
                                        "value": "405-88-3636"
                                    },
                                    "picture": {
                                        "large": "https://randomuser.me/api/portraits/men/75.jpg",
                                        "medium": "https://randomuser.me/api/portraits/med/men/75.jpg",
                                        "thumbnail": "https://randomuser.me/api/portraits/thumb/men/75.jpg"
                                    },
                                    "nat": "US"
                                    }
                                ],
                                "info": {
                                    "seed": "56d27f4a53bd5441",
                                    "results": 1,
                                    "page": 1,
                                    "version": "1.4"
                                }
                        }

                    ABOVE IS THE RAW SAMPLE DATA FROM RANDOM USER GENRATOR WEBSITE

VIDEO 19 - FUNCTIONS ==================================================================================================================================

            FUNCTION IS A PACKAGE WHICH HOLDS SOME CODE IN IT. (NAMING CONVENTION / NOMANCLATURE)

            PARAMETER V/S ARGUMENTS
            ==> WHEN WE DEFINE A FUNCTION WE PASS PARAMETERS
            ==> WHEN WE CALL A FUNCTION WE PASS ARGUMENTS.

            -> INSTANCE 1

                    function sayMyName(){
                        console.log("A");
                        console.log("S");
                        console.log("H");
                        console.log("I");
                        console.log("S");
                        console.log("H");
                    }

                    sayMyName -> Reference || THIS IS A REFERENCE TO THAT FUNCTION || THIS IS GOING TO BE USED IN DOM MANIPULATION AND REACT.
                    sayMyName() -> Execution || THIS WILL EXECUTE THE FUNCTION AND CODE INSIDE THAT FUNCTION
                    sayMyName(); // OUTPUT : A
                                             S
                                             H
                                             I
                                             S
                                             H

            -> INSTANCE 2

                    function addTwoNumbers(number1, number2){
                        console.log(number1 + number2);
                    }

                    addTwoNumbers(); // OUTPUT WILL BE NaN BECAUSE WE NEED TO GIVE 2 ARGUMENTS AS WE PASSED 2 PARAMETERS IN THE FUNCTION addTwoNumbers()
                    addTwoNumbers(3, 4); // OUTPUT IS 7.
                    addTwoNumbers(3, "4"); // OUTPUT WILL BE 34 AS JS CONVERTS BOTH THE ARGUMENTS INTO STRING AND CONCATINATE BOTH. IT IS HAPPENIGN BECAUSE OF TYPE CONVERSION
                    addTwoNumbers(3, "a"); // OUTPUT WILL BE 3a.

                    const result = addTwoNumbers(4, 7);
                    console.log("result : ", result); // IT IS BECAUSE OUR FUNCTION IS NOT RETURNING ANYTHING TO BE STORED.

            -> INSTANCNE 3

                    function sum(number1, number2){
                    let answer = number1 + number2; // THIS ANSWER'S VARIABLE SCOPE IS LIMITED TO THE FUNCTION'S SCOPE
                    return answer;
                    console.log("Ashish");
                    } // AFTER A RETURN STATEMENT NOTHING IS GOING TO EXECUTE IN A FUNCTION. RETURN KEYWORD IS KIND OF A WAY TO TELL A FUNCTION TO STOP ITS PROCESS.

                    const answer = sum(3, 5); // THE 'ANSWER VRIABLE' IS OUTSIDE OF THE sum() FUNCTION.
                    console.log("result1 : ", answer);
                    // WHEN WE CONSOLE LOG ANYTHING WE GET ONLY PRINTABLE VALUE THAT CAN NOT BE STORED IN A NEW VARIABLE.
                    // BUT WHEN WE RETURN ANY VALUE USING 'return' KEYWORD. IT CAN BE STORED IN A NEW VARIABLE.

                    ANOTHER WAY OF RETURNING ANSWER OR RESULT
                    function addTwoNumbers(number1 + number2){
                        return number1 + number2;
                    }

                    WHENEVER WE RETURN A VALUE FROM A FUNCTION IT HAS TO BE STORED IN A VARIABLE BEFORE EXECUTING IT.
                    THEN WE CAN CONSOLE LOG THAT PARTICULAR VARIABLE HOLDING RETURNED VALUE FROM FUNCTION.

            -> INSTANCE 4

                    function loginUserMessage(username){
                        return `${username} Just Logged In`; // STRING INTERPOLATION WITHIN A FUNCTION
                    }

                    const notification1 = loginUserMessage("Ashish");
                    const notification2 = loginUserMessage("");
                    const notification3 = loginUserMessage();

                    console.log(notification1); // OUTPUT : Ashish Just Logged In
                    console.log(notification2); // OUTPUT :  Just Logged In || SPACE PRINTED BEFORE 'Just Logged In
                    console.log(notification3); // OUTPUT : undefined Just Logged In || IF NOTHING PASSED IN ARGUMENT THEN IT WILL RETURN undefined.


                    ==> USING IF ELSE STATEMENTS WITH FUNCTIONS

                    function loginUserMessage1(username = "User"){ // WE CAN GIVE DEFAULT VALUE IF NOTHING IS PASSED BY THE USER
                        if(username === undefined){   // CAN ALSO WRITE if(!username){......}, ITS SAME AS WHAT WE DID IN THIS LINE.
                            console.log("please enter a username.");
                            return; //
                        }
                        return `${username} Just Logged In`;
                    }

                    console.log(loginUserMessage1("Ashish")); // OUTPUT : Ashish Just Logged In
                    }

VIDEO 20 - MORE ABOUT FUNCTION ======================================================================================================================

            -> INSTANCE 1

                    function calculateCartPrice(...num1){
                        return num1;
                    }
                    // WHATEVER STARTS WITH 3 DOTS {...} IT IS CALLED REST OPERATOR AND SPREAD OPERATOR. IT JUST DIFFERS FROM USE CASE TO USE CASE. HERE IT IS A REST OPERATOR IN THIS CASE.

                    console.log(calculateCartPrice(200, 300, 400, 500, 2000));
                    // [200, 300, 400, 500, 2000]
                    {THIS IS RETURNING AN ARRAY OF ALL THE ARGUMENTS PASSED.}

            -> INSTANCE 2

                    function calculateCartPrice1(val1, val2, ...num1){
                        return num1;
                    }
                    calculateCartPrice(200, 400, 500, 2000)
                    // WHATEVER STARTS WITH 3 DOTS {...} IT IS CALLED REST OPERATOR AND SPREAD OPERATOR. IT JUST DIFFERS FROM USE CASE TO USE CASE. HERE IT IS A REST OPERATOR IN THIS CASE.

                    console.log(calculateCartPrice1(200, 300, 400, 500, 2000));
                    // [400, 500, 2000]
                    {THIS IS RETURNING AN ARRAY OF REST OF THE ARGUMENTS PASSED AFTER val1 and val2.}

            -> (USING OBJECTS IN FUNCTIONS)

                    --> INSTANCE 1
                            // DECLARING AN OBJECT
                            const user = {
                                username : "Parakh",
                                age : 24
                            }

                            // MAKING A FUNCTION TO HANDLE OBJECT AND PASSING ABOVE OBJECT AS AN ARGUMENT
                            function handleObject(anyobject){
                                console.log(`username is ${anyobject.username} and age is ${anyobject.age}`); // USING STRING INTERPOLATION
                            }

                            handleObject(user); // OUTPUT : username is Parakh and age is 24

                            // WE CAN ALSO PASS AN OBJECT WHILE CALLING A FUNCTION

                            handleObject({
                                username : "Ashish",
                                age : 25
                            }) // OUTPUT : username is Ashish and age is 25

                    --> INSTANCE 2

                            // DECLARING NEW ARRAY
                            const myNewArray = [200, 400, 100, 150];

                            // HANDLING ARRAY USING FUNCTIONS
                            function returnSecondValue(getarray){
                                return getarray[1];
                            }

                            console.log(returnSecondValue(myNewArray));

                            // WE CAN DO THE SAME THING WHAT WE DID WITH OBJECTS IN ABOVE INSTANCE

VIDEO 21 - INTRODUCTION TO SCOPE ===================================================================================================================

            -> SCOPE IS A PART OF CODE WHICH IS WRITTEN BETWEEN BRACES ('{}').
            -> BEFORE ES6 THERE WAS ONLY ONE VARIBALE KEYWORD TO DECLARE KEYWORD AND THAT WAS 'var'.
               BUT AFTER ES6 THERE WERE 2 KEYWORDS INTRODUCED. FIRST IS 'let' AND SECOND IS 'const'
               SO THE PROBLEM WITH 'var' KEYWORD WAS THAT IT CAN BE ACCESSED ANYWHERE AND CAN BE REDECLARED FROM ANYWHERE WHETHER ITS IN THE SCOPE OR OUTSIDE THE SCOPE (GLOBAL SCOPE).
            -> SO TO TACKLE THIS PROBLEM 'let' KEYWORD AND 'const' KEYWORD WERE INTRODUCED.
            -> WHEN THESE VARIABLE WERE INTRODUCED THEY CAME WITH THE SOLUTION OF ACCESSIBILITY OF VARIBALE AND REDECLARATION OF VARIABLE.
            -> WHEN DECLARED IN A SCOPE LET AND CONST CAN ONLY BE USED IN THAT SCOPE ONLY NOT OUTSIDE OF THAT SCOPE.

            -> INSTANCE 1
                    let a = 3000;
                    const b = 4000;
                    var c = 5000; // EVEN IF WE GIVE C VARIABLE A GLOBAL SCOPE THEN ALSO IT IS REDECLARED IN IF ELSE STATEMENT

                    if(true){
                        let a = 300; // THIS LET DECLARATION IS ONLY ACCESSIBLE INSIDE THE SCOPE
                        const b = 400; // THIS CONST DECLARATION IS ONLY ACCESSIBLE INDISDE THE SCOPE
                        var c = 500;
                    }

                    console.log(a); // OUTPUT : 3000
                    {IN CASE OF LET AND CONST BLOCK SCOPE IS APPLIED SO THAT CONFLICT DOESNOT ARISE}
                    console.log(b); // OUTPUT : 4000
                    console.log(c); // OUTPUT : 500
                    {VAR IS A PROBLEMATIC VARIABLE TYPE BECAUSE EVEN IF ITS DECLARED INSIDE THE SCOPE OF IF ELSE STATEMENT. IT SHOULD NOT BE ACCESCIBLE OUTSIDE THAT SCOPE}

            -> BLOCK SCOPE VS GLOBAL SCOPE
                ==> BLOCK SCOPE MEANS WHATEVER IS DEFINED INSIDE THE BRACES
                ==> GLOBAL SCOPE MEANS WHATEVER IS DEFINED OUTSIDE THE BRACES

VIDEO 22 - MORE ON SCOPES ===========================================================================================================================

            -> INSTANCE 1

                    function one(){
                        const username = "ashish"; // username VARIBALE CAN BE USED ANYWHERE AS IT HAS A GLOBAL SCOPE IN THIS FUNCTION.
                        function two(){
                            const website = "youtube"; // IF WE HAVE TO USE WEBSITE VARIBALE WE HAVE TO USE IT IN THE 'two' FUNCTION ONLY.
                            console.log(username);
                        }
                        console.log(website);
                        // OUTPUT : error
                        {FUNCTION 'one' IS A PARENT FUNCTION AND FUNCTION 'two' IS A CHILD FUNCTION. SO A PARENT FUNCTION CAN NOT ACCESS}
                        {CHILD'S ELEMENTS BUT A CHILD CAN USE ITS PARENTS ELEMENTS.}
                        two();
                    }
                    one(); // OUTPUT : ashish

            -> INSTANCE 2

                    if(true){
                        const username = "ajay";

                        if(username === "ajay"){
                            const website = " youtube";
                            console.log(username + website);
                        }

                        console.log(website); // OUTPUT : error || CAN NOT ACCESS AS ITS IN THE BLOCK SCOPE WHERE USERNAME IS CHECKED
                    }
                    console.log(username); // OUTPUT : error || CAN NOT ACCESS AS ITS IN THE BLOCK SCOPE OF THE IF ELSE STATEMENT ABOVE

                --> HOISTING

                    --> console.log(addone(5));
                        function addone(num){ // FUNCTION DECLARATION NORMAL WAY || WHEN DECLARED THIS WAY HOISTING IS SUPPORTED
                            return num + 1;
                        }
                        // ABOVE DECLARED FUNCTION IS NORMAL FUNCTION

                    --> console.log(addtwo(3));
                        const addtwo = function(num){ // FUNCTION DECLARATION USING VARIABLES || WHEN DECLARED THIS WAY HOISTING IS NOT SUPPORTED BECAUSE WE CAN ONLY USE VAR KEYWORD FOR HOISTING. CONST AND LET DOES NOT SUPPORT HOISTING.
                            return num + 2;
                        }
                        // ABOVE DECLARED FUNCTION IS ALSO CALLED EXPRESSION.

                        ==> WHEN DECLARED LIKE EXPRESSION THAT FUNCTION CAN NOT BE CALLED BEFORE DECLARATION OF A VARIABLE.
                            WHEN DECLARED NORMALLY A FUNCTION CAN BE CALLED BEFORE THE DECLARATION OF THE FUNCTION.

VIDEO 23 - INTRODUCTION TO ARROW FUNCTION ============================================================================================================

            -> THIS KEYWORD => THIS KEYWORD TELLS US ABOUT THE CURRENT CONTEXT.

                --> INSTANCE 1

                        # CREATING AN OBJECT

                        const user = {
                            username : "Ashish",
                            Fees : 999,

                            welcomeMsg : function(){
                                console.log(`${this.username}, Welcome to Website`);
                                console.log(this); // THIS SHOWS US THE OBJECTS INSIDE THE USER
                            }
                        }

                        user.welcomeMsg(); // OUTPUT : Ashish, Welcome to Website
                        user.username = "Sam";
                        user.welcomeMsg(); // OUTPUT : Sam, Welcome to Website

                        // WHAT HAPPENS IS WHEN WE SAY THIS IT TAKES THE CURRENT CONTEXT OF THE SCOPE
                        // AND WHEN WE SAY 'this.username' WE REFER TO THE USERNAME WHICH IF DEFINED IN THE OBJECT.
                        // BUT WHEN WE CHNAGE THE VALUE OF USERNAME THE OUTUPT WILL BE CHNAGED ACCORDING TO THE VALUE THAT IS THERE IN THE CURRENT TIME.
                        // WE DID NOT HARD CODE THE MESSAGE TO TAKE A SINGLE NAME.

                    Note : THIS KEYWORD ONLY WORKS IN OBJECTS ONLY NOT IN FUCNTION

                        instance :
                            function chai(){
                                let username = "Ashish";
                                console.log(this.username); // THIS KEYWORD ONLY WORKS IN THE OBJECT NOT IN THE FUNCTION.
                                console.log(this); // IT GIVES US THE GLOBAL OBJECT FROM NODE ENVIRONMENT.
                            }
                            chai(); // OUTPUT : undefined

            -> ARROW FUNCTION =>

                --> DECLARATION OF ARROW FUNCTION
                        ---> LET'S DERIVE ARROW FUNCTION FROM NORMAL FUNCTION

                                PHASE 1 : THIS IS NORMAL FUNCTION

                                const chai = function(){
                                    let username = "Ashish";
                                    console.log(this.username); // STILL GIVING UNDEFINED.
                                    console.log(this); // GIVING OBJECT OF THE NODE ENVIRONMENT.
                                }

                                PHASE 2 : THIS IS ARROW FUNCTION (REMOVING FUNCTION KEYWORD AND ADDING ARROW BEFORE THE BRACES)

                                const chai = () => {
                                    let username = "Ashish";
                                    console.log(this.username); // STILL UNDEFINED
                                    console.log(this); // OUTPUT : {}
                                }
                --> TYPES OF ARROW FUNCTIONS
                        ==> BASIC/NORMAL/EXPLICIT ARROW FUNCTION

                            ===> BASIC ARROW FUNCTION
                                Instance 1 :
                                    const addTwo = (num1, num2) => {
                                        return num1 + num2;
                                    }

                            ===> IMPLICIT RETURN ARROW FUNCTION
                                Instance 1 :
                                    const addTwo = (num1, num2) => num1 + num2; // THIS RETURN THE VALUE WITHOUT ANY RETURN KEYWORD IN IT. IT IS A SINGLE LINE ARROW FUNCTION.

                                Instance 2 :
                                    const addTwo = (num1, num2) => (num1 + num2);// WHILE IN A FUNCTION WITH CURLY BRACKETS WE HAVE TO USE RETURN KEYWORD TO RETURN ANY VALUE. || BUT WE DONT HAVE TO USE RETURN KEYWORD IN ROUND PARANTHESIS

                                Instance 3 :
                                // IF WE HAVE TO RETURN AN OBJECT IN A IMPLICIT FUNCTION. WE CAN DO SOMETHING LIKE THIS
                                const addTwo = (num1, num2) => {username: "Ashish"} // IT WILL RETURN THE UNDEFINED KEYWORD BECAUSE IN IMPLICIT ARROW FUNCTION WE CAN NOT RETURN ANYTHING WITHOUT ROUND BRACKETS.

                                Instance 4 :
                                const addTwo = (num1, num2) => ({username: "Ashish", sum: num1 + num2});
                                console.log(addTwo(4,6));

                            ===> EXPLICIT RETURN ARROW FUNCTION - IT IS JUST A FUNCTION WHICH HAS RETURN KEYWORD TO RETURN A VALUE FROM THE FUNCTION

VIDEO 24 - IIFE (IMMEDIATLY INVOKED FUNCTION EXECUTION) ===============================================================================================

            -> MANY TIMES GLOBAL SCOPE POLLUTION HAPPENS THEN WE USE IIFE SO THAT WE CAN REMOVE THAT GLOBAL SCOPE POLLUTION.

                --> SYNTAX OF IIFE
                        =>  (function chai(){ // NAMED IIFE
                                console.log("DB Connected ONE");
                            }) ();

                            // ABOVE IS THE NAMED IIFE

                        => IF WE WRITE 2 IIFE FUNCTION ONE AFTER ANOTHER THEN WE HAVE TO END FIRST IIFE FUNCTION OR BOTH IN ORDER IT TO RUN.
                           BECAUSE FUNCTION WOULD NOT KNOW WHERE TO END THE CURRENT CONTEXT.

                            ==> NORMAL IIFE
                                (() => {
                                    console.log("DB CONNECTED THREE");
                                }) ();

                            ==> NORMAL IIFE WITH ARGUMENTS AND PARAMETERS
                                ((name) => {
                                    console.log(`DB CONNECTED BY ${name}`);
                                }) ("ASHISH");

VIDEO 25 - JAVASCRIPT CODE EXECUTION AND CALL STACK ===================================================================================================

            JAVASCRIPT EXECUTION CONTEXT

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

                    --> Memory Creation Phase / Memory Phase / Creation Phase
                        --> When we are in our memory allocation phase varibale are allocated some space with a initial value i.e. undefined.
                        --> and when some functions get stored it stores the defination of that function.
                        --> Now, whenever that function is called a "new variable environment" + "execution thread" is made. In this again it devides into 2 phases
                            ---> i.e. Memory Allocation Phase and execution phase.
                            ---> now the function block is being solved.
                            ---> first assigning variable a initial space and value i.e. undefined.
                            ---> then execution happen according to the function block.
                            ---> when this return any value it goes into the GEC and that value is stored there.
                            ---> After that "New Varibale Environment" Block is deleted.
                    --> Execution Phase.
                        --> What ever values we have for those variable that overwrites the initial undefined value.
                        --> Whatever function call happens that is executed as "new variable Environment" {explained in memory creation phase}


                => CALL STACK

                    -> Call Stack works as LIFO (Last In First Out)
                    -> Call stack is nothing but Block where Function stacking over each other and working on top of the global execution context.
                    -> Everything happens same as we discussed in memory allocation phase and execution phase.

NOTE : () => Paranthesis.
       [] => Brackets.
       {} => Braces.






video 26 : 00:00