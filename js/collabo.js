
const xlsx = require('xlsx');
const fs = require('fs');

// collaborators //


    const workbook = xlsx.readFile(__dirname + '/../collabo.xlsx');

    const json = {};
    let i= workbook.SheetNames.length;

    while(i--){
    const sheetname = workbook.SheetNames[i];
    json[sheetname] = xlsx.utils.sheet_to_json(workbook.Sheets[sheetname]);
    }

    fs.writeFile('collabo.json', 'data='+JSON.stringify(json["Sheet1"], null, 4),
    (err)=>console.log('success'));


