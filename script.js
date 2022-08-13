//const app = document.querySelector(".container");

//for (let i = 0; i < 400; i++) {
//  app.appendChild(document.createElement("div"));
//}

const selection = new SelectionArea({
  selectables: [".container > div"],
  boundaries: [".container"]
});

selection.on('start', evt => {
  if (!evt.event.ctrlKey && !evt.event.metaKey) {    
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
