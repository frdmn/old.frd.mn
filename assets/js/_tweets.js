$(document).ready(function(){
    $.fn.tweetify = function() {
        this.each(function() {
            $(this).html(
            $(this).html()
                .replace(/((ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?)/gi,'<a href="$1">$1</a>')
                .replace(/(^|\s)#(\w+)/g,'$1<a href="http://search.twitter.com/search?q=%23$2">#$2</a>')
                .replace(/(^|\s)@(\w+)/g,'$1<a href="http://twitter.com/$2">@$2</a>')
            );
        });
        return $(this);
    };

    $.getJSON("https://cors-anywhere.herokuapp.com/http://frdmns-oauth-proxy.herokuapp.com/1.1/statuses/user_timeline.json?screen_name=frdmn", function(data) {
        var dat = 0;
             $("#status p").html(data[dat].text).tweetify();
             setInterval(function(){
                 if (dat >= 19) {
                     dat = 1;
                 }
                 dat += 1;
                 $('#status p').html(data[dat].text).tweetify();
             }, 9000);
    });
});
