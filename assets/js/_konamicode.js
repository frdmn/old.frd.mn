var hashElement = "pr0n";

$(document).ready(function(){
    cheet('↑ ↑ ↓ ↓ ← → ← → b a', function () {
        if(window.location.hash && window.location.hash.substring(1) == hashElement) {
            window.location = "/";
        } else {
            window.location = "/#" + hashElement;
        }
    });
});
