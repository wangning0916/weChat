Page({
    data:{
        items:[
            {name:'北京',value:'1',checked:true},
            {name:'上海',value:'2',checked:false},
            {name:'广州',value:'3',checked:false},
            {name:'深圳',value:'4',checked:false}
        ]
    },
    change:function(e){
        console.log('选中的值为：', e.detail.value)
    }
});