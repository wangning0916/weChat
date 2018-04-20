Page({
    data:{
        items:[
            {name:'BJ',value:'北京',checked:true},
            {name:'SH',value:'上海',checked:false},
            {name:'GZ',value:'广州',checked:false},
            {name:'SZ',value:'深圳',checked:false}
        ]
    },
    change:function(e){
        console.log('checkbox发生change事件，携带value值为：', e.detail.value)
    }
});