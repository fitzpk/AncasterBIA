/* * * * * * * * * * * * * * * * * * * * *
 * 
 * GeoJSON features for automtive and gas services
 * 
 * Kevin Fitzgerald Copyright 2016
 * 
 * * * * * * * * * * * * * * * * * * * * */
var autogas = {
    "type": "FeatureCollection",
    "features": [
    {
      "type": "Feature",
      "id": "1",
      "properties": {
		"address":"407 Wilson St. E",
	    "status": "Local",
	    "amenity": "Carrepair",
	    "phone": "(905)-648-4113",
        "url": "<a href='http://www.glendalemotors.ca/'>Visit Glendale Motors</a>",
        "name": "Glendale Motors"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
        	-79.975550,
            43.229024
        ]
      }
    },
  ]
};