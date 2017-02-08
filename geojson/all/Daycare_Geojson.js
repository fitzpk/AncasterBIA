/* * * * * * * * * * * * * * * * * * * * *
 * 
 * GeoJSON features for daycare services
 * 
 * Kevin Fitzgerald Copyright 2016
 * 
 * * * * * * * * * * * * * * * * * * * * */

var daycare = {
    "type": "FeatureCollection",
    "features": [        
    {
      "type": "Feature",
      "id": "1",
      "properties": {
		"address":"339 Wilson St. E",
		"status": "Local",
	    "amenity": "Daycare",
	    "phone": "(905)-648-8778",
        "url": "<a href='http://www.littlegems.org/'>Visit Little Gems</a>",
        "name": "Ancaster Little Gems Children's Centre"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
			-79.976849,
            43.226792
        ]
      }
    }, 
    {
      "type": "Feature",
      "id": "2",
      "properties": {
		"address":"442 Wilson St. E",
		"status": "Local",
	    "amenity": "Daycare",
	    "phone": "(905)-304-4517",
        "url": "<a href='http://www.shopancastervillage.com/village-gate-montessori-school/'>Visit Montessori</a>",
        "name": "Village Gate Montessori School"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
			-79.974477,
            43.229898
        ]
      }
    }                            
  ]
};   
