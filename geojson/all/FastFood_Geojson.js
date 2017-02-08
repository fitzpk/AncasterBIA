/* * * * * * * * * * * * * * * * * * * * *
 * 
 * GeoJSON features for fast food restaurants and convenience stores
 * 
 * Kevin Fitzgerald Copyright 2016
 * 
 * * * * * * * * * * * * * * * * * * * * */

var fastfood = {
    "type": "FeatureCollection",
    "features": [
    {
      "type": "Feature",
      "id": "4",
      "properties": {
		"address":"412 Wilson St. E",
		"status": "Franchise",
	    "amenity": "Quick",
	    "phone": "(905)-304-8562",
        "url": "<a href='http://www.shopancastervillage.com/big-bee-food-mart-2/'>Visit Big Bee</a>",
        "name": "Big Bee Food Mart"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
			-79.974911,
            43.228982
        ]
      }
    },
  ]
};