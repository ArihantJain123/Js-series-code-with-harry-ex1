console.log("arihant jain ");

let str = "facebook";

let link = document;
link = document.links;
console.log(link);

let check;
Array.from(link).forEach(function (element) {
    check = element.check;
    if (check.includes(str)) {

        console.log(check);

    }


});

/*let str = "python";
let links = document.links;
console.log(links);
let href;
Array.from(links).forEach(function(element) {
  href = element.href;
  if (href.includes(str)) {
    console.log(href);
  }
});*/

