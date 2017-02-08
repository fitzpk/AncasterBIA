/* * * * * * * * * * * * * * * * * * * * *
 * 
 * GeoJSON features for fitness centres, gyms, and nutrition stores
 * 
 * Kevin Fitzgerald Copyright 2016
 * 
 * * * * * * * * * * * * * * * * * * * * */
var fitness = {
    "type": "FeatureCollection",
    "features": [
    {    
      "type": "Feature",
      "id": "1",
      "properties": {
		"address":"370 Wilson St. E",
		"status": "Franchise",
	    "amenity": "Sport",
	    "phone": "(905)-648-2525",
        "url": "<a href='http://www.shopancastervillage.com/curves/'>Visit Curves of Ancaster</a>",
        "name": "Curves"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
			-79.975867,
            43.227528
        ]
      }
    },
    {    
      "type": "Feature",
      "id": "2",
      "properties": {
		"address":"326 Wilson St. E",
		"status": "Local",
	    "amenity": "Sport",
	    "phone": "(905)-609-3838",
        "url": "<a href='http://www.ancasterstrongandfit.com/'>Visit Strong and Fit Training Facility</a>",
        "name": "Strong and Fit Training"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
			-79.976435,
            43.226143
        ]
      }
    }
  ]
};