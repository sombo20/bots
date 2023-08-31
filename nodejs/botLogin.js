//importa a bibioteca de scraping
const puppeteer = require("puppeteer");


(async ()=>{
	//cria um navegador chromium
	const browser = await puppeteer.launch({headless:false});
	
	//abre uma aba no nvegador criado chromium criado
	const page = await browser.newPage();

	//abre e redireciona na pagina local
	await page.goto("http://localhost/");

	//preencher o campo nome
	await page.type("#nome","Vicente")

	//preencher o campo email
	await page.type("#email","vicentevictorsombo642@gmail.com");


	//faz screenshot da pagina
	 await page.screenshot({path:"formulario.png"});


	//espera dar um click no btn do formulario
	await page.click('#btn');


	//espera pelo fim de uma accao
	await page.waitForNavigation();

	//fechar o browser
	await browser.close();
})();