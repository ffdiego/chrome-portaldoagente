if (window.location.href != "https://flightprices.vercel.app/tab") {
  chrome.storage.local.get(["voos"], (result) => {
    const voos = result.voos;
    localStorage.setItem("voos", JSON.stringify(voos));
    window.location.href = "https://flightprices.vercel.app/tab";
  });
}
