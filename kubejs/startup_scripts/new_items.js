   
ItemEvents.armorTierRegistry((event) => {
    event.add("fly", (tier) => {
      tier.durabilityMultiplier = 100; // Each slot will be multiplied with [13, 15, 16, 11]
      tier.slotProtections = [5, 10, 18, 7]; // Slot indicies are [FEET, LEGS, BODY, HEAD]
      tier.enchantmentValue = 9;
      tier.equipSound = "minecraft:item.armor.equip_netherite";
    
      tier.knockbackResistance = 0.1;
    });
  });

StartupEvents.registry("item", (event) => {

 

    event
    .create("fly_helmet", "helmet")
    .rarity("epic")
    .tooltip("You can fly")
    .texture("kubejs:item/fly_helmet")
    .tier("fly")
    .unstackable()
    .displayName("Fly Helmet");
  event
    .create("fly_chestplate", "chestplate")
    .rarity("epic")
    .tooltip("You can fly")
    .texture("kubejs:item/fly_chestplate")
    .tier("fly")
    .unstackable()
    .displayName("Fly Chestplate");
  event
    .create("fly_leggings", "leggings")
    .rarity("epic")
    .tooltip("You can fly")
    .texture("kubejs:item/fly_leggings")
    .tier("fly")
    .unstackable()
    .displayName("Fly Leggings");
  event
    .create("fly_boots", "boots")
    .rarity("epic")
    .tooltip("You can fly")
    .texture("kubejs:item/fly_boots")
    .tier("fly")
    .unstackable()
    .displayName("Fly Boots");



});