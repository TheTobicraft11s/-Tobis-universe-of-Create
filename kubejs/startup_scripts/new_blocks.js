StartupEvents.registry("block", (event) => {

    event
    .create("asphalt") // Create a new block
    .displayName("Aphalt") // Set a custom name
    .soundType("SAND")
    .material("SAND")
    .hardness(0.7) // Set hardness (affects mining time)
    .resistance(1.0) // Set resistance (to explosions, etc)
    .requiresTool(true) // Requires a tool or it won't drop (see tags below)
    .tagBlock('minecraft:needs_iron_tool') // the tool tier must be at least iron
    .tagBlock('mineable/shovel') 
    .speedFactor(1.4)
    .jumpFactor(2)
    .noValidSpawns(true)
    

});