const application = require("./app");

const port = process.env.PORT || 3000;

let server;
server = application.listen(port, () => {
  console.log(`server is listening on ${port}`);
});
