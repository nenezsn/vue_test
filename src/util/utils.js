export function delay(fn, timer) {
    let time = 0;
    return function () {
        if (+new Date() - time > 2000 || time == 0) {
            time = +new Date()
            fn.apply(this,arguments)
        } else {
            console.log('事件太短', this)
        }

    }
}
export function dobounce(fn, time) {
    let timer = ''
    return function () {
        let _this = this ; let args = arguments
        clearTimeout(timer)
        timer = setTimeout(function () {
            fn.apply(_this,args)
        }, time)
    }
}