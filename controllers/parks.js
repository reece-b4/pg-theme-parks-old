const {
  selectParks,
  selectParkById,
  insertPark,
  deleteParkById,
  updateParkById
} = require("../models/parks.js");
const express = require("express");

exports.getParks = (req, res) => {
  selectParks().then((parks) => {
    res.status(200).send({ parks });
  });
};

exports.getParkById = (req, res) => {
  const { park_id } = req.params;
  selectParkById(park_id).then((park) => {
    res.status(200).send({ park });
  });
};

exports.postPark = (req, res) => {
  insertPark(req.body).then((park) => res.status(201).send({ park }));
};

exports.removeParkById = (req, res) => {
  const { park_id } = req.params;
  deleteParkById(park_id).then((park) => {
    res.status(204).send(park);
  });
};

exports.patchParkById = (req, res) => {
  const { park_id } = req.params;
  const { park_name, annual_attendance } = req.body;
  //console.log(park_name, annual_attendance);
  updateParkById(park_id, park_name, annual_attendance).then((park) => {
    res.status(200)
    .send(park);
  });
};
