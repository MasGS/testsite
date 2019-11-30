ymaps.ready(function () {
			var myMap = new ymaps.Map("YMapsID", {
			  center: [55.76, 37.64],
			  zoom: 10
			});

                        myMap.openBalloon(new YMaps.GeoPoint([37.709156, 55.79556]));
		  });
