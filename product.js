const request = require('request');
const cheerio = require('cheerio');
const fs = require('fs');

// async function crawl(data) {
//   



//   let arr1 = [];
//   arr.map((value, index) => {
//     console.log(value)
//     let arr2 = [];

//   })
// }
// crawl();

let arr = [
  {
    "title": "Giày Thể Thao Nam Biti's Hunter Nameless Edition x  Công Trí - No.2 DSMH06100KEM",
    "link": "https://www.bitis.com.vn/products/biti-s-hunter-nameless-edition-x-cong-tri-no-2-dsmh06100kem",
    "img": "https://product.hstatic.net/1000230642/product/dsmh06100kem-2_b90bbc7a721a4b0893bc3a73c4cd0492.jpg",
    "price": "1,499,000 ₫"
  },
  {
    "title": "Giày Thể Thao Nam Biti's Hunter Nameless Edition x  Công Trí - No.1 DSMH05900KEM",
    "link": "https://www.bitis.com.vn/products/biti-s-hunter-nameless-edition-x-cong-tri-no-1-dsmh05900kem",
    "img": "https://product.hstatic.net/1000230642/product/dsmh05900kem-2_b1e52188961a42cdbe413b80f5453b1c.jpg",
    "price": "1,499,000 ₫"
  },
  {
    "title": "Giày Thể Thao Cao Cấp Nam Biti's Hunter X Washed Grey DSMH05100XAM (Xám)",
    "link": "https://www.bitis.com.vn/products/giay-the-thao-cao-cap-nam-biti-s-hunter-x-washed-grey-dsmh05100xam-xam",
    "img": "https://product.hstatic.net/1000230642/product/dsmh05100xam-2_9d8f1677eed34c7f807c077d3115d951.jpg",
    "price": "999,000 ₫"
  },
  {
    "title": "Giày Thể Thao Cao Cấp Nam Biti's Hunter X Army Green DSMH05100REU (Rêu)",
    "link": "https://www.bitis.com.vn/products/giay-the-thao-cao-cap-nam-biti-s-hunter-x-army-green-dsmh05100reu-reu",
    "img": "https://product.hstatic.net/1000230642/product/dsmh05100reu-2_2e3534c18d1d45968c3a41f9055db2e3.jpg",
    "price": "999,000 ₫"
  },
  {
    "title": "Giày Thể Thao Nam Biti's Hunter Street x VietMax | Vietnam Arising R8 Black DSMH05700DEN",
    "link": "https://www.bitis.com.vn/products/giay-the-thao-nam-biti-s-hunter-street-x-vietmax-vietnam-arising-r8-black-dsmh05700den",
    "img": "https://product.hstatic.net/1000230642/product/03_9eb0ee34c5f34c25b1a22a3a007e0339.jpg",
    "price": "1,399,000 ₫"
  },
  {
    "title": "Giày Thể Thao Nam Biti's Hunter Street x VietMax | Vietnam Arising R9 Bold DSMH05600DEN",
    "link": "https://www.bitis.com.vn/products/giay-the-thao-nam-biti-s-hunter-street-x-vietmax-vietnam-arising-r9-bold-dsmh05600den",
    "img": "https://product.hstatic.net/1000230642/product/02_fb96605aaf6941a19ca8a037ad2c769a.jpg",
    "price": "1,149,000 ₫"
  },
  {
    "title": "Giày Thể Thao Nam Biti's Hunter Street x VietMax | Vietnam Arising R3 Gold DSMH05500NAU",
    "link": "https://www.bitis.com.vn/products/giay-the-thao-nam-biti-s-hunter-street-x-vietmax-vietnam-arising-r3-gold-dsmh05500nau",
    "img": "https://product.hstatic.net/1000230642/product/01_e07b5f71bd82468da19d879d25014315.jpg",
    "price": "1,499,000 ₫"
  },
  {
    "title": "Giày Thể Thao Cao Cấp Nam Biti's Hunter Core Classic Blue DSMH05000XDG (Xanh Dương)",
    "link": "https://www.bitis.com.vn/products/giay-the-thao-cao-cap-nam-biti-s-hunter-core-classic-blue-dsmh05000xdg-xanh-duong",
    "img": "https://product.hstatic.net/1000230642/product/dsmh0500xdg-2_1e5fbe11780b4564b4959fe8750cc113.jpg",
    "price": "699,000 ₫"
  },
  {
    "title": "Giày Thể Thao Cao Cấp Nam Biti's Hunter Core Classic Grey DSMH05000XAM (XAM)",
    "link": "https://www.bitis.com.vn/products/giay-the-thao-cao-cap-nam-biti-s-hunter-core-classic-grey-dsmh05000xam-xam",
    "img": "https://product.hstatic.net/1000230642/product/dsmh05000xam__7__1eef9705616447ed9de490c30692d10a.jpg",
    "price": "699,000 ₫"
  },
  {
    "title": "Giày Thể Thao Nam Biti's Hunter Street Vintage Green DSMH04000XNG (Xanh Ngọc)",
    "link": "https://www.bitis.com.vn/products/giay-the-thao-nam-biti-s-hunter-street-vintage-green-dsmh04000xng-xanh-ngoc",
    "img": "https://product.hstatic.net/1000230642/product/dswh04000xng-1_fdd231b2b0ca44808f2d811cda188213.jpg",
    "price": "599,000 ₫"
  },
  {
    "title": "Giày Thể Thao Nam Biti's Hunter Street Vintage Black DSMH04000DEN (Đen)",
    "link": "https://www.bitis.com.vn/products/giay-the-thao-nam-biti-s-hunter-street-vintage-black-dsmh04000den-den",
    "img": "https://product.hstatic.net/1000230642/product/dsmh0400den-2_f9306264a1bf467fba65764b6fdb3ece.jpg",
    "price": "599,000 ₫"
  },
  {
    "title": "Giày Thể Thao Nam Biti's Hunter X Festive Aurora Black DSMH03401XDG (xanh Dương)",
    "link": "https://www.bitis.com.vn/products/giay-the-thao-nam-biti-s-hunter-x-festive-aurora-black-dsmh03401xdg-xanh-duong",
    "img": "https://product.hstatic.net/1000230642/product/dswh03401hod__7__ead78fcb663a44fd8b3a073831021d67.jpg",
    "price": "999,000 ₫"
  },
  {
    "title": "Giày Thể Thao Nam Biti's Hunter Street Vintage Blue  DSMH04000XDL (Xanh Dương Lợt)",
    "link": "https://www.bitis.com.vn/products/giay-the-thao-nam-biti-s-hunter-street-vintage-blue-dsmh04000xdl-xanh-duong-lot",
    "img": "https://product.hstatic.net/1000230642/product/dswh04000xdl-1_735e260847494b8c9caf7adeb44c4cd9.jpg",
    "price": "599,000 ₫"
  },
  {
    "title": "Giày Thể Thao Nam Biti's Hunter Core Festive Snowflake Blue DSMH04200TRG (Trắng)",
    "link": "https://www.bitis.com.vn/products/giay-the-thao-nam-biti-s-hunter-core-festive-snowflake-blue-dsmh04200trg",
    "img": "https://product.hstatic.net/1000230642/product/dsmh04200trg__3__23b5f7d04eae4a458202de31bf4e094a.jpg",
    "price": "799,000 ₫"
  },
  {
    "title": "Giày Thể Thao Nam Biti's Hunter Core Festive Breezer Black DSMH04200DEN (Đen)",
    "link": "https://www.bitis.com.vn/products/giay-the-thao-nam-biti-s-hunter-core-festive-breezer-black-dsmh04200den-den",
    "img": "https://product.hstatic.net/1000230642/product/dsmh04200den__3__483c6547abee43c2acac5850822072f0.jpg",
    "price": "799,000 ₫"
  },
  {
    "title": "Giày Thể Thao Nam Biti's Hunter X Festive Frosty-White DSMH03500TRG (Trắng)",
    "link": "https://www.bitis.com.vn/products/giay-the-thao-nu-biti-s-hunter-x-festive-washed-pink-grey-dsmh03500trg-trang",
    "img": "https://product.hstatic.net/1000230642/product/dsmh03500trg__6__d26559701138471888855c5a80a86ce1.jpg",
    "price": "899,000 ₫"
  }
]

async function demo(link) {
  for (i = 0; i < arr.length; i++) {
    let a = await new Promise((res, rej) => {
      const arr2 = []
      request(`${arr[i].link}`, (error, request, html) => {
        if (!error && request.statusCode == 200) {
          console.log(arr[i])
          const $ = cheerio.load(html);
          const siteHeading = $('.product-info');
          siteHeading.each((i, el) => {
            // item = $(el).find('a').attr('data-image').replace(/\/\//g, 'https://');
            names = $(el).find('.name').attr('title');
            // arr2.push(item);
            // obj = {
            //   arr2,
            //   ...arr[i]
            // }
          });
          res(names)
        }
      })
    });
    console.log(a)
  }
}

demo()