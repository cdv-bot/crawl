const request = require('request');
const cheerio = require('cheerio');

request('https://www.bitis.com.vn/collections/nam', (error, request, html) => {
  if (!error && request.statusCode == 200) {
    const $ = cheerio.load(html);
    const siteHeading = $('.image_main');
    let arr = [];
    siteHeading.each((i, el) => {
      const item = $(el).attr("src").replace(/\/\//g, 'https://').replace(/_large/g, "");
      const title = $(el).attr('alt');
      let obj = {
        link: item,
        title: title
      }
      arr.push(obj);
    })
    console.log(arr)
  }
});