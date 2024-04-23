let count = 0;
let totalprice = 0;
let priceprint = document.querySelector("#total-price");
let full = document.querySelector("#msgouter");
let message = document.querySelector("#countmsg");
let image1 = document.querySelector("#img1");
let reset = document.querySelector("#reset");
let img1count = 0;
let pese1 = document.querySelector(".pese1");
let img2count = 0;
let pese2 = document.querySelector(".pese2");
let img3count = 0;
let pese3 = document.querySelector(".pese3");
let img4count = 0;
let pese4 = document.querySelector(".pese4");
let img5count = 0;
let pese5 = document.querySelector(".pese5");
let img6count = 0;
let pese6 = document.querySelector(".pese6");
let img7count = 0;
let pese7 = document.querySelector(".pese7");
let img8count = 0;
let pese8 = document.querySelector(".pese8");
reset.addEventListener("click",()=>{
    
        count = 0;
        totalprice=0;
        priceprint.innerText = totalprice;
        message.innerText =  count;
        img1count = 0;
        img2count = 0;
        img3count = 0;
        img4count = 0;
        img5count = 0;
        img6count = 0;
        img7count = 0;
        img8count = 0;
        pese1.innerText = "";
        pese2.innerText = "";
        pese3.innerText = "";
        pese4.innerText = "";
        pese5.innerText = "";
        pese6.innerText = "";
        pese7.innerText = "";
        pese8.innerText = "";
})
let indi1 = document.querySelector("#indi1");
image1.addEventListener("click",()=>{
    count++;
    if(count>8){
       message.innerText = "Cart is Full";
       priceprint.innerText = "Reached the limit";
    }else{
        totalprice+=5.00;
        priceprint.innerText = totalprice;
        img1count++;
        pese1.innerText =img1count;
        message.innerText =  count ;
    }
    
})
let image2 = document.querySelector("#img2");
image2.addEventListener("click",()=>{
    count++;
    if(count>8){
       message.innerText = "Cart is Full";
       priceprint.innerText = "Reached the limit";
    }else{
        totalprice+=6.00;
        priceprint.innerText = totalprice;
        img2count++;
        pese2.innerText =img2count;
        message.innerText =  count;
    }
    
})
let image3 = document.querySelector("#img3");
image3.addEventListener("click",()=>{
    count++;
    if(count>8){
       message.innerText = "Cart is Full";
       priceprint.innerText = "Reached the limit";
    }else{
        totalprice+=7.00;
        priceprint.innerText = totalprice;
        img3count++;
        pese3.innerText =img3count;
        message.innerText =  count;
    }
    
})
let image4 = document.querySelector("#img4");
image4.addEventListener("click",()=>{
    count++;
    if(count>8){
       message.innerText = "Cart is Full";
       priceprint.innerText = "Reached the limit";
    }else{
        totalprice+=8.00;
        priceprint.innerText = totalprice;
        img4count++;
        pese4.innerText =img4count;
        message.innerText =  count;
    }
    
})
let image5 = document.querySelector("#img5");
image5.addEventListener("click",()=>{
    count++;
    if(count>8){
       message.innerText = "Cart is Full";
       priceprint.innerText = "Reached the limit";
    }else{
        totalprice+=9.00;
        priceprint.innerText = totalprice;
        img5count++;
        pese5.innerText =img5count;
        message.innerText =  count;
    }
    
})
let image6 = document.querySelector("#img6");
image6.addEventListener("click",()=>{
    count++;
    if(count>8){
       message.innerText = "Cart is Full";
       priceprint.innerText = "Reached the limit";
    }else{
        totalprice+=10.00;
        priceprint.innerText = totalprice;
        img6count++;
        pese6.innerText =img6count;
        message.innerText =  count;
    }
    
})
let image7 = document.querySelector("#img7");
image7.addEventListener("click",()=>{
    count++;
    if(count>8){
       message.innerText = "Cart is Full";
       priceprint.innerText = "Reached the limit";
    }else{
        totalprice+=11.00;
        priceprint.innerText = totalprice;
        img7count++;
        pese7.innerText =img7count;
        message.innerText =  count;
    }
    
})
let image8 = document.querySelector("#img8");
image8.addEventListener("click",()=>{
    count++;
    if(count>8){
       message.innerText = "Cart is Full";
       priceprint.innerText = "Reached the limit";
    }else{
        totalprice+=12.00;
        priceprint.innerText = totalprice;
        img8count++;
        pese8.innerText =img8count;
        message.innerText =  count;
    }
    
})