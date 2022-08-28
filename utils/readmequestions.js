const questions = [
    {
        type: "input",
        name: "projecttitle",
        message: "Please enter Project Title? (Required)",
        validate: titleInput => {
            if (titleInput) {
                return true;
            } else {
                console.log("Project title is required.");
                return false;
            }
        }
    },
    {
        type: "input",
        name: "Description",
        message: "Please provide Project Description. (Required)",
        validate: description => {
            if (description) {
                return true;
            } else {
                console.log("Project description is required.");
                return false;
            }
        }
    },
    {
        type: "input",
        name: "installationInstructions",
        message: "Please enter installation instructions",
    },
    {
        type: 'checkbox',
        name: 'licenseType',
        message: 'Please select License Type(s):',
        choices: ['Apache', 'Mozilla', 'MIT', 'GNU', 'Boost', 'ISC'],
        validate: choicesLength => {
            if (choicesLength.length <= 1) {
                return true;
            } else {
                return "Please select atleast one license!";
            }
        }
    },
    {
        type: "input",
        name: "usageData",
        message: "Please enter use case of project",
    },
    {
        type: "input",
        name: "contributions",
        message: "Please enter any guidlines for contributing to this project:",
    },
    {
        type: "input",
        name: "testsData",
        message: "Please Enter Tests for Project:",
    },
    {
        type: "input",
        name: "gitUser",
        message: "Please enter Github Username:",
    },
    {
        type: "input",
        name: "userEmail",
        message: "Please enter your email address?",
    }
]

module.exports = {questions}