Page({
  data:{
      list:['选项一','选项二','选项三'],
      currentIndex:0,
      startTime:"00:00",
      endTime:'24:00',
      selectTime:'12:00',
      startDate:'2016-01-01',
      endDate:'2016-12-31',
      selectDate:'2016-10-01'
  },
  change:function(e){
      this.setData({
          currentIndex:e.detail.value
      });
  },
  changeTime:function(e){
      console.log(e.detail.value)
      this.setData({
          selectTime: e.detail.value
      });
  },
  changeDate: function (e) {
      console.log(e.detail.value)
      this.setData({
          selectDate: e.detail.value
      });
  }  
});