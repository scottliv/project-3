![Alt text](/public/images/screenshot.png?raw=true "Pong Screenshot")

# Pong Game

A basic pong game using SVGs built in javascript.

## Setup

**Install dependencies:**

`> npm i`

**Run locally with Webpack Dev Server:**

`> npm start`

**Build for production:**

`> npm run build`

## Keys

**Player 1:**
* a: up
* z: down
* s: serve

**Player 2:**
* ▲ : up
* ▼: down
* &larr;: serve

* g: new game
* spacebar: pause

## Technologies
ES6, Webpack, Babel, Git, SVG

## Learning

In this project I learned how to build an interactive game using object oriented programming principles. I made use of ES6 syntax, and exported and import classes from partial files. I learned how to write SVGs and use javascript to dynamically render them to a page. This uses Webpack with Babel to generate a build file in es5 syntax. Beyond the basic game implementation done in class I added a smoother paddle animation by calling the movement function of the paddles within the rendering function. I also added a feature where players can serve the ball on a button press. This involved stopping the ball movement after a goal and having it follow the paddle until served and finally on serve removing the key binding so pressing the serve key does not effect ball movement during gameplay.

## Author

Scott Livingstone
