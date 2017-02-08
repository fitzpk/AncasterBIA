/* * * * * * * * * * * * * * * * * * * * *
 * 
 * GeoJSON features for specialty retail stores
 * 
 * Kevin Fitzgerald Copyright 2016
 * 
 * * * * * * * * * * * * * * * * * * * * */
var retail = {
    "type": "FeatureCollection",
    "features": [
    {
      "type": "Feature",
      "id": "1",
      "properties": {
		"address":"386 Wilson St. E",
		"status": "Local",
	    "amenity": "Retail",
	    "phone": "(905)-304-8626",
        "url": "<a href='http://www.basketsnbundles.ca/'>Visit Baskets & Bundles</a>",
        "name": "Baskets & Bundles"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -79.975323,
          43.227947
        ]
      }
    },
    {
      "type": "Feature",
      "id": "2",
      "properties": {
		"address":"240 Wilson St. E",
	    "status": "Local",
	    "amenity": "Retail",
	    "phone": "(905)-648-4900",
        "url": "<a href='http://thewrightkitchen.com/'>Visit Wright Kitchen</a>",
        "name": "Wright Kitchen"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
        	-79.978039,
            43.223540
        ]
      }
    }      
  ]
};