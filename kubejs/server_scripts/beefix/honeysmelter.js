onEvent("recipes", (event) => {

    event.smelting('minecraft:iron_ore', 'resourcefulbees:iron_honeycomb');
    event.smelting('minecraft:coal_ore', 'resourcefulbees:coal_honeycomb');
    event.smelting('minecraft:diamond_ore', 'resourcefulbees:diamond_honeycomb');
    event.smelting('minecraft:gunpowder', 'resourcefulbees:creeper_honeycomb');
    event.smelting('minecraft:emerald_ore', 'resourcefulbees:emerald_honeycomb');
    event.smelting('minecraft:gold_ore', 'resourcefulbees:gold_honeycomb');
    event.smelting('minecraft:lapis_ore', 'resourcefulbees:lapis_honeycomb');
    event.smelting('minecraft:nether_quartz_ore', 'resourcefulbees:nether_quartz_honeycomb');
    event.smelting('minecraft:dirt','resourcefulbees:dirty_honeycomb')
    event.smelting('minecraft:ancient_debris', 'resourcefulbees:netherite_honeycomb');
    event.smelting('minecraft:gravel', 'resourcefulbees:gravely_honeycomb');
    event.smelting('minecraft:ice', 'resourcefulbees:icey_honeycomb');
    event.smelting('minecraft:sand', 'resourcefulbees:sandy_honeycomb');
    event.smelting('minecraft:blaze_rod', 'resourcefulbees:blazing_honeycomb');
    event.smelting('minecraft:glowstone', 'resourcefulbees:glowing_honeycomb');
    event.smelting('minecraft:ghast_tear','resourcefulbees:ghastly_honeycomb');
    event.smelting('minecraft:obsidian','resourcefulbees:obsidian_honeycomb');
    event.smelting('minecraft:bone','resourcefulbees:skeleton_honeycomb');
    event.smelting('minecraft:redstone_ore','resourcefulbees:redstone_honeycomb');
    event.smelting('minecraft:rotten_flesh','resourcefulbees:zombie_honeycomb');
    event.smelting('mekanism:copper_ore', 'resourcefulbees:copper_honeycomb');
    event.smelting('mekanism:block_salt', 'resourcefulbees:salt_baee_honeycomb');
    event.smelting('mekanism:lead_ore', 'resourcefulbees:lead_honeycomb');
    event.smelting('mekanism:osmium_ore', 'resourcefulbees:osmium_honeycomb');
    event.smelting('mekanism:tin_ore', 'resourcefulbees:tin_honeycomb');
    event.smelting('mekanism:uranium_ore', 'resourcefulbees:uranium_honeycomb');
    event.smelting('mekanism:fluorite_ore','resourcefulbees:fluorite_honeycomb');
    event.smelting('moremekanismprocessing:crystal_platinum', 'resourcefulbees:platinum_honeycomb');
    event.smelting('draconicevolution:awakened_draconium_nugget', 'resourcefulbees:awakened_honeycomb');
    event.smelting('draconicevolution:small_chaos_frag', 'resourcefulbees:chaotic_honeycomb');
    event.smelting('draconicevolution:end_draconium_ore', 'resourcefulbees:draconium_honeycomb');
    event.smelting('immersiveengineering:ore_aluminum', 'resourcefulbees:aluminum_honeycomb');
    event.smelting('immersiveengineering:ore_silver', 'resourcefulbees:silver_honeycomb');
    event.smelting('immersiveengineering:ore_nickel', 'resourcefulbees:nickel_honeycomb');
    event.smelting('compressedblocks:c0_cobblestone', 'resourcefulbees:cobbee_honeycomb');
    
    //Dense Honeycombs

    event.smelting('4x minecraft:iron_ingot', 'resourcefulbees:dense_iron_honeycomb');
    event.smelting('4x minecraft:gold_ore', 'resourcefulbees:dense_gold_honeycomb');
    event.smelting('4x minecraft:ancient_debris', 'resourcefulbees:dense_netherite_honeycomb');
    event.smelting('4x mekanism:copper_ore', 'resourcefulbees:dense_copper_honeycomb');
    event.smelting('4x mekanism:lead_ore', 'resourcefulbees:dense_lead_honeycomb');
    event.smelting('4x mekanism:tin_ore', 'resourcefulbees:dense_tin_honeycomb');
    event.smelting('4x mekanism:uranium_ore', 'resourcefulbees:dense_uranium_honeycomb');
    event.smelting('4x mekanism:osmium_ore', 'resourcefulbees:dense_osmium_honeycomb');
    event.smelting('4x moremekanismprocessing:crystal_platinum', 'resourcefulbees:dense_platinum_honeycomb');
    event.smelting('4x immersiveengineering:ore_nickel', 'resourcefulbees:dense_nickel_honeycomb');
    event.smelting('4x immersiveengineering:ore_silver', 'resourcefulbees:dense_silver_honeycomb');



   //Wither Honeycomb
   event.custom({
    "type": "extendedcrafting:shaped_ender_crafter",
    "pattern": [
      "AAA",
      "AAA",
      "AAA"
    ],
    "key": {
      "A": {
        "item": "resourcefulbees:wither_honeycomb_block"
      }
    },
    "result": {
      "item": "minecraft:nether_star",
      "count": 2
    }
    });

    //Withered Honeycomb
    event.custom({
        "type": "extendedcrafting:shaped_ender_crafter",
        "pattern": [
          "AAA",
          "ABA",
          "AAA"
        ],
        "key": {
          "A": {
            "item": "resourcefulbees:withered_honeycomb"
          },
          "B": {
            "item": "minecraft:bone_block"
          }
        },
        "result": {
          "item": "minecraft:wither_skeleton_skull",
        }
      })
})