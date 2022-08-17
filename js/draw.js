let jsonData = {
	redraw: true,
	hourHeight: 200,
	header: [
		{
			ИД: "0000256_20220808",
			Врач: "ექიმი 1",
			Подразделение: "Подразделение 1",
			Дата: "8 აგვ 2022",
		},
		{
			ИД: "0000257_20220808",
			Врач: "ექიმი 2",
			Подразделение: "Подразделение 2",
			Дата: "8 აგვ 2022",
		},
		{
			ИД: "0000256_20220809",
			Врач: "ექიმი 1",
			Подразделение: "Подразделение 1",
			Дата: "9 აგვ 2022",
		},
		{
			ИД: "0000257_20220809",
			Врач: "ექიმი 2",
			Подразделение: "Подразделение 2",
			Дата: "9 აგვ 2022",
		},
		{
			ИД: "0000256_20220809",
			Врач: "ექიმი 1",
			Подразделение: "Подразделение 1",
			Дата: "10 აგვ 2022",
		},
		{
			ИД: "0000257_20220809",
			Врач: "ექიმი 2",
			Подразделение: "Подразделение 2",
			Дата: "10 აგვ 2022",
		},
		{
			ИД: "0000256_20220809",
			Врач: "ექიმი 1",
			Подразделение: "Подразделение 1",
			Дата: "11 აგვ 2022",
		},
		{
			ИД: "0000257_20220809",
			Врач: "ექიმი 2",
			Подразделение: "Подразделение 2",
			Дата: "11 აგვ 2022",
		},
		{
			ИД: "0000256_20220809",
			Врач: "ექიმი 1",
			Подразделение: "Подразделение 1",
			Дата: "12 აგვ 2022",
		},
		{
			ИД: "0000257_20220809",
			Врач: "ექიმი 2",
			Подразделение: "Подразделение 2",
			Дата: "12 აგვ 2022",
		},
		{
			ИД: "0000256_20220809",
			Врач: "ექიმი 1",
			Подразделение: "Подразделение 1",
			Дата: "13 აგვ 2022",
		},
		{
			ИД: "0000257_20220809",
			Врач: "ექიმი 2",
			Подразделение: "Подразделение 2",
			Дата: "13 აგვ 2022",
		},
		{
			ИД: "0000256_20220809",
			Врач: "ექიმი 1",
			Подразделение: "Подразделение 1",
			Дата: "14 აგვ 2022",
		},
		{
			ИД: "0000257_20220809",
			Врач: "ექიმი 2",
			Подразделение: "Подразделение 2",
			Дата: "14 აგვ 2022",
		},
	],
	times: [
		{
			ИД: "1000",
			Время: "10:00",
		},
		{
			ИД: "1100",
			Время: "11:00",
		},
		{
			ИД: "1200",
			Время: "12:00",
		},
		{
			ИД: "1300",
			Время: "13:00",
		},
		{
			ИД: "1400",
			Время: "14:00",
		},
		{
			ИД: "1500",
			Время: "15:00",
		},
	],
	data: [
		{
			ИД: "0000257_202208081030",
			ОтступВМинутах: 30,
			ИДШапки: "0000257_20220808",
			Продолжительность: 75,
			Пациент: "",
			Статус: "ГрафикОтменен",
			Подсказка: "It's cancelled!",
			Время: "10:30",
		},
		{
			ИД: "0000257_202208081145",
			ОтступВМинутах: 105,
			ИДШапки: "0000257_20220808",
			Продолжительность: 40,
			Пациент: "გიორგი",
			Статус: "Завершен",
			Подсказка: "It's done!",
			Время: "11:45",
			ТипБрони: "Клиника",
		},
		{
			ИД: "0000257_202208081040",
			ОтступВМинутах: 40,
			ИДШапки: "0000256_20220808",
			Продолжительность: 40,
			Пациент: "დათო",
			ТипБрони: "ВизитДома",
			Страховка: "TBCInsurance",
			Статус: "Забронировано",
			Подсказка: "It's booked!",
			Время: "10:40",
		},
		{
			ИД: "0000257_202208081235",
			ОтступВМинутах: 155,
			ИДШапки: "0000256_20220808",
			Продолжительность: 40,
			Пациент: "",
			Статус: "Свободен",
			Подсказка: "It's free!",
			Время: "12:35",
		},
	],
};

