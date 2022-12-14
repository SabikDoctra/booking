const cssRoot = document.querySelector(":root");
let curDateBlock;
let curDate;
let curDateLength;
let totalDateLength;
let eventProperties = {
	event_name: "",
	data: ""
};
let eventPropertiesReturn;

function doctra_call(functionName, data) {
	switch (functionName) {
		case "update_cells":
			update_cells(data);
			break;
		case "init":
			init(data);
			break;
		default:
			break;
	}
}

function update_cells(jsonString) {
	jsonData = JSON.parse(jsonString);
	if (jsonData.hasOwnProperty("hourHeight")) {
		cssRoot.style.setProperty(`--hourHeight`, `${jsonData.hourHeight}px`);
	}
	if (jsonData.hasOwnProperty("compact") && jsonData.compact) {
		cssRoot.style.setProperty(`--displayPatient`, `none`);
		cssRoot.style.setProperty(`--slotPadding`, `3px`);
		cssRoot.style.setProperty(`--headerFontSize`, `11px`);
		cssRoot.style.setProperty(`--gridFontSize`, `11px`);
		cssRoot.style.setProperty(`--borderSizeBold`, `2px`);
		cssRoot.style.setProperty(`--slotWidth`, `100px`);	
		if (jsonData.hasOwnProperty("hourHeight") || jsonData.redraw) {
			cssRoot.style.setProperty(`--hourHeight`, `${(cssRoot.style.getPropertyValue(`--hourHeight`).replace("px","") * 280 / 396)}px`);
		}		
		// cssRoot.style.setProperty(`--borderColorDark`, `#7a869a`);
	}
	if (jsonData.hasOwnProperty("styles")) {
		jsonData.styles.forEach((element) =>
			cssRoot.style.setProperty(`--${element.name}`, element.value)
		);
	}
	draw(jsonData);
}

function init(jsonString) {
	initData = JSON.parse(jsonString);
	if (initData.hasOwnProperty("statuses")) {
		initData.statuses.forEach((element) => addClass(element));
		initData.statuses.forEach((element) => addClass(element, true));
		initData.statuses.forEach((element) => addClass(element, false, true));
	}
	if (initData.hasOwnProperty("bookingTypes")) {
		initData.bookingTypes.forEach((element) => addClass(element));
	}
	if (initData.hasOwnProperty("bookingInsurances")) {
		initData.bookingInsurances.forEach((element) => addClass(element));
	}
	init_commands(initData);
}

