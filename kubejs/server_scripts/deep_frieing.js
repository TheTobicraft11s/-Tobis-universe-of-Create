//priority: 1
ServerEvents.recipes((event) => {
    event.custom({
      type: "create_bic_bit:deep_frying",
      heatRequirement: "heated",
      ingredients: [
        {
            item: "minecraft:cobblestone",
            count: 1,
          },
        {
          amount: 250,
          fluid: "kubejs:veridium_fluid",
        },
      ],
      results: [
        {
          item: "create:veridium",
          count: 1,
        },
      ],
    });
    event.custom({
        type: "create_bic_bit:deep_frying",
        heatRequirement: "heated",
        ingredients: [
          {
              item: "minecraft:cobblestone",
              count: 1,
            },
          {
            amount: 300,
            fluid: "kubejs:crimsite_fluid",
          },
        ],
        results: [
          {
            item: "create:crimsite",
            count: 1,
          },
        ],
      });
      event.custom({
        type: "create_bic_bit:deep_frying",
        heatRequirement: "heated",
        ingredients: [
          {
              item: "minecraft:cobblestone",
              count: 1,
            },
          {
            amount: 350,
            fluid: "kubejs:ochrum_fluid",
          },
        ],
        results: [
          {
            item: "create:ochrum",
            count: 1,
          },
        ],
      });
      event.custom({
        type: "create_bic_bit:deep_frying",
        heatRequirement: "heated",
        ingredients: [
          {
              item: "minecraft:cobblestone",
              count: 1,
            },
          {
            amount: 1000,
            fluid: "kubejs:potassic_fluid",
          },
        ],
        results: [
          {
            item: "create_dd:potassic",
            count: 1,
          },
        ],
      });
});