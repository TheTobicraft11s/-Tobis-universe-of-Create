// kubejs/server_scripts/boostspeed.js
//author: Thetobicraft11
//priority: 1
const COOLDOWN_TIME = 15 * 60 * 1000; // 15 Minuten in Millisekunden
let lastBoostTime = 0;

ServerEvents.commandRegistry(event => {
  const { commands: Commands } = event;

  event.register(
    Commands.literal('boostspeed').executes(ctx => {
      const player = ctx.source.getPlayer();
      if (!player) return 1;

      const currentTime = Date.now();

      if (currentTime - lastBoostTime < COOLDOWN_TIME) {
        player.tell('§cDer Boost-Befehl ist noch im Cooldown.');
        return 1;
      }

      const requiredCoins = 5;
      const diamondCoin = 'createcoins:diamondcoin';
      const playerInventory = player.inventory;

      if (playerInventory.count(diamondCoin) < requiredCoins) {
        player.tell('§cDu benötigst 5 Diamantmünzen, um den Boost auszulösen.');
        return 1;
      }
      
    
      Utils.server.runCommand(`tell @a Hi!`)
        
  
    
      lastBoostTime = currentTime;

      // Geschwindigkeitseffekt auf den Spieler anwenden
      Utils.server.runCommand(`effect give @a minecraft:speed 600 2`)
  

      // Nachricht an alle Spieler senden das ein Boost aktiviert wurde
      
      Utils.server.runCommand(`tellraw @a ["",{"text":"[Server]   ","color":"dark_green"},{"text":"  Ein Speed boost wurde eingelöst","color":"blue"},"\n",{"text":"Ihr könnt jetzt 10 Min mit speed schneller laufen","color":"aqua"}]`)

      return 0;
    })
  );




  event.register(
    Commands.literal('boosthaste').executes(ctx => {
      const player = ctx.source.getPlayer();
      if (!player) return 1;

      const currentTime = Date.now();

      if (currentTime - lastBoostTime < COOLDOWN_TIME) {
        player.tell('§cDer Boost-Befehl ist noch im Cooldown.');
        return 1;
      }

      const requiredCoins = 5;
      const diamondCoin = 'createcoins:diamondcoin';
      const playerInventory = player.inventory;

      if (playerInventory.count(diamondCoin) < requiredCoins) {
        player.tell('§cDu benötigst 5 Diamantmünzen, um den Boost auszulösen.');
        return 1;
      }
      
    
      Utils.server.runCommand(`tell @a Hi!`)
        
  
    
      lastBoostTime = currentTime;

      // Geschwindigkeitseffekt auf den Spieler anwenden
      Utils.server.runCommand(`effect give @a minecraft:haste 600 2`)
  

      // Nachricht an alle Spieler senden das ein Boost aktiviert wurde
      
      Utils.server.runCommand(`tellraw @a ["",{"text":"[Server]   ","color":"dark_green"},{"text":"  Ein Haste boost wurde eingelöst","color":"blue"},"\n",{"text":"Ihr könnt jetzt 10 Min mit speed schneller laufen","color":"aqua"}]`)

      return 0;
    })
  );
});
