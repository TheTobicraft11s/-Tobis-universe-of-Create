//priority: 1

ServerEvents.recipes((event) => {

    event.recipes.create.mechanical_crafting(
        "createcasing:chorium_ingot",
        ["DECEG", "EBABE", "CAFAC", "EBABE","GECED"],
        {
          A: "create_dd:stargaze_singularity",
          B: "create:polished_rose_quartz",
          C: "create_dd:shimmer_bucket",
          D: "create_dd:chromatic_block",
          E: "create_dd:mithril_ingot",
          F: "minecraft:nether_star",
          G: "create_dd:refined_radiance",
        }
      );




});