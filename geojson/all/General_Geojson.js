/* * * * * * * * * * * * * * * * * * * * *
 * 
 * GeoJSON features for general services
 * 
 * Kevin Fitzgerald Copyright 2016
 * 
 * * * * * * * * * * * * * * * * * * * * */
var general = {
    "type": "FeatureCollection",
    "features": [
    {
      "type": "Feature",
      "id": "1",
      "properties": {
		"address":"401 Wilson St. E",
	    "status": "Local",
	    "amenity": "General",
	    "phone": "(905)-648-1624",
        "url": "<a href='http://www.supremetrophies.ca/'>Visit Supreme Trophies & Awards</a>",
        "name": "Supreme Trophies & Awards"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
        	-79.975639,
            43.228697
        ]
      }
    },
    {
      "type": "Feature",
      "id": "2",
      "properties": {
		"address":"219 Wilson St. E",
		"status": "Local",
	    "amenity": "Landscape",
	    "phone": "(905)-648-1225",
        "url": "<a href='http://www.shopancastervillage.com/a-e-bowler-associates/'>Visit A.E. Bowler & Associates</a>",
        "name": "A E Bowler & Associates - Landscape Architects"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
			-79.979369,
            43.223437
        ]
      }
    },
  ]
};