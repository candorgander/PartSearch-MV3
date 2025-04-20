document.getElementById("save").addEventListener("click", () => {
    const lcsc = document.getElementById("lcscTLD").value;
    const mouser = document.getElementById("mouserTLD").value;
    const digikey = document.getElementById("digikeyTLD").value;
  
    chrome.storage.local.set({
      lcscTLD: lcsc,
      mouserTLD: mouser,
      digikeyTLD: digikey
    }, function () {
      if (chrome.runtime.lastError) {
        console.error("Error saving settings:", chrome.runtime.lastError);
      } else {
        alert("Settings saved!"); // ✅ This should now work in Chrome
      }
    });
  });
  