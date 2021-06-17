const application = require("./app");
const port = 3000;
let server;
server = application.listen(port, () => {
    console.log(`server is listening on ${port}`);
});
