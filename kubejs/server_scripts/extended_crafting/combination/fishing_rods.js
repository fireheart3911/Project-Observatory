onEvent("recipes", (event) => {
    //Default to Iron
    event.custom({
        "type": "extendedcrafting:combination",
        "powerCost": 100000,
        "input": {
            "item": "minecraft:fishing_rod"
        },
        "ingredients": [
            {
                "item": "minecraft:iron_ingot"
            },
            {
                "item": "minecraft:iron_ingot"
            },
            {
                "item": "minecraft:iron_ingot"
            },
            {
                "item": "minecraft:iron_ingot"
            },
            {
                "item": "minecraft:iron_ingot"
            },
            {
                "item": "minecraft:iron_ingot"
            },
            {
                "item": "minecraft:iron_ingot"
            },
            {
                "item": "minecraft:iron_ingot"
            }
        ],
        "result": {
            "item": "aquaculture:iron_fishing_rod"
        }
    });
    //Iron to Gold
    event.custom({
        "type": "extendedcrafting:combination",
        "powerCost": 100000,
        "input": {
            "item": "aquaculture:iron_fishing_rod"
        },
        "ingredients": [
            {
                "item": "minecraft:gold_ingot"
            },
            {
                "item": "minecraft:gold_ingot"
            },
            {
                "item": "minecraft:gold_ingot"
            },
            {
                "item": "minecraft:gold_ingot"
            },
            {
                "item": "minecraft:gold_ingot"
            },
            {
                "item": "minecraft:gold_ingot"
            },
            {
                "item": "minecraft:gold_ingot"
            },
            {
                "item": "minecraft:gold_ingot"
            }
        ],
        "result": {
            "item": "aquaculture:gold_fishing_rod"
        }
    });
    //Gold to Diamond
    event.custom({
        "type": "extendedcrafting:combination",
        "powerCost": 100000,
        "input": {
            "item": "aquaculture:gold_fishing_rod"
        },
        "ingredients": [
            {
                "item": "minecraft:diamond"
            },
            {
                "item": "minecraft:diamond"
            },
            {
                "item": "minecraft:diamond"
            },
            {
                "item": "minecraft:diamond"
            },
            {
                "item": "minecraft:diamond"
            },
            {
                "item": "minecraft:diamond"
            },
            {
                "item": "minecraft:diamond"
            },
            {
                "item": "minecraft:diamond"
            }
        ],
        "result": {
            "item": "aquaculture:diamond_fishing_rod"
        }
    });
    //Diamond to Neptunium
    event.custom({ 
        "type": "extendedcrafting:combination",
        "powerCost": 100000,
        "input": {
            "item": "aquaculture:diamond_fishing_rod"
        },
        "ingredients": [
            {
                "item": "aquaculture:neptunium_ingot"
            },
            {
                "item": "aquaculture:neptunium_ingot"
            },
            {
                "item": "aquaculture:neptunium_ingot"
            },
            {
                "item": "aquaculture:neptunium_ingot"
            },
            {
                "item": "aquaculture:neptunium_ingot"
            },
            {
                "item": "aquaculture:neptunium_ingot"
            },
            {
                "item": "aquaculture:neptunium_ingot"
            },
            {
                "item": "minecraft:nether_star"
            }
        ],
        "result": {
            "item": "aquaculture:neptunium_fishing_rod"
        }
    });
})