const {Sequelize} = require("sequelize");

const createDB = new Sequelize("test", "user", "pass", {
    dialect: "sqlite",
    host: "./config/db.sqlite",
});

const connectDB = () => {
    createDB.sync().then(() => {
        console.log("connected to db");
    }).catch((e)=> {
        console.log("db connection failed", e);
    })
}

module.exports = {createDB, connectDB};