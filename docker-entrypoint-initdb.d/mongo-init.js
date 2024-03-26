print('Start #################################################################');

db = db.getSiblingDB('physics');
db.createUser(
    {
        user: 'physics',
        pwd: 'physics123456789',
        roles: [{ role: 'readWrite', db: 'physics' }],
    },
);
db.createCollection('users');


print('END #################################################################');