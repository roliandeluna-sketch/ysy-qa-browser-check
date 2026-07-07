const { chromium } = require("playwright");

const URL = "https://ysyglobaloffers.netlify.app/";

const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

(async () => {

  const browser = await chromium.launch({

    // En GitHub Actions debe ir true
    headless: true,

    proxy: {
      server: "http://198.23.243.226:6361",
      username: "orzyxxuq",
      password: "s5jd613as0pq"
    }

  });


  const context = await browser.newContext({

    locale: "en-US",

    timezoneId: "America/New_York",

    viewport: {
      width: 1366,
      height: 768
    }

  });


  const page = await context.newPage();


  console.log("🚀 Abriendo página...");


  try {

    await page.goto(URL, {
      waitUntil: "domcontentloaded",
      timeout: 60000
    });


    console.log("✅ Página cargada");


    // Tiempo inicial de lectura
    await sleep(5000);


    // Movimiento del mouse
    await page.mouse.move(400, 300);
    await sleep(2000);


    await page.mouse.move(700, 350);
    await sleep(2000);


    // Scroll de revisión
    await page.mouse.wheel(0, 500);
    await sleep(4000);


    await page.mouse.wheel(0, 700);
    await sleep(4000);


    // Regreso arriba
    await page.mouse.wheel(0, -600);
    await sleep(3000);



    // Buscar botón principal

    const button = page.getByText("Get Access").first();


    if (await button.count() > 0 && await button.isVisible()) {


      console.log("🖱️ Botón encontrado");


      await sleep(2000);


      await button.click();


      console.log("✅ Click realizado");


      await sleep(5000);


      console.log("Nueva URL:");
      console.log(page.url());


    } else {


      console.log("⚠️ No se encontró el botón Get Access");


    }



    // Captura del resultado

    await page.screenshot({

      path: "resultado.png",

      fullPage: true

    });


    console.log("📸 Captura guardada");


  } catch (error) {


    console.log("❌ Error:");

    console.log(error);


  }


  await browser.close();


  console.log("🏁 Prueba terminada");


})();
