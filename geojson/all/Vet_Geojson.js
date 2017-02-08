/* * * * * * * * * * * * * * * * * * * * *
 * 
 * GeoJSON features for veterinary services and pet stores
 * 
 * Kevin Fitzgerald Copyright 2016
 * 
 * * * * * * * * * * * * * * * * * * * * */
var vet = {
    "type": "FeatureCollection",
    "features": [
    {
      "type": "Feature",
      "id": "1",
      "properties": {
		"address":"356 Wilson St. E",
		"status": "Local",
	    "amenity": "Vet",
	    "phone": "(905)-304-7877",
        "url": "<a href='http://www.villagecatclinic.ca/'>Visit The Village Cat Clinic</a>",
        "name": "Village Cat Clinic"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
			-79.975312,
            43.226778
        ]
      }
    }                         
  ]
};