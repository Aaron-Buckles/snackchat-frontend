# snackchat

## Installation

- Clone this repository
- Run `npm i` to install all dependencies
  - Must do this for both frontend and backend

## Running Frontend

- To run navigate to the `frontend` folder and type `npm start`

## Running Backend

- For database access set the following environment variables:
  - `DB_USERNAME`
  - `DB_PASSWORD`
  - For windows master race:
    - In command prompt, run the following command in the /backend directory:
      - set DB_USERNAME=`<yourusername>`
      - set DB_PASSWORD=`<yourpassword>`
  
- For debug logs set the DEBUG environment variable:
  - `DEBUG=snackchat:*`
- To run navigate to the `backend` folder and type `npm run dev` / `nodemon index.js`
- Go to `http://localhost:3000/`
  - If you have the `PORT` environment variable set to something else, then navigate to localhost for that port

## Documentation

- Go to `http://localhost:3000/docs`