function draw(jsonData) {
	if (jsonData.redraw) {

		if (jsonData.text_only) {
			errorBlock.innerHTML = `<h1>${jsonData.text_only}</h1>`;
			divtableBlock.classList.add("hidden");
			errorBlock.classList.remove("hidden");
			return;
		} else {
			errorBlock.innerHTML = ``;
			errorBlock.classList.add("hidden");
			divtableBlock.classList.remove("hidden");
		}

		divtableBlock.addEventListener("contextmenu", function (evt) {
			if (evt.target.getAttribute("slot") == null) {
				hideContextMenu(contextMenu, evt);
				evt.preventDefault();
			}
		});

		divtableBlock.addEventListener("mousedown", function (evt) {
			hideContextMenu(contextMenu, evt);
		});

		curDate = "";
		curDateBlock = "";
		curDateLength = 0;
		totalDateLength = 0;

		headerBlock.innerHTML = "";
		timesBlock.innerHTML = "";
		containerBlock.innerHTML = "";

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
	if (curDate != "" && curDate != element.????????) {
		curDateBlock.style = `left: calc(${totalDateLength} * var(--slotWidth) - var(--borderSize)); 
			width: calc(${curDateLength} * var(--slotWidth) + var(--borderSize));`;
		headerBlock.appendChild(curDateBlock);
		curDateBlock = "";
		totalDateLength = totalDateLength + curDateLength;
		curDateLength = 0;
	}
	if (curDateBlock == "") {
		curDateBlock = document.createElement("div");
		curDateBlock.innerHTML = `<span class="date-sticky">${element.????????}</span>`;
		curDateBlock.className = `header date`;
	}
	curDateLength++;
	curDate = element.????????;

	divElement = document.createElement("div");
	divElement.innerHTML = `${element.????????.substring(0, 40) + (element.????????.length > 40 ? '...' : '')}`;
	divElement.className = `header doctor`;
	divElement.setAttribute("id", `id${element.????}`);
	divElement.setAttribute("index", index);
	divElement.setAttribute("title", (element.?????????????????? ? element.?????????????????? : element.????????));
	divElement.style = `left: calc(${index} * var(--slotWidth) - var(--borderSize));`;

	headerBlock.appendChild(divElement);

	divElement = document.createElement("div");
	divElement.innerHTML = `${element.??????????????????????????.substring(0, 40) + (element.??????????????????????????.length > 40 ? '...' : '')}`;
	divElement.className = `header department`;
	divElement.style = `left: calc(${index} * var(--slotWidth) - var(--borderSize));`;
	divElement.setAttribute("title", element.??????????????????????????);

	headerBlock.appendChild(divElement);
}

function drawTimes(element, index) {
	divElement = document.createElement("div");
	divElement.innerHTML = `${element.??????????}`;
	divElement.className = `time`;
	divElement.setAttribute("id", "id" + element.????);
	divElement.setAttribute("index", index);
	divElement.style = `top: calc(${index} * var(--hourHeight) - var(--borderSize));`;

	timesBlock.appendChild(divElement);
}

function drawSlots(element, findElement) {
	if (findElement) {
		divGrid = document.querySelector(`#id${element.????}`);
		divGrid.className = `slot-grid`;
		if (element.hasOwnProperty("??????????????") && element.??????????????) {
			divGrid.outerHTML = "";
			return;
		}
	} else {
		divGrid = document.createElement("div");
		divGrid.setAttribute("id", `id${element.????}`);
		divGrid.className = `slot-grid`;
	}
	doctorBlock = document.querySelector(`#id${element.??????????????}`);
	index = doctorBlock.getAttribute("index");
	divGrid.style = `top: calc((var(--hourHeight) * ${element.????????????????????????????})/60 - var(--borderSize)); 
		left: calc(${index} * var(--slotWidth) - var(--borderSize)); 
		height: calc((var(--hourHeight) * ${element.??????????????????????????????????})/60 + var(--borderSize));`;

	divGrid.innerHTML = "";

	divSlot = document.createElement("div");
	divSlot.className = `slot`;
	if (
		element.hasOwnProperty("????????????????????????????????????????") &&
		element.????????????????????????????????????????
	) {
		divSlot.className += ` slot-${element.????????????????????????????????????????}`;
	}
	if (element.hasOwnProperty("????????????") && element.????????????) {
		divSlot.className += ` json-${element.????????????}`;
	}
	if (element.hasOwnProperty("??????????????????") && element.??????????????????) {
		divSlot.className += ` json-${element.????????????}-highlighted`;
	}
	if (element.hasOwnProperty("??????????????????????????????????????") && element.??????????????????????????????????????) {
		divSlot.className += ` json-${element.????????????}-firsttime`;
	}
	if (element.hasOwnProperty("??????????") && element.??????????) {
		divSlotDetails = document.createElement("div");
		divSlotDetails.className = `slot-time`;
		divSlotDetails.innerHTML = `${element.??????????}`;
		divSlot.appendChild(divSlotDetails);
	}
	if (element.hasOwnProperty("????????????????") && element.????????????????) {
		divSlotDetails = document.createElement("div");
		divSlotDetails.className = `slot-type json-${element.????????????????}`;
		divSlotDetails.innerHTML = `&nbsp;`;
		divSlot.appendChild(divSlotDetails);
	}
	if (element.hasOwnProperty("??????????????????") && element.??????????????????) {
		divSlotDetails = document.createElement("div");
		divSlotDetails.className = `slot-insurance json-${element.??????????????????}`;
		divSlotDetails.innerHTML = `&nbsp;`;
		divSlot.appendChild(divSlotDetails);
	}
	if (element.hasOwnProperty("??????????????") && element.??????????????) {
		divSlotDetails = document.createElement("div");
		divSlotDetails.className = `slot-patient`;
		divSlotDetails.innerHTML = `${(element.??????????????.length >= 17 ? element.??????????????.substring(0, 14) + "..." : element.??????????????)}`;
		divSlot.appendChild(divSlotDetails);
	}

	divGrid.appendChild(divSlot);

	divSlot = document.createElement("div");
	divSlot.className = `slot-layer`;
	divSlot.setAttribute("slot", true);
	divTitle = "";
	if (element.hasOwnProperty("??????????????") && element.??????????????) {
		divTitle += (divTitle?"\n":"") + element.??????????????;
	}
	if (element.hasOwnProperty("??????????????????") && element.??????????????????) {
		divTitle += (divTitle?"\n":"") + element.??????????????????;
	}
	divSlot.setAttribute("title", divTitle);

	divSlot.addEventListener("contextmenu", function (evt) {
		hideContextMenu(contextMenu, evt);
		if (evt.target.getAttribute("contextMenuElement") == null) {
			showContextMenu(contextMenu, evt);
		}
		evt.preventDefault();
	});
	divSlot.addEventListener("click", function (evt) {
		sendClicks("click", [evt.target.parentNode], false);
	});
	divSlot.addEventListener("dblclick", function (evt) {
		sendClicks("doubleclick", [evt.target.parentNode]);
	});

	divGrid.appendChild(divSlot);
	containerBlock.appendChild(divGrid);
}

function addClass(element, highlightClass = false, firstTimePatientClass = false) {
	style = "";
	if (highlightClass) {
		if (element.hasOwnProperty("highlightColor") && element.highlightColor) {
			style += `border-left: 4px solid ${element.highlightColor} !important;`;
			style += `border-top-left-radius: 0px !important;`;
			style += `border-bottom-left-radius: 0px !important;`;
		}
	} else if (firstTimePatientClass) {
		if (element.hasOwnProperty("firstTimeColor") && element.firstTimeColor) {
			style += `background-color: ${element.firstTimeColor} !important;`;
		}
	} else {
		if (element.hasOwnProperty("backgroundColor") && element.backgroundColor) {
			style += `background-color: ${element.backgroundColor} !important;`;
		}
		if (element.hasOwnProperty("textColor") && element.textColor) {
			style += `color: ${element.textColor} !important;`;
		}
		if (element.hasOwnProperty("image") && element.image) {
			style += `background-image: url('images/${element.image}') !important;`;
		}
	}
	if ((highlightClass || firstTimePatientClass) && style == "") {
		return;
	}
	createCSSSelector(`.json-${element.name + (highlightClass ? "-highlighted" : (firstTimePatientClass ? "-firsttime" : ""))}`, style);
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

function readTextFile(file, callback) {
	var rawFile = new XMLHttpRequest();
	rawFile.overrideMimeType("application/json");
	rawFile.open("GET", file, true);
	rawFile.onreadystatechange = function () {
		if (rawFile.readyState === 4 && rawFile.status == "200") {
			callback(rawFile.responseText);
		}
	};
	rawFile.send(null);
}

function sendEvent(eventName, selectedElements, clearSelection = true) {
	let newEvent = new MouseEvent("click");
	let selectedCards = new Array();

	selectedElements.forEach((element) => {
		selectedCards.push(element.id.substring(2));
		if (clearSelection) {
			element.classList.remove("selected");
		}
	});

	eventProperties.event_name = "command";
	eventProperties.data = JSON.stringify({
		command_name: eventName,
		cells: selectedCards,
	});

	newEvent.doctra_event = eventProperties;

	if (clearSelection) {
		selection.clearSelection();
	}
	console.log(newEvent.doctra_event);

	return dispatchEvent(newEvent);
}

function getEventProperties() {

	eventPropertiesReturn = eventProperties;
	eventProperties = {
		event_name: "",
		data: ""
	};

	return eventPropertiesReturn;
}

function sendClicks(eventName, selectedElements, clearSelection = true) {
	let newEvent = new MouseEvent("click");
	let selectedCards = new Array();

	selectedElements.forEach((element) => {
		selectedCards.push(element.id.substring(2));
		if (clearSelection) {
			element.classList.remove("selected");
		}
	});

	eventProperties.event_name = eventName;
	eventProperties.data = JSON.stringify({
		cells: selectedCards
	});

	newEvent.doctra_event = eventProperties;

	if (clearSelection) {
		selection.clearSelection();
	}
	console.log(newEvent.doctra_event);

	return dispatchEvent(newEvent);
}

function init_commands(initData) {
	contextMenuOld = document.getElementById("contextMenu");
	if (contextMenuOld) {
		contextMenuOld.outerHTML = "";
	}

	let contextMenu = document.createElement("div");
	contextMenu.id = "contextMenu";
	contextMenu.className = "contextMenuHiden";
	contextMenu.setAttribute("contextMenuElement", true);
	document.body.appendChild(contextMenu);

	initData.commands.forEach((element) => {
		let menuOption = document.createElement("div");
		menuOption.optionType = element.type;
		menuOption.setAttribute("contextMenuElement", true);
		switch (element.type) {
			case "command":
				menuOption.functionName = element.name;
				menuOption.title = element.tooltip;
				menuOption.className = "menuItem";
				menuOption.addEventListener("click", contextMenuElementClick);
				menuOption.addEventListener("contextmenu", contextMenuElementClick);

				let menuimg = document.createElement("img");
				menuimg.src = "images/" + element.icon.replace("png", "svg");
				menuOption.appendChild(menuimg);

				let menuText = document.createElement("span");
				menuText.innerHTML = element.caption;
				menuOption.appendChild(menuText);
				break;
			case "separator":
				menuOption.className = "separator";
				break;

			default:
				break;
		}
		contextMenu.appendChild(menuOption);
	});
}

function contextMenuElementClick(event) {
	if (event.target.parentNode.functionName) {
		sendEvent(event.target.parentNode.functionName, selection.getSelection());
	} else {
		sendEvent(event.target.functionName, selection.getSelection());
	}
	hideContextMenu(contextMenu, event);
	event.preventDefault();
}

function showContextMenu(contextMenuObject, e) {
	contextMenuObject.classList.remove("contextMenuHiden");

	coords = setContextMenuPostion(e, contextMenuObject);

	contextMenuObject.style.left = coords.x + "px";
	contextMenuObject.style.top = coords.y + "px";
}

function setContextMenuPostion(event, contextMenu) {
	var mousePosition = {};
	var menuPostion = {};
	var menuDimension = {};

	menuDimension.x = contextMenu.offsetWidth;
	menuDimension.y = contextMenu.offsetHeight;
	mousePosition.x = event.pageX;
	mousePosition.y = event.pageY;

	if (
		mousePosition.x + menuDimension.x >
		document.body.offsetWidth + window.scrollX &&
		mousePosition.x - menuDimension.x >= 0
	) {
		menuPostion.x = mousePosition.x - menuDimension.x;
	} else {
		menuPostion.x = mousePosition.x;
	}

	if (
		mousePosition.y + menuDimension.y >
		document.body.scrollHeight &&
		mousePosition.y - menuDimension.y >= 0
	) {
		menuPostion.y = mousePosition.y - menuDimension.y;
	} else {
		menuPostion.y = mousePosition.y;
	}

	return menuPostion;
}

function hideContextMenu(contextMenuObject, e) {
	contextMenuObject.classList.add("contextMenuHiden");
}

window.addEventListener("scroll", function (e) {
	let stickyDates = document.getElementsByClassName("date-sticky");

	Array.from(stickyDates).forEach((element) => {
		let scrollLeft = window.scrollX;
		let parentLeft = element.parentElement.offsetLeft;
		let parentWidth = element.parentElement.offsetWidth - 20;
		let elementWidth = element.offsetWidth;
		if (
			parentWidth - elementWidth > scrollLeft - parentLeft &&
			parentLeft < scrollLeft
		) {
			element.style = `left: ${scrollLeft - parentLeft}px`;
		} else if (scrollLeft <= parentLeft) {
			element.style = `left: 0px`;
		}
	});
});

document.body.addEventListener("dblclick", function (evt) {
	clickButton.click();
});

readTextFile("js/init.json", function (text) {
	doctra_call("init", text);
});

readTextFile("js/update_cells.json", function (text) {
	doctra_call("update_cells", text);
});