const selection = new SelectionArea({
	selectables: [".container > div"],
	boundaries: [".container"]
});

selection.on('beforestart', (evt) => {
	const allowedButtons = [1];
	if (!evt.store.selected.includes(evt.event.target)&&!evt.store.selected.includes(evt.event.target.parentElement)) {
		allowedButtons.push(2);
	}

	return allowedButtons.includes(evt.event.buttons);
}).on('start', evt => {
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
