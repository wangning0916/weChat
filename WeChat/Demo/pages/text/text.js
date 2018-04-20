var index = 1;
var str = "";
var array = ["第1条"];
Page({
    data:{
        text:array,
        str:'组件text是支持换行的\n换行之后\t空格之前'
    },
    add:function(){
        index ++;
        str = "第" + index + "条";
        array.push(str);
        this.setData({
            text:array
        });
    },
    remove:function(){
        if(array.length > 0){
            array.pop();
        }
        if(array.length == 0){
            index = 0;
        }
        this.setData({
            text: array
        });
    }
});