var names = new Array();
names[0] = "János";
names[1] = "József";
names[2] = "Imre";
names[3] = "Kelemen";
names[4] = "Júlia";
names[5] = "Virág";
names[6] = "Jácint";
names[7] = "István";
names[8] = "Margit";
names[9] = "Nimród";

for (var i = 0; i < names.length; i++) {
    if(names[i].charAt(0) === 'J'|| names[i].charAt(0) === 'j'){
        console.log("Goodbye " + names[i])
    } 
    else {
        console.log("Hello " + names[i])
    }
}
