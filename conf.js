const HtmlReporter = require('protractor-jasmine2-screenshot-reporter');
const JasmineConsoleReporter = require('jasmine-console-reporter');

const reporterJasmine = new JasmineConsoleReporter({
	colors: 2, // (0|false)|(1|true)|2
	cleanStack: 2, // (0|false)|(1|true)|2|3
	verbosity: 4, // (0|false)|1|2|(3|true)|4
	listStyle: 'flat', // "flat"|"indent"
	activity: false,
});

const reporter = new HtmlReporter({
	dest: './reports',
	filename: 'html-report.html',
	reportTitle: 'Automation Example',
});

exports.config = {
    framework: 'jasmine',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['spec.js'],
    beforeLaunch: function() {
        return new Promise(function(resolve) {
            reporter.beforeLaunch(resolve);
        });
    },
    onPrepare: async function() {
        jasmine.getEnv().addReporter(reporter);
        jasmine.getEnv().addReporter(reporterJasmine);

        browser.ignoreSynchronization = true;

    },
  }