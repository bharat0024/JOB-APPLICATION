const mysqlHandler = require("../model/mysqlHandler");
const read = async (pyload, other) => {
  let response = {};
  try {
    let executer = new mysqlHandler();
    let getData = JSON.parse(other.toLowerCase());
    response = await executer.SELECT(getData);
    if (response.error != undefined) throw response.error;
    response = { success: response?.success[0] };
  } catch (error) {
    response = { error: "something wen't wrong" };
  } finally {
    return response;
  }
};
module.exports = read;
