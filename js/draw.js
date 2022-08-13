let jsonData = {
	"redraw": true,
	"hourHeight": 200,
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
		{
			"ИД": "1000",
			"Время": "10:00"
		},
		{
			"ИД": "1100",
			"Время": "11:00"
		},
		{
			"ИД": "1200",
			"Время": "12:00"
		},
		{
			"ИД": "1300",
			"Время": "13:00"
		},
		{
			"ИД": "1400",
			"Время": "14:00"
		},
		{
			"ИД": "1500",
			"Время": "15:00"
		}
	],
	"data": [
		{
			"ИД": "0000257_202208081030",
			"ОтступВМинутах": 30,
			"ИДШапки": "0000257_20220808",
			"Продолжительность": 75,
			"Пациент": "Вася"
		},
		{
			"ИД": "0000257_202208081145",
			"ОтступВМинутах": 105,
			"ИДШапки": "0000257_20220808",
			"Продолжительность": 40,
			"Пациент": "Вася 3"
		},
		{
			"ИД": "0000257_202208081040",
			"ОтступВМинутах": 40,
			"ИДШапки": "0000256_20220808",
			"Продолжительность": 40,
			"Пациент": "Вася 4"
		},
		{
			"ИД": "0000257_202208081235",
			"ОтступВМинутах": 155,
			"ИДШапки": "0000256_20220808",
			"Продолжительность": 40,
			"Пациент": ""
		}
	]
};

/*let jsonData = {
	"redraw": false,
	"data": [
		{
			"ИД": "0000257_202208081030",
			"ОтступВМинутах": 30,
			"ИДШапки": "0000257_20220808",
			"Продолжительность": 75,
			"Пациент": "Вася 46"
		}
	]
}*/

const legendBlock = document.querySelector("#legend");
const headerBlock = document.querySelector("#header");
const timesBlock = document.querySelector("#times");
const containerBlock = document.querySelector("#container");
const hourHeight = jsonData.hourHeight;
const hourWidth = 100;
const slotWidth = 200;
const borderSize = 1;
const headerHeight = 50;
const departmentHeight = 0;


function draw() {
	if(jsonData.redraw)
	{	
		legendBlock.style = `top: -1px; left: -1px; height: ${headerHeight-borderSize}px; width: ${hourWidth-borderSize}px; `;

		jsonData.header.forEach((element, index) => drawDoctor(element, index));
		jsonData.times.forEach((element, index) => drawTimes(element, index));
		jsonData.data.forEach(element => drawSlots(element,!jsonData.redraw));
	} else {
		jsonData.data.forEach(element => drawSlots(element,!jsonData.redraw));
	}
}

function drawDoctor(element, index) {
	divElement = document.createElement("div");
	divElement.innerHTML = element.Врач;
	divElement.className = "doctor";
	divElement.setAttribute("id", "id" + element.ИД);
	divElement.setAttribute("index", index);
	divElement.style = `top: ${departmentHeight-1}px; left: ${index*slotWidth-1}px; height: ${headerHeight-borderSize}px; width: ${slotWidth-borderSize}px;`;
	headerBlock.appendChild(divElement);	
}

function drawTimes(element, index) {
	divElement = document.createElement("div");
	divElement.innerHTML = element.Время;
	divElement.className = "time";
	divElement.setAttribute("id", "id" + element.ИД);
	divElement.setAttribute("index", index);
	divElement.style = `top: ${index*hourHeight-1}px; left: -1px; height: ${hourHeight-borderSize}px; width: ${hourWidth-borderSize}px; `;
	timesBlock.appendChild(divElement);	
}

function drawSlots(element,findElement) {
	if(findElement) {
		divElement = document.querySelector(`#id${element.ИД}`);	
		divElement.innerHTML = element.Пациент;
		divElement.className = "slot";		
	} else {
		doctorBlock = document.querySelector(`#id${element.ИДШапки}`);	
		index = doctorBlock.getAttribute("index");
		divElement = document.createElement("div");
		divElement.setAttribute("id", "id" + element.ИД);			
		divElement.style = `top: ${(hourHeight*element.ОтступВМинутах)/60-1}px; left: ${index*slotWidth-1}px; height: ${(hourHeight*element.Продолжительность)/60-borderSize}px; width: ${slotWidth-borderSize}px; `;			
		divElement.innerHTML = element.Пациент;
		divElement.className = "slot";
		containerBlock.appendChild(divElement);
	}
}

draw();