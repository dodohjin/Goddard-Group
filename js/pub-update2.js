import { get } from 'axios';
import { load } from 'cheerio';


async function getHTML() {
    try{
        return await get('https://caltech-msc.github.io/publications/pubs-current.html');
    } catch(error){
        console.error(error);
    }
}

getHTML()
.then(html =>{
    let update = document.getElementById('update');

    let dataOfUpdate="";
    const $ = load(html.data);

    $('body').each(function(elem){

        dataOfUpdate = {
         
          update: $(this).find('p:nth-child(2)').text(),
          
        };
});
    lastUpdate = dataOfUpdate.update.split(".");
    console.log(lastUpdate[1]);
    return update.textContent = `(${lastUpdate[1]})`;
});

getHTML();


// axios.get('https://caltech-msc.github.io/publications/pubs-current.html')
//   .then((response) => {
//     if(response.status===200){
//       const html=response.data;
//       const $=cheerio.load(html);
//       let dataOfUpdate="";

//       $('body').each(function(elem){

//         dataOfUpdate = {
         
//           update: $(this).find('p:nth-child(2)').text(),
          
//         };

//     });
//     lastUpdate = dataOfUpdate.update.split(".");
//     console.log(lastUpdate[1]);
//     return update.textContent = `(${lastUpdate[1]})`;
  
//   }
// })
//   .then(res => console.log(res));



