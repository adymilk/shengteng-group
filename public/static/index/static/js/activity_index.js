
// 活动定时器
 
 var mDate = new Date();
var y = mDate.getFullYear();
var m = mDate.getMonth()+1;
var d = mDate.getDate();
var h = mDate.getHours();
var mm = mDate.getMinutes();
var ss = mDate.getSeconds();

var cur_time = y+'-'+m+'-'+d+' '+h+':'+mm+':'+ss;
var start_time = "2018-05-13 09:00:00";
var end_time = "2018-05-13 12:00:59";

var notStart = (new Date(cur_time).getTime()) -(new Date(start_time).getTime());
var isOver = (new Date(cur_time).getTime()) -(new Date(end_time).getTime());

var lastTime = (new Date(start_time).getTime()) -(new Date(cur_time).getTime());

    if (notStart < 0) {
        // alert("距离【宿州盛腾家装开业】活动开始还剩："+ new Date(lastTime).getDate()+" 天"+new Date(lastTime).getHours()+" 小时");

    }else if (isOver > 0) {
        alert("活动已结束！");
        $("body").html("<h1 align='center'>活动已结束！</h1>");
    }
console.log(cur_time);
console.log(start_time);
console.log(end_time);


//表单验证非空
function order1() {{
    $.ajax({
        type: "POST",
        url: "http://0551shengteng.com/shengteng_latest/public/index.php/admin/data_center/orderAdd",
        data: $("#form1").serialize(),
        success: function (data) {
            alert(data.msg);
            $('#form1').attr('onsubmit', 'return false;');
        },
        error: function (data) {
            alert(data.msg);
        }
    });
    return false;
}}

function order2() {{
    $.ajax({
        type: "POST",
        url: "http://0551shengteng.com/shengteng_latest/public/index.php/admin/data_center/orderAdd",
        data: $("#form2").serialize(),
        success: function (data) {
            alert(data.msg);
            $('#form2').attr('onsubmit', 'return false;');
        },
        error: function (data) {
            alert(data.msg);
        }
    });
    return false;
}}

//图片懒加载
$(function () {
    $("img").addClass("lazy");
    $("img.lazy").lazyload({//图片懒加载
        effect : "fadeIn",//图片显示效果
        threshold : 400,//距离可视区域提前加载图片
    });
});

// 滚动到底部

function scrollEnd(){
    animate({scrollTop:scrollHeight}, 400);
}
