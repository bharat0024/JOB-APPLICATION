const mysqlHandler = require("../model/mysqlHandler");
const bodyModifuer = require("./helper/bodyModifier");
const requestValidator = require("./requestValidator");

const update = async (payload) => {
  let response = {};
  try {
    let isValid = await requestValidator.insert(payload);
    if (isValid.valid) {
      // let { table, fields, values } = bodyModifuer(payload);
      let executer = new mysqlHandler();
      payload[Object.keys(payload)[0]].detail.forEach((element) => {
        element["bid"] = payload[Object.keys(payload)[0]].bid;
      });
      response = await executer.UPDATE(
        Object.keys(payload)[0].toLocaleLowerCase(),
        payload[Object.keys(payload)[0]].detail
      );
      if (response.error != undefined) throw response.error;
      response = { success: response?.success };
    } else throw "invalid pyload...!!";
  } catch (error) {
    response = { error: "something wen't wrong" };
  } finally {
    return response;
  }
};
module.exports = update;
