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

    })