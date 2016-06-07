"use strict";

const StationController = require('../controller/station-controller');

module.exports = class stationRoutes {
    static init(router) {
	    router
	        .route('/api/station/locations')
	        .get(StationController.getAll)
	        .post(StationController.createLocation);

	    router
	        .route('/api/station/locations/:id')
	        .delete(StationController.deleteLocation);

	    router
	    	.route('/api/station/nextPass/:lat/:long')
	    	.get(StationController.getNextPass);
	}
    
}
