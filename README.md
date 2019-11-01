# Beep Boop

#### JavaScript Arrays & Looping Independent Project for Epicodus; November 1, 2019

#### By Courtney Schild

## Description

This is an application that takes a number from a user and returns a range of numbers from 0 to the user inputted number with the following exceptions:

1. Numbers that contain a 1: all digits are replaced with "Beep!"
2. Numbers that contain a 2: all digits are replaced with "Boop!"
3. Numbers that contain a 3: all digits are replaced with "I'm sorry, Dave. I'm afraid I can't do that."

These exceptions are written from least to most important. The first exception will apply unless the second exception does, and the same with the second and third. For example:

* The number 13 should be replaced with "I'm sorry, Dave. I'm afraid I can't do that."
* The number 21 should be replaced with "Boop!"
* The number 32 should be replaced with "I'm sorry, Dave. I'm afraid I can't do that."

A new result will show every time the user inputs and submits a new number, replacing the previous result.

## Specs

<!-- This is another way to write out specs:
 * Spec:
  * Input:
  * Output:  -->

| Behavior (Our program should handle:) | Example Input (When it receives:) | Example Output (It should return:) |
| ----------- | ----------- | ----------- |
| Numbers that contain a 3: all digits are replaced with "I'm sorry, Dave. I'm afraid I can't do that." | 13 or 32 | I'm sorry, Dave. I'm afraid I can't do that. |
| Numbers that contain a 2, but not a 3: all digits are replaced with "Boop!" | 21 | Boop! |
| Numbers that contain a 1, but not a 2 or a 3: all digits are replaced with "Beep!" | 1 | Beep! |

## Setup/Installation Requirements

This webpage may be viewed on any web browser and edited by following the instructions below to clone or download the repository to your computer.

**Click [here](https://courtschmort.github.io/independent-project-beep-boop/) to open the GitHub Pages website.**

###### From GitHub
1. Click the **Clone or download** dropdown button.
2. Within the dropdown, click the **Download ZIP** button.

###### From the command line interface
1. To change the directory, type `cd Desktop` after the command prompt.
2. To clone the repository to your Desktop, type `git clone https://github.com/courtschmort/independent-project-beep-boop.git` after the command prompt. (This web URL can be located within the **Clone or download** dropdown button in GitHub.)

For more information about cloning repositories available on GitHub, click [here](https://help.github.com/en/articles/which-remote-url-should-i-use).

## Known Bugs

There are no known bugs at this time.

## Support and Contact Details

If you have any questions, please email me at courtneyschild@gmail.com.

Find me on LinkedIn and GitHub:

* [Connect with me](https://www.linkedin.com/in/courtneyschild/) on LinkedIn
* [Follow me](https://github.com/courtschmort) or [watch this repository](https://github.com/courtschmort/independent-project-beep-boop.git) on GitHub

<!-- ## Product Roadmap

In the future, I plan to include the following key features:
* Key feature 1
* Key feature 2
* Key feature 3 -->

## Technologies Used

* HTML
* CSS
* Bootstrap
* JavaScript
* jQuery
* Markdown

## License

This website is licensed under the MIT license.

Copyright &copy; 2019 **Courtney Schild**
