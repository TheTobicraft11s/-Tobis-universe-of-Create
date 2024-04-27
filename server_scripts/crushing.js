//priority: 1
ServerEvents.recipes((event) => {

    event.recipes.create.crushing(
        Item.of("minecraft:green_dye").withChance(0.34),
    ["minecraft:grass","#minecraft:flowers"]
    )
   

});