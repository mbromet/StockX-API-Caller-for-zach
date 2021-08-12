

/*
* url must be String
* numPages must be at least 1
**/
stockx_get = (url, numPages) => {
  const myArr = url.split("&");
  let jsonString = '';
  for (let i = 1; i < numPages; i++) {
    myArr[3] = 'page=' + i;
    let tempUrl = '' + myArr[0] + myArr[1] + myArr[2] + myArr[3] + myArr[4] + myArr[5] + myArr[6];//this needs to be cleaned up later
    console.log(tempUrl);

  }
  console.log(jsonString);
  // console.log(myArr);
}
stockx_get(`https://stockx.com/api/products/b80ff5b5-98ab-40ff-a58c-83f6962fe8aa/activity?state=480&currency=USD&limit=250&page=1&sort=createdAt&order=DESC&country=US`, 4)