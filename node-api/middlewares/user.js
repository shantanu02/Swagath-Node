const mysql = require('mysql');
const Promise = require('bluebird');
const config = require('../config/dbconfig');

Promise.promisifyAll(require("mysql/lib/Connection").prototype);
Promise.promisifyAll(require("mysql/lib/Pool").prototype);

let getusers = async()=>{

    try {
        const conn =  mysql.createConnection(config);
        
        await conn.connectAsync();

        let sql = "SELECT * FROM users";

        const result = await conn.queryAsync(sql);

        await conn.endAsync();

        return result;
        
    } catch (error) {
        console.log(error);
    }
};

let getuser = async(id)=>{

    try {
        const conn =  mysql.createConnection(config);
        
        await conn.connectAsync();

        let sql = "SELECT * FROM users where id = ?";

        const result = await conn.queryAsync(sql,[id]);

        await conn.endAsync();

        return result;
        
    } catch (error) {
        console.log(error);
    }
};



let addUser = async(input)=>{

    try {
        const conn =  mysql.createConnection(config);
        
        await conn.connectAsync();

        let sql = "insert into users values(?,?,?)";

        const result = await conn.queryAsync(sql,[input.id,input.name,input.pass]);

        await conn.endAsync();

        return result;
        
    } catch (error) {
        console.log(error);
    }
};

let updateUser = async(input)=>{

    try {
        const conn =  mysql.createConnection(config);
        
        await conn.connectAsync();

        let sql = "update users set name =? , pass=? where id =?";

        const result = await conn.queryAsync(sql,[input.name,input.pass,input.id]);

        await conn.endAsync();

        return result;
        
    } catch (error) {
        console.log(error);
    }
};

let deleteUser = async(id)=>{

    try {
        const conn =  mysql.createConnection(config);
        
        await conn.connectAsync();

        let sql = "delete from users where id = ?";

        const result = await conn.queryAsync(sql,[id]);

        await conn.endAsync();

        return result;
        
    } catch (error) {
        console.log(error);
    }
};



module.exports = {getusers,getuser,addUser,updateUser,deleteUser} ;