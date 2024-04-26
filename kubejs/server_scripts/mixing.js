//priority: 1
ServerEvents.recipes((event) => {

    event.recipes.create
    .mixing("minecraft:iron_ingot", [
      
      Fluid.of("kubejs:molten_iron", 250),
    ])
   /* event.recipes.create
    .mixing(Fluid.of("kubejs:molten_iron", 250))[
        "minecraft:iron_ingot"])
        .heated();
*/
event.custom({
    type: "create:mixing",
    heatRequirement: "heated",
    ingredients: [
      {
        item: "minecraft:iron_ingot",
        count: 1,
      },
    ],
    results: [
      {
        amount: 250,
        fluid: "kubejs:molten_iron",
      },
    ],
  });
  event.custom({
    type: "create:mixing",
    //heatRequirement: "heated",
    ingredients: [
      {
        item: "minecraft:green_dye",
        count: 1,
      },
      {
        item: "#forge:cobblestone",
        count: 1,
      },
      {
     
            amount: 50,
        fluid: "minecraft:water",
      },
    ],
    results: [
      {
        amount: 250,
        fluid: "kubejs:veridium_fluid",
      },
    ],
  });
  event.custom({
    type: "create:mixing",
    //heatRequirement: "heated",
    ingredients: [
      {
        item: "minecraft:red_dye",
        count: 1,
      },
      {
        item: "#forge:cobblestone",
        count: 1,
      },
      {
     
            amount: 50,
        fluid: "minecraft:water",
      },
    ],
    results: [
      {
        amount: 250,
        fluid: "kubejs:crimsite_fluid",
      },
    ],
  });
  event.custom({
    type: "create:mixing",
    //heatRequirement: "heated",
    ingredients: [
      {
        item: "minecraft:yellow_dye",
        count: 1,
      },
      {
        item: "#forge:cobblestone",
        count: 1,
      },
      {
     
            amount: 50,
        fluid: "minecraft:water",
      },
    ],
    results: [
      {
        amount: 250,
        fluid: "kubejs:ochrum_fluid",
      },
    ],
  });
  event.custom({
    type: "create:mixing",
    //heatRequirement: "heated",
    ingredients: [
      {
        item: "minecraft:blue_dye",
        count: 1,
      },
      {
        item: "#forge:cobblestone",
        count: 1,
      },
      {
     
            amount: 50,
        fluid: "minecraft:water",
      },
    ],
    results: [
      {
        amount: 250,
        fluid: "kubejs:potassic_fluid",
      },
    ],
  });
});