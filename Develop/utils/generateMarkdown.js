// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenselink(license) {
  if (license === "Apache 2.0") {

    return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;

  } else if (license === "MIT") {

    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`

  } else if (license === "Mozilla") {

    return `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-red.svg)](https://opensource.org/licenses/MPL-2.0)`

  } else if (license === "Unlicense") {

    return `[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-brightgreen.svg)](http://unlicense.org/)`
  } else if (license === "None") {
    return `Going Free`
  }


}



https: function generateMarkdown(data) {
//Table of Contents
  return `# ${data.title}

  ## Table of Contents


  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contribution](#contribution)
  - [Testing](#testing)
  - [Questions](#questions)
  - [License](#license)
  - [Contact](#contact)


## Description
${data.description}

## Installation
${data.installation}

## Usage
${data.usage}
## Contribution
${data.contribution}
## Testing
${data.testing}

## Questions
${data.questions}

## License 
${renderLicenselink(data.license)}

## Contact 

* Github: [GitHub Profile](https://github.com/${data.github})
* LinkedIn: [linkedIn](${data.linkedIn})
* e-mail: [email](mailto:${data.email})
 
`;
}

module.exports = generateMarkdown;