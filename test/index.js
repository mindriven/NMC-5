_app = {};
_app.tests = require('./tests');


_app._getTests = () =>Object.entries(_app.tests).filter(([key, value]) => typeof value === 'function');

_app.runTests = async () => {
    const runResult = await Promise.all(_app._getTests().map(async ([name, testFunc])=> {
        try {
            await testFunc();
            console.log('\x1b[32m%s\x1b[0m', '✔ '+name);
            return {name}
        }
        catch (e) {
            console.log('\x1b[31m%s\x1b[0m', '✖ ' +name);
            return {name, error: e};
        };
    }));
    
    _app.produceTestReport(runResult);
};

_app.produceTestReport = (result) => {
    const failedTests = result.filter(result => result.error);
    console.log("");
    console.log("--------BEGIN TEST REPORT--------");
    console.log("");
    console.log("Total Tests: ", result.length);
    console.log("Pass: ", result.length - failedTests.length);
    console.log("Fail: ", failedTests.length);
    console.log("");

    if (failedTests.length) {
        console.log(`--------BEGIN ERROR DETAILS--------`);
        console.log("");
        failedTests.forEach((testResult, index) => {
                console.log('\x1b[31m%s\x1b[0m', testResult.name);
                console.log(testResult.error);
                console.log("");
        });
        console.log("");
        console.log("--------END ERROR DETAILS--------");
    }
    console.log("");
    console.log("--------END TEST REPORT--------");
    process.exit(0);

};

_app.runTests();