"use strict";

const http = require('http');
const mongoose = require('mongoose');
const Promise = require('bluebird');
const stationSchema = require('../model/station-model');
const _ = require('lodash');

stationSchema.statics.getAll = () => {
  return new Promise((resolve, reject) => {
    let _query = {};

    Location
      .find(_query)
      .exec((err, locations) => {
          err ? reject(err)
              : resolve(locations);
      });
    });
}

stationSchema.statics.createLocation = (location) => {
  return new Promise((resolve, reject) => {
    if (!_.isObject(location))
        return reject(new TypeError('Location is not a valid object.'));

    let _location = new Location(location);

    _location.save((err, saved) => {
      err ? reject(err)
          : resolve(saved);
    });
  });
}

stationSchema.statics.deleteLocation = (id) => {
  return new Promise((resolve, reject) => {
    if (!_.isString(id))
        return reject(new TypeError('Id is not a valid string.'));

    Location
      .findByIdAndRemove(id)
      .exec((err, deleted) => {
          err ? reject(err)
              : resolve();
      });
  });
}

stationSchema.statics.getInfo = (req) => {
  var options = {
    host: 'api.open-notify.org',
    path: '/iss-pass.json?lat=' + req.params.lat + '&lon=' + req.params.long + '&alt=20&n=5',
    port: 80
  };

  return new Promise((resolve, reject) =>{
    http.get(options, function(res){
      var times = '';
      res.on('data', function(chunk){
        times += chunk;
      });
      res.on('end', function(){
        resolve(JSON.parse(times));
      });
    });
  });
      
}



const Location  = mongoose.model('Location', stationSchema);

module.exports = Location;
