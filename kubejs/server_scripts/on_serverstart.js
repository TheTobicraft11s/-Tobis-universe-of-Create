LevelEvents.loaded((event) => {
    event.server.runCommandSilent(`say @a Server ist Online`);
    event.server.runCommandSilent(`gamerule doFireTick false`);
    event.server.runCommandSilent(`gamerule playersSleepingPercentage 50`); //Stellt ein das nur die hälfte der spieler schlafen muss das die nacht geskippt wird
  });

  syaykn "hallo"
  