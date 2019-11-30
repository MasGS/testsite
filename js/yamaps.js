ymaps.ready(function () {
			var myMap = new ymaps.Map("YMapsID", {
			  center: [55.76, 37.64],
			  zoom: 10
			});

                        // Создает метку и добавляет ее на карту
                        var placemark = new YMaps.Placemark(new YMaps.GeoPoint(37.64, 55.76));
                        placemark.name = "Салон красоты";
                        placemark.description = "творим искусство";
                        map.addOverlay(placemark);

                        // Открывает балун
                        placemark.openBalloon();
		  });
