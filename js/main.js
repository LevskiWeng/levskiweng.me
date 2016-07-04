function loadBody() {
    var canvas = document.getElementById('background_canvas');
    var context;
    canvg('background_canvas', '/img/background.svg', { ignoreMouse: true});

    $('#blog').css('background', 'url("' + canvas.toDataURL() + '")');
    $('#blog').css('background-repeat', 'repeat-y');
}
