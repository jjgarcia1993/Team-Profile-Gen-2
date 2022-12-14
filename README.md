# Team-Profile-Gen-2

## Description 
This application was created to generate a team profile based on user input using the Inquirer module from Node.js and displaying the information on a newly created html page with a style sheet. This project demonstrates use of OOP and TDD using Jest. 

## Example of HTML

![teamprofilegne](https://user-images.githubusercontent.com/102456485/194785520-1040e152-855d-4d67-977d-61c6ee1a80e3.png)

## Walkthrough Video Link

https://www.youtube.com/watch?v=93ldRUz8t8o


## User Story

```
AS A manager
I WANT to generate a webpage that displays my team's basic info
SO THAT I have quick access to their emails and GitHub profiles
```

## Acceptance Criteria

```
GIVEN a command-line application that accepts user input
WHEN I am prompted for my team members and their information
THEN an HTML file is generated that displays a nicely formatted team roster based on user input
WHEN I click on an email address in the HTML
THEN my default email program opens and populates the TO field of the email with the address
WHEN I click on the GitHub username
THEN that GitHub profile opens in a new tab
WHEN I start the application
THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
WHEN I enter the team manager’s name, employee ID, email address, and office number
THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
WHEN I select the engineer option
THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
WHEN I select the intern option
THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
WHEN I decide to finish building my team
THEN I exit the application, and the HTML is generated
```
 
## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [Contributing](#contributing)
* [Tests](#tests)

## Installation 
The user should clone the repository from GitHub and download Node. This application requires a file system and inquirer module. If testing is required, use Jest. 

## Usage 
Use inquirer from your command line to answer questions about your project.


## Contribution

Made with ❤️ by Jonathan Garcia 

## Tests

Run `npm test` to run Jest for tests on constructors.