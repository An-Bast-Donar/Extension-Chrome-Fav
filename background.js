chrome.contextMenus.create({
  id: "pageDestacada",
  title: "Destacar Page",
  contexts: ["page"],
});

chrome.contextMenus.onClicked.addListener(function (info, tab) {
  if (info.menuItemId === "pageDestacada") {
    if (!/^chrome:\/\//.test(tab.url)) {
      console.log("El Id de la page destacada es:", tab.id);
    } else {
      chrome.notifications.create({
        type: "basic",
        iconUrl: "icon.png",
        title: "Error",
        message: "Esta página no se puede destacar.",
      });
    }
  }
});

function setRedTitleColor() {
  document.querySelector("title").style.color = "red";
}
