const Sequelize = require('sequelize');

const sequelize = new Sequelize('paws', 'postgres', 'Juli-1701', {
    host: 'localhost',
    dialect: 'postgres'
});

sequelize.authenticate().then(
    function() {
        console.log('Connected to paws postgres database');
    },
    function(err) {
        console.log(err);
    }
);

module.exports = sequelize;
