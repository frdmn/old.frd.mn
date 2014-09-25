var amountGlitches = 18,
    amountKonamiGlitches = 11;

var randomGlitch = (Math.random() * amountGlitches | 0) + 1,
    randomKonamiGlitch = (Math.random() * amountKonamiGlitches | 0) + 1;

$(function() {
    var BV = new $.BigVideo({useFlashForFirefox:false});
	BV.init();
    BV.show(
        [
            { type: "video/mp4",  src: "assets/media/glitches/mp4/" + randomGlitch + ".mp4" },
            { type: "video/webm", src: "assets/media/glitches/webm/" + randomGlitch + ".webm" }
        ],
        {
            ambient:true
        }
    );
});
