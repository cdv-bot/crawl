const request = require("request");
var rp = require("request-promise");
const cheerio = require("cheerio");
const fs = require("fs");

let arrALl = [];

var options = {
  uri: "https://www.bitis.com.vn/collections/hunter-nam",
  transform: function (body) {
    return cheerio.load(body);
  },
};

var options1 = {
  uri: "https://www.bitis.com.vn/collections/hunter-nam?page=2",
  transform: function (body) {
    return cheerio.load(body);
  },
};
// rp(options)
//   .then(function ($) {
//     const siteHeading = $(".product-wrapper");

//     siteHeading.each((i, el) => {
//       const title = $(el).find(".product-image").find("a").attr("title");
//       const link = `https://www.bitis.com.vn${$(el)
//         .find(".product-image")
//         .find("a")
//         .attr("href")}`;
//       const img = `https:${$(el)
//         .find(".product-image")
//         .find("img")
//         .attr("src")
//         .replace(/_large/g, "")}`;
//       const price = $(el).find(".price").text();

//       let obj = {
//         title: title,
//         link: link,
//         img: img,
//         price: price,
//       };
//       console.log(obj);
//     });
//   })
async function name() {
  let arr = [];
  let $ = await rp(options);
  const siteHeading = $(".product-wrapper");
  siteHeading.each((i, el) => {
    const title = $(el).find(".product-image").find("a").attr("title");
    const link = `https://www.bitis.com.vn${$(el)
      .find(".product-image")
      .find("a")
      .attr("href")}`;
    const img = `https:${$(el)
      .find(".product-image")
      .find("img")
      .attr("src")
      .replace(/_large/g, "")}`;
    const price = $(el).find(".price").text();

    let obj = {
      title: title,
      link: link,
      img: img,
      price: price,
    };
    arr.push(obj);
  });
  for (i = 0; i < arr.length; i++) {
    let $ = await rp({
      uri: `${arr[i].link}`,
      transform: function (body) {
        return cheerio.load(body);
      },
    });
    const siteHeading = $(".product-thumb");
    let arrImg = [];
    siteHeading.each((i, el) => {
      const title = `https:${$(el)
        .find("img")
        .attr("src")
        .replace(/_small/g, "")}`;
      arrImg.push(title);
    });
    const size = $(".swatch-element");
    let arrSize = [];
    size.each((i, el) => {
      let numberSize = $(el).text().trim();
      arrSize.push(numberSize);
    });
    let maSp = $(".product-sku").find("span").text();
    let content = $(".product-description-wrapper").text().trim();

    arr[i] = {
      ...arr[i],
      listImg: arrImg,
      numberSize: arrSize,
      maSp: maSp,
      content: content,
    };
  }
  console.log(arr);
}
name();
// request(
//   "https://www.bitis.com.vn/collections/hunter-nam",
//   (error, request, html) => {
//     if (!error && request.statusCode == 200) {
//       const $ = cheerio.load(html);
//       const siteHeading = $(".product-wrapper");
//       // const sitePrice = $('.product_prices');
//       // const linkNext = $('.product-image');
//       siteHeading.each((i, el) => {
//         // const item = $(el).attr("src").replace(/\/\//g, 'https://').replace(/_large/g, "");
//         const title = $(el).find(".product-image").find("a").attr("title");
//         const link = `https://www.bitis.com.vn${$(el)
//           .find(".product-image")
//           .find("a")
//           .attr("href")}`;
//         const img = `https:${$(el)
//           .find(".product-image")
//           .find("img")
//           .attr("src")
//           .replace(/_large/g, "")}`;
//         const price = $(el).find(".price").text();

//         let obj = {
//           title,
//           link,
//           img,
//           price,
//         };
//         arrALl.push(obj);
//         // fs.writeFileSync('data.json', JSON.stringify(arr));
//       });
//       // let arr2 = [];
//       // sitePrice.each((i, el) => {
//       //   const item = $(el).find(".price").text();

//       //   arr2.push(item)
//       // })

//       // let arr3 = [];
//       // linkNext.each((i, el) => {
//       //   const item = $(el).find('a').attr('href');
//       //   arr3.push(`https://www.bitis.com.vn${item}`);
//       // });

//       // let a = arr2.map((price, index) => {
//       //   return { ...arr[index], price }
//       // })

//       // let b = arr3.map((link, index) => {
//       //   return {
//       //     ...a[index],
//       //     linkNext: link
//       //   }
//       // })

//       // console.log(b)
//     }
//   }
// );
// request(
//   "https://www.bitis.com.vn/collections/hunter-nam?page=2",
//   (error, request, html) => {
//     if (!error && request.statusCode == 200) {
//       const $ = cheerio.load(html);
//       const siteHeading = $(".product-wrapper");
//       // const sitePrice = $('.product_prices');
//       // const linkNext = $('.product-image')
//       siteHeading.each((i, el) => {
//         let sizeArr = [];
//         // const item = $(el).attr("src").replace(/\/\//g, 'https://').replace(/_large/g, "");
//         const title = $(el).find(".product-image").find("a").attr("title");
//         const link = `https://www.bitis.com.vn${$(el)
//           .find(".product-image")
//           .find("a")
//           .attr("href")}`;
//         const img = `https:${$(el)
//           .find(".product-image")
//           .find("img")
//           .attr("src")
//           .replace(/_large/g, "")}`;
//         const price = $(el).find(".price").text();

//         let obj = {
//           title,
//           link,
//           img,
//           price,
//         };
//         arrALl.push(obj);
//         console.log("Ád");
//         // fs.writeFileSync("data.json", JSON.stringify(arr));
//       });
//       // let arr2 = [];
//       // sitePrice.each((i, el) => {
//       //   const item = $(el).find(".price").text();

//       //   arr2.push(item)
//       // })

//       // let arr3 = [];
//       // linkNext.each((i, el) => {
//       //   const item = $(el).find('a').attr('href');
//       //   arr3.push(`https://www.bitis.com.vn${item}`);
//       // });

//       // let a = arr2.map((price, index) => {
//       //   return { ...arr[index], price }
//       // })

//       // let b = arr3.map((link, index) => {
//       //   return {
//       //     ...a[index],
//       //     linkNext: link
//       //   }
//       // })

//       // console.log(b)
//     }
//   }
// );
// console.log(arrALl);