let initData = {
	statuses: [
		{
			name: "Забронировано",
			backgroundColor: "#D7F2ED",
			textColor: "#7A869A",
		},
		{
			name: "Свободен",
			backgroundColor: "#FFFFFF",
			textColor: "#7A869A",
		},
		{
			name: "ГрафикОтменен",
			backgroundColor: "#F4F5F7",
			textColor: "#7A869A",
		},
		{
			name: "Пришел",
			backgroundColor: "#67CCC5",
			textColor: "#ffffff",
		},
		{
			name: "НеПришел",
			backgroundColor: "#DFE1E6",
			textColor: "#ffffff",
		},
		{
			name: "Завершен",
			backgroundColor: "#2A5369",
			textColor: "#ffffff",
		},
	],
	bookingTypes: [
		{
			name: "Клиника",
			image: "clinic.png",
		},
		{
			name: "ВизитДома",
			image: "home.png",
		},
		{
			name: "Удаленный",
			image: "distant.png",
		},
		{
			name: "КлиникаИлиУдаленный",
			image: "clinicordistant.png",
		},
		{
			name: "Ковид",
			image: "covid.png",
		},
	],
	bookingInsurances: [
		{
			name: "TBCInsurance",
			image: "tbc.png",
		},
		{
			name: "Ardi",
			image: "ardi.png",
		},
		{
			name: "GPI",
			image: "gpi.png",
		},
		{
			name: "PSP",
			image: "psp.png",
		},
		{
			name: "ImediL",
			image: "imedil.png",
		},
	],
	commands: [
		{
			type: "command",
			name: "booking",
			caption: "დაჯავშნა",
			tooltip: "მოცემულ სლოტზე დაჯავშნა",
			icon: "booking.png",
		},
		{
			type: "command",
			name: "cancel_booking",
			caption: "დაჯავშნის მოხსნა",
			tooltip: "დაჯავშნის მოხსნა მოცემულ სლოტზე",
			icon: "cancel_booking.png",
		},
		{
			type: "separator",
			icon: "separator.png",
		},
		{
			type: "command",
			name: "arrived",
			caption: "გამოცხადდა",
			tooltip: "პაციენტი გამოცხადდა",
			icon: "arrived.png",
		},
		{
			type: "command",
			name: "not_arrived",
			caption: "არ გამოცხადდა",
			tooltip: "პაციენტი არ გამოცხადდა",
			icon: "not_arrived.png",
		},
		{
			type: "command",
			name: "finished",
			caption: "დასრულდა",
			tooltip: "ვიზიტი დასრულდა",
			icon: "finished.png",
		},
		{
			type: "command",
			name: "pick",
			caption: "არჩევა",
			tooltip: "ჯავშნის არჩევა",
			icon: "pick.png",
		},
		{
			type: "command",
			name: "paste",
			caption: "ჩასმა",
			tooltip: "არჩეული ჯავშნის ჩასმა მოცემულ სლოტზე",
			icon: "paste",
		},
		{
			type: "command",
			name: "edit_brigade",
			caption: "ბრიგადის რედაქტირება",
			tooltip: "არჩეული ბრიგადის რედაქტირება",
			icon: "edit_brigade.png",
		},
		{
			type: "command",
			name: "booking_history",
			caption: "ჯავშნის ისტორია",
			tooltip: "მოცემულ სლოტზე დაჯავშნების ისტორიის გახსნა",
			icon: "booking_history.png",
		},
		{
			type: "command",
			name: "cancel_schedule",
			caption: "გრაფიკის გაუქმება",
			tooltip: "მოცემულ სლოტზე გრაფიკის გაუქმება",
			icon: "cancel_schedule.png",
		},
		{
			type: "command",
			name: "restore_schedule",
			caption: "გრაფიკის აღდგენა",
			tooltip: "მოცემულ სლოტზე გრაფიკის აღდგენა",
			icon: "restore_schedule.png",
		},
		{
			type: "command",
			name: "add_schedule",
			caption: "გრაფიკის დანიშვნა",
			tooltip: "მოცემულ სლოტზე გრაფიკის გაწერა",
			icon: "add_schedule.png",
		},
	],
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

if (jsonData.hasOwnProperty("hourHeight")) {
	cssRoot.style.setProperty(`--hourHeight`, `${jsonData.hourHeight}px`);
}
if (jsonData.hasOwnProperty("styles")) {
	jsonData.styles.forEach((element) =>
		cssRoot.style.setProperty(`--${element.name}`, element.value)
	);
}
if (initData.hasOwnProperty("statuses")) {
	initData.statuses.forEach((element) => addClass(element));
}
if (initData.hasOwnProperty("bookingTypes")) {
	initData.bookingTypes.forEach((element) => addClass(element));
}
if (initData.hasOwnProperty("bookingInsurances")) {
	initData.bookingInsurances.forEach((element) => addClass(element));
}

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

		cssRoot.style.setProperty(
			`--divTableWidth`,
			`calc(${jsonData.header.length} * var(--slotWidth) + var(--leftWidth))`
		);
		cssRoot.style.setProperty(
			`--divTableHeight`,
			`calc(${jsonData.times.length} * var(--hourHeight) + var(--topHeight))`
		);

		jsonData.header.forEach((element, index) => drawHeader(element, index));
		curDateBlock.style = `left: calc(${totalDateLength} * var(--slotWidth) - var(--borderSize)); 
			width: calc(${curDateLength} * var(--slotWidth) + var(--borderSize));`;

		headerBlock.appendChild(curDateBlock);

		jsonData.times.forEach((element, index) => drawTimes(element, index));
		jsonData.data.forEach((element) => drawSlots(element, !jsonData.redraw));
	} else {
		jsonData.data.forEach((element) => drawSlots(element, !jsonData.redraw));
	}
}

