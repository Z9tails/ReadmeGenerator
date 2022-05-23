// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenselink(license) {
  if (license === "Apache2.0") {

    return `[![License](https://img.shields.io/badge/License-Apache%202.0-orange.svg)](https://opensource.org/licenses/Apache-2.0)`

  } else if (license === "MIT") {

    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`

  } else if (license === "Mozilla") {

    return `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-red.svg)](https://opensource.org/licenses/MPL-2.0)`

  } else if (license === "Unlicense") {

    return `[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-brightgreen.svg)](http://unlicense.org/)`

  } else if (license === "None") {
    return `[Operating Rogue]`
  }

}


function generateMarkdown(data) {
  let licenseLink = renderLicenselink(data.license)
//Table of Contents
  return `# ${data.title}

  ## Table of Contents
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contribution Guidelines](#contribution)
  - [Testing](#testing)
  - [Questions](#questions)
  - [License(s)](#licence)
  - [Contact](#contact)

## Description
${data.description}

## Installation
${data.installation}

## Usage
${data.usage}
## Contribution Guidelines
${data.contribution}
## Testing
${data.testing}

## Questions
${data.questions}

## License(s) 
${data.license}

## Contact 

* Github: [GitHub Profile](https://github.com/${data.github})
* LinkedIn: ${data.linkedIn}
* e-mail: ${data.email}
 
`
}

module.exports = generateMarkdown;