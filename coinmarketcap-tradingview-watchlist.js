const getSymbols = () => {
  const symbols = [];
  const symbolElements = document.querySelectorAll('.cmc-table__column-name--symbol');

  // Get the number of symbols to download
  const count = parseInt(prompt("Enter the number of symbols to download (default 100):", "100")) || 100;

  // Iterate over each 'a' element and extract the symbol text
  let i = 0;
  symbolElements.forEach(element => {
    if (i < count) {
      const symbol = element.textContent.trim();
      // Exclude stablecoins
      if (!["USDT", "USDC", "DAI", "USDD", "TUSD", "PYUSD"].includes(symbol)) {
        symbols.push(symbol + "USDT");
        i++;
      }
    }
  });

  return symbols;
};

// Create a download link
const downloadSymbols = (symbols) => {
  const downloadLink = document.createElement('a');
  const todayDate = new Date().toISOString().slice(0, 10);
  downloadLink.href = 'data:text/plain;charset=utf-8,' + encodeURIComponent(symbols.join(','));
  downloadLink.download = 'symbols_cmc(' + todayDate + ').txt';
  downloadLink.click();
};

// Get the symbols and download the file
const symbols = getSymbols();
downloadSymbols(symbols);
