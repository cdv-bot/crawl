const request = require('request');
const cheerio = require('cheerio');
const fs = require('fs');
request('https://www.bitis.com.vn/collections/hunter-nam', (error, request, html) => {
  if (!error && request.statusCode == 200) {
    const $ = cheerio.load(html);
    const req = $('body').find('.container').find('#product_list').find('[class="col-lg-3 col-md-4 col-sm-6 col-xs-6 col-xxs-6 product-lists-item"]');
    req.each((i, el) => {
      // const link = `https://www.bitis.com.vn${$(el).find('.product-image').find('a').attr('href')}`;
      const title = $(el).find('.image_main').attr('src');
      console.log(title)
    });
    // const linkNext = $('.product-image');
  }

});