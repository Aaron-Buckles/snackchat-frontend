# snackchat-frontend

## Installation

- Clone this repository
- Run `npm i` to install all dependencies
  - Must do this for both frontend and backend

## Running Frontend

- To run navigate to the `frontend` folder and type `npm start`

## Documentation

- To access a page that requires authentication, use the Authorization key
  - e.g. With axios:

```javascript
let config = {
  headers: {
    Authorization: "mytoken"
  }
  axios.post(URL, data, config)
}
```
