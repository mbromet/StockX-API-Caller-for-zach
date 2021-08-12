// const fetch = require('node-fetch');
// const https = require('https');
//const xhttp = new XMLHttpRequest();
/*
* url must be String
* numPages must be at least 1
**/
stockx_get = () => {
  const url = document.forms["input information"]["url"].value;
  const numPages = document.forms["input information"]["pages"].value;
  // console.log(url);
  // console.log(numPages);
  const myArr = url.split("&");
  let jsonString = '';
  for (let i = 1; i < numPages; i++) { // this will actually give numPages - 1, but that shouldn't be a problem
    myArr[3] = 'page=' + i;
    let tempUrl = '' + myArr[0] + myArr[1] + myArr[2] + myArr[3] + myArr[4] + myArr[5] + myArr[6];//this needs to be cleaned up later
    fetch(tempUrl)
      .then(data => {

        jsonString += JSON.stringify(data);
        console.log(jsonString);

      })
    console.log(tempUrl);

  }
  //console.log(jsonString);
  // console.log(myArr);
}


// ConvertToCSV comes from @praneybehl from https://stackoverflow.com/questions/8847766/how-to-convert-json-to-csv-format-and-store-in-a-variable
function ConvertToCSV(objArray) {
  var array = typeof objArray != 'object' ? JSON.parse(objArray) : objArray;
  var str = '';

  for (var i = 0; i < array.length; i++) {
    var line = '';
    for (var index in array[i]) {
      if (line != '') line += ','

      line += array[i][index];
    }

    str += line + '\r\n';
  }

  return str;
}

//stockx_get(`https://stockx.com/api/products/b80ff5b5-98ab-40ff-a58c-83f6962fe8aa/activity?state=480&currency=USD&limit=250&page=1&sort=createdAt&order=DESC&country=US`, 4)