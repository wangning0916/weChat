Page({
  data:{
      icon:{
          size:'40',
          opacity:'10'
      }
  },
  sizeChange:function(e){
      console.log(e)
      this.data.icon.size = e.detail.value;
      this.setData(this.data);      
  },
  opacityChange:function(e){
      console.log(e)
      this.data.icon.opacity = e.detail.value;
      this.setData(this.data);
  }
});