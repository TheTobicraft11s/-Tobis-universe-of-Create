//priority: 1
ServerEvents.recipes((event) => {

    event.shapeless("8x create_dd:coal_piece", ["minecraft:charcoal"]);

    event.shaped("4x kubejs:asphalt", ["AAA", "ASA", "AAA"], {
        A: "minecraft:clay_ball",
        S: "minecraft:black_dye",
      });
    event.shapeless("#forge:dyes/red",["minecraft:red_dye"])
    event.shaped("createcoins:ironcoin", ["AA", "AA"], {
      A: "createcoins:coopercoin",
    });
    event.shaped("createcoins:zinccoin", ["AA", "AA"], {
      A: "createcoins:ironcoin",
    });
    event.shaped("createcoins:goldcoin", ["AA", "AA"], {
      A: "createcoins:zinccoin",
    });
    event.shaped("createcoins:brasscoin", ["AA", "AA"], {
      A: "createcoins:goldcoin",
    });
    event.shaped("createcoins:diamondcoin", ["AA", "AA"], {
      A: "createcoins:brasscoin",
    });
});
