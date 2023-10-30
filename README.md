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

          ->





video 9 : 00:00