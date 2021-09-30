const offerData = [
    {
        img:"https://www.easemytrip.com/images/offer-img/free-fligh-22sep-hp.png",
        title:"Free Flight Cancellation Coverage",
        detail:"Get complimentary flight cancellation insurance on every flight booking",
        date:"Book Now",
        promocode:""
    },

    {
        img:"https://www.easemytrip.com/images/train-img/20train-1sep-hp.png",
        title:"Cashback Offer",
        detail:"Book Train Tickets and Enjoy 20% Cashback in Wallet",
        date:"Valid till: 30th Sep, 2021",
        promocode:"EMTTRAIN20"
    },

    {
        img:"https://www.easemytrip.com/images/offer-img/expo-2020-hp.png",
        title:"Expo 2020 Dubai",
        detail:"Experience the best of Expo 2020 Dubai with EaseMyTrip. ",
        date:"Buy tickets here",
        promocode:""
    },

    {
        img:"https://www.easemytrip.com/images/offer-img/invite_earn_hp.png",
        title:"Invite & Earn",
        detail:"Now Earn Money by Inviting Your Friends to EaseMyTrip Up to Rs. 2000 ",
        date:"Start inviting now",
        promocode:""
    },

    {
        img:"https://www.easemytrip.com/images/offer-img/EMTFirst_hp.png",
        title:"New User Offer",
        detail:"Register and Get Discount on Booking First Flight with Us",
        date:"Valid till: 30th Sep, 2021",
        promocode:"EMTFIRST"
    },

    {
        img:"https://www.easemytrip.com/images/offer-img/hdfcemt_hp.png",
        title:"HDFC Bank",
        detail:"Grab Best Deals on Travel Using HDFC Bank Credit Cards",
        date:"Valid till: 28th Sep, 2021",
        promocode:"HDFCEMT"
    },
  
];


const travelBlog = [
    {
        img:"https://www.easemytrip.com/images/offer-img/future-cloud-computing-hp.jpg",
        detail:"The Role Of Cloud Computing In Shaping The Future Of The Travel Industry",
        date:"September 6, 2021",
        
    },

    {
        img:"	https://www.easemytrip.com/images/offer-img/future-of-cruise-hp.jpg",
        detail:"How Technology Will Help Cruise Lines Restart Operations Post-Pandemic",
        date:"August 25, 2021",
        
    },

    {
        img:"https://www.easemytrip.com/images/offer-img/places-in-france-hp.jpg",
        detail:"Discover Europe In A New Light With Our France Tourism Packages",
        date:"August 19, 2021",
        
    },

    {
        img:"https://www.easemytrip.com/images/offer-img/cordelia-cruise-hp.jpg",
        detail:"All You Need To Know About Cordelia Cruise",
        date:"September 13, 2021",
        
    },

    {
        img:"https://www.easemytrip.com/images/offer-img/future-cloud-computing-hp.jpg",
        detail:"The Role Of Cloud Computing In Shaping The Future Of The Travel Industry",
        date:"September 6, 2021",
        
    },

    {
        img:"	https://www.easemytrip.com/images/offer-img/future-of-cruise-hp.jpg",
        detail:"How Technology Will Help Cruise Lines Restart Operations Post-Pandemic",
        date:"August 25, 2021",
        
    },

    {
        img:"https://www.easemytrip.com/images/offer-img/places-in-france-hp.jpg",
        detail:"Discover Europe In A New Light With Our France Tourism Packages",
        date:"August 19, 2021",
        
    },

    {
        img:"https://www.easemytrip.com/images/offer-img/cordelia-cruise-hp.jpg",
        detail:"All You Need To Know About Cordelia Cruise",
        date:"September 13, 2021",
        
    },
    

]

let storeOfferData = JSON.stringify(offerData);

localStorage.setItem("storeOfferData",storeOfferData);

let getofferData = JSON.parse(localStorage.getItem("storeOfferData"))

let offerDiv = document.getElementById("offerSectionData");

function showOfferData(data){

    data.forEach(function(ele){
        let divMain = document.createElement('div');
        let bigdiv = document.createElement('div');
        let div1 = document.createElement('div');
        let div2 = document.createElement('div');
        let div3 = document.createElement('div');

        let img = document.createElement('img');
        let h4 = document.createElement('h4');
        let p1 = document.createElement('p');
        let p2 = document.createElement('p');

        img.src = ele.img;
        h4.innerText=ele.title;
        p1.innerText=ele.detail;
        p2.innerText=ele.date;

        div1.append(img)
        div2.append(h4,p1)
        bigdiv.append(div1,div2)
        bigdiv.classList.add("offerDetail");

        div3.append(p2)
        div3.classList.add("offerDetailDate");

        divMain.append(bigdiv,div3);
        divMain.classList.add("offerDetailMain");
        
        offerDiv.append(divMain);

    });
    
}

showOfferData(getofferData);






let travelBlogDiv = document.getElementById("travelBlogsData");


function showTravelData(data){


data.forEach(function(ele){
        let divMain = document.createElement('div');
        
        let div1 = document.createElement('div');
        let div2 = document.createElement('div');
        let div3 = document.createElement('div');

        let img = document.createElement('img');
        let p1 = document.createElement('p');
        let p2 = document.createElement('p');

        img.src = ele.img;
        p1.innerText=ele.detail;
        p2.innerText=ele.date;

        div1.append(img)
        div2.append(p1)
        div3.append(p2)
        div3.classList.add("offerDetailDate");
        divMain.append(div1,div2,div3);
        divMain.classList.add("offerDetailMain");
        travelBlogDiv.append(divMain);

    });

}

showTravelData(travelBlog);

let but1 = document.getElementById("tw");
function addId(){

  
   but1.setAttribute('id','two')

  but1.checked=true;

 
}

function removeId(){

  let but2 = document.getElementById("on");
   but1.setAttribute('id','two')

  but1.checked=false;

  

}


let but3 = document.getElementById("twe");
function addIdtravel(){

  
   but3.setAttribute('id','two')

  but3.checked=true;
 
}

function removeIdtravel(){

  let but4 = document.getElementById("one");
   but3.setAttribute('id','two')

  but3.checked=false;

}