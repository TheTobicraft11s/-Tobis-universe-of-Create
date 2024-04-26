
ServerEvents.recipes((event) => {
    



event.custom({
    type: "create:filling",
    ingredients: [
      {
        item: "minecraft:blue_dye",
      },
      {
        fluid: "create_enchantment_industry:experience",
        amount: 10,
      },
    ],
    results: [
      {
        item: "minecraft:lapis_lazuli",
      },
    ],
  });

});