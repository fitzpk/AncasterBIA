/* * * * * * * * * * * * * * * * * * * * *
 * 
 * GeoJSON features for real estate services
 * 
 * Kevin Fitzgerald Copyright 2016
 * 
 * * * * * * * * * * * * * * * * * * * * */
var estate = {
    "type": "FeatureCollection",
    "features": [
    {
      "type": "Feature",
      "id": "1",
      "properties": {
		"address":"280 Wilson St. E",
		"status": "Local",
	    "amenity": "Estate",
	    "phone": "(905)-648-0088",
        "url": "<a href='http://www.gwalker.ca/'>Visit Geoff</a>",
        "name": "G. Walker Real Estate Inc."
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
			-79.977274,
            43.224803
        ]
      }
    },
    {
      "type": "Feature",
      "id": "2",
      "properties": {
		"address":"253 Wilson St. E",
		"status": "Local",
	    "amenity": "Estate",
	    "phone": "(905)-648-6800",
        "url": "<a href='http://www.judymarsales.com/'>Visit Judy</a>",
        "name": "Judy Marsales Real Estate Ltd."
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
			-79.978123,
            43.224129
        ]
      }
    },
    {
      "type": "Feature",
      "id": "3",
      "properties": {
		"address":"370 Wilson St. E",
		"status": "Franchise",
	    "amenity": "Estate",
	    "phone": "(905)-304-3303",
        "url": "<a href='http://www.remax.ca/'>Visit ReMax</a>",
        "name": "ReMax Realty"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
			-79.975110,
            43.227181
        ]
      }
    },
    {
      "type": "Feature",
      "id": "4",
      "properties": {
		"address":"311 Wilson St. E",
	    "status": "Local",
	    "amenity": "Estate",
	    "phone": "(905)-648-4408",
        "url": "<a href='http://www.thornberryoutlaw.com/'>Visit Thornberry Outlaw</a>",
        "name": "Thornberry Outlaw & Associates"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
        	-79.977223,
            43.226017
        ]
      }
    }
  ]
};