let rules = {
  read: "GET",
  insert: "POST",
  update: "POST",
  delete: "DELETE",
};
const Router = (app) => {
  app.all("/:operation/:id?", async (req, res) => {
    try {
      if (
        rules[req.params.operation] == undefined ||
        req.method != rules[req.params.operation]
      )
        throw "invalid request...!!";
      let operation = require(`../controller/${req.params.operation}`);
      res.status(200).json(await operation(req.body, req.params.id));
    } catch (error) {
      res.status(500).json({ error: error });
    }
  });
  app.all("*", (req, res) => {
    res.status(404).json({ error: "invalid..!!" });
  });
};
module.exports = Router;
