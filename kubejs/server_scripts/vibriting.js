ServerEvents.recipes((event) => {

/*event.custom({
    type: "vintageimprovements:vibrating",
    ingredients: [
      {
        item: "minecraft:iron_ingot",
        count: 1,
      },
    ],
    results: [
      {
        count: 1,
        fluid: "kubejs:angel_shart",
      },
    ],
    processingTime: 300,
  });*/
  event.custom({
    type: "vintageimprovements:vibrating",
    ingredients: [
      {
        item: "create_dd:blaze_gold_block",
      },
    ],
    results: [
      {
        chance: 0.3,
        item: "kubejs:angel_shart",
      },
    ],
    processingTime: 300,
  });

});