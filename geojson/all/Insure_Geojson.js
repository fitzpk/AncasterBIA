/* * * * * * * * * * * * * * * * * * * * *
 * 
 * GeoJSON features for insurance services
 * 
 * Kevin Fitzgerald Copyright 2016
 * 
 * * * * * * * * * * * * * * * * * * * * */
var insure = {
    "type": "FeatureCollection",
    "features": [
    {
      "type": "Feature",
      "id": "1",
      "properties": {
		"address":"293 Wilson St. E",
		"status": "Franchise",
	    "amenity": "Insure",
	    "phone": "(905)-648-0818",
        "url": "<a href='http://www.brokerlink.ca/'>Visit Broker Link</a>",
        "name": "Broker Link Insurance"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
			-79.977360,
            43.225368
        ]
      }
    },
    {
      "type": "Feature",
      "id": "2",
      "properties": {
		"address":"370 Wilson St. E",
		"status": "Franchise",
	    "amenity": "Insure",
	    "phone": "(905)-648-7671",
        "url": "<a href='https://www.cooperators.ca/'>Visit the Co-operators</a>",
        "name": "Co-operators Insurance"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
			-79.975496,
            43.227434
        ]
      }
    }
  ]
};