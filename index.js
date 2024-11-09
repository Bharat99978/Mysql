const axios = require('axios');

const url = 'http://test1.telegrambot9oks.free.nf/p.php';

// Function to visit the website
const visitWebsite = async () => {
  try {
    const response = await axios.get(url);
    console.log(`Visited ${url} - Status: ${response.status}`);
    console.log("Web Page Content:");
    console.log(response.data); // Logs the HTML content of the page
  } catch (error) {
    console.error(`Error visiting ${url}:`, error.message);
  }
};

// Refresh every 10 seconds (20000 milliseconds)
setInterval(visitWebsite, 20000);
