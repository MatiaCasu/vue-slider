var app = new Vue({
  el: "#app",
  data: {
    img:{
      srcImg: [
        "https://via.placeholder.com/1/0000FF",
        "https://via.placeholder.com/1/FF0000",
        "https://via.placeholder.com/1/FFF000",
      ],
      i: 0
    }
  },
  methods: {
    prev: function(){
      this.img.i--;

      if(this.img.i < 0){
        this.img.i = this.img.srcImg.length - 1;
      }
    },
    next: function(){
      this.img.i++;

      if(this.img.i === this.img.srcImg.length){
        this.img.i = 0;
      }
    }
  }

});
