let axios = require('axios');
let cheerio = require('cheerio');
// let fs = require('fs'); 

axios.get('https://scholar.google.com/citations?hl=ko&user=yMZlErUAAAAJ&view_op=list_works')
    .then((response) => {
        if(response.status===200){
            const html=response.data;
            const $=cheerio.load(html);
            let citedList=[];

            $('tbody>tr').each(function(i, elem){

                citedList[i] = {
                    
                    title: $(this).find('.gsc_a_t a').text(),
                    doi: $(this).find('.gsc_a_t a').attr('href'),
                    author: $(this).find('.gsc_a_t .gs_gray:nth-child(2)').text(),
                    jrnl: $(this).find('.gsc_a_t .gs_gray:nth-child(3)').text(),
                    cited: $(this).find('.gsc_a_c .gsc_a_ac').text()
                    // year: $(this).find('.gsc_a_y').text()

                };
                
            });
           let most20=citedList.slice(3,23);
           console.log(most20[0].title);
        //    fs.writeFile('most20List.json', 'data='+
        //     JSON.stringify(most20, null, 4),
        //     (err)=>console.log('success'))

        const mostCited20 = document.querySelector('.main');
        for (i=0; i<most20.length; i++){
            mostCited20.innerHTML = `
            <span class="list-sq"></span><span class="sub-title">${most20[i].title}</span><span><b>${most20[i].cited}</b></span>
            <div class="indent">
                <p class="author">${most20[i].author}; ${most20[i].jrnl}</p>
            `
        }    
        }

    })

    // const mostCited20 = document.querySelector('.main');
    // function getMostCited(){
    //     for (i=0; i<most20.length; i++){
    //         mostCited20.innerHTML = `
    //         <span class="list-sq"></span><span class="sub-title">${most20[i].title}</span><span><b>${most20[i].cited}</b></span>
    //         <div class="indent">
    //             <p class="author">${most20[i].author}; ${most20[i].jrnl}</p>
    //         `
    //        }
    // }
    // getMostCited();
   



    
    
  

  