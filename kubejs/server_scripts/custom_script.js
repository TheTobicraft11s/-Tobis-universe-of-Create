//*ServerEvents.loaded, function (event) {
    //let playername = event.player.name.toString();
    //let cleanPlayername = playername.slice(8, -1);
    //let command = "give " + cleanPlayername + " createcoins:coopercoin";
    //event.server.schedule(1 * MINUTE, event.server, function (callback) {
    //  callback.data.runCommand(command)
  //  })
//}



// Definiere das Event


//ServerEvents.tick(event => {
    //setInterval(() => {
      //Utils.server.runCommandSilent('tell @a Hallo, das ist ein Test');
    //}, 60000); // 1 Minuten in Millisekunden
  //});
//  120000// 2 Minuten in Millisekunden


let lastExecution = 0;


ServerEvents.tick(event => {
  setInterval(() => {
    const currentTime = new Date().getTime();
    if (currentTime - lastExecution >= 60000) {
      Utils.server.runCommandSilent('tell @a Hallo, das ist ein Test');
      lastExecution = currentTime;
    }
  }, 120000); // 2 Minuten in Millisekunden
});