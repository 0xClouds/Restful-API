// app represents the API that we are building.
// its value is the import of the express package
// Express is a function so we must invoke it

// const app = require("express")();

//use express middleware to parse JSON
const express = require("express");
const app = express();

//Create a PORT variable to tell our API which port to ?listen? too
const PORT = 8080;

//Apply middle ware, i believe this will call each time we make a request to an endpoint.
app.use(express.json());

app.get("/tshirt", (req, res) => {
  console.log(req);
  res.status(200).send({
    tshirt: "👕",
    size: "large",
  });
});

app.post("/tshirt/:id", (req, res) => {
  const { id } = req.params;
  const { logo } = req.body;

  if (!logo) {
    res.status(418).send({ message: "We need a logo" });
  }

  res.send({ tshirt: `👕 with your ${logo} and ID of ${id}` });
});

//Call app.listen to start API on a server, pass it the port and any callback function
app.listen(PORT, () =>
  console.log(`Server fired up on http://localhost:${PORT}`)
);
