ymaps.ready(function () {
			var myMap = new ymaps.Map("YMapsID", {
			  center: [55.76, 37.64],
			  zoom: 10
			});

                        // Создание метки 
			var myPlacemark = new ymaps.Placemark(
			// Координаты метки
			[55.76, 37.64]        
			);
 
		// Добавление метки на карту
		myMap.geoObjects.add(myPlacemark);

		  });
