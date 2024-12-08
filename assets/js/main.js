if (!!window.ActiveXObject || "ActiveXObject" in window) { //is IE?
    alert('朋友，上古浏览器不支持呢~');
}

$(document).ready(function () {
    $(".my_slide").click(function () {
        $(".my_website").slideToggle("slow");
    })
})