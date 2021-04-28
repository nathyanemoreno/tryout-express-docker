// This file contains all express app configuration
const express = require("express");
const database = require("./database");

require("./database");

// App
const app = express();

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.get('/', (req, res) => res.status(200).send({ message: 'OK.' }));

app.get('/technlogies', async (req, res) => {
  try {
    const technlogies = await database('technologies');
    return res.status(200).send({ technlogies });
  } catch ({ message }) {
    return res.status(500).send({ message });
  }
});

app.post('/technlogies', async (req, res) => {
  try {
    const [technology] = await database('technologies').insert({
      name: req.body?.name,
      created_at: new Date(),
      updated_at: new Date()
    });

    return res.status(200).send({ technology });
  } catch ({ message }) {
    return res.status(500).send({ message });
  }
});

module.exports = app;