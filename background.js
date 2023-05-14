chrome.contextMenus.create({
  id: "pageDestacada",
  title: "Destacar Page",
  contexts: ["page"],
});

chrome.contextMenus.onClicked.addListener(function (info, tab) {
  if (info.menuItemId === "pageDestacada") {
    console.log("El Id de la page destacada es:", tab.id);
  }
});
