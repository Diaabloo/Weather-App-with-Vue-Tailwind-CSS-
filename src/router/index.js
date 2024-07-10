// // import { createRouter, createWebHistory } from 'vue-router'
// // import HomeView from '../views/HomeView.vue'
// // import CityView from '../views/CityView.vue'

// // const router = createRouter({
// //   history: createWebHistory(import.meta.env.BASE_URL),
// //   routes: [
// //     {
// //       path: '/',
// //       name: 'home',
// //       component: HomeView
// //     },

// //     {
// //       path: "/weather/:state/:city",
// //       name: 'cityView',
// //       component: CityView,
// //       props: city => ({
// //         id: city.query.id,
// //         lat: city.query.lat,
// //         lng: city.query.lng,
// //       }),
// //     },
// //   ]
// // })

// // export default router

// import { createRouter, createWebHistory } from 'vue-router';
// import HomeView from '../views/HomeView.vue';
// import CityView from '../views/CityView.vue';

// const routes = [
//   {
//     path: '/',
//     name: 'home',
//     component: HomeView
//   },
//   {
//     path: '/weather/:state/:city',
//     name: 'cityView',
//     component: CityView,
//     props: route => ({
//       state: route.query.state,
//       city: route.query.city,
//     })
//   }
// ];

// const router = createRouter({
//   history: createWebHistory(import.meta.env.BASE_URL),
//   routes
// });

// export default router;


import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import CityView from "../views/CityView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
      meta: {
        title: "Home",
      },
    },
    {
      path: "/city/:state/:city",
      name: "cityView",
      component: CityView,
      meta: {
        title: "Weather",
      },
    },
  ],
});

router.beforeEach((to, from, next) => {
  document.title = `${
    to.params.state
      ? `${to.params.city}, ${to.params.state}`
      : to.meta.title
  } | To Day METEO`;
  next();
});

export default router;