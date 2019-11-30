ymaps.ready(function () {
			var myMap = new ymaps.Map("YMapsID", {
			  center: [55.76, 37.64],
			  zoom: 10
			});

			var myPlacemark = new ymaps.Placemark(
			[55.795560, 37.709156]        
			);
 
		        myMap.geoObjects.add(myPlacemark);

		  });
