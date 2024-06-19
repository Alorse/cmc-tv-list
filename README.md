# CoinMarketCap Symbol Downloader

This JavaScript code allows you to download a .txt file containing a list of cryptocurrency symbols from CoinMarketCap, concatenated with "USDT". The code includes options to configure the number of symbols to download and to exclude stablecoins.

## How to Run the Code

1. Navigate to [https://coinmarketcap.com/all/views/all/](https://coinmarketcap.com/all/views/all/) in your web browser.
2. Open the browser console (press F12 or Ctrl+Shift+I).
3. Paste the JavaScript code into the console.
4. Press Enter.
5. A prompt will appear asking you to enter the number of symbols to download. You can enter a number or press Enter to use the default value of 100.
6. A file named `symbols_cmc{date}.txt` will be downloaded containing a list of cryptocurrency symbols concatenated with "USDT".

## Features

* **Number of symbols:** The code allows the user to specify the number of symbols to download.
* **Stablecoin exclusion:** The code excludes common stablecoins, such as USDT, USDC, DAI, USDD, TUSD, and PYUSD.
* **Filename:** The downloaded filename includes the current date for easy organization.

## Note

This code depends on the HTML structure of the CoinMarketCap website. If the website structure changes, the code may need to be updated.
