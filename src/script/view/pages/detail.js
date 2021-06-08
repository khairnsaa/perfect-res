import RestaurantDbSource from '../../data/restaurantdb-source';
import UrlParser from '../../routes/url-parser';
import LikeButtonInitiator from '../../utils/like-button-initiator';
import { renderRestaurantDetailTemplate } from '../templates/template-creator';

const Detail = {

  async render() {
    return `
            <section id="restaurantDetail" class="restaurant_detail"></section>
            <div id="likeButtonContainer"></div>
        `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveWithoutCombiner();
    const restaurant = await RestaurantDbSource.detailRestaurant(url.id);
    console.log(restaurant.restaurant);
    const restaurantContainer = document.querySelector('#restaurantDetail');
    restaurantContainer.innerHTML = renderRestaurantDetailTemplate(restaurant);

    // like button logic
    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      restaurant: {
        id: restaurant.restaurant.id,
        name: restaurant.restaurant.name,
        rating: restaurant.restaurant.rating,
        pictureId: restaurant.restaurant.pictureId,
        city: restaurant.restaurant.city,
        description: restaurant.restaurant.description,
      },
    });
  },

};

export default Detail;
