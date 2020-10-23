(function (window){

    var HelloSpeaker= {};
    var SpeakWord= 'Hello'
    HelloSpeaker.speak= function (name){
        console.log(SpeakWord + " " + name);
    }
    window.HelloSpeaker= HelloSpeaker
})(window);