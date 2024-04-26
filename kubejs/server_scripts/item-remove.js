//priority: 10

//Author: TheTobicraft11

let hideItemsFromEMI = [
   "create_dd:ponder_stonegeneration",
   "create_dd:scorchia_asphalt_block",
   "create_dd:asphalt_block",
   "create_dd:scoria_asphalt_block",
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
  ];
  
  let removeItemsByInput = [

    "create_dd:scorchia_asphalt_block",
    "create_dd:asphalt_block",
    "create_dd:scoria_asphalt_block",
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
  ]
  
  
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
 