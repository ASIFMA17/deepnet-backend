const mongoose = require('mongoose');

const databaseConnecton = () => {

    mongoose.connect(process.env.MONGO_URI)
    .then((data) => console.log(`Database is connected with ${data.connection.host}`))
    .catch((err) => console.log(err.message))

}

module.exports = databaseConnecton ;