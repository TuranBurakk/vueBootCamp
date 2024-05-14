const app = Vue.createApp({
  data() {
    return {
      title: "Test title",
      content: "Test content",

      eduflow: {
        title: "Test link",
        target: "_blank",
        url: "https://eduflow.kablosuzkedi.com",
        alt: "test-alt-vue",
      },
      owner: "Pogaca",
      coords: {
        x: 0,
        y: 0,
      },
    };
  },
  methods: {
    changeTitle(pTitle) {
      this.title = pTitle;
    },
    updateCoords(event) {
      this.coords = {
        x: event.x,
        y: event.y,
      };
    },
  },
}).mount("#app");
