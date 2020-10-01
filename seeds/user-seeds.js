const { User } = require('../models');

const userData = [
    {
        username: 'QueenBey',
        password: '123456AB'
    },
    {
        username: 'Laura',
        password: 'Trees123'
    },
    {
        username: 'MrCheese',
        password: 'Gouda1454'
    },
    {
        username: 'ACDC',
        password: 'Trips2123'
    },
    {
        username: 'Karma',
        password: 'WatchMe'
    },
    {
        username: 'Learning212',
        password: 'Shoot1234'
    },
    {
        username: 'Batman',
        password: 'Robin'
    },
    {
        username: 'Robin',
        password: 'Batman'
    },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;