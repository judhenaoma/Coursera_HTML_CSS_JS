
(function (window){

    var ByeSpeaker= {};
    var SpeakWord= "Good Bye";
    ByeSpeaker.speak= function(name) {
        console.log(SpeakWord + " "+name)
        
    }
    window.ByeSpeaker= ByeSpeaker
})(window);