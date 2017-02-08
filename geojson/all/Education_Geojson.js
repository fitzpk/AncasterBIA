/* * * * * * * * * * * * * * * * * * * * *
 * 
 * GeoJSON features for schools and educational services
 * 
 * Kevin Fitzgerald Copyright 2016
 * 
 * * * * * * * * * * * * * * * * * * * * */

var education = {
    "type": "FeatureCollection",
    "features": [ 
    {
      "type": "Feature",
      "id": "1",
      "properties": {
		"address":"240 Wilson St. E",
		"status": "Franchise",
	    "amenity": "School",
	    "phone": "(905)-648-5400",
        "url": "<a href='http://www.kumon.ca/'>Visit Kumon</a>",
        "name": "Kumon Math & Reading Centre"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
			-79.978173,
            43.223443
        ]
      }
    }                            
  ]
};   
