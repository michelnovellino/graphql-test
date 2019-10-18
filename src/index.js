import express from "express";
import graphqlHTTP from "express-graphql";
import schema from "./models/test.graphql";
import { initConnection } from "./db/conn";
const app = express();
initConnection();
const model = schema;

app.use(
  "/graphql",
  graphqlHTTP({
    graphiql: true,
    schema: model,
    context: {
      messageId: "test"
    }
  })
);
app.use("/", function(req, res) {
  res.json({
    message: "hello world"
  });
});
app.listen(3001, () => console.log("server22 runing"));
