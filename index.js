const request = require("request");
var rp = require("request-promise");
const cheerio = require("cheerio");
const fs = require("fs");

async function dequy(n, arrNext) {
  if (n <= 10) {
    let arr = [];
    let $ = await rp({
      uri: `https://www.bitis.com.vn/collections/be-gai?page=${n}`,
      transform: function (body) {
        return cheerio.load(body);
      },
    });
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

    arrNext.push(...arr);
    dequy(n + 1, arrNext);
  } else {
    // console.log(arrNext);
    let arr = [...arrNext];
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
    fs.writeFileSync("data_productBeGai.json", JSON.stringify(arr));
    return;
  }
}

dequy(1, []);
