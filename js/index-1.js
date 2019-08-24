$(function () {
    var wineArr = [{
            "img": "img/首页/wine1.png",
            "descrip": "Marlborough Sauvignon Blanc 2016",
            "attr": ["ROSÉ","ALL"]
        },
        {
            "img": "img/首页/wine2.png",
            "descrip": "Marlborough Brookdale Organic Sauvignon Blanc 2014",
            "attr": ["WHITE","ALL"]
        },
        {
            "img": "img/首页/wine3.png",
            "descrip": "Central Otago Clutha Pinot Noir 2015",
            "attr": ["RED","ALL"]
        },
        {
            "img": "img/首页/wine4.png",
            "descrip": "Gisborne Chardonnay 2016",
            "attr": ["WHITE","ALL"]
        },
        {
            "img": "img/首页/wine5.png",
            "descrip": "Late Harvest Dessert Wine 2016",
            "attr": ["WHITE","ALL"]
        },
        {
            "img": "img/首页/wine6.png",
            "descrip": "Marlborough Pinot Gris 2017",
            "attr": ["WHITE","ALL"]
        },
        {
            "img": "img/首页/wine7.png",
            "descrip": "Marlborough Reserve Sauvignon Blanc 2016",
            "attr": ["WHITE", "RESERVE","ALL"]
        },
        {
            "img": "img/首页/wine8.png",
            "descrip": "Marlborough Brookdale Reserve Pinot Gris 2016",
            "attr": ["WHITE", "RESERVE","ALL"]
        },
        {
            "img": "img/首页/wine9.png",
            "descrip": "Central Otago Clutha Pinot Noir 2015",
            "attr": ["RED","ALL"]
        },
        {
            "img": "img/首页/wine10.png",
            "descrip": "Marlborough Reserve Riesling 2014",
            "attr": ["WHITE", "RESERVE","ALL"]
        },
        {
            "img": "img/首页/wine11.png",
            "descrip": "Marlborough Reserve Chardonnay 2016",
            "attr": ["WHITE", "RESERVE"]
        },
        {
            "img": "img/首页/wine12.png",
            "descrip": "Marlborough Sauvignon Blanc  2016",
            "attr": ["WHITE","ALL"]
        },
        {
            "img": "img/首页/wine13.png",
            "descrip": "Sparkling Rosé",
            "attr": ["SPARKLING", "ROSÉ","ALL"]
        },
        {
            "img": "img/首页/wine14.png",
            "descrip": "Sparkling Sauvignon Blanc",
            "attr": ["SPARKLING","ALL"]
        },
        {
            "img": "img/首页/wine15.png",
            "descrip": "Sara's Rosé 2017",
            "attr": ["ROSÉ", "ALL"]
        }
    ];
    createWineList("ALL");

    function createWineList(x) {
        $("ul.wine-list").empty();
        for (let i = 0; i < wineArr.length; i++) {
            for (let j = 0; j < wineArr[i]["attr"].length; j++) {
                if (x == wineArr[i]["attr"][j]) {
                    var $li = $("<li></li>"),
                        $a = $("<a href=''></a>"),
                        $div = $("<div></div>"),
                        $img = $("<img/>"),
                        $p = $("<p></p>");
                    $img.attr("src", wineArr[i]["img"]);
                    $p.text(wineArr[i]["descrip"]);
                    $div.append($img);
                    $a.append($div, $p);
                    $li.append($a);
                    $("ul.wine-list").append($li)
                }
            }

        }
    }
    $("a.all").click(function () {
        var n = $(this).text()
        $(this).addClass("a-active").parents("li").siblings().find("a").removeClass("a-active")
        createWineList(n);
    })

    $("a.white").click(function () {
        var n = $(this).text()
        $(this).addClass("a-active").parents("li").siblings().find("a").removeClass("a-active")
        createWineList(n);
    })

    $("a.red").click(function () {
        var n = $(this).text()
        $(this).addClass("a-active").parents("li").siblings().find("a").removeClass("a-active")
        createWineList(n);
    })

    $("a.sparkling").click(function () {
        var n = $(this).text()
        $(this).addClass("a-active").parents("li").siblings().find("a").removeClass("a-active")
        createWineList(n);
    })

    $("a.reserve").click(function () {
        var n = $(this).text()
        $(this).addClass("a-active").parents("li").siblings().find("a").removeClass("a-active")
        createWineList(n);
    })

    $("a.rose").click(function () {
        console.log(n)
        var n = $(this).text()
        $(this).addClass("a-active").parents("li").siblings().find("a").removeClass("a-active")
        createWineList(n);
    })

})