//priority: 1

//Author: Thetobicraft11

ServerEvents.recipes((event) => {
    event.custom({
      type: "create_enchantment_industry:disenchanting",
      ingredients: [
        {
          item: "minecraft:amethyst_shard",
        },
      ],
      results: [
        {
          fluid: "create_enchantment_industry:experience",
          amount: 5,
        },
      ],
    });
  });
  