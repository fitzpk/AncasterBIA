/* * * * * * * * * * * * * * * * * * * * *
 * 
 * GeoJSON features for sport academies and stores
 * 
 * Kevin Fitzgerald Copyright 2016
 * 
 * * * * * * * * * * * * * * * * * * * * */
var sport = {
    "type": "FeatureCollection",
    "features": [
    {
      "type": "Feature",
      "id": "3",
      "properties": {
		"address":"365 Wilson St. E",
		"status": "Local",
	    "amenity": "Cycle",
	    "phone": "(905)-648-2288",
        "url": "<a href='http://www.ancastercycle.ca/'>Visit Ancaster Cycle</a>",
        "name": "Ancaster Cycle"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
			-79.976073,
            43.227530
        ]
      }
    },             
    {    
      "type": "Feature",
      "id": "5",
      "properties": {
		"address":"291 Lodor St.",
		"status": "Local",
	    "amenity": "Tennis",
	    "phone": "(905)-304-0880",
        "url": "<a href='http://www.ancastertennis.ca/ancaster/home/readPage.do?id=141&history=clear'>Visit The Tennis Club</a>",
        "name": "Ancaster Tennis Club"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
			-79.975279,
            43.224446
        ]
      }
    }       
  ]
};