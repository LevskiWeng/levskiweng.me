function loadBody() {
    var canvas = document.getElementById('background_canvas');
    var context;
    canvg('background_canvas', '/img/background.svg', { ignoreMouse: true});

    document.getElementById('blog').style.background = 'url("' + canvas.toDataURL() + '")';
}
