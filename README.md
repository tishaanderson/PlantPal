# PlantPal!

## Table of Contents

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Test Sample](#test-sample)
- [Credits](#credits)
- [License](#license)

## Description

A simple web application tailored for Texas gardening enthusiasts, offering a user-friendly platform to streamline garden planning, organization, and plant care. 

With a few clicks, users can explore detailed information about specific plants, including care requirements and ideal watering schedules (planting and harvesting schedules coming soon!). 

PlantPal aims to empower users to effectively manage their garden by offering features like personalized plant tracking and timely reminders for watering/harvesting. Our platform is designed to be your go-to digital companion on your gardening journey, making plant care an enjoyable and rewarding experience.

``````
AS a plant enthusiast living in Texas
I WANT a comprehensive online platform
SO THAT I can easily identify, learn about, and care for various plants
``````
## Technologies
1. [Visual Studio Code](https://code.visualstudio.com/)
2. [Node.js](https://nodejs.org/en/about/)
3. [Express.js](https://www.npmjs.com/package/express)
4. [MySQL2](https://www.npmjs.com/package/mysql2)
5. [Sequelize](https://www.npmjs.com/package/sequelize)
6. [Insomnia](https://www.npmjs.com/package/insomnia)
7. [Nodemon](https://www.npmjs.com/package/nodemon)
8. [Bcrypt](https://www.npmjs.com/package/bcrypt)
## Installation
Start by cloning this repo on your local machine:
``````
$ git clone https://github.com/tishaanderson/PlantPal.git
$ cd PlantPal
``````
To install and set up the application, open the terminal in the db folder and run:
``````
$ mysql -uroot -p
type in your password
$ source schema.sql
$ exit
$ cd ..
$ npm i
$ node seeds/index.js
$ npm start
``````
You will need an .env file to connect to your database in order to connect to your MySQL database. Here's an example:
file: .env
```
DB_NAME='PlantPal_db'
DB_PASSWORD='[enter your mysql password here]'
DB_USER='root'
```
## Usage
- Plant identification and information lookup
- Personalized plant tracking
- Timely reminders for watering and harvesting
- Add new plants to your garden

### Credits
Tisha Anderson, Allex Ortiz, Shan Nowak, Preston Whitlock,
Dennis Itua, Dustin Burns, Tyler Calvert

[Colorlib](https://colorlib.com/wp/free-bootstrap-registration-forms/)

### License

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Questions
If you have any addition questions feel free to contact us at either our githubs or email addresses.
- [Allex's GitHub](https://github.com/allexortiz)
- [Allex's Email](allex.ortiz@outlook.com)
- [Tisha's Github](https://github.com/tishaanderson)
- [Tisha's Email](anderson.tisha23@gmail.com)
- [Preston's Github](https://github.com/Pwhitlock131)
- [Preston's Email](Pwhitlock131@gmail.com)
- [Shan's Github](https://github.com/scnowak)
- [Shan's Email](shan.nowak93@gmail.com)