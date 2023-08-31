const puppeteer = require("puppeteer");

(async ()=>{
	const browser = await puppeteer.launch({
		headless:false,
	});
	
	const page = await browser.newPage();
	await page.goto("http://localhost/");

	const pageContent = await page.evaluate(()=>{
		return {
			title:document.querySelector("header nav ul a li").innerHTML
		};
	});

	//console.log(pageContent.title)
	
	//await browser.close(); 
})();
