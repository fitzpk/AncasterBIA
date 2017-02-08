/* * * * * * * * * * * * * * * * * * * * *
 * 
 * GeoJSON features for farms, farmers markets, and grocery stores
 * 
 * Kevin Fitzgerald Copyright 2016
 * 
 * * * * * * * * * * * * * * * * * * * * */
var grocery = {
    "type": "FeatureCollection",
    "features": [
    {
      "type": "Feature",
      "id": "1",
      "properties": {
		"address":"37 Halson St.",
		"status": "Local",
	    "amenity": "Farm",
	    "phone": "(289)-239-7828",
        "url": "<a href='http://shopancasterfarmersmarket.com/'>Visit The Farmers Market</a>",
        "name": "Ancaster Farmers Market"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
			-79.977390,
            43.223174
        ]
      }
    }
  ]
};