const main = (knex) => {
  return new Promise(async (resolve, reject) => {
    try {
      await knex.schema.createTable("requests", function (table) {
        table.increments();
        table.string("url");
        table.string("method");
        table.json("query");
        table.json("body");
        table.json("headers");
        table.json("cookies");
        table.timestamps(true, true);
      });
    } catch (error) {
      /// need to check the error is 'already exists' which is fine
    }
    return resolve(knex);
  });
};

const getdb = () => {
  if (!global.knex) {
    global.knex = require("knex")({
      client: "sqlite3", // or 'better-sqlite3'
      connection: {
        filename: process.env.WRESTLY_DB || "test.sqlite",
      },
      useNullAsDefault: true,
    });

    return main(global.knex);
  } else {
    return global.knex;
  }
};

export default getdb;
