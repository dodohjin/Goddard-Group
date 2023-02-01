const xlsx = require('xlsx');
const fs = require('fs');

// member //


    const workbook = xlsx.readFile(__dirname + '/../member.xlsx');

    const json = {};
    let i= workbook.SheetNames.length;

    while(i--){
    const sheetname = workbook.SheetNames[i];
    json[sheetname] = xlsx.utils.sheet_to_json(workbook.Sheets[sheetname]);
    }

    fs.writeFile('member.json', 'data='+JSON.stringify(json["Sheet1"], null, 4),
    (err)=>console.log('success'));



    // TO HTML
// <script src="https://cdnjs.cloudflare.com/ajax/libs/xlsx/0.15.5/xlsx.full.min.js"></script>

// JS
// function readExcel(){
//   let input = event.target;
//   let reader = new FileReader();

//   reader.onload = function() {
//     let data = reader.result;
//     let workBook = XLSX.read(dadta, {type:'binary'});

//     workBook.SheetNames.forEach(function(sheetName) {
//       console.log('SheetName: '+ sheetName);

//       let rows = XLSX.utils.sheet_to_json(workBook.sheets[sheetName]);
//       console.log(JSON.stringify(rows));
//     })
//   };
//   reader.readAsBinaryString(input.files[0]);
// }