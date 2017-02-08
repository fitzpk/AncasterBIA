/* * * * * * * * * * * * * * * * * * * * *
 * 
 * GeoJSON features for specialty food and drink services
 * 
 * Kevin Fitzgerald Copyright 2016
 * 
 * * * * * * * * * * * * * * * * * * * * */

var specrest = {
    "type": "FeatureCollection",
    "features": [
    {
      "type": "Feature",
      "id": "1",
      "properties": {
		"address":"240 Wilson St. E",
		"status": "Local",
	    "amenity": "Pizza",
	    "phone": "(905)-304-3131",
        "url": "<a href='http://www.ancaster-pizza.com/'>Visit Ancaster Pizza</a>",
        "name": "Ancaster Pizza"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
			-79.978473,
            43.223251
        ]
      }
    },
    {
      "type": "Feature",
      "id": "2",
      "properties": {
		"address":"346 Wilson St. E",
		"status": "Local",
	    "amenity": "Ice",
	    "phone": "(905)-928-1110",
        "url": "<a href='http://www.purplepony.ca/'>Visit The Purple Pony</a>",
        "name": "Purple Pony"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
			-79.976114,
            43.226725
        ]
      }
    },    
    {
      "type": "Feature",
      "id": "3",
      "properties": {
		"address":"356 Wilson St. E",
		"status": "Local",
	    "amenity": "Cheese",
	    "phone": "(905)-304-0114",
        "url": "<a href='http://www.tajmahalcanada.com/'>Visit Taj Mahal</a>",
        "name": "Taj Mahal"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
			-79.975505,
            43.226830
        ]
      }
    } 
  ]
};