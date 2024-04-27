//priority: 1
ServerEvents.recipes((event) => {
event.recipes.create
.mixing(Fluid.of("kubejs:spawn_fluid_sheep", 250), [
  "#minecraft:wool",
  Fluid.of("create_mechanical_spawner:spawn_fluid_random", 250),
])
.heated();

event.recipes.create
.mixing("kubejs:witherproof_obsidian", [
  "16x create:powdered_obsidian",
  Fluid.of("createbigcannons:molten_nethersteel", 200),
])
.superheated();

event.recipes.create
.mixing("kubejs:witherproof_obsidian_glass", [
  "16x create:powdered_obsidian",
  "16x minecraft:amethyst_shard",
  Fluid.of("createbigcannons:molten_nethersteel", 200),
])
.superheated();

event.custom({
type: "create:mixing",
heatRequirement: "heated",
ingredients: [
  {
    item: "minecraft:porkchop",
    count: 1,
  },
  {
    amount: 250,
    fluid: "create_mechanical_spawner:spawn_fluid_random",
    nbt: {},
  },
],
results: [
  {
    amount: 250,
    fluid: "kubejs:spawn_fluid_pig",
  },
],
});
event.custom({
type: "create:mixing",
heatRequirement: "heated",
ingredients: [
  {
    item: "minecraft:beef",
    count: 1,
  },
  {
    amount: 250,
    fluid: "create_mechanical_spawner:spawn_fluid_random",
    nbt: {},
  },
],
results: [
  {
    amount: 250,
    fluid: "kubejs:spawn_fluid_cow",
  },
],
});
event.custom({
type: "create:mixing",
heatRequirement: "heated",
ingredients: [
  {
    item: "minecraft:chicken",
    count: 1,
  },
  {
    amount: 250,
    fluid: "create_mechanical_spawner:spawn_fluid_random",
    nbt: {},
  },
],
results: [
  {
    amount: 250,
    fluid: "kubejs:spawn_fluid_chicken",
  },
],
});
event.custom({
type: "create:mixing",
heatRequirement: "heated",
ingredients: [
  {
    item: "minecraft:ink_sac",
    count: 1,
  },
  {
    amount: 250,
    fluid: "create_mechanical_spawner:spawn_fluid_random",
    nbt: {},
  },
],
results: [
  {
    amount: 250,
    fluid: "kubejs:spawn_fluid_squid",
  },
],
});
event.custom({
type: "create:mixing",
heatRequirement: "heated",
ingredients: [
  {
    item: "minecraft:ghast_tear",
    count: 1,
  },
  {
    amount: 500,
    fluid: "create_mechanical_spawner:spawn_fluid_random",
    nbt: {},
  },
],
results: [
  {
    amount: 500,
    fluid: "kubejs:spawn_fluid_ghast",
  },
],
});
event.custom({
type: "create:mixing",
heatRequirement: "heated",
ingredients: [
  {
    item: "create_things_and_misc:vibration_mechanism",
    count: 1,
  },
  {
    amount: 250,
    fluid: "create_mechanical_spawner:spawn_fluid_random",
    nbt: {},
  },
],
results: [
  {
    amount: 250,
    fluid: "kubejs:spawn_fluid_warden",
  },
],
});
event.custom({
    type: "create:mixing",
    heatRequirement: "heated",
    ingredients: [
      {
        item: "minecraft:coal_block",
        count: 1,
      },
      {
        item: "create_dd:diamond_shard",
        count: 1,
      },
      {
        amount: 250,
        fluid: "create_mechanical_spawner:spawn_fluid_skeleton",
        nbt: {},
      },
    ],
    results: [
      {
        amount: 250,
        fluid: "kubejs:spawn_fluid_wither_skeleton",
      },
    ],
  });
  event.custom({
    type: "create:mixing",
    heatRequirement: "heated",
    ingredients: [
      {
        item: "minecraft:white_banner",
        nbt: {
          BlockEntityTag: {
            Patterns: [
              { Color: 9, Pattern: "mr" },
              { Color: 8, Pattern: "bs" },
              { Color: 7, Pattern: "cs" },
              { Color: 8, Pattern: "bo" },
              { Color: 15, Pattern: "ms" },
              { Color: 8, Pattern: "hh" },
              { Color: 8, Pattern: "mc" },
              { Color: 15, Pattern: "bo" },
            ],
            id: "minecraft:banner",
          },
          HideFlags: 32,
          display: {
            Name: {
              color: "gold",
              translate: "block.minecraft.ominous_banner",
            },
          },
        }, // white Banner mit Villager-Raid typ nbt tag
        count: 1,
      },
      {
        amount: 250,
        fluid: "create_mechanical_spawner:spawn_fluid_random",
        nbt: {},
      },
    ],
    results: [
      {
        amount: 250,
        fluid: "kubejs:spawn_fluid_allay",
      },
    ],
  });
  event.custom({
    type: "create:mixing",
    heatRequirement: "heated",
    ingredients: [
      {
        item: "minecraft:tropical_fish",
        count: 1,
      },
      {
        amount: 250,
        fluid: "create_mechanical_spawner:spawn_fluid_random",
        nbt: {},
      },
    ],
    results: [
      {
        amount: 250,
        fluid: "kubejs:spawn_fluid_dolphin",
      },
    ],
  });
  event.custom({
    type: "create:mixing",
    heatRequirement: "heated",
    ingredients: [
      {
        item: "minecraft:prismarine_shard",
        count: 1,
      },
      {
        amount: 250,
        fluid: "create_mechanical_spawner:spawn_fluid_random",
        nbt: {},
      },
    ],
    results: [
      {
        amount: 250,
        fluid: "kubejs:spawn_fluid_guardian",
      },
    ],
  });
  event.custom({
    type: "create:mixing",
    heatRequirement: "heated",
    ingredients: [
      {
        item: "minecraft:sweet_berries",
        count: 1,
      },
      {
        amount: 250,
        fluid: "create_mechanical_spawner:spawn_fluid_random",
        nbt: {},
      },
    ],
    results: [
      {
        amount: 250,
        fluid: "kubejs:spawn_fluid_fox",
      },
    ],
  });
  event.custom({
    type: "create:mixing",
    heatRequirement: "heated",
    ingredients: [
      {
        item: "minecraft:lead",
        count: 1,
      },
      {
        amount: 250,
        fluid: "create_mechanical_spawner:spawn_fluid_random",
        nbt: {},
      },
    ],
    results: [
      {
        amount: 250,
        fluid: "kubejs:spawn_fluid_wolf",
      },
    ],
  });
  event.custom({
    type: "create:mixing",
    heatRequirement: "heated",
    ingredients: [
      {
        item: "minecraft:mud",
        count: 1,
      },
      {
        amount: 250,
        fluid: "create_mechanical_spawner:spawn_fluid_random",
        nbt: {},
      },
    ],
    results: [
      {
        amount: 250,
        fluid: "kubejs:spawn_fluid_frog",
      },
    ],
  });
  event.custom({
    type: "create:mixing",
    heatRequirement: "heated",
    ingredients: [
      {
        item: "minecraft:phantom_membrane",
        count: 1,
      },
      {
        amount: 250,
        fluid: "create_mechanical_spawner:spawn_fluid_random",
        nbt: {},
      },
    ],
    results: [
      {
        amount: 250,
        fluid: "kubejs:spawn_fluid_phantom",
      },
    ],
  });
  event.custom({
    type: "create:mixing",
    heatRequirement: "heated",
    ingredients: [
      {
        item: "minecraft:ender_pearl",
        count: 1,
      },
      {
        amount: 250,
        fluid: "create_mechanical_spawner:spawn_fluid_random",
        nbt: {},
      },
    ],
    results: [
      {
        amount: 1000,
        fluid: "create_mechanical_spawner:spawn_fluid_enderman",
      },
    ],
  });
  event.custom({
    type: "create:mixing",
    heatRequirement: "heated",
    ingredients: [
      {
        item: "minecraft:blaze_rod",
        count: 1,
      },
      {
        amount: 250,
        fluid: "create_mechanical_spawner:spawn_fluid_random",
        nbt: {},
      },
    ],
    results: [
      {
        amount: 1000,
        fluid: "create_mechanical_spawner:spawn_fluid_blaze",
      },
    ],
  });
});