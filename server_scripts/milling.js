//priority: 1
ServerEvents.recipes((event) => {
    event.recipes.create.milling(
        Item.of("minecraft:green_dye").withChance(0.25),
    ["minecraft:grass","#minecraft:flowers"]

    )



});