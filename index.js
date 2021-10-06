let as_nav_h2 = 'Luxury'
let as_nav_h3 = ''
let as_nav_list = [
    {
        name:"Home",
        href:"index.html"
    },{
        name:"Facilities",
        href:"facilities.html"
    },{
        name:"Rooms",
        href:"rooms.html"
    },{
        name:"Contact us",
        href:"contact.html"
    }
]


function err(){
    document.getElementById('as_error404').style.display='flex';
}

let header = document.querySelector('.head')
if(header){
    header.innerHTML=`
<div class="head_text">
    <h3>WELCOME TO</h3>
    <h2>LUXURY</h2>
    <h3>HOTELS</h3>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br> Nihil voluptates enim cum quia, odit perspiciatis!</p>
</div>
<div class="head_btn">
    <div id="as_btn" onclick="err()">
        <a href="#"><i class="far fa-book"></i> BOOK NOW</a>
    </div>
    <span>
        <h4>Scroll</h4>
        <a href="#page1" class="far fa-angle-down"></a>
    </span>
</div>    
    `}

let footer = document.querySelector('footer')
if(footer){
    footer.innerHTML=`
<ul>
    <li>
        <h2>Luxury - Hotels</h2><br>
        <p>This Landing page created <br> by Aziz Sobirov</p>
    </li>
    <li>
        <a href="#">About Us</a>
        <a href="#">Contact</a>
        <a href="#">Terms & Conditions</a>
    </li>
    <li>
        <a href="https://www.facebook.com/aziz.webdev"><i class="fab fa-facebook"></i> Facebook</a>
        <a href="https://t.me/Portfolio_AzizSobirov"><i class="fab fa-telegram"></i> Telegram</a>
        <a href="https://www.instagram.com/aziz.webdev"><i class="fab fa-instagram"></i>   Instagram</a>
    </li>
    <li>
        <h4>Subscribe to our newsletter</h4>
        <span>
            <input type="email" placeholder="Email Address">
            <button onclick="err()">OK</button>
        </span>
    </li>
</ul>`
}

let testimonials = document.querySelector('.testimonials')
if(testimonials){
    testimonials.innerHTML=`
    <h2>Testimonials</h2>
    <h4>"Calm, Serene, Retro – What a way to relax and enjoy"</h4>
    <h5> Mr. and Mrs. Baxter, UK</h5>
    <span>
        <h3 class="far fa-arrow-left"></h3>
        <h3 class="far fa-arrow-right"></h3>
    </span>`
}


let sec2 = document.querySelector(".sec2")
if(sec2){
    for(let f=1;f<=6;f++){
        sec2.innerHTML+=`<div class="sec2_img">
            <img src="./img/facilities/img${f}.png">
        </div>`
    }
}

let sec3 = document.querySelector(".sec3")
if(sec3){
    for(let r=1;r<=3;r++){
        sec3.innerHTML+=`
        <div class="sec3_img">
            <img src="./img/rooms/img${r}.png">
            <h2>SINGLE ROOM</h2>
            <span>
                <h4><i class="far fa-plus"></i> VIEW ROOM DETAILS</h4>
                <div id="as_btn">
                    <a href="#">$${300 / r}  Avg/night</a>
                </div>
            </span>
        </div>`
    }
}