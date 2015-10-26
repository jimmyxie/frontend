function responsive() {
    var screenW = document.documentElement.clientWidth,
        screenH = document.documentElement.clientHeight,
        page = document.getElementById('page'),
        scale;

    // alert(screenW);

    page.style.cssText = '';

    scale = (screenW / 320).toFixed(4);
    // page.style.height = screenH / scale > 440 ? parseInt(screenH / scale) + 'px' : 'auto';
    page.style.transform = 'scale(' + scale + ')';
    page.style.webkitTransform = 'scale(' + scale + ')';
    page.style.msTransform = 'scale(' + scale + ')';

    page.style.display = 'block';
    // alert(scale);
}

responsive();

window.onresize = function() {
    responsive();
}
