/* * * * * * * * * * * * * * * * * * * * *
 * 
 * GeoJSON features for pharmacies
 * 
 * Kevin Fitzgerald Copyright 2016
 * 
 * * * * * * * * * * * * * * * * * * * * */
var pharmacy = {
    "type": "FeatureCollection",
    "features": [
    {
      "type": "Feature",
      "id": "1",
      "properties": {
		"address":"323 Wilson St. E",
		"status": "Franchise",
	    "amenity": "Pharm",
	    "phone": "(905)-648-6343",
        "url": "<a href='http://www.pharmachoice.com/'>Learn more about Rastin's Pharmacy</a>",
        "name": "Rastin's Pharmacy (Pharmachoice)"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
			-79.976940,
            43.226264
        ]
      }
    },
    {
      "type": "Feature",
      "id": "2",
      "properties": {
		"address":"370 Wilson St. E",
		"status": "Franchise",
	    "amenity": "Pharm",
	    "phone": "(905)-648-4479",
        "url": "<a href='http://www.rexall.ca/'>Visit Rexall Pharmacy</a>",
        "name": "Rexall Pharmacy"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
			-79.975252,
            43.227389
        ]
      }
    }
  ]
};