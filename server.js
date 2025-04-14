const express = require("express");
const puppeteer = require("puppeteer");

const app = express();
const PORT = 3000;

app.get("/api/facebook-info", async (req, res) => {
  const { url } = req.query;
  if (!url) return res.status(400).json({ error: "Missing 'url' parameter" });

  try {
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();
    await page.goto(url, { waitUntil: "domcontentloaded" });

    const name = await page.$eval('meta[property*="title"]', el => el.content);
    const profilImage = await page.$eval('meta[property="og:image"]', el => el.content);

    await browser.close();

    res.json({ name, profilImage });
  } catch (error) {
    res.status(500).json({ error: "Failed to extract data", details: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
