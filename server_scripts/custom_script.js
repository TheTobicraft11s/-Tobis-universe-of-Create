ServerEvents.loaded, function (event) {
    let playername = event.player.name.toString();
    let cleanPlayername = playername.slice(8, -1);
    let command = "give " + cleanPlayername + " createcoins:coopercoin";
    event.server.schedule(30 * MINUTE, event.server, function (callback) {
      callback.data.runCommand(command)
    })
}