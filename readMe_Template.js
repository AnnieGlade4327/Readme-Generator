// Creates a function to generate template for README
function readMe_Template(data) {
    return `
    <h1 align='center'>${data.projectTitle}</h1>
    
    ## Description 
      ${data.description}
    
    ## Table of Contents
    - [Description](#description)
    - [Installation](#installation)
    - [Usage](#usage)
    - [Credits](#credits)
    - [License](#license)
    - [Badges](#badges)
    - [Features](#features)
    - [Contributing](#contributing)
    ## Installation
      ${data.installation}
    ## Usage
      ${data.usage}
    
    ## Credits
      ${data.credits}  
    ## License
      This application is covered by ${data.license} license.
    ## Features
      ${data.features}
    ## Contributing
      ${data.contributing}
  `;
  }
  
  module.exports = readMe_Template;