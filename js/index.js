(function () {

    var h = document.getElementsByClassName('Jd-h')[0];
    var m = document.getElementsByClassName('Jd-m')[0];
    var s = document.getElementsByClassName('Jd-s')[0];

    function changeTime() {
        var nowTime = new Date() //获取当前时间
        var expireTime = new Date('2020-01-01 00:00:00'); //获取活动到期时间
        var sxTime = expireTime - nowTime //获取 时差
        //将时差换算成小时/分钟/秒
        var sxh = parseInt(sxTime / 1000 / 60 / 60 % 24); //时
        // console.log(sxh)
        var sxm = parseInt(sxTime / 1000 / 60 % 60); //分
        // console.log(sxm)
        var sxs = parseInt(sxTime / 1000 % 60); //秒
        // console.log(sxs)
        h.innerHTML = zeroNum(sxh)
        m.innerHTML = zeroNum(sxm)
        s.innerHTML = zeroNum(sxs)
    }

    changeTime()
    // 使用定时器
    setInterval(function () {
        changeTime()

    }, 1000)

    //封装数字补0
    function zeroNum(a) {
        return a > 10 ? a : '0' + a
    }
})()