function drawHeader(element, index) {
	if (curDateBlock == "") {
		curDateBlock = document.createElement("div");
		curDateBlock.innerHTML = `<span class="date-sticky">${element.Дата}</span>`;
		curDateBlock.className = `header date`;
	}
	if (curDate != "" && curDate != element.Дата) {
		curDateBlock.style = `left: calc(${totalDateLength} * var(--slotWidth) - var(--borderSize)); 
			width: calc(${curDateLength} * var(--slotWidth) + var(--borderSize));`;

		headerBlock.appendChild(curDateBlock);
		curDateBlock = "";
		totalDateLength = totalDateLength + curDateLength;
		curDateLength = 0;
	}
	curDateLength++;
	curDate = element.Дата;

	divElement = document.createElement("div");
	divElement.innerHTML = `${element.Врач}`;
	divElement.className = `header doctor`;
	divElement.setAttribute("id", `id${element.ИД}`);
	divElement.setAttribute("index", index);
	divElement.style = `left: calc(${index} * var(--slotWidth) - var(--borderSize));`;

	headerBlock.appendChild(divElement);

	divElement = document.createElement("div");
	divElement.innerHTML = `${element.Подразделение}`;
	divElement.className = `header department`;
	divElement.style = `left: calc(${index} * var(--slotWidth) - var(--borderSize));`;

	headerBlock.appendChild(divElement);
}

function drawTimes(element, index) {
	divElement = document.createElement("div");
	divElement.innerHTML = `${element.Время}`;
	divElement.className = `time`;
	divElement.setAttribute("id", "id" + element.ИД);
	divElement.setAttribute("index", index);
	divElement.style = `top: calc(${index} * var(--hourHeight) - var(--borderSize));`;

	timesBlock.appendChild(divElement);
}

function drawSlots(element, findElement) {
	if (findElement) {
		divGrid = document.querySelector(`#id${element.ИД}`);
		divGrid.className = `slot-grid`;
	} else {
		doctorBlock = document.querySelector(`#id${element.ИДШапки}`);
		index = doctorBlock.getAttribute("index");
		divGrid = document.createElement("div");
		divGrid.setAttribute("id", `id${element.ИД}`);
		divGrid.className = `slot-grid`;
		divGrid.style = `top: calc((var(--hourHeight) * ${element.ОтступВМинутах})/60 - var(--borderSize)); 
			left: calc(${index} * var(--slotWidth) - var(--borderSize)); 
			height: calc((var(--hourHeight) * ${element.Продолжительность})/60 + var(--borderSize));`;
	}

	divGrid.innerHTML = "";

	divSlot = document.createElement("div");
	divSlot.className = `slot`;
	if (
		element.hasOwnProperty("ИдентификаторСтатуса") &&
		element.ИдентификаторСтатуса
	) {
		divSlot.className += ` slot-${element.ИдентификаторСтатуса}`;
	}
	if (element.hasOwnProperty("Статус") && element.Статус) {
		divSlot.className += ` json-${element.Статус}`;
	}
	if (element.hasOwnProperty("Время") && element.Время) {
		divSlotDetails = document.createElement("div");
		divSlotDetails.className = `slot-time`;
		divSlotDetails.innerHTML = `${element.Время}`;
		divSlot.appendChild(divSlotDetails);
	}
	if (element.hasOwnProperty("ТипБрони") && element.ТипБрони) {
		divSlotDetails = document.createElement("div");
		divSlotDetails.className = `slot-type json-${element.ТипБрони}`;
		divSlotDetails.innerHTML = `&nbsp;`;
		divSlot.appendChild(divSlotDetails);
	}
	if (element.hasOwnProperty("Страховка") && element.Страховка) {
		divSlotDetails = document.createElement("div");
		divSlotDetails.className = `slot-insurance json-${element.Страховка}`;
		divSlotDetails.innerHTML = `&nbsp;`;
		divSlot.appendChild(divSlotDetails);
	}
	if (element.hasOwnProperty("Пациент") && element.Пациент) {
		divSlotDetails = document.createElement("div");
		divSlotDetails.className = `slot-patient`;
		divSlotDetails.innerHTML = `${element.Пациент}`;
		divSlot.appendChild(divSlotDetails);
	}

	divGrid.appendChild(divSlot);

	divSlot = document.createElement("div");
	divSlot.className = `slot-layer`;
	if (element.hasOwnProperty("Подсказка")) {
		divSlot.setAttribute("title", element.Подсказка);
	}

	divGrid.appendChild(divSlot);
	containerBlock.appendChild(divGrid);
}

