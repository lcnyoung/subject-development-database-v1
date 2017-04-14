$(function(){
    //Menu Switch
    var h1 = $(".SDD").height();
    var h2 = $(".SDA").height();
    var h3 = $(".SSE").height();
    var h4 = $(".BSW").height();
    var h5 = $(".SR").height();
    tab(0,20);tab(1,h1);tab(2,h1);tab(3,h1);tab(4,h1+h2);tab(5,h1+h2+h3+h4);tab(6,h1+h2+h3+h4+h5)
    
    $(window).resize(function(){
        h1 = $(".SDD").height();
        h2 = $(".SDA").height();
        h3 = $(".SSE").height();
        h4 = $(".BSW").height();
        h5 = $(".SR").height();
        tab(0,20);tab(1,h1);tab(2,h1);tab(3,h1);tab(4,h1+h2);tab(5,h1+h2+h3+h4);tab(6,h1+h2+h3+h4+h5)
    })
    
    function tab(i,h){
        $(".tab").eq(i).on("click",function(){
            $("body").stop(true).animate({"scrollTop":h})
        }) 
    }
    //back to top 
        $(".btt").on("click",function(){
            $("body").stop(true).animate({"scrollTop":20})
        })
        $(window).scroll(function(){
            if($(window).scrollTop() >= h1){
                $(".top").removeClass("h");
            } else{
                $(".top").addClass("h");
            }
        })
    //media screen menu 
    $(".index").on("click",function(){
        if($(this).hasClass("h")){
            $(this).removeClass("h")
        } else{
            $(this).addClass("h")
        }
    })

    $(window).scroll(function(){
        $(".index").addClass("h");
    })
    
    // scrolling 
    if($(window).width() >= 960){
        hide();
    } else{
        show();
    }
    
    var w = $(window).width();
    $(window).resize(function(){
        w = $(window).width();
        if(w >= 960){
            hide();
        } else{
            show();
        }
        
        
       
    })
    
    function hide(){
        $(".con-sdd").hide();
        $(".tit,li").hide();
        $(".setit,.con").hide();
        $(".cover p,.SD,.find,.books,.pearson").hide();
        $(".name,.add,.icon1,.icon2,.icon3").hide();
        $(".con-sdd").fadeIn(1500);
    }
    function show(){
        $(".con-sdd").show();
        $(".tit,li").show();
        $(".setit,.con").show();
        $(".cover p,.SD,.find,.books,.pearson").show();
        $(".name,.add,.icon1,.icon2,.icon3").show();
    }
    
    $(window).scroll(function(){
        var i = $(window).scrollTop();
        var h1 = $(".SDD").height();
        var h2 = $(".SDA").height();
        var h3 = $(".SSE").height();
        var h4 = $(".BSW").height();
        var h5 = $(".SR").height();
        if(i > h1/2 && i < h1){
            $(".tit,li").fadeIn(1500);
        } else if(i >= h1 && i < h1 + h2 + 50 ){
            $(".setit,.con").fadeIn(1500);
        } else if(i >= h1 + h2 + h3 + 100 && i < h1 + h2 + h3 + h4){
            $(".cover p,.SD,.find,.books,.pearson").fadeIn(1500);
        } else if(i > h1 + h2 + h3 + h4 + 300){
            $(".name,.add,.icon1,.icon2,.icon3").fadeIn(1500);
        }
    })
    
    //map
    $(".btn").on("click",function(){
        $(".map").fadeIn();
        $(".close").fadeIn();
        $(".shadow").fadeIn();
        var map = new BMap.Map("allmap");
        var point = new BMap.Point(118.786471,32.029215);
        map.centerAndZoom(point, 16);
        var marker = new BMap.Marker(point);  // 创建标注
        map.addOverlay(marker);               // 将标注添加到地图中
        marker.setAnimation(BMAP_ANIMATION_BOUNCE); //跳动的动画
        map.enableScrollWheelZoom(true);     //开启鼠标滚轮缩放
        var opts = {
          position : point,    // 指定文本标注所在的地理位置
          offset   : new BMap.Size(-30, 0)    //设置文本偏移量
        }
        var label = new BMap.Label("欣才IT学院", opts);  // 创建文本标注对象
        label.setStyle({
             color : "red",
             fontSize : "12px",
             height : "20px",
             lineHeight : "20px",
             fontFamily:"微软雅黑"
         });
        map.addOverlay(label);  
        $(window).on("resize", function () {
             var loadCount = 1;
             map.addEventListener("tilesloaded", function () {
             if (loadCount == 1) {
                map.setCenter(point);
             }
             loadCount = loadCount + 1;
             });
        })
    })
    $(".close").on("click",function(){
        $(this).fadeOut();
        $(".map").fadeOut(); 
        $(".shadow").fadeOut();
    })
})