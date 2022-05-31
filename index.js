const reviews=[
    {
id :0,
name: "Akhrorjon Sobirov",
job: "Web developer",
img: "green card photo.jpg",
text: "I am a senior web-developer. My aim is to give a better service rather than they expect. I can able to create an amazing interactive applications and websites"
    },
{
    
    id:1,
    name: "Brad Smith",
    job: "The Boss",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCUuIaszjqcT0A0McmDFleC5mKrPa0U18wHA&usqp=CAU",
    text: "There are no formal educational or licensure requirements to become a web designer. However, many colleges and trade schools offer coursework in web development.",
},

{
id: 2,
name: "Susan Lindsay",
job: "Web-designer",
img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFKuC4Ry-PPfU2OIeE_4jGIzx0eMQQZkcAoQ&usqp=CAU",
text: "There are also many tutorials and articles, which teach web development, freely available on the web - for example, on Basic JavaScript. There are a lot of modern web-design tools",
},

{
    id: 3,
    name: "George Rite",
    job: "Project Manager",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVrqk9-Na-qjJ53SQI2I9jVpUh7oRpBwqWkQ&usqp=CAU",
text: "Even though there are no formal requirements, dealing with web developing projects requires those who wish to be referred to as web developers to have advanced knowledge and skills ",
},

{
    id: 4,
    name: "Liza Macmanaman",
    job: "Ux designer",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoAUa1_yBlFTU40PgrAiqri_ZXADiKrNHCPQ&usqp=CAU",
    text: "A web developer is a programmer who specializes in, or is specifically engaged in, the development of World Wide Web applications using a client–server model.",
},


];

const photo=document.querySelector('.photo');

const author=document.getElementById('author');

const job=document.getElementById('job');

const info=document.getElementById('info');

// buttons
const prevBtn=document.querySelector('.prev-btn');
const nextBtn=document.querySelector('.next-btn');
const randomBtn=document.querySelector('.random-btn');



// set initial items
let currentItem=0;

window.addEventListener('DOMContentLoaded', function(){
    // console.log("shake and bake");
    showPerson(currentItem);
    
});

function showPerson (person){
    const item=reviews[person];
    photo.src=item.img;
    author.textContent=item.name;
    job.textContent=item.job;
    info.textContent=item.text;
}


// show next person


nextBtn.addEventListener('click', function(){
    currentItem ++;
    if (currentItem > reviews.length-1){
        currentItem=0;
    }
    showPerson(currentItem);
});

prevBtn.addEventListener('click', function(){
currentItem --;
if (currentItem < 0){
    currentItem=reviews.length-1;
}
showPerson(currentItem);
});

// random button challenge

randomBtn.addEventListener('click', function(){
    const surpriseMe=randomNumber();
    // console.log(surpriseMe);
    showPerson(surpriseMe);
    });
    
    function randomNumber(){
        return Math.floor(Math.random()*reviews.length);
    }