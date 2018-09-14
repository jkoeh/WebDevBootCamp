# Testing in Browser
## Jasmine and Unit Testing
- Jasmine is a testing framework that allows us to describe what we are testing and make assertion. 
- it is a common framework used for unit testing which tests individual pieces of code.  
## Common keyword: describe, it, matchers, and spies
``` javascript
describe("feature")
    it("specific function in the feature")
        expect(feature.specificFunction.result == expected result)
    it("another function")
        ...
```
#### Matchers:
- toBe/not.toBe: triple equal
- toBeCloseTo: compare variables with defined precision. 
- toBeDefined: make sure the variable is defined
- toBeFalsey/toBeTruthy
- toBeGreaterThan/toBeLessThan
- toContain
- toEqual: 2 equal
- jasmine.any: to check type of an object
## Using before and after 
Use BeforeEach to do per test setup. 
Use AfterEach to do per test cleanup.
Use BeforeAll/AfterAll to run before or after all test 
We coudl nest describe to create a test suite for a complicated feature

## Spies 
- a spy can stub any function and tracks calls to it and all arguments
- spies only exists in describe or it block in which it is defined
- spies are removed after each spec

## asych test with clock and done callbacks
#### clock
- must be installed and uninstalled beofere and after using clock. jasmine.clock.install() and jasmine.clock.uninstall()
#### done callback for handling async work
- beforeAll, afterAll, beforeEach, afterEach, and it take an optional single argument (commonly called (done)) that should be called when the async work is complete. a test will not complete until done is called. 
## TDD vs BDD
