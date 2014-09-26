$(document).ready(function(){
    $.getJSON("links.json", function(data) {
        var source   = $("#info-template").html();
        var template = Handlebars.compile(source);
        $("#info").html(template(data));
    });
});
