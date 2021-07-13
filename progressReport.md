# Progress Report


## 9 Jul, 2021 (1st day)

    This Project is initialized with boiler code and put on Github.


## 10 Jul, 2021 (2nd day)

    Created some basic files and folders.
    
    Created Models listed below
        . User Model
        . Book Model
        . IssuedBook Model
        . Category Model

    Created different models thinking it can help in performance improvement and simple to handle.

## 12 Jul, 2021 (3rd day)

    Connected MongoDB with the Backend App 

    Created User Controllers and Routers 
        . signup
        . login
        . update details excluding email
        . logout current session
        . logout all sessions
        
    In login 
        Implemented jsonwebtoken  and implemented persist session logic
        Through JWT checking user authorization 
    
## 13 Jul, 2021 (4th day)

    Patched 4 issues in schemas
        . add default values where required
        . use PascalCase for model name
        . use 'ref' for adding foreign key
        . Type of ISBN updated