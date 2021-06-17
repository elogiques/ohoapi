"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const pg_1 = require("pg");
const config = {
    user: "ohoengine",
    database: "loyalty",
    password: "ohoengine",
    port: 5432,
    max: 10,
    idleTimeoutMillis: 30000,
};
const pool = new pg_1.Pool(config);
pool.on("connect", () => {
    console.log("connected to the Database");
});
/*
module.exports = {
  query: (text, params) => pool.query(text, params),
};
*/
const query = (text, params) => __awaiter(void 0, void 0, void 0, function* () {
    //var a =  pool.query("SELECT * FROM T_MERCHANTS");
    return yield pool.query(text, params);
});
module.exports = {
    query,
};
