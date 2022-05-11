onEvent("recipes", (event) => {
    event.custom({
        "type": "extendedcrafting:shaped_ender_crafter",
        "pattern": [
          "ABC",
          "DEF",
          "GHI"
        ],
        "key": {
          "A": {
            "item": "minecraft:diamond_block"
          },
          "B": {
            "item": "compactmachines:machine_large"
          },
          "C": {
            "item": "cyclic:gem_obsidian"
          },
          "D": {
            "type": "forge:nbt",
            "item": "sushigocrafting:tobiko_crab_cheese_california",
            "count": 1,
            "nbt": "{Weights:[I;-4,-3,-3,-1,-4,-4],Spices:{wasabi:1b,soy_sauce:1b}}"
          },
          "E": {
            "item": "extendedcrafting:ender_star"
          },
          "F": {
            "item": "farmersdelight:stuffed_pumpkin_block"
          },
          "G": {
            "item": "farmersdelight:bacon_and_eggs"
          },
          "H": {
            "type": "forge:nbt",
            "item": "mekanism:canteen",
            "count": 1,
            "nbt": "{mekData:{GasTanks:[{stored:{amount:64000L,gasName:\"mekanism:nutritional_paste\"},Tank:0b}]}}"
          },
          "I": {
            "item": "minecraft:enchanted_golden_apple"
          }
        },
        "result": {
          "item": "cyclic:heart"
        }
      })
    })