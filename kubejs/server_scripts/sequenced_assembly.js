//priority: 1


ServerEvents.recipes((event) => {
let magnet = "minecraft:deepslate_bricks";
  event.recipes.create
    .sequenced_assembly(
      "2x create_new_age:magnetite_block",
      "minecraft:deepslate_bricks",
      [
        event.recipes.createDeploying(magnet, [
          magnet,
          "create_dd:steel_sheet",
        ]),
        event.recipes.create.pressing(magnet, magnet),
        
      ]
    )
    .transitionalItem(magnet)
    .loops(4);
    let angel_helmet = "minecraft:netherite_helmet";
    event.recipes.create
      .sequenced_assembly(
        "kubejs:fly_helmet",
        "minecraft:netherite_helmet",
        [
          event.recipes.createDeploying(angel_helmet, [
            angel_helmet,
            "create_dd:stargaze_singularity",
          ]),
          event.recipes.create.pressing(angel_helmet, angel_helmet),
          event.recipes.createDeploying(angel_helmet, [
            angel_helmet,
            "create_dd:refined_radiance_casing",
          ]),
          event.recipes.create.pressing(angel_helmet, angel_helmet),
          event.recipes.createDeploying(angel_helmet, [
            angel_helmet,
            "create_dd:mithril_casing",
          ]),
          event.recipes.create.pressing(angel_helmet, angel_helmet),
          event.custom({
            type: "create:filling",
            ingredients: [
              {
                item: angel_helmet,
              },
              {
                fluid: "kubejs:angel_fluid",
                amount: 1000,
              },
            ],
            results: [
              {
                item: angel_helmet,
              },
            ],
        }) 
        ]
      )
      .transitionalItem(angel_helmet)
      .loops(1);



      let angel_chestplate = "minecraft:netherite_chestplate";
    event.recipes.create
      .sequenced_assembly(
        "kubejs:fly_chestplate",
        "minecraft:netherite_chestplate",
        [
          event.recipes.createDeploying(angel_chestplate, [
            angel_helmet,
            "create_dd:stargaze_singularity",
          ]),
          event.recipes.create.pressing(angel_chestplate, angel_chestplate),
          event.recipes.createDeploying(angel_chestplate, [
            angel_chestplate,
            "create_dd:refined_radiance_casing",
          ]),
          event.recipes.create.pressing(angel_chestplate, angel_chestplate),
          event.recipes.createDeploying(angel_chestplate, [
            angel_chestplate,
            "create_dd:mithril_casing",
          ]),
          event.recipes.create.pressing(angel_chestplate, angel_chestplate),
          event.custom({
            type: "create:filling",
            ingredients: [
              {
                item: angel_chestplate,
              },
              {
                fluid: "kubejs:angel_fluid",
                amount: 1000,
              },
            ],
            results: [
              {
                item: angel_chestplate,
              },
            ],
        }) 
        ]
      )
      .transitionalItem(angel_chestplate)
      .loops(1);

      let angel_leggings = "minecraft:netherite_leggings";
      event.recipes.create
        .sequenced_assembly(
          "kubejs:fly_leggings",
          "minecraft:netherite_leggings",
          [
            event.recipes.createDeploying(angel_leggings, [
              angel_helmet,
              "create_dd:stargaze_singularity",
            ]),
            event.recipes.create.pressing(angel_leggings, angel_leggings),
            event.recipes.createDeploying(angel_leggings, [
              angel_leggings,
              "create_dd:refined_radiance_casing",
            ]),
            event.recipes.create.pressing(angel_leggings, angel_leggings),
            event.recipes.createDeploying(angel_leggings, [
              angel_leggings,
              "create_dd:mithril_casing",
            ]),
            event.recipes.create.pressing(angel_leggings, angel_leggings),
            event.custom({
              type: "create:filling",
              ingredients: [
                {
                  item: angel_leggings,
                },
                {
                  fluid: "kubejs:angel_fluid",
                  amount: 1000,
                },
              ],
              results: [
                {
                  item: angel_leggings,
                },
              ],
          }) 
          ]
        )
        .transitionalItem(angel_leggings)
        .loops(1 )


        let angel_boots = "minecraft:netherite_boots";
        event.recipes.create
          .sequenced_assembly(
            "kubejs:fly_boots",
            "minecraft:netherite_boots",
            [
              event.recipes.createDeploying(angel_boots, [
                angel_helmet,
                "create_dd:stargaze_singularity",
              ]),
              event.recipes.create.pressing(angel_boots, angel_boots),
              event.recipes.createDeploying(angel_boots, [
                angel_boots,
                "create_dd:refined_radiance_casing",
              ]),
              event.recipes.create.pressing(angel_boots, angel_boots),
              event.recipes.createDeploying(angel_boots, [
                angel_boots,
                "create_dd:mithril_casing",
              ]),
              event.recipes.create.pressing(angel_boots, angel_boots),
              event.custom({
                type: "create:filling",
                ingredients: [
                  {
                    item: angel_boots,
                  },
                  {
                    fluid: "kubejs:angel_fluid",
                    amount: 1000,
                  },
                ],
                results: [
                  {
                    item: angel_boots,
                  },
                ],
            }) 
            ]
          )
          .transitionalItem(angel_boots)
          .loops(1)
});
