import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import '../styles/responsive.css';
// import DATA.json
import data from '../DATA.json'


const menu = document.querySelector('#menu');
const exploreWrap = document.querySelector('.explore_wrap');
const navLinks = document.querySelector('nav');
const heroBrowseBtn = document.querySelector('.hero_browse');
const exploreSection = document.getElementById('explore');

// const renderExploreWrapper = (data) => {
//     const exploreWrapper = `
//     <div class="explore_wrapper">
//         <div class="explore_restaurant_img">
//             <img  src="${data.pictureId}" alt="${data.name}">
//         </div>
//         <div class="details">
//             <h2 class="explore_restaurant_name"><a href="#">${data.name}</a></h2>
//             <p class="explore_restaurant_detail">${data.description}</p>
//             <p class="explore_restaurant_city"><i class="fas fa-map-marker-alt"></i> ${data.city}</p>
//             <p class="explore_restaurant_rating"><i class="fas fa-star"></i> ${data.rating} </p>
//         </div>
//     </div>`

//     exploreWrap.insertAdjacentHTML('beforeend', exploreWrapper)
    
// };

// data.restaurants.forEach(restaurant => { 
//     console.log(restaurant.name)
//     renderExploreWrapper(restaurant)
    
// })

// menu.addEventListener('click', () => {
//     navLinks.classList.toggle('open')
// })

// heroBrowseBtn.addEventListener('click', () => {
//     exploreSection.scrollIntoView({
//         behavior: 'smooth'
//     })
// })