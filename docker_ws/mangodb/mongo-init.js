db = db.getSiblingDB('ws-info');  // Sets the new database context
db.createUser({
    user: 'user',
    pwd: 'password',
    roles: [{ role: 'readWrite', db: 'ws-info' }],
});