if (!!window.ActiveXObject || "ActiveXObject" in window) { //is IE?
    alert('朋友，上古浏览器不支持呢~');
}

document.addEventListener('DOMContentLoaded', function () {
    let slide = document.querySelector('.slide');
    let webSite = document.querySelector('.website');
    let isFlag = true;
    slide.addEventListener('click', function () {
        if (isFlag) {
            webSite.style.cssText = 'display:block;'
        } else {
            webSite.style.cssText = 'display:none;'
        }
        isFlag = !isFlag

    }, false);
}, false)