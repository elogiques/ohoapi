import { Pool } from "pg";

const config = {
  user: "ohoengine", //this is the db user credential
  database: "loyalty",
  password: "ohoengine",
  port: 5432,
  max: 10,
  idleTimeoutMillis: 30000,
};

const pool = new Pool(config);

pool.on("connect", () => {
  console.log("connected to the Database");
});
/*
module.exports = {
  query: (text, params) => pool.query(text, params),
};
*/

const query = async (text, params) => {
  //var a =  pool.query("SELECT * FROM T_MERCHANTS");

  return await pool.query(text, params);
};

module.exports = {
  query,
};
