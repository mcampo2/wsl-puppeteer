#!/usr/bin/node
const puppeteer = require('puppeteer');
var args = { args: ['--no-sandbox', '--single-process'] };

var main = async function() {
  console.log('Opening Browser...');
  const browser = await puppeteer.launch(args);
  console.log('Initializing Window...');
  const page = await browser.newPage();
  await page.setJavaScriptEnabled(false);
  await page.setViewport({ height: 480, width: 640 });
  console.log('Opening Webpage...');
  page.goto('https://duckduckgo.com/');
  await page.waitForNavigation({ waitUntil: 'networkidle0' });
  console.log('Printing Webpage...');
  await page.screenshot({ path: 'page.png' });
  console.log('Closing Browser...');
  await browser.close();
};

main();
