function parseMarkdownTextTitle(text) {
    var lines = text.match(/^.*([\n\r]+|$)/gm);

    for (i = 0; i < lines.length; i++) {
        // find the first line begins with '#', it means that it's the title
        if (lines[i].match(/^#[~#\w\s\t]+/gm)) {
            return lines[i].replace(/#/g, '').trim();
        }
    }

    return "";
}

function loadBody() {
    var canvas = document.getElementById('background_canvas');
    var context;
    canvg('background_canvas', '/img/background.svg', { ignoreMouse: true});

    $('#blog').css('background', 'url("' + canvas.toDataURL() + '")');
    $('#blog').css('background-repeat', 'repeat-y');

    $('.panel-body a').each(function (){
        var node = $(this);
        //alert($(this).attr('href'));
        $.get( $(this).attr('href'), function( data ) {
            // Change Markdown parse engine from showdown to markdown-it
            // because markdown-it has the ability to render table
            //var converter = new showdown.Converter();
            //$("#preview").html(converter.makeHtml(data));
            var md = window.markdownit({
                html : true,
                breaks: true
            });
            // Enable superscript and subscript feature by markdown-it plugins:
            // markdown-it-sup and markdown-it-sub
            window.markdownitSup(md);
            window.markdownitSub(md);
            
            $(node).parent().html(md.render(data));
        });
    });
    // Don't use hljs.initHighlightingOnLoad()
    // because the markdown document is loaded dynamically
    hljs.initHighlighting();

}
