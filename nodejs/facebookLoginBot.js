//importando a biblioteca
const puppeteer = require("puppeteer");

//criando uma funcao assicrona
(async ()=>{

	//criando nosso navegador
	const browser = await puppeteer.launch({headless:false});

	//abrir  uma aba no nosso navegador
	const page = await browser.newPage();

	//abrir um link na nossa aba
	await page.goto("https://facebook.com");

	//preenchendo o campo email ou numero
	await page.type("#email","923874653");


	//preencendo o campo senha
	await page.type("#pass","1234567889");

	//clicar no btn pra iniciar sessao
	await page.click('[name="login"]');


	//espera iniciar sessao para fazer outra coisa...
	await page.waitForNavigation();

	
	//fechando nosso browser
	await browser.close();
})();