db = db.getSiblingDB('test');
db.toDelete.insertOne({ 'delete': 'me!!!' });

db.createUser(
    {
        user: 'test',
        pwd: 'test',
        roles: [
            {
                role: 'readWrite',
                db: 'test'
            }
        ]
    }
);
