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

    })