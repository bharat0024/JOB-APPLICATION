let mysql = require("mysql");
require("dotenv").config();
class mysqlHandler {
  constructor() {
    this.host = process.env.HOST;
    this.user = process.env.SQL_USER;
    this.password = process.env.PASSWORD;
    this.database = process.env.DATABASE;
    this.connect();
  }
  connect() {
    this.con = mysql.createConnection({
      host: this.host,
      user: this.user,
      password: this.password,
      database: this.database,
    });
    this.con.connect();
  }
  queryExecuter = async (query, value) => {
    let response;
    try {
      await new Promise((resolve, reject) => {
        this.con.query(query, value, (err, result, fields) => {
          if (err) reject(err);
          else resolve({ result, fields });
        });
      }).then(({ result, fields }) => (response = { success: result }));
    } catch (error) {
      response = { error: error.message };
    }
    return response;
  };
  SELECT = async ({ table, id }) => {
    try {
      let query = `SELECT * FROM  ${table} WHERE bid=?`;
      let data = await this.queryExecuter(query, id);
      return data;
    } catch (error) {
      return { error: error };
    }
  };
  INSERT = async (table, fields, values) => {
    try {
      let query = `INSERT INTO ${table} (${fields}) VALUES ?`;
      let data = await this.queryExecuter(query, [values]);
      return data;
    } catch (error) {
      return { error: error };
    }
  };
  UPDATE = async (table, payload) => {
    let response = { success: "field updated.." };
    // console.log(table, payload);
    let insertRequired = [[], []];
    payload.forEach(async (value) => {
      try {
        let bid = value.bid;
        let id = value?.id;
        delete value.bid;
        if (id) delete value.id;
        console.log(table, id);
        if (table != "basicinfo" && id == undefined) {
          insertRequired[0] = Object.keys(value);
          insertRequired[1].push(Object.values(value));
          return;
        }
        value = id == undefined ? [value, { bid: bid }] : [value, { id: id }];
        let query = `UPDATE ${table} SET ? WHERE ?`;
        let data = await this.queryExecuter(query, value);
      } catch (error) {
        console.log(error);
        response = error;
      }
    });
    if (insertRequired[1].length) {
      this.INSERT(table, insertRequired[0].toString(), insertRequired[1]);
    }
    return response;
  };
}
module.exports = mysqlHandler;
