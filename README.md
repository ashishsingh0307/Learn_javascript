VIDEO 1 - INTRODUCTION TO WHAT THE COURSE IS ABOUT
VIDEO 2 - HOW TO SETUP THE ENVIRONMENT,
          DIFFERENCE BETWEEN COMPILER AND INTERPRETER,
          HISTORY OF JS(earlier written in browser and now written in the ide),
          NODE JS IS USED TO RUN JS FILES,
          INSTALLATION OF NODE JS {using LTS(Long Term Support) version},
          USING IDE (Visual Studio Code) (Jetbranins Fleet also good editor),
          EXECUTION OF JS CODE => "node filename.js".
VIDEO 3 - INTRO TO GIT AND GITHUB,
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

VIDEO 4 - INTRO TO VARIABLES

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




video 4 : 9:11