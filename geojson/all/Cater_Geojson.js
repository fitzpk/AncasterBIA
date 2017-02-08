/* * * * * * * * * * * * * * * * * * * * *
 * 
 * GeoJSON features for bakeries and catering services
 * 
 * Kevin Fitzgerald Copyright 2016
 * 
 * * * * * * * * * * * * * * * * * * * * */

var cater = {
    "type": "FeatureCollection",
    "features": [
    {
      "type": "Feature",
      "id": "1",
      "properties": {
		"address":"346 Wilson St. E",
		"status": "Local",
	    "amenity": "Bake",
	    "phone": "(289)-239-7475",
        "url": "<a href='http://canichebakery.com/'>Visit Caniche Bakery</a>",
        "name": "Caniche French Bakery"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
			-79.976095,
            43.226821
        ]
      }
    }, 
    {
      "type": "Feature",
      "id": "2",
      "properties": {
		"address":"240 Wilson St. E",
		"status": "Local",
	    "amenity": "Bake",
	    "phone": "(905)-648-8500",
        "url": "<a href='http://www.sweetnessbakery.ca/'>Visit The Sweetness Bakery</a>",
        "name": "Sweetness Bakery"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
			-79.978350,
            43.223313
        ]
      }
    } 
  ]
};