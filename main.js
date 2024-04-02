Vue.createApp({
  data() {
    return {
      item: "",
      listOfItems: []
    };
  },
  methods: {
      
    testButton() {
            console.log('Hello');      
      this.listOfItems.push(this.item);
    
      this.item = ""; 
      // Clear the input field after pushing the item
    },
  }
}).mount("#app");
