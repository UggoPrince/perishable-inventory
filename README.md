# perishable-inventory
Inventory for perishable items

[![Build Status](https://app.travis-ci.com/UggoPrince/perishable-inventory.svg?branch=ft-get-item)](https://app.travis-ci.com/UggoPrince/perishable-inventory)  [![Coverage Status](https://coveralls.io/repos/github/UggoPrince/perishable-inventory/badge.svg)](https://coveralls.io/github/UggoPrince/perishable-inventory)

# Key Application Features

- User can add item.
- User can sell item.
- User can get item.

### API DOCUMENTATION

https://perishable-inventori.herokuapp.com/api/v1/docs/


### Endpoints
All endpoints start with `/api/v1/`

`POST /api/v1/item/{item}/add`
`POST /api/v1/item/{item}/sell`
`GET /api/v1/item/{item}/quantity`

### Development

The application is developed with NodeJs using ExpressJs for routing and PostgreSQL database.

### Installation
Clone the project repository

- Run ```git clone https://github.com/UggoPrince/perishable-inventory.git```

more info: (https://help.github.com/articles/cloning-a-repository/)

- Run ```npm install``` to install the dependencies in the package.json file.

- Run ```npm run dev``` to start the server locally

### Technologies Used

- JavaScript (ES6) (http://es6-features.org/)
- Node.js (https://nodejs.org/en/)
- Express (https://www.npmjs.com/package/express-api)
- Postgres (https://www.postgresql.org/)

### Author
Ugo P. Anayo