// Create a context menu item
chrome.contextMenus.create({
    id: "ask-chatgpt",
    title: "Ask ChatGPT",
    contexts: ["all"],
});

// Listen for when the user clicks on the context menu item
// chrome.contextMenus.onClicked.addListener((info, tab) => {
//     if (info.menuItemId === "ask-chatgpt") {
//         // Send a message to the content script
//         chrome.tabs.sendMessage(tab.id, { type: "ASK_CHATGPT" });
//     }
// });


chrome.contextMenus.onClicked.addListener((info, tab) => {
    console.log("info", info)
    if (info.menuItemId
        === 'ask-chatgpt') {
        chrome.tabs.sendMessage(tab.id, {
            url: tab.url,
            type: 'ASK_CHATGPT',
            selectionText: info.selectionText
        });
    }
});