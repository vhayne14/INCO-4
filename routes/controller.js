const db = require('../database')


const getSchedules = (req, res) => {
    db.any('SELECT * FROM schedules', (error, results) => {
        if(error) throw error;
        res.render('./views/pages/home');
    });
}

module.exports = {
    getSchedules,
};