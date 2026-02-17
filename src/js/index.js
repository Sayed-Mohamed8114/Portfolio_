

document.querySelector('.collapse-toggle').addEventListener('click', function() {
  const targetId = this.getAttribute('data-collapse');
  const targetElement = document.querySelector(targetId);

  if (targetElement) {
    targetElement.classList.toggle('hidden');
    
    if (!targetElement.classList.contains('hidden')) {
      targetElement.style.height = 'auto';
    } else {
      targetElement.style.height = '0';
    }
  }
});

document.addEventListener("mousemove",(event)=>{
    const x=event.clientX/window.innerWidth -0.4;
    const y=event.clientY/window.innerWidth -0.4;

    document.querySelectorAll('.parallax').forEach((element)=>{
        const speed=element.getAttribute("data-speed");
        element.style.transform=`translate(${x*speed*10}px,${y*speed*10}px)`
    });
})

let words=[ " Sayed Mohamed ", " a Software Engineer "," a web Developer "," a Data analyst "];
let i=0;
let j=0;
let currentword="";
let isDeleting=false;
let typingELement=document.getElementById("typing");
function typeEffect(){
  currentword=words[i];
  if (isDeleting){
    typingELement.textContent=currentword.substring(0,j--);
  }else{
    typingELement.textContent=currentword.substring(0,j++);
  }

  if(!isDeleting && j===currentword.length){
    isDeleting=true;
    setTimeout(typeEffect,1000); // time before deleting
    return
  }

  if(isDeleting && j===0){
    isDeleting=false;
    i++;
    if(i=== words.length){
      i=0;
    }
  }
  setTimeout(typeEffect,isDeleting?60:100)
}

typeEffect();


document.querySelectorAll(".card").forEach(card =>{
  card.addEventListener("click",()=>{
    const container = document.querySelector(".con");

    container.classList.toggle("paused")
  })
})

const UiUx=document.getElementById("uiux");
const Landing=document.getElementById("landing");
const eCommerce=document.getElementById("ecommerce");
const dashBoard=document.getElementById("dashboard");
const webApp = document.getElementById("webApp");
const Fullstack =document.getElementById("fullstack");

const title=document.getElementById("title");
const p1=document.getElementById("p1");
const p2=document.getElementById("p2");

const services={
  uiux:{
    title:"UI/UX Design",
    p1:'UI (User Interface) is the visual skin of your product, while UX (User Experience) is the skeletal structure and logic. Greatdesign isn’t just about making things look "pretty"; it’s about creating an intuitive journey that guides a user from their first click to their final goal without frustration.',
    p2:'By focusing on user-centered research and high-fidelity prototyping, this service ensures your brand feels modern and professional. It reduces the "learning curve" for your customers, meaning they spend less time figuring out how to use your site and more time engaging with your content.'
  },
  landing: {
    title: "Landing Pages",
    p1: 'A Landing Page is a single-focus web page designed specifically for a marketing or advertising campaign. Unlike a full website, it removes distractions and provides one clear "Call to Action," such as signing up for a newsletter or purchasing a specific product.',
    p2: 'High-converting landing pages rely on persuasive layouts and fast loading speeds. They are the frontline of your sales funnel, turning cold traffic into warm leads by addressing a specific pain point and offering an immediate, clear solution.'
  },
  ecommerce: {
    title: "E-commerce Panel",
    p1: 'The E-commerce Panel is the "brain" behind your online store, allowing you to manage products, inventory, and customer orders in real-time. It transforms the complex world of retail into a simplified digital dashboard where you can track sales trends easily.',
    p2: 'A well-built panel provides secure payment integrations and automated workflows to ensure a smooth checkout. It empowers business owners to scale operations by providing detailed analytics on product performance and customer behavior.'
  },
  dashboard: {
    title: "Dashboard/Admin Panel",
    p1: 'An Admin Panel is a private control center used to manage the data and users of a web application. It acts as the "cockpit" for your business, giving you a high-level view of system health and user activity through visual charts and data tables.',
    p2: 'Efficiency is the priority here; the goal is to make complex data easy to read at a glance. By automating repetitive tasks and providing filtered search results, a custom dashboard saves your team hours of manual work and helps you make data-driven decisions.'
  },
  webapp: {
    title: "Web App",
    p1: 'A Web Application is a dynamic program that runs in a browser, offering functionality far beyond a standard website. Whether it is a project management tool or a booking system, web apps allow users to create, edit, and store data securely.',
    p2: 'Web apps are built to be fully responsive, meaning they work perfectly on desktops, tablets, and smartphones. They provide a native-app feel without requiring a download, making your services accessible to anyone with an internet connection.'
  },
  fullstack: {
    title: "Complete Fullstack Project",
    p1: 'A Fullstack Project is the "total package," covering both the Front-end (what the user sees) and the Back-end (server, database, and logic). This is a comprehensive solution where every layer of technology is built to work in perfect harmony.',
    p2: 'Choosing a fullstack approach ensures that your project is scalable, secure, and cohesive from the ground up. It is the ideal choice for businesses that need a custom-built platform tailored specifically to their unique requirements and long-term goals.'
  }
};

UiUx.addEventListener("click",()=>{
  title.innerText=services["uiux"].title;
  p1.innerText=services["uiux"].p1;
  p2.innerText=services["uiux"].p2;
});

Landing.addEventListener("click",()=>{
  title.innerText=services["landing"].title;
  p1.innerText=services["landing"].p1;
  p2.innerText=services["landing"].p2;
});

eCommerce.addEventListener("click",()=>{
  title.innerText=services["ecommerce"].title;
  p1.innerText=services["ecommerce"].p1;
  p2.innerText=services["ecommerce"].p2;
});

dashBoard.addEventListener("click",()=>{
  title.innerText=services["dashboard"].title;
  p1.innerText=services["dashboard"].p1;
  p2.innerText=services["dashboard"].p2;

});

webApp.addEventListener("click",()=>{
  title.innerText=services["webapp"].title;
  p1.innerText=services["webapp"].p1;
  p2.innerText=services["webapp"].p2;

});

Fullstack.addEventListener("click",()=>{
  title.innerText=services["fullstack"].title;
  p1.innerText=services["fullstack"].p1;
  p2.innerText=services["fullstack"].p2;
})