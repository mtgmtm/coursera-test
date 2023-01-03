(function (){
    var names = ["Jácint", "János", "Kelemen", "Imre", "Margit", "Ferenc", "Júlia", "Ilona", "Imola", "Nimród"];

    for (i = 0; i < names.length; i++) {
        var firstLetter = names[i].charAt().toLowerCase();
      if (firstLetter =="j") {
        byeSpeaker.speak(names[i]);
      } else {
        helloSpeaker.speak(names[i]);
      }
    }
    
    })();