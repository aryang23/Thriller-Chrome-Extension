let leetcodeQuesBtn = document.querySelector(".leetcodeQues");
let clist = document.querySelector(".clist");
let css = document.querySelector(".css3Icon");
let bestResource = document.querySelector(".pep");
// let saveLQ = document.querySelector(".saveLeetcode");
let openLQ = document.querySelector(".saveLeetcode");
let leetcodeContainer = document.querySelector(".leetcode-container");
let leetcodeCisOpen = false;


leetcodeQuesBtn.addEventListener("click", function () {
    let leetcodeURL = "https://leetcode.com/explore/challenge/card/february-leetcoding-challenge-2021/";
    window.open(leetcodeURL, '_blank');
})

clist.addEventListener("click", function () {
    let clistURL = "https://clist.by/";
    window.open(clistURL, '_blank');
})

css.addEventListener("click", function () {
    let cssUrl = "https://100dayscss.com/";
    window.open(cssUrl, '_blank');
})

bestResource.addEventListener("click", function () {
    let pepUrl = "https://www.pepcoding.com/";
    window.open(pepUrl, '_blank');
})

// saveLQ.addEventListener("click",function(){
//     let text = document.querySelector(".css-v3d350");
//     let textArr = text.split(" ");
//     let number = textArr[0];
//     let quesName = textArr[1];
//     let link = window.location.href;
//     console.log(link);
// })

// openLQ.addEventListener("click", function () {
//     if (leetcodeCisOpen == false) {
//         leetcodeContainer.style.display = "block";
//     } else {
//         leetcodeContainer.style.display = "none";
//     }
//     leetcodeCisOpen = !leetcodeCisOpen;
// })

openLQ.addEventListener("click",function(){
    let calendarUrl = "https://calendar.google.com/calendar/u/0/r/month";
    window.open(calendarUrl, '_blank');
})