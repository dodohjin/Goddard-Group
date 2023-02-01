const puppeteer = require('puppeteer');

async function getVisual() {
    try{
        const URL = 'https://caltech-msc.github.io/publications/pubs-current.html';
        const browser = await puppeteer.launch();

        const page = await browser.newPage();
        await page.goto(URL);

        await page.screenshot({path: 'screenshot.png'});
        
        await browser.close() ;
    } catch(error){
        console.error(error);
    }
}

getVisual();







// let axios = require('axios');
// let cheerio = require('cheerio');
// let fs = require('fs'); 

// axios.get('https://caltech-msc.github.io/publications/pubs-current.html')
//   .then((response) => {
//     if(response.status===200){
//       const html=response.data;
//       const $=cheerio.load(html);
//       let paperList=[];

//       $('.csl-entry').each(function(i, elem){

//         paperList[i] = {
//           // label: $(this).find('.csl-block b:nth-child(1)').text(),
//           title: $(this).find('.csl-block:nth-child(1)').text(),
//           author:$(this).find('.csl-block:nth-child(2)').text(), 
//           url: $(this).find('.csl-block a').attr('href'),
//           DOI: $(this).find('a').attr('href')
//         };

//     });
//     let dataTop10 = paperList.slice(0,10);
//     const data = dataTop10;
//     fs.writeFile('paperList.json', 'data='+
//         JSON.stringify(data, null, 4),
//         (err)=>console.log('success'))
    
//     // return data;
//   }
// })
//   // .then(res => console.log(res));


