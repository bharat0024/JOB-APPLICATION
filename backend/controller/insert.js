const mysqlHandler = require("../model/mysqlHandler");
const bodyModifuer = require("./helper/bodyModifier");
const requestValidator = require("./requestValidator");

const insert = async (payload) => {
  let response = {};
  try {
    let isValid = await requestValidator.insert(payload);
    if (isValid.valid) {
      let{table,fields,values}= bodyModifuer(payload)
      let executer = new mysqlHandler();
      response = await executer.INSERT(
        table,
        fields,
        values
      );
      if(response.error!=undefined)
        throw response.error
      response = { success: response?.success?.insertId };
    }
    else
      throw "invalid pyload...!!"
  } catch (error) {
    response={error:"something wen't wrong"}
  } finally {
    return response;
  }
};
module.exports = insert;
