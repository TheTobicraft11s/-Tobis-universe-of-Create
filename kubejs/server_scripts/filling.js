
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
  event.custom({
    type: "create:filling",
    ingredients: [
      {
        item: "create_sa:large_fueling_tank",
      },
      {
        fluid: "create_dd:shimmer",
        amount: 500,
      },
    ],
    results: [
      {
        item: "create_sa:creative_filling_tank",
      },
    ],
  });
    
});