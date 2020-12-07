# Toy Robot Project

This project is implemented using React and Redux. It has UI consist of 5*5 grid(table), a robot and following buttons:\
    - PLACE: This is button when clicked allows user to place the robot on the table. It accepts X, Y coordinate and one direction value(NORTH, SOUTH, EAST, WEST)\
    - MOVE: This button moves the robot one block ahead in the table/grid in the same direction which robot currently faces\
    - MOVE LEFT: This button changes the direction of the robot by 90 degree anticlockwise eg: if robot is currently facing NORTH then this button change direction to west\
    - MOVE RIGHT: This button changes the direction of the robot by 90 degree clockwise eg: if robot is currently facing NORTH then this button change direction to east\
    - REPORT: This button provides the information about the current position of the robot on the table

## Steps to run this project

In the project directory, run:

### `npm install`

This will install all the project related dependencies

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.


### `npm test`

Launches the test runner in the interactive watch mode.