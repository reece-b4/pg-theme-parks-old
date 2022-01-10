const db = require('../db/index.js');

exports.selectParks = () => {
    return db.query('SELECT * FROM parks;').then((result) => result.rows)
};

exports.selectParkById = (parkId) => {
    return db.query(`SELECT * FROM parks WHERE park_id = $1;`, [parkId])
    .then((promiseResult) => promiseResult.rows[0]);
};

exports.insertPark = (newParkBody) => {
    console.log(newParkBody);
const {park_name, year_opened, annual_attendance} = newParkBody
   return db.query('INSERT INTO parks (park_name, year_opened, annual_attendance) VALUES ($1, $2, $3) RETURNING *;', [park_name, year_opened, annual_attendance]).then(({rows}) => rows[0]);
};

exports.deleteParkById = (park_Id) => {
    return db.query('DELETE FROM parks WHERE park_id = $1;', [park_Id])
    .then((promiseResult) => promiseResult.rows[0]);
};

exports.updateParkById = (park_Id, park_name, annual_attendance) => {
    return db.query('UPDATE parks SET park_name = $1, annual_attendance = $2 WHERE park_id = $3 RETURNING *;', [park_name, annual_attendance, park_Id])
    .then(({rows}) => {
        console.log(rows[0])
        return rows[0]
    })
};