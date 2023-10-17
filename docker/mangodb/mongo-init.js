db = db.getSiblingDB('weather');  // switch to 'weather' database

// Create a new user for the 'weather' database
db.createUser({
    user: 'user',
    pwd: 'weatherpassword',
    roles: [
        {
            role: 'readWrite',
            db: 'weather',
        },
    ],
});