const vm = new Vue({
  el: "#app",

  data: {
    welcomeMessage: "Our first Vue app!",

    targetURL: "http://vuejs.org",

    anchorOff: true,

    hazVue: true,

    anotherMessage: "yay! Its working!",

    deliciousFruit: [
      { name: "apple", flavour: "tasty!" },
      { name: "oranges", flavour: "sweet" },
      { name: "pinapple", flavour: "tangy" },
      { name: "grape", flavour: "sweet" }
    ],

    message: "Hello You!",

    todos: [
      { text: "Learn JavaScript" },
      { text: "Learn Vue" },
      { text: "Build something awesome" }
    ],
    show: true
  },

  methods: {
    logFruit(e) {
      console.log(e.currentTarget);
    },
    reverseMessage: function() {
      this.message = this.message
        .split("")
        .reverse()
        .join("");
    },

    changeText() {
      this.anotherMessage = "changed this from a function call";
    }
  }
});
// not good practice .. using modules would be good practice
const vm2 = new Vue({
  el: "#footer",

  data: {
    footerMessage: "this should be in the footer"
  }
});
