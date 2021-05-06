const request = require('request');
const cheerio = require('cheerio');
const fs = require('fs');

async function crawl(data) {
  let arr = [
    {
      "link": "https://product.hstatic.net/1000230642/product/dsmh03800dog-3_25a84c6ec3264ff5bd2b96ed48334672.jpg",
      "title": "giày bóng đá nam biti's hunter football high top glory gold dsmh03800dog (đồng)",
      "price": "650,000 ₫",
      "linkNext": "https://www.bitis.com.vn/products/giay-bong-da-nam-biti-s-hunter-football-high-top-glory-gold-dsmh03800dog-dong"
    },
    {
      "link": "https://product.hstatic.net/1000230642/product/dsmh03800xdg-2_9073e429275543f29d36b397aeb85572.jpg",
      "title": "giày bóng đá nam biti's hunter football high top admiral blue dsmh03800xdg (xanh dương)",
      "price": "650,000 ₫",
      "linkNext": "https://www.bitis.com.vn/products/giay-bong-da-nam-biti-s-hunter-football-high-top-admiral-blue-dsmh03800xdg-xanh-duong"
    },
    {
      "link": "https://product.hstatic.net/1000230642/product/dsmh03800cam-2_c9318f627fa84466aeb18a25853a6503.jpg",
      "title": "giày bóng đá nam biti's hunter football high top flame orange dsmh03800cam (cam)",
      "price": "650,000 ₫",
      "linkNext": "https://www.bitis.com.vn/products/giay-bong-da-nam-biti-s-hunter-football-high-top-flame-orange-dsmh03800cam-cam"
    },
    {
      "link": "https://product.hstatic.net/1000230642/product/demh00800doo-1_9cc4c9af98074197863b2f9fe10cccdf.jpg",
      "title": "sandal nam biti's hunter university red demh00800doo (đỏ)",
      "price": "429,000 ₫",
      "linkNext": "https://www.bitis.com.vn/products/sandal-nam-biti-s-hunter-university-red-demh00800doo-do"
    },
    {
      "link": "https://product.hstatic.net/1000230642/product/demh00800xmn-1_f4c11522a0b4418193960b3aacfee998.jpg",
      "title": "sandal nam biti's hunter dark grey demh00800xmn (xanh mi nơ)",
      "price": "429,000 ₫",
      "linkNext": "https://www.bitis.com.vn/products/sandal-nam-biti-s-hunter-dark-grey-demh00800xmn-xanh-mi-no"
    },
    {
      "link": "https://product.hstatic.net/1000230642/product/dswh04000xng-1_fdd231b2b0ca44808f2d811cda188213.jpg",
      "title": "giày thể thao nam biti's hunter street vintage green dsmh04000xng (xanh ngọc)",
      "price": "599,000 ₫",
      "linkNext": "https://www.bitis.com.vn/products/giay-the-thao-nam-biti-s-hunter-street-vintage-green-dsmh04000xng-xanh-ngoc"
    },
    {
      "link": "https://product.hstatic.net/1000230642/product/dswh04000xdl-1_735e260847494b8c9caf7adeb44c4cd9.jpg",
      "title": "giày thể thao nam biti's hunter street vintage blue  dsmh04000xdl (xanh dương lợt)",
      "price": "599,000 ₫",
      "linkNext": "https://www.bitis.com.vn/products/giay-the-thao-nam-biti-s-hunter-street-vintage-blue-dsmh04000xdl-xanh-duong-lot"
    },
    {
      "link": "https://product.hstatic.net/1000230642/product/dsmh0400den-2_f9306264a1bf467fba65764b6fdb3ece.jpg",
      "title": "giày thể thao nam biti's hunter street vintage black dsmh04000den (đen)",
      "price": "599,000 ₫",
      "linkNext": "https://www.bitis.com.vn/products/giay-the-thao-nam-biti-s-hunter-street-vintage-black-dsmh04000den-den"
    },
    {
      "link": "https://product.hstatic.net/1000230642/product/dsmh0500xdg-2_1e5fbe11780b4564b4959fe8750cc113.jpg",
      "title": "giày thể thao cao cấp nam biti's hunter core classic blue dsmh05000xdg (xanh dương)",
      "price": "699,000 ₫",
      "linkNext": "https://www.bitis.com.vn/products/giay-the-thao-cao-cap-nam-biti-s-hunter-core-classic-blue-dsmh05000xdg-xanh-duong"
    },
    {
      "link": "https://product.hstatic.net/1000230642/product/dsmh05000xam__7__1eef9705616447ed9de490c30692d10a.jpg",
      "title": "giày thể thao cao cấp nam biti's hunter core classic grey dsmh05000xam (xam)",
      "price": "699,000 ₫",
      "linkNext": "https://www.bitis.com.vn/products/giay-the-thao-cao-cap-nam-biti-s-hunter-core-classic-grey-dsmh05000xam-xam"
    },
    {
      "link": "https://product.hstatic.net/1000230642/product/dsmh05100xam-2_9d8f1677eed34c7f807c077d3115d951.jpg",
      "title": "giày thể thao cao cấp nam biti's hunter x washed grey dsmh05100xam (xám)",
      "price": "999,000 ₫",
      "linkNext": "https://www.bitis.com.vn/products/giay-the-thao-cao-cap-nam-biti-s-hunter-x-washed-grey-dsmh05100xam-xam"
    },
    {
      "link": "https://product.hstatic.net/1000230642/product/dsmh05100reu-2_2e3534c18d1d45968c3a41f9055db2e3.jpg",
      "title": "giày thể thao cao cấp nam biti's hunter x army green dsmh05100reu (rêu)",
      "price": "999,000 ₫",
      "linkNext": "https://www.bitis.com.vn/products/giay-the-thao-cao-cap-nam-biti-s-hunter-x-army-green-dsmh05100reu-reu"
    },
    {
      "link": "https://product.hstatic.net/1000230642/product/dpm028344nau__3__01c1f25e94a84e4bab56e77356b7d4e0.jpg",
      "title": "dép nam biti's dpm028344nau (nâu)*",
      "price": "295,000 ₫",
      "linkNext": "https://www.bitis.com.vn/products/dep-nam-biti-s-dpm028344nau-nau"
    },
    {
      "link": "https://product.hstatic.net/1000230642/product/03_9eb0ee34c5f34c25b1a22a3a007e0339.jpg",
      "title": "giày thể thao nam biti's hunter street x vietmax | vietnam arising r8 black dsmh05700den",
      "price": "1,399,000 ₫",
      "linkNext": "https://www.bitis.com.vn/products/giay-the-thao-nam-biti-s-hunter-street-x-vietmax-vietnam-arising-r8-black-dsmh05700den"
    },
    {
      "link": "https://product.hstatic.net/1000230642/product/02_fb96605aaf6941a19ca8a037ad2c769a.jpg",
      "title": "giày thể thao nam biti's hunter street x vietmax | vietnam arising r9 bold dsmh05600den",
      "price": "1,149,000 ₫",
      "linkNext": "https://www.bitis.com.vn/products/giay-the-thao-nam-biti-s-hunter-street-x-vietmax-vietnam-arising-r9-bold-dsmh05600den"
    },
    {
      "link": "https://product.hstatic.net/1000230642/product/01_e07b5f71bd82468da19d879d25014315.jpg",
      "title": "giày thể thao nam biti's hunter street x vietmax | vietnam arising r3 gold dsmh05500nau",
      "price": "1,499,000 ₫",
      "linkNext": "https://www.bitis.com.vn/products/giay-the-thao-nam-biti-s-hunter-street-x-vietmax-vietnam-arising-r3-gold-dsmh05500nau"
    }
  ];
  // console.log(`${arr[0].link}`)


  let arr1 = [];
  for (i = 0; i < arr.length; i++) {
    let arr2 = [];
    await new Promise((res, rej) => {
      request(`${arr[i].linkNext}`, (error, request, html) => {

        if (!error && request.statusCode == 200) {
          const $ = cheerio.load(html);
          const siteHeading = $('.product-thumb');

          siteHeading.each((i, el) => {

            const item = $(el).find('a').attr('data-image').replace(/\/\//g, 'https://').replace(/_large/g, "");
            arr2.push(item)
          })
          arr1.push(arr2)
        }

        fs.writeFileSync('data3.json', JSON.stringify(arr1));
      })
    })
  }
}
crawl();