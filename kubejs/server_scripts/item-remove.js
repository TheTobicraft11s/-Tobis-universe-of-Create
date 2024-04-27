//priority: 10

//Author: TheTobicraft11

let hideItemsFromEMI = [
   "create_dd:ponder_stonegeneration",
   "create_dd:scorchia_asphalt_block",
   "create_dd:asphalt_block",
   "create_dd:scoria_asphalt_block",
   "create_dd:andesite_asphalt_block",
   "create_dd:asurine_asphalt_block",
   "create_dd:calcite_asphalt_block",
   "create_dd:crimsite_asphalt_block",
   "create_dd:deepslate_asphalt_block",
   "create_dd:diorite_asphalt_block",
   "create_dd:dripstone_asphalt_block",
   "create_dd:gabbro_asphalt_block",
   "create_dd:granite_asphalt_block",
   "create_dd:limestone_asphalt_block",
   "create_dd:ochrum_asphalt_block",
   "create_dd:potassic_asphalt_block",
   "create_dd:aethersite_asphalt_block",
   "create_dd:tuff_asphalt_block",
   "create_dd:veridium_asphalt_block",
   "create_dd:weathered_limestone_asphalt_block",
   "create_new_age:reactor_casing",
   "create_new_age:reactor_rod",
   "create_new_age:reactor_glass",
   "create_new_age:reactor_fuel_acceptor",
   "create_new_age:reactor_heat_vent",
  ];
  
  let removeItemsByID = [
    //"create_dd:filling/aethersite",
    "create_dd:acompat/create_mechanical_extruder/extruding/gabbro",
    "create_dd:acompat/create_mechanical_extruder/extruding/deepslate",
    "create_dd:acompat/create_mechanical_extruder/extruding/dripstone",
    "create_dd:acompat/create_mechanical_extruder/extruding/calcite",
    "create_dd:acompat/create_mechanical_extruder/extruding/scoria_milkshake",
    "create_dd:acompat/create_mechanical_extruder/extruding/scorchia",
    "create_dd:acompat/create_mechanical_extruder/extruding/potassic_cobble",
    "create_dd:acompat/create_mechanical_extruder/extruding/asurine_cobble",
    "create_dd:acompat/create_mechanical_extruder/extruding/ochrum_cobble",
    "create_dd:acompat/create_mechanical_extruder/extruding/blackstone",
    "create_dd:acompat/create_mechanical_extruder/extruding/scoria",
    "create_dd:acompat/create_mechanical_extruder/extruding/veridium_cobble",
    "create_dd:acompat/create_mechanical_extruder/extruding/limestone",
    "create_new_age:reactor_casing",
    "create_new_age:reactor_rod",
    "create_new_age:reactor_glass",
    "create_new_age:reactor_fuel_acceptor",
    "create_new_age:reactor_heat_vent",
  ];
  
  let removeItemsByInput = [

    "create_dd:scorchia_asphalt_block",
    "create_dd:asphalt_block",
    "create_dd:scoria_asphalt_block",
    "kubejs:fly_helmet",
  ];
  
  let removeItemsByOutput = [
    "create_dd:ponder_stonegeneration",
    "create_dd:scorchia_asphalt_block",
    "create_dd:asphalt_block",
    "create_dd:scoria_asphalt_block",
    "createcasing:chorium_ingot",
    "create:veridium",
    "create_dd:potassic",
    "create:ochrum",
    "create:crimsite",
    "create:veridium",
    "kubejs:fly_helmet",
  ]
  ServerEvents.recipes((event) => {
    event.remove({ mod: "createcoins" });
    });
  
  ServerEvents.tags("item", (event) => {
    hideItemsFromEMI.forEach((item) =>
      event.add("c:hidden_from_recipe_viewers", item)
    );
  });
  
  ServerEvents.recipes((event) => {
    //event.remove({ mod: "create_power_loader" });
    /*ServerEvents.tags("item", (event) => {
      hideItemsFromEMI.forEach((item) =>
        event.add("c:hidden_from_recipe_viewers", item)
      );
    });*/
    removeItemsByID.forEach((item) => event.remove({ id: item }));
    removeItemsByInput.forEach((item) => event.remove({ input: item }));
    removeItemsByOutput.forEach((item) => event.remove({ output: item }));
  
    // event.replaceInput(
      //{ input: "createdeco:andesite_sheet" },
      //"createdeco:andesite_sheet",
      //"create_dd:andesite_sheet"
    //);
  
});