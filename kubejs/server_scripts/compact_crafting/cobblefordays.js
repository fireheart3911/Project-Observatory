// priority: 0
onEvent('recipes', event => {

    //T1 Gen
    event.custom({
        "type": "compactcrafting:miniaturization",
        "recipeSize": 5,
        "layers": [{
            "type": "compactcrafting:filled",
            "component": "A"
        },
        {
            "type": "compactcrafting:filled",
            "component": "B"
        },
        {
            "type": "compactcrafting:mixed",
            "pattern": [
                ["B", "B", "B", "B", "B"],
                ["B", "D", "E", "C", "B"],
                ["B", "D", "E", "C", "B"],
                ["B", "D", "E", "C", "B"],
                ["B", "B", "B", "B", "B"]
            ]
        },
        {
            "type": "compactcrafting:filled",
            "component": "B"
        },
        {
            "type": "compactcrafting:filled",
            "component": "A"
        }],
        "catalyst": { id: "minecraft:stone_pickaxe", Count: 1 },
        "components": {
            "A": {
                "type": "compactcrafting:block",
                "block": "minecraft:acacia_wood"
            },
            "B": {
                "type": "compactcrafting:block",
                "block": "minecraft:glass"
            },
            "C": {
                "type": "compactcrafting:block",
                "block": "minecraft:lava"
            },
            "D": {
                "type": "compactcrafting:block",
                "block": "minecraft:water"
            },
            "E": {
                "type": "compactcrafting:block",
                "block": "minecraft:cobblestone"
            }
        },
        "outputs": [{ id: "cobblefordays:tier_1", Count: 1 }]
    });
         //Small Compact Machine
	  event.custom({
		"type": "compactcrafting:miniaturization",
		"recipeSize": 3,
		"layers": [{
			"type": "compactcrafting:filled",
			"component": "A"
		},
		{
			"type": "compactcrafting:filled",
			"component": "B"
		},
		{
			"type": "compactcrafting:mixed",
			"pattern": [
                ["B", "B", "B", "B", "B"],
                ["B", "D", "E", "C", "B"],
                ["B", "D", "E", "C", "B"],
                ["B", "D", "E", "C", "B"],
                ["B", "B", "B", "B", "B"]
			]
		},
		{
			"type": "compactcrafting:filled",
			"component": "B"
		},
		{
			"type": "compactcrafting:filled",
			"component": "A"
		}],
		"catalyst": {id:"minecraft:iron_pickaxe",Count:1},
		"components": {
            "A": {
                "type": "compactcrafting:block",
                "block": "compressedblocks:c1_cobblestone"
            },
            "B": {
                "type": "compactcrafting:block",
                "block": "minecraft:glass"
            },
            "C": {
                "type": "compactcrafting:block",
                "block": "minecraft:lava"
            },
            "D": {
                "type": "compactcrafting:block",
                "block": "minecraft:water"
            },
            "E": {
                "type": "compactcrafting:block",
                "block": "minecraft:cobblestone"
            }
		},
		"outputs": [{id:"cobblefordays:tier_2",Count:1}]
	  });
})