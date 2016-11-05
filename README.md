# WebdriverIO_Typescript
This directory contains the WebdriverIO page object example written TypeScript. The usefullness of the page object pattern is discussed on the [WebdriverIO website](http://webdriver.io/guide/testrunner/pageobjects.html).

## Why TypeScript
In short, TypeScript is a superset of JavaScript (as in all that "coming in ES6/7!" already built in) that allows optional typing.
### Future Features
TypeScript compiles down to JavaScript using settings in a `.tsconfig` file. Notable lines in this project's `.tsconfig` are...

Tell the compiler to allow the use of ES6/7 features
```
"experimentalDecorators": true,
```
Compile the `.ts` files into a `/src` directory
```
"outDir": "src/"
```
Don't try to compile the `node_modules`
```
"exclude": [
  "node_modules"
],
```
Don't compile every time the file is saved
```
"compileOnSave": false
```

More information at the [TypeScript Website](http://www.typescriptlang.org/docs/handbook/tsconfig-json.html). 

### Intellisense
Adding typings to your functions and variables allows your text editor to better guess what you're trying to do next. More specifically to testing with WebdriverIO, browser elements will let you know what you can do with them and what they need to do their thing.

![intellisense](https://github.com/WillLuce/WebdriverIO_Typescript/blob/master/intellisense.png)

## Running Tests
The WebdriverIO Test Runner still needs `.js` files to test, so we modify the `npm test` script to compile the `.ts` files into a `/src` directory, then run the tests from there. Then, `rimraf` is used to delete the `/src` directory so as to not clutter up the working space.
```
"scripts": {
  "test": "node ./node_modules/typescript/lib/tsc.js && node_modules/webdriverio/bin/wdio && node_modules/rimraf/bin.js src"
}
```
