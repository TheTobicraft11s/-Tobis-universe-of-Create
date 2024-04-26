//priority: 1
ServerEvents.recipes((event) => {

    event.shapeless("8x create_dd:coal_piece", ["minecraft:charcoal"]);

    event.shaped("4x kubejs:asphalt", ["AAA", "ASA", "AAA"], {
        A: "minecraft:clay_ball",
        S: "minecraft:black_dye",
      });
    event.shapeless("#forge:dyes/red",["minecraft:red_dye"])

});
