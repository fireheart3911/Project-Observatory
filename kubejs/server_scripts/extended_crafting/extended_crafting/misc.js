onEvent("recipes", (event) => {

//Crafting Core
event.custom({
    "type": "extendedcrafting:shaped_table",
    "pattern": [
      "AAAAA",
      "ABCBA",
      "ACDCA",
      "ABCBA",
      "AAAAA"
    ],
    "key": {
      "A": {
        "item": "extendedcrafting:black_iron_block"
      },
      "B": {
        "item": "minecraft:diamond_block"
      },
      "C": {
        "item": "extendedcrafting:elite_catalyst"
      },
      "D": {
        "item": "extendedcrafting:frame"
      }
    },
    "result": {
      "item": "extendedcrafting:crafting_core"
    }
  })

})