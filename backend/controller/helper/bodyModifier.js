const bodyModifuer = (payload) => {
  let table = Object.keys(payload)[0];
  let fields = [...Object.keys(payload[table]["detail"][0])];
  let values = payload[table]["detail"].map((value) => [
    ...Object.values(value),
  ]);
  if (payload[table]["bid"] != undefined) {
    fields.unshift("bid");
    values = values.map((value) => [payload[table]["bid"], ...value]);
  }
  fields = fields.map((key) => key.toLocaleLowerCase()).toString();
  return { table: [table.toLocaleLowerCase()], fields, values };
};
module.exports = bodyModifuer;
