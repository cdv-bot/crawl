const request = require('request');
const cheerio = require('cheerio');
const fs = require('fs');
request('https://www.bitis.com.vn/collections/nam', (error, request, html) => {
  if (!error && request.statusCode == 200) {
    const $ = cheerio.load(html);
    const siteHeading = $('.product-lists-item');
    // const sitePrice = $('.product_prices');
    // const linkNext = $('.product-image');

    let arr = [];
    siteHeading.each((i, el) => {
      let sizeArr = [];
      // const item = $(el).attr("src").replace(/\/\//g, 'https://').replace(/_large/g, "");
      const title = $(el).find('.product-image').find('a').attr('title');
      const link = `https://www.bitis.com.vn${$(el).find('.product-image').find('a').attr('href')}`;
      const img = `https:${$(el).find('.product-image').find('img').attr('src')}`;
      const price = $(el).find('.price').text();

      let obj = {
        title,
        link,
        img,
        price
      }
      arr.push(obj);
      console.log(obj)
      fs.writeFileSync('data.json', JSON.stringify(arr));
    })
    // let arr2 = [];
    // sitePrice.each((i, el) => {
    //   const item = $(el).find(".price").text();

    //   arr2.push(item)
    // })


    // let arr3 = [];
    // linkNext.each((i, el) => {
    //   const item = $(el).find('a').attr('href');
    //   arr3.push(`https://www.bitis.com.vn${item}`);
    // });

    // let a = arr2.map((price, index) => {
    //   return { ...arr[index], price }
    // })

    // let b = arr3.map((link, index) => {
    //   return {
    //     ...a[index],
    //     linkNext: link
    //   }
    // })

    // console.log(b)

  }

});