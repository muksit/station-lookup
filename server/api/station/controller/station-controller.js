"use strict";

const http = require('http');
const StationDAO = require('../dao/station-dao');

module.exports = class StationController {
  static getAll(req, res) {
   StationDAO
      .getAll()
      .then(locations => res.status(200).json(locations))
      .catch(error => res.status(400).json(error));
  }

  static createLocation(req, res) {
    let _location = req.body;

    StationDAO
      .createLocation(_location)
      .then(location => res.status(201).json(location))
      .catch(error => res.status(400).json(error));
  }

  static deleteLocation(req, res) {
    let _id = req.params.id;

    StationDAO
      .deleteLocation(_id)
      .then(() => res.status(200).end())
      .catch(error => res.status(400).json(error));
  }

  static getNextPass(req, res) {

    StationDAO
      .getInfo(req)
      .then(times => res.status(200).json(times))
      .catch(error => res.status(400).json(error));
  }
};
