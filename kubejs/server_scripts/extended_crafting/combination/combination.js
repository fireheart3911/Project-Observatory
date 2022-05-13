onEvent('recipes', (event) => {



    //Diamond Armor To Neptunium Armor
    event.custom({
        "type": "extendedcrafting:combination",
        "powerCost": 100000,
        "input": {
          "item": "betterendforge:terminite_ingot"
        },
        "ingredients": [
          {
            "item": "betterendforge:eternal_crystal"
          },
          {
            "item": "minecraft:netherite_ingot"
          },
          {
            "item": "minecraft:netherite_ingot"
          },
          {
            "item": "betterendforge:amber_block"
          },
          {
            "item": "minecraft:netherite_ingot"
          },
          {
            "item": "betterendforge:eternal_crystal"
          },
          {
            "item": "betterendforge:amber_block"
          },
          {
            "item": "minecraft:netherite_ingot"
          }
        ],
        "result": {
          "item": "betterendforge:aeternium_ingot"
        }
      })
       
      //Philosophers Fuel
        event.custom({
            "type": "extendedcrafting:combination",
            "powerCost": 1000000,
            "input": {
              "item": "cyclic:heart"
            },
            "ingredients": [
              {
                "item": "immersiveengineering:graphite_electrode"
              },
              {
                "item": "compressedblocks:c3_cobblestone"
              },
              {
                "item": "minecraft:diamond_block"
              },
              {
                "item": "cyclic:apple_bone"
              },
              {
                "item": "better_diving:titanium_block"
              },
              {
                "item": "draconicevolution:infused_obsidian"
              },
              {
                "item": "draconicevolution:awakened_draconium_dust"
              },
              {
                "item": "wateringcans:watering_can_diamond"
              }
            ],
            "result": {
              "item": "atmadditions:philosophers_fuel"
            }
          })

          //Heart of the Sea
            event.custom({
                "type": "extendedcrafting:combination",
                "powerCost": 1000000,
                "input": {
                  "item": "extendedcrafting:ender_star"
                },
                "ingredients": [
                  {
                    "item": "minecraft:nautilus_shell"
                  },
                  {
                    "item": "minecraft:nautilus_shell"
                  },
                  {
                    "item": "betterendforge:aeternium_ingot"
                  },
                  {
                    "item": "minecraft:nautilus_shell"
                  },
                  {
                    "item": "minecraft:nautilus_shell"
                  },
                  {
                    "item": "draconicevolution:dragon_heart"
                  },
                  {
                    "item": "minecraft:nautilus_shell"
                  },
                  {
                    "item": "minecraft:nautilus_shell"
                  },
                  {
                    "item": "betterendforge:aeternium_ingot"
                  },
                  {
                    "item": "minecraft:nautilus_shell"
                  },
                  {
                    "item": "minecraft:nautilus_shell"
                  },
                  {
                    "item": "draconicevolution:dragon_heart"
                  }
                ],
                "result": {
                  "item": "minecraft:heart_of_the_sea"
                }
              })

          //Ender Crafter
            event.custom({
              "type": "extendedcrafting:combination",
              "powerCost": 10000,
              "input": {
                "item": "cyclic:workbench"
              },
              "ingredients": [
                {
                  "item": "extendedcrafting:ender_ingot_block"
                },
                {
                  "item": "extendedcrafting:ender_ingot_block"
                },
                {
                  "item": "compressedblocks:c1_end_stone_bricks"
                },
                {
                  "item": "compressedblocks:c1_end_stone_bricks"
                },
                {
                  "item": "extendedcrafting:ender_ingot_block"
                },
                {
                  "item": "extendedcrafting:ender_ingot_block"
                },
                {
                  "item": "extendedcrafting:ender_ingot_block"
                },
                {
                  "item": "extendedcrafting:ender_ingot_block"
                },
                {
                  "item": "compressedblocks:c1_end_stone_bricks"
                },
                {
                  "item": "draconicevolution:draconium_block"
                },
                {
                  "item": "extendedcrafting:ender_ingot_block"
                },
                {
                  "item": "extendedcrafting:ender_ingot_block"
                }
              ],
              "result": {
                "item": "extendedcrafting:ender_crafter"
              }
            })
            event.custom({
              "type": "extendedcrafting:combination",
              "powerCost": 100000,
              "input": {
                "item": "minecraft:nether_star"
              },
              "ingredients": [
                {
                  "item": "draconicevolution:awakened_draconium_block"
                },
                {
                  "item": "cyclic:apple_emerald"
                },
                {
                  "item": "farmersdelight:melon_juice"
                },
                {
                  "item": "cyclic:charm_antipotion"
                },
                {
                  "item": "cyclic:apple_diamond"
                },
                {
                  "item": "cyclic:apple_diamond"
                },
                {
                  "item": "aquaculture:neptunium_ingot"
                },
                {
                  "item": "aquaculture:neptunium_ingot"
                },
                {
                  "item": "sophisticatedbackpacks:everlasting_upgrade"
                },
                {
                  "type": "forge:nbt",
                  "item": "immersiveengineering:potion_bucket",
                  "count": 1,
                  "nbt": "{Potion:\"minecraft:strong_healing\"}"
                },
                {
                  "item": "draconicevolution:awakened_draconium_block"
                },
                {
                  "item": "cyclic:apple_emerald"
                }
              ],
              "result": {
                "item": "minecraft:totem_of_undying"
              }
            })

          //Refined Obsidian Sword
          event.custom({
            "type": "extendedcrafting:combination",
            "powerCost": 10000,
            "input": {
              "item": "betterendforge:aeternium_sword"
            },
            "ingredients": [
              {
                "item": "minecraft:netherite_block"
              },
              {
                "item": "minecraft:netherite_block"
              },
              {
                "item": "mekanism:enriched_refined_obsidian"
              },
              {
                "item": "extendedcrafting:crystaltine_block"
              },
              {
                "item": "extendedcrafting:crystaltine_block"
              },
              {
                "item": "mekanism:block_refined_obsidian"
              },
              {
                "item": "mekanism:block_refined_obsidian"
              },
              {
                "item": "mekanism:enriched_refined_obsidian"
              },
              {
                "item": "mekanism:enriched_refined_obsidian"
              },
              {
                "item": "mekanism:block_refined_obsidian"
              },
              {
                "item": "mekanism:block_refined_obsidian"
              },
              {
                "item": "mekanism:enriched_refined_obsidian"
              },
              {
                "item": "extendedcrafting:crystaltine_block"
              },
              {
                "item": "extendedcrafting:crystaltine_block"
              },
              {
                "item": "minecraft:netherite_block"
              },
              {
                "item": "minecraft:netherite_block"
              },
              {
                "item": "mekanism:enriched_refined_obsidian"
              },
              {
                "item": "mekanism:enriched_refined_obsidian"
              },
              {
                "item": "mekanism:enriched_refined_obsidian"
              },
              {
                "item": "mekanism:enriched_refined_obsidian"
              }
            ],
            "result": {
              "item": "mekanismtools:refined_obsidian_sword"
            }
          })

          //Crystallized Obsidian Sword
          event.custom({
            "type": "extendedcrafting:combination",
            "powerCost": 100000,
            "input": {
              "item": "mekanismtools:refined_obsidian_sword"
            },
            "ingredients": [
              {
                "item": "betterendforge:aurora_crystal"
              },
              {
                "item": "betterendforge:aurora_crystal"
              },
              {
                "item": "cyclic:gem_obsidian"
              },
              {
                "item": "betterendforge:eternal_crystal"
              },
              {
                "item": "betterendforge:eternal_crystal"
              },
              {
                "item": "betterendforge:aurora_crystal"
              },
              {
                "item": "betterendforge:aurora_crystal"
              },
              {
                "item": "cyclic:gem_obsidian"
              },
              {
                "item": "cyclic:gem_obsidian"
              },
              {
                "item": "betterendforge:aurora_crystal"
              },
              {
                "item": "betterendforge:aurora_crystal"
              },
              {
                "item": "cyclic:gem_obsidian"
              },
              {
                "item": "betterendforge:eternal_crystal"
              },
              {
                "item": "betterendforge:eternal_crystal"
              },
              {
                "item": "betterendforge:aurora_crystal"
              },
              {
                "item": "betterendforge:aurora_crystal"
              },
              {
                "item": "cyclic:gem_obsidian"
              },
              {
                "item": "cyclic:gem_obsidian"
              },
              {
                "item": "cyclic:gem_obsidian"
              },
              {
                "item": "cyclic:gem_obsidian"
              }
            ],
            "result": {
              "item": "cyclic:crystallized_obsidian_sword"
            }
          })

    })  