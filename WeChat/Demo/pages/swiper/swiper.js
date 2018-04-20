//index.js
Page({
    data:{
        autoplay:true,
        List:[
            {className:'bg-red',name:'Swiper1'},
            {className:'bg-orange',name:'Swiper2'},
            {className:'bg-green',name:'Swiper3'}
        ],
        selfList:[
            {selected:true,image:'../images/wnimg1.jpg'},   
            {selected:false,image:'../images/wnimg2.jpg'},
            {selected:false,image:'../images/wnimg3.jpg'}              
        ]
    },
    change:function(event){
        console.log(event.detail)
    },
    play:function(){        
        this.setData({
            autoplay:!this.data.autoplay
        });      
    },
    //自定义
    selfChange:function(event){
        var s = this.data.selfList,i,item;

        for(i=0;item = s[i];++i){
            item.selected = event.detail.current == i;
        }
       
        this.setData({
            selfList:s
        });

    }
});