// 1: 回数 2: 秒数　

var easyMenu = [
    ["もも上げ運動", 1],
    ["エア自電車", 2],
    ["ツイストクランチ", 1],
    ["ランジ", 1],
];

var normalMenu = [
    ["もも上げ運動", 1],
    ["エア自電車", 2],
    ["ツイストクランチ", 1],
    ["ランジ", 1],
    ["スクワット", 1],
    ["腹筋", 1],
    ["腕立て伏せ", 1],
];

var difficultMenu = [
    ["もも上げ運動", 1],
    ["エア自電車", 2],
    ["ツイストクランチ", 1],
    ["ランジ", 1],
    ["スクワット", 1],
    ["腹筋", 1],
    ["腕立て伏せ", 1],
    ["プランク", 2],
    ["レッグレイズ", 1]
];


function twitText(button) 
{
    var id_value = button.id
    url = document.location.href;
    switch(id_value){
        case 'easy':
            var tweetText = 'https://twitter.com/intent/tweet?text='+
            encodeURIComponent(
                "今日する運動\n" + 
                "--------" +
                easyMotion(easyMenu) +
                "--------" +
                '#うんどうしたったー'
            );
        break;

        case 'normal':
            var tweetText = 'https://twitter.com/intent/tweet?text='+
            encodeURIComponent(
                "今日する運動\n" + 
                "--------" +
                normalMotion(normalMenu) +
                "--------" +
                '#うんどうしたったー'
            );
        break;

        case 'difficult':
            var tweetText = 'https://twitter.com/intent/tweet?text='+
            encodeURIComponent(
                "今日する運動\n" + 
                "--------" +
                difficultMotion(difficultMenu) +
                "--------" +
                '#うんどうしたったー'
            );
        break;

        default:
        break;
    }
    window.open(tweetText,"_blank","width=600,height=300");
};

function easyMotion(menu)
{

    var dailyEasyMenu = new Array(menu.length);
    var daily = [];

    var dailyMenu = [];
    var dailyMenuNum = [];

    for (i=0; i<dailyEasyMenu.length; i++){
        dailyEasyMenu[i] = new Array(2);
    }

    var dailyEasyMenuNum = getRandomInt(1, menu.length);

    for(var i=0;i<dailyEasyMenuNum;i++){
        dailyEasyMenu[i][0] = menu[getRandomInt(0, menu.length-1)]
        daily[i] = dailyEasyMenu[i][0][0]
    }

    dailyMenu = daily.filter(function(x, i, self){
        return self.indexOf(x) === i;
    });

    for(var i=0;i<dailyMenu.length;i++){
        for(var j=0;j<menu.length;j++){
            if(dailyMenu[i] == menu[j][0]){
                dailyMenuNum[i] = getEasyExercisesNumber(menu[j][1]);
            }
        }
    }
    return getTweet(dailyMenu, dailyMenuNum);
}

function normalMotion(menu)
{

    var dailyEasyMenu = new Array(menu.length);
    var daily = [];

    var dailyMenu = [];
    var dailyMenuNum = [];

    for (i=0; i<dailyEasyMenu.length; i++){
        dailyEasyMenu[i] = new Array(2);
    }

    var dailyEasyMenuNum = getRandomInt(1, menu.length);

    for(var i=0;i<dailyEasyMenuNum;i++){
        dailyEasyMenu[i][0] = menu[getRandomInt(0, menu.length-1)]
        daily[i] = dailyEasyMenu[i][0][0]
    }

    dailyMenu = daily.filter(function(x, i, self){
        return self.indexOf(x) === i;
    });

    for(var i=0;i<dailyMenu.length;i++){
        for(var j=0;j<menu.length;j++){
            if(dailyMenu[i] == menu[j][0]){
                dailyMenuNum[i] = getNormalExercisesNumber(menu[j][1]);
            }
        }
    }
    return getTweet(dailyMenu, dailyMenuNum);
}

function difficultMotion(menu)
{

    var dailyEasyMenu = new Array(menu.length);
    var daily = [];

    var dailyMenu = [];
    var dailyMenuNum = [];

    for (i=0; i<dailyEasyMenu.length; i++){
        dailyEasyMenu[i] = new Array(2);
    }

    var dailyEasyMenuNum = getRandomInt(1, menu.length);

    for(var i=0;i<dailyEasyMenuNum;i++){
        dailyEasyMenu[i][0] = menu[getRandomInt(0, menu.length-1)]
        daily[i] = dailyEasyMenu[i][0][0]
    }

    dailyMenu = daily.filter(function(x, i, self){
        return self.indexOf(x) === i;
    });

    for(var i=0;i<dailyMenu.length;i++){
        for(var j=0;j<menu.length;j++){
            if(dailyMenu[i] == menu[j][0]){
                dailyMenuNum[i] = getDifficultExercisesNumber(menu[j][1]);
            }
        }
    }
    return getTweet(dailyMenu, dailyMenuNum);
}

function getTweet(menu, num){
    var tweetText = "";

    for(i=0;i<menu.length;i++){
        tweetText += (menu[i] + " : " + num[i] + "\n");
    }

    return tweetText;
}

function getEasyExercisesNumber(num){
    // 1: 回数 2: 秒数　
    if(num == 1){
        return (parseInt(Math.random() * 3) + 1) * 10 + "回"
    }
    if(num == 2){
        return (parseInt(Math.random() * 2) + 1) * 60 + "秒"
    }
}

function getNormalExercisesNumber(num){
    // 1: 回数 2: 秒数　
    if(num == 1){
        return (parseInt(Math.random() * 5) + 2) * 10 + "回"
    }
    if(num == 2){
        return (parseInt(Math.random() * 4) + 2) * 60 + "秒"
    }
}

function getDifficultExercisesNumber(num){
    // 1: 回数 2: 秒数　
    if(num == 1){
        return (parseInt(Math.random() * 10) + 3) * 10 + "回"
    }
    if(num == 2){
        return (parseInt(Math.random() * 10) + 3) * 60 + "秒"
    }
}

function getRandomInt(min, max) {
    return Math.floor( Math.random() * (max + 1 - min) ) + min ;
}