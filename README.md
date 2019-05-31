# guardian-search-app-using-react

![](https://github.com/tushargoel86/guardian-search-app-using-react/blob/master/app.PNG)

## Package Structure
```
C:.
│   app.PNG
│   package.json
│   README.md
│
└───src
    │   App.js
    │   index.js
    │   serviceWorker.js
    │   setupTests.js
    │
    ├───actions
    │   │   index.js
    │   │
    │   └───__mocks__
    │           index.js
    │
    ├───components
    │       ContentBar.js
    │       HOC.js
    │       SearchBar.js
    │       SearchedContent.js
    │
    ├───constants
    │       Contants.js
    │
    └───__test__
            ContentBar.test.js
            SearchBar.test.js
            SearchedContent.test.js
            Test.js
```
## Start:

 * Create-react-app guardian-search-app-using-react
 * npm i semantic-ui-react

## For unit testing
* npm i enzyme
* npm i enzyme-adapter-react-16
* npm i react-scripts

## Execution:
* npm start
* react-scripts test --env=jsdom

### You need to sign up [here](https://open-platform.theguardian.com/access/) for API key. Its Free.
After sign up, put this key in src/constants/Constants.js file
