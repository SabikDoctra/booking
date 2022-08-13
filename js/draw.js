const data = {
	"redraw": true,
	"hour_height": 60,
	"header": [
	  {
		"ИД": "0000256_20220808",
		"Врач": "Врач 1", 
		"Подразделение": "Подразделение 1", 
		"Дата": "2022-08-08"      
	  },
	  {
		"ИД": "0000257_20220808",
		"Врач": "Врач 2", 
		"Подразделение": "Подразделение 2",
		"Дата": "2022-08-08"
	  },
	  {
		"ИД": "0000256_20220809",
		"Врач": "Врач 1", 
		"Подразделение": "Подразделение 1", 
		"Дата": "2022-08-09"      
	  },
	  {
		"ИД": "0000257_20220809",
		"Врач": "Врач 2", 
		"Подразделение": "Подразделение 2",
		"Дата": "2022-08-09"
	  }
	],
	"times": [
	  "10:00",
	  "12:00",
	  "13:00",
	  "14:00",
	  "15:00",
	  "16:00",
	],
	"data": [
		{
			"ИД": "0000256_202201311100",
			"Врач": "Врач", 
			"ПериодНеделя": true,
			"ДатаНачала": "2022-08-08T10:00:00",
			"ДатаОкончания": "2022-08-08T10:30:00",
			"Дата": "2022-08-08T00:00:00",
			"ВремяНачала": "0001-01-01T10:00:00",
			"ВремяОкончания": "0001-01-01T10:30:00",
			"ДлинаСлота": "30 წუთი", // "30"	
			"Водитель": "User 3",
			"Флеботомист1": "Admin Doctor",
			"Флеботомист2": "",
			"ВодительЦвет": "#77FF29",
			"Флеботомист1Цвет": "#FFDE5C",
			"Флеботомист2Цвет": "",
			"ВодительЕстьГрафик": true,
			"ФлеботомистЕстьГрафик": false,
			"ВодительЦветГрафика": "#FFF0A6",
			"ФлеботомистЦветГрафика": "#DDCCFF",
			"Пациент": "",
			"Пометка": false,
			"_Сравнение": 1,
			"ТекстДня": "ორშაბათი",
			"Статус": "დაჯავშნილი",
			"СтатусЦвет": "#49D1BA",
			"КоличествоПациентов": 3,
		}
	]
  }
  
  data.times.forEach(element => drawTimes(element));
  
  function drawTimes(element) {
	
  }
  
  const selection = new SelectionArea({
	selectables: [".container > div"],
	boundaries: [".container"]
  });
  
  selection.on('beforestart', (evt) => {
	const allowedButtons = [1];
	if(!evt.store.selected.includes(evt.event.target)) {
		allowedButtons.push(2);
	}
  
	return allowedButtons.includes(evt.event.buttons);
  });
  
  selection.on('start', evt => {
	if (!evt.event.ctrlKey && !evt.event.metaKey && (evt.event.button != 2 || (evt.event.button == 2 && evt.store.selected.length == 1))) {    
	  for (const el of evt.store.stored) {
		el.classList.remove("selected");
	  }
	  selection.clearSelection();
	}  
  }).on('move', evt => {
	for (const el of evt.store.changed.added) {
	  el.classList.add("selected");
	}
  
	for (const el of evt.store.changed.removed) {
	  el.classList.remove("selected");
	}
  });
  