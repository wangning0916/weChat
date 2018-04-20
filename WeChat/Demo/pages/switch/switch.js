Page({
     data:{
        switchs:[
            {name:'switch1',changeEventName:'change',type:'switch',checked:true},
            {name:'switch2',changeEventName:'change',type:'checkbox',checked:false}
        ]
    },
    change:function(e){        
        var name = e.currentTarget.dataset.name,
            switchs = this.data.switchs,
            i,s;
        for(i=0;s=switchs[i];++i){
            if(s.name == name){
                s.checked = e.detail.value;
                break;
            }
        }
        console.log(name + "的选中状态为：" + e.detail.value)
    }
});