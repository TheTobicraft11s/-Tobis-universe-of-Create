//priority: 1


LootJS.modifiers((event) => {

event
.addEntityLootModifier("minecraft:ender_dragon")
.killedByPlayer()
.randomChance(0.5)
.addLoot("50x create:experience_nugget");

event
.addEntityLootModifier("minecraft:ender_dragon")
.killedByPlayer()
.randomChance(1)
.addLoot("1x minecraft:elytra");
event
.addEntityLootModifier("minecraft:silverfish")
.killedByPlayer()
.randomChance(0.05)
.addLoot("create:experience_nugget");
event
    .addEntityLootModifier("minecraft:ender_dragon")
    .killedByPlayer()
    .randomChance(0.5)
    .addLoot("minecraft:ward_armor_trim_smithing_template");
});