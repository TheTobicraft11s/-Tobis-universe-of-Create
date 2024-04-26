//priority: 1
PlayerEvents.tick((event) => {
    if (event.player.age % 20 != 0) return;
    const { player } = event;
    if (
      (player.headArmorItem == "kubejs:fly_helmet" &&
        player.chestArmorItem == "kubejs:fly_chestplate" &&
        player.legsArmorItem == "kubejs:fly_leggings" &&
        player.feetArmorItem == "kubejs:fly_boots") ||
      player.isCreative() ||
      player.isSpectator()
    ) {
      player.abilities.mayfly = true;
    } else {
      player.abilities.mayfly = false;
      player.abilities.flying = false;
    }
    player.onUpdateAbilities();
  });
  