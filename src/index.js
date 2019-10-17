import express from "express";
import graphqlHTTP from "express-graphql";
import schema from "./models/test.graphql";
const app = express();

const model = schema;

app.use(
  "/graphql",
  graphqlHTTP({
    graphiql: true,
    schema: model
  })
);
app.use("/", function(req, res) {
  res.json({
    message: "hello world"
  });
});
app.listen(3001, () => console.log("server22 runing"));
