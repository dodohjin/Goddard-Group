function getPaperInfo() {
    fetch('https://feeds.library.caltech.edu/people/Goddard-W-A-III/article.json')
    .then (response => response.json())
    .then (data => {

        // const pubInfo = document.querySelectorAll('.pub-text');
        let info = document.querySelectorAll('.pub-text');

        let latest10 = data.slice(0,20);
        let paperInfo = [];      
        paperInfo = latest10.map(latest => {

            // Numbering
            let labels = latest.other_numbering_system?.items;
            let num = "";
            labels?.forEach(label =>{
                num += label.id;
            });
            // console.log(num);
            
            // Authors

            let authors = latest.creators.items;
            let doc=[];
            doc = authors?.map(author =>{
                
                let fullName = "";
                let initial = author.name.given.split(" ");
                if(author.name.given.includes(',')){
                    for(let i=0; i<initial.length-1; i++){
                        fullName+=initial[i][0]+". ";
                    }
                    fullName+=author.name.family;
                    fullName+=" "+initial.at(-1);
                    } else{
                        for(let i=0; i<initial.length; i++){
                            fullName+=initial[i][0]+". "
                    }
                    fullName+=author.name.family;
                }
                return fullName;
                
            }); 
    
            // Others
            let title=latest.title; 
            let jrnl= latest.publication ; 
            let vol = latest.volume; 
            let doi = latest.doi; 
            let url = latest.official_url; 
            let abs = latest.abstract; 
            let docs = doc.join(', '); 
            let pubdate = latest.date;


            return paperInfo=[num, title, docs, jrnl, vol, doi, url, abs, pubdate];
            
            // console.log(num, title);
        
    }); 
    // console.log(paperInfo[0][0])
    
    for(i=0; i<20; i++){
        if(paperInfo[i][4]!==undefined){
            info[i].innerHTML = `<b>${paperInfo[i][0]}. ${paperInfo[i][1]}</b><br>
            ${paperInfo[i][2]}; <b><i>${paperInfo[i][3]}</i></b> Vol.${paperInfo[i][4]}, ${paperInfo[i][8]}<br>
            DOI: <a class="doi" href="https://doi.org/${paperInfo[i][5]}" target="_blank">${paperInfo[i][5]}</a><br>
            <details> 
                <summary>Abstract:</summary>
                ${paperInfo[i][7]}
            </details>`
        } else{
            info[i].innerHTML = `<b>${paperInfo[i][0]}. ${paperInfo[i][1]}</b><br>
            ${paperInfo[i][2]}; <b><i>${paperInfo[i][3]}</i></b> In Press<br>
            DOI: <a class="doi" href="https://doi.org/${paperInfo[i][5]}" target="_blank">${paperInfo[i][5]}</a><br>
            <details> 
                <summary>Abstract:</summary>
                ${paperInfo[i][7]}
            </details>`
        }
    };
    // console.log(paperInfo); 

});
}

getPaperInfo();



    
    
  

  