onEvent("recipes", (event) => {
    event.custom({
        "type": "extendedcrafting:shaped_table",
        "pattern": [
          "AAA",
          "ABA",
          "AAA"
        ],
        "key": {
          "A": {
            "item": "ftbjarmod:cast_iron_nugget"
          },
          "B": {
            "item": "minecraft:gunpowder"
          }
        },
        "result": {
          "item": "cgm:advanced_bullet"
        }
      })
    event.custom({
        "type": "extendedcrafting:shaped_table",
        "pattern": [
          "AAA",
          "ABA",
          "AAA"
        ],
        "key": {
          "A": {
            "item": "minecraft:iron_nugget"
          },
          "B": {
            "item": "minecraft:gunpowder"
          }
        },
        "result": {
          "item": "cgm:basic_bullet"
        }
      })
      event.custom({
        "type": "extendedcrafting:shaped_table",
        "pattern": [
          "AAA",
          "ABA",
          "AAA"
        ],
        "key": {
          "A": {
            "item": "extendedcrafting:black_iron_nugget"
          },
          "B": {
            "item": "minecraft:gunpowder"
          }
        },
        "result": {
          "item": "cgm:shell"
        }
      })


})