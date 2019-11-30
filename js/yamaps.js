ymaps.ready(function () {
			var myMap = new ymaps.Map("YMapsID", {
			  center: [55.795560, 37.709156],
			  zoom: 15
			});

			var myPlacemark = new ymaps.Placemark(
			[55.795560, 37.709156], {
                        iconContent: 'Салон красоты'
                        }, {
                        preset: 'twirl#blueStretchyIcon'
			});
 
		        myMap.geoObjects.add(myPlacemark);

		  });
