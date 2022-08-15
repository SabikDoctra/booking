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
			"Дата": "2022-08-10"
		},
		{
			"ИД": "0000257_20220809",
			"Врач": "Врач 2",
			"Подразделение": "Подразделение 2",
			"Дата": "2022-08-10"
		},
		{
			"ИД": "0000256_20220809",
			"Врач": "Врач 1",
			"Подразделение": "Подразделение 1",
			"Дата": "2022-08-11"
		},
		{
			"ИД": "0000257_20220809",
			"Врач": "Врач 2",
			"Подразделение": "Подразделение 2",
			"Дата": "2022-08-11"
		},
		{
			"ИД": "0000256_20220809",
			"Врач": "Врач 1",
			"Подразделение": "Подразделение 1",
			"Дата": "2022-08-12"
		},
		{
			"ИД": "0000257_20220809",
			"Врач": "Врач 2",
			"Подразделение": "Подразделение 2",
			"Дата": "2022-08-12"
		},
		{
			"ИД": "0000256_20220809",
			"Врач": "Врач 1",
			"Подразделение": "Подразделение 1",
			"Дата": "2022-08-13"
		},
		{
			"ИД": "0000257_20220809",
			"Врач": "Врач 2",
			"Подразделение": "Подразделение 2",
			"Дата": "2022-08-13"
		},
		{
			"ИД": "0000256_20220809",
			"Врач": "Врач 1",
			"Подразделение": "Подразделение 1",
			"Дата": "2022-08-14"
		},
		{
			"ИД": "0000257_20220809",
			"Врач": "Врач 2",
			"Подразделение": "Подразделение 2",
			"Дата": "2022-08-14"
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
			"Пациент": ""
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

const headerBlock = document.querySelector("#header");
const timesBlock = document.querySelector("#times");
const containerBlock = document.querySelector("#container");
const cssRoot = document.querySelector(":root");

cssRoot.style.setProperty('--hourHeight', `${jsonData.hourHeight}px`);

let curDateBlock;
let curDate = "";
let curDateLength = 0;
let totalDateLength = 0;

function draw() {
	if (jsonData.redraw) {
		curDate = "";
		curDateBlock = "";
		curDateLength = 0;
		totalDateLength = 0;

		jsonData.header.forEach((element, index) => drawHeader(element, index));
		curDateBlock.style = 
			`left: calc(${totalDateLength} * var(--slotWidth) - var(--borderSize)); 
			width: calc(${curDateLength} * var(--slotWidth) + var(--borderSize));`;

		headerBlock.appendChild(curDateBlock);

		jsonData.times.forEach((element, index) => drawTimes(element, index));
		jsonData.data.forEach(element => drawSlots(element, !jsonData.redraw));
	} else {
		jsonData.data.forEach(element => drawSlots(element, !jsonData.redraw));
	}
}

function drawHeader(element, index) {
	if (curDateBlock == "") {
		curDateBlock = document.createElement("div");
		curDateBlock.innerHTML = element.Дата;
		curDateBlock.className = "header date";
	}
	if (curDate != "" && curDate != element.Дата) {
		curDateBlock.style =
			`left: calc(${totalDateLength} * var(--slotWidth) - var(--borderSize)); 
			width: calc(${curDateLength} * var(--slotWidth) + var(--borderSize));`;

		headerBlock.appendChild(curDateBlock);
		curDateBlock = "";
		totalDateLength = totalDateLength + curDateLength;
		curDateLength = 0;
	}
	curDateLength++;
	curDate = element.Дата;

	divElement = document.createElement("div");
	divElement.innerHTML = element.Врач;
	divElement.className = "header doctor";
	divElement.setAttribute("id", "id" + element.ИД);
	divElement.setAttribute("index", index);
	divElement.style = `left: calc(${index} * var(--slotWidth) - var(--borderSize));`;

	headerBlock.appendChild(divElement);
}

function drawTimes(element, index) {
	divElement = document.createElement("div");
	divElement.innerHTML = element.Время;
	divElement.className = "time";
	divElement.setAttribute("id", "id" + element.ИД);
	divElement.setAttribute("index", index);
	divElement.style = `top: calc(${index} * var(--hourHeight) - var(--borderSize));`;

	timesBlock.appendChild(divElement);
}

function drawSlots(element, findElement) {
	if (findElement) {
		divGrid = document.querySelector(`#id${element.ИД}`);
		divGrid.className = "slot-grid";
	} else {
		doctorBlock = document.querySelector(`#id${element.ИДШапки}`);
		index = doctorBlock.getAttribute("index");
		divGrid = document.createElement("div");
		divGrid.setAttribute("id", "id" + element.ИД);
		divGrid.className = "slot-grid";		
		divGrid.style =
			`top: calc((var(--hourHeight) * ${element.ОтступВМинутах})/60 - var(--borderSize)); 
			left: calc(${index} * var(--slotWidth) - var(--borderSize)); 
			height: calc((var(--hourHeight) * ${element.Продолжительность})/60 + var(--borderSize));`;
	}

	divGrid.innerHTML = "";

	if (element.Пациент != "") {

		divSlot = document.createElement("div");
		divSlot.className = "slot";
		divSlot.innerHTML = element.Пациент;

		divGrid.appendChild(divSlot);

	}


	divSlot = document.createElement("div");
	divSlot.className = "slot-layer";

	divGrid.appendChild(divSlot);
	containerBlock.appendChild(divGrid);
}

draw();