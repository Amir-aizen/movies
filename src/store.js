import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  //storing all the data that we will be using in our app
  state: {
    johnWick: [
      {
        id: 1,
        link: "https://en.wikipedia.org/wiki/John_Wick",
        imagePath: "./static/assets/johnwick.jpg"
      }
    ],
    johnWickTwo: [
      {
        id: 2,
        link: "https://www.imdb.com/title/tt4425200/",
        imagePath: "./static/assets/johnwicktwo.jpg"
      }
    ],
    johnWickThree: [
      {
        id: 3,
        link: "https://en.wikipedia.org/wiki/John_Wick:_Chapter_3_–_Parabellum",
        imagePath: "./static/assets/JohnWick3.png"
      }
    ],
    Terminator: [
      {
        id: 4,
        link: "https://en.wikipedia.org/wiki/Terminator_(genetics)",
        imagePath: "./static/assets/T4_250.jpg"
      }
    ],
    spiderMan: [
      {
        id: 5,
        link: "https://en.wikipedia.org/wiki/Spider-Man",
        imagePath: "./static/assets/spiderman.jpg"
      }
    ],
    fastFurious: [
      {
        id: 6,
        link: "https://en.wikipedia.org/wiki/The_Fast_and_the_Furious",
        imagePath: "./static/assets/fastfurious.jpg"
      }
    ],
    Avengers: [
      {
        id: 7,
        link: "https://en.wikipedia.org/wiki/Avengers:_Endgame",
        imagePath: "./static/assets/the avengers.jpg"
      },
      {
        id: 347,
        link: "https://en.wikipedia.org/wiki/Avengers:_Endgame",
        imagePath: "./static/assets/fastfurious.jpg"
      }
    ],
    ironMan: [
      {
        id: 8,
        link: "https://en.wikipedia.org/wiki/Iron_Man_3",
        imagePath: "./static/assets/Iron_Man_2_poster.jpg"
      }
    ]
  },
  mutations: {},
  actions: {},
  getters: {
    //retrieving the data from the state
    getJohnWick: state => state.johnWick,
    getJohnWickTwo: state => state.johnWickTwo,
    getJohnWickThree: state => state.johnWickThree,
    getTerminators: state => state.Terminator,
    getSpiderMan: state => state.spiderMan,
    getFastFurious: state => state.fastFurious,
    getAvengers: state => state.Avengers,
    getIronMan: state => state.ironMan
  }
});
