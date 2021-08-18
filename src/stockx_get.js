// declaring jsonString here is bad practice, but it shouldn't be a problem since this is a simple script
let jsonString = '';
/*
* url must be String
* numPages must be at least 1
**/
do_the_thing = () => {
  jsonString = '';
  const url = document.forms["input information"]["url"].value;
  const numPages = document.forms["input information"]["pages"].value;
  const myArr = url.split("&");
  for (let i = 1; i < numPages; i++) { // this will actually give numPages - 1, but that shouldn't be a problem
    myArr[3] = 'page=' + i;
    let tempUrl = '' + myArr[0] + '&' + myArr[1] + '&' + myArr[2] + '&' + myArr[3] + '&' + myArr[4] + '&' + myArr[5] + '&' + myArr[6];//this needs to be cleaned up later
    fetch(tempUrl)
      .then(data => data.text())
      .then(updatedData => {
        jsonString += updatedData;
      });
  }
  return jsonString;
}
stockx_get = () => {
  let data = do_the_thing();
  setTimeout(() => { // I'm setting this to wait for 3 seconds, change as desired
    console.log(jsonString);
    const exportButton = document.getELementb
    const jsonBlob = new Blob([jsonString]);
    saveData(jsonBlob);
  }, 3000)
}

// saveData is based on this website: https://dev.to/nombrekeff/download-file-from-blob-21ho
const saveData = (blob, name = 'stockx_sales_data.txt') => {
  // Convert your blob into a Blob URL (a special url that points to an object in the browser's memory)
  const blobUrl = URL.createObjectURL(blob);

  // Create a link element
  const link = document.createElement("a");

  // Set link's href to point to the Blob URL
  link.href = blobUrl;
  link.download = name;

  // Append link to the body
  document.body.appendChild(link);

  // Dispatch click event on the link
  // This is necessary as link.click() does not work on the latest firefox
  link.dispatchEvent(
    new MouseEvent('click', {
      bubbles: true,
      cancelable: true,
      view: window
    })
  );

  // Remove link from body
  document.body.removeChild(link);
};
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