function addClass(element) {
	style = "";
	if (element.hasOwnProperty("backgroundColor")) {
		style += `background-color: ${element.backgroundColor} !important;`;
	}
	if (element.hasOwnProperty("textColor")) {
		style += `color: ${element.textColor} !important;`;
	}
	if (element.hasOwnProperty("image")) {
		style += `background-image: url('../images/${element.image}') !important;`;
	}
	createCSSSelector(`.json-${element.name}`, style);
}

function createCSSSelector(selector, style) {
	if (!document.styleSheets) return;
	if (document.getElementsByTagName("head").length == 0) return;

	var styleSheet, mediaType;

	if (document.styleSheets.length > 0) {
		for (var i = 0, l = document.styleSheets.length; i < l; i++) {
			if (document.styleSheets[i].disabled) continue;
			var media = document.styleSheets[i].media;
			mediaType = typeof media;

			if (mediaType === "string") {
				if (media === "" || media.indexOf("screen") !== -1) {
					styleSheet = document.styleSheets[i];
				}
			} else if (mediaType == "object") {
				if (
					media.mediaText === "" ||
					media.mediaText.indexOf("screen") !== -1
				) {
					styleSheet = document.styleSheets[i];
				}
			}

			if (typeof styleSheet !== "undefined") break;
		}
	}

	if (typeof styleSheet === "undefined") {
		var styleSheetElement = document.createElement("style");
		styleSheetElement.type = "text/css";
		document.getElementsByTagName("head")[0].appendChild(styleSheetElement);

		for (i = 0; i < document.styleSheets.length; i++) {
			if (document.styleSheets[i].disabled) {
				continue;
			}
			styleSheet = document.styleSheets[i];
		}

		mediaType = typeof styleSheet.media;
	}

	if (mediaType === "string") {
		for (var i = 0, l = styleSheet.rules.length; i < l; i++) {
			if (
				styleSheet.rules[i].selectorText &&
				styleSheet.rules[i].selectorText.toLowerCase() == selector.toLowerCase()
			) {
				styleSheet.rules[i].style.cssText = style;
				return;
			}
		}
		styleSheet.addRule(selector, style);
	} else if (mediaType === "object") {
		var styleSheetLength = styleSheet.cssRules ? styleSheet.cssRules.length : 0;
		for (var i = 0; i < styleSheetLength; i++) {
			if (
				styleSheet.cssRules[i].selectorText &&
				styleSheet.cssRules[i].selectorText.toLowerCase() ==
					selector.toLowerCase()
			) {
				styleSheet.cssRules[i].style.cssText = style;
				return;
			}
		}
		styleSheet.insertRule(selector + "{" + style + "}", styleSheetLength);
	}
}

draw();

window.addEventListener("scroll", function(e) { 
	let stickyDates = document.getElementsByClassName('date-sticky');
	
	Array.from(stickyDates).forEach((element) => {
		let scrollLeft = window.scrollX;
		let parentLeft = element.parentElement.offsetLeft;
		let parentWidth = element.parentElement.offsetWidth - 20;
		let elementWidth = element.offsetWidth;
		if( (parentWidth-elementWidth) > (scrollLeft-parentLeft) && parentLeft < scrollLeft )
		{
			element.style = `left: ${(scrollLeft-parentLeft)}px`;
			console.log(`left: ${(scrollLeft-parentLeft)}px`);
		}
		else if(scrollLeft <= parentLeft)
		{
			element.style = `left: 0px`;
		};
	});
});