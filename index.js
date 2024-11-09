const axios = require('axios');

const url = 'http://test1.telegrambot9oks.free.nf/p.php';

// Function to visit the website
const visitWebsite = async () => {
  try {
    const response = await axios.get(url);
    console.log(`Visited ${url} - Status: ${response.status}`);
  } catch (error) {
    console.error(`Error visiting ${url}:`, error.message);
  }
};

// Refresh every 40 seconds (40000 milliseconds)
setInterval(visitWebsite, 10000);