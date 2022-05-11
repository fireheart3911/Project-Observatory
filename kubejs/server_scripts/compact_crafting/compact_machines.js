// priority: 5

settings.logAddedRecipes = true
settings.logRemovedRecipes = true
settings.logSkippedRecipes = false
settings.logErroringRecipes = true

console.info('Hello, World! (You will see this line every time server resources reload)')

onEvent('recipes', event => {
    
    //Tiny Compact Machine
	event.custom({
		"type": "compactcrafting:miniaturization",
		"recipeSize": 3,
		"layers": [{
			"type": "compactcrafting:filled",
			"component": "C"
		},
		{
			"type": "compactcrafting:mixed",
			"pattern": [
				["C", "B", "C"],
				["B", "A", "B"],
				["C", "B", "C"]
			]
		},
		{
			"type": "compactcrafting:filled",
			"component": "C"
		}],
		"catalyst": {id:"compactmachines:personal_shrinking_device",Count:1},
		"components": { 
			"C": {
				"type": "compactcrafting:block",
				"block": "compactmachines:wall"
		  	},
			"B": {
				"type": "compactcrafting:block",
				"block": "minecraft:glass"
			},
			"A": {
				"type": "compactcrafting:block",
				"block": "compressedblocks:c1_iron_block"
			}
		},
		"outputs": [{id:"compactmachines:machine_tiny",Count:1}]
	  });

      //Small Compact Machine
	  event.custom({
		"type": "compactcrafting:miniaturization",
		"recipeSize": 3,
		"layers": [{
			"type": "compactcrafting:filled",
			"component": "C"
		},
		{
			"type": "compactcrafting:hollow",
			"wall": "C"
		},
		{
			"type": "compactcrafting:mixed",
			"pattern": [
				["C", "C", "C", "C", "C"],
				["C", "-", "E", "-", "C"],
				["C", "E", "D", "E", "C"],
				["C", "-", "E", "-", "C"],
				["C", "C", "C", "C", "C"]
			]
		},
		{
			"type": "compactcrafting:hollow",
			"wall": "C"
		},
		{
			"type": "compactcrafting:filled",
			"component": "C"
		}],
		"catalyst": {id:"compactmachines:personal_shrinking_device",Count:1},
		"components": {
			"E": {
				"type": "compactcrafting:block",
				"block": "minecraft:iron_bars"
			},
			"D": {
				"type": "compactcrafting:block",
				"block": "compactmachines:machine_tiny"
			},
			"C": {
				"type": "compactcrafting:block",
				"block": "compactmachines:wall"
		  	},
			"B": {
				"type": "compactcrafting:block",
				"block": "minecraft:glass"
			},
			"A": {
				"type": "compactcrafting:block",
				"block": "minecraft:beacon"
			}
		},
		"outputs": [{id:"compactmachines:machine_small",Count:1}]
	  });

    //Normal Compact Machine
	event.custom({
		"type": "compactcrafting:miniaturization",
			"recipeSize": 7,
			"layers": [{
				"type": "compactcrafting:filled",
				"component": "C"
			},
			{
				"type": "compactcrafting:mixed",
				"pattern": [
					["C", "C", "C", "C", "C", "C", "C"],
					["C", "-", "-", "-", "-", "-", "C"],
					["C", "-", "-", "-", "-", "-", "C"],
					["C", "-", "-", "B", "-", "-", "C"],
					["C", "-", "-", "-", "-", "-", "C"],
					["C", "-", "-", "-", "-", "-", "C"],
					["C", "C", "C", "C", "C", "C", "C"]
				]
			},
			{
				"type": "compactcrafting:mixed",
				"pattern": [
					["C", "C", "C", "C", "C", "C", "C"],
					["C", "-", "-", "-", "-", "-", "C"],
					["C", "-", "-", "B", "-", "-", "C"],
					["C", "-", "B", "A", "B", "-", "C"],
					["C", "-", "-", "B", "-", "-", "C"],
					["C", "-", "-", "-", "-", "-", "C"],
					["C", "C", "C", "C", "C", "C", "C"]
				]
			},
			{
				"type": "compactcrafting:mixed",
				"pattern": [
					["C", "C", "C", "C", "C", "C", "C"],
					["C", "-", "-", "B", "-", "-", "C"],
					["C", "-", "B", "A", "B", "-", "C"],
					["C", "B", "A", "Z", "A", "B", "C"],
					["C", "-", "B", "A", "B", "-", "C"],
					["C", "-", "-", "B", "-", "-", "C"],
					["C", "C", "C", "C", "C", "C", "C"]
				]
			},
			{
				"type": "compactcrafting:mixed",
				"pattern": [
					["C", "C", "C", "C", "C", "C", "C"],
					["C", "-", "-", "-", "-", "-", "C"],
					["C", "-", "-", "B", "-", "-", "C"],
					["C", "-", "B", "A", "B", "-", "C"],
					["C", "-", "-", "B", "-", "-", "C"],
					["C", "-", "-", "-", "-", "-", "C"],
					["C", "C", "C", "C", "C", "C", "C"]
				]
			},
			{
				"type": "compactcrafting:mixed",
				"pattern": [
					["C", "C", "C", "C", "C", "C", "C"],
					["C", "-", "-", "-", "-", "-", "C"],
					["C", "-", "-", "-", "-", "-", "C"],
					["C", "-", "-", "B", "-", "-", "C"],
					["C", "-", "-", "-", "-", "-", "C"],
					["C", "-", "-", "-", "-", "-", "C"],
					["C", "C", "C", "C", "C", "C", "C"]
				]
			},
			{
				"type": "compactcrafting:filled",
				"component": "C"
			}],
			"catalyst": {id:"compactmachines:personal_shrinking_device",Count:1},
			"components": { 
				"C": {
					"type": "compactcrafting:block",
					"block": "compactmachines:wall"
				  },
				"B": {
					"type": "compactcrafting:block",
					"block": "minecraft:glass"
				},
				"A": {
					"type": "compactcrafting:block",
					"block": "minecraft:beacon"
				},
				"Z": {
					"type": "compactcrafting:block",
					"block": "compactmachines:machine_small"
				}
			},
			"outputs": [{id:"compactmachines:machine_normal",Count:1}]
		  });
          //Large Compact Machine
		  event.custom({
			"type": "compactcrafting:miniaturization",
			"recipeSize": 7,
			"layers": [{
				"type": "compactcrafting:filled",
				"component": "C"
			},
			{
				"type": "compactcrafting:mixed",
				"pattern": [
					["C", "H", "H", "H", "H", "H", "C"],
					["H", "G", "F", "-", "F", "G", "H"],
					["H", "F", "-", "-", "-", "F", "H"],
					["H", "-", "-", "-", "-", "-", "H"],
					["H", "F", "-", "-", "-", "F", "H"],
					["H", "G", "F", "-", "F", "G", "H"],
					["C", "H", "H", "H", "H", "H", "C"]
				]
			},
			{
				"type": "compactcrafting:mixed",
				"pattern": [
					["C", "H", "H", "H", "H", "H", "C"],
					["H", "F", "-", "-", "-", "F", "H"],
					["H", "-", "A", "A", "A", "-", "H"],
					["H", "-", "A", "D", "A", "-", "H"],
					["H", "-", "A", "A", "A", "-", "H"],
					["H", "F", "-", "-", "-", "F", "H"],
					["C", "H", "H", "H", "H", "H", "C"]
				]
			},
			{
				"type": "compactcrafting:mixed",
				"pattern": [
					["C", "H", "H", "H", "H", "H", "C"],
					["H", "-", "-", "-", "-", "-", "H"],
					["H", "-", "A", "D", "A", "-", "H"],
					["H", "-", "D", "B", "D", "-", "H"],
					["H", "-", "A", "D", "A", "-", "H"],
					["H", "-", "-", "-", "-", "-", "H"],
					["C", "H", "H", "H", "H", "H", "C"]
				]
			},
			{
				"type": "compactcrafting:mixed",
				"pattern": [
					["C", "H", "H", "H", "H", "H", "C"],
					["H", "F", "-", "-", "-", "F", "H"],
					["H", "-", "A", "A", "A", "-", "H"],
					["H", "-", "A", "D", "A", "-", "H"],
					["H", "-", "A", "A", "A", "-", "H"],
					["H", "F", "-", "-", "-", "F", "H"],
					["C", "H", "H", "H", "H", "H", "C"]
				]
			},
			{
				"type": "compactcrafting:mixed",
				"pattern": [
					["C", "H", "H", "H", "H", "H", "C"],
					["H", "G", "F", "-", "F", "G", "H"],
					["H", "F", "-", "-", "-", "F", "H"],
					["H", "-", "-", "-", "-", "-", "H"],
					["H", "F", "-", "-", "-", "F", "H"],
					["H", "G", "F", "-", "F", "G", "H"],
					["C", "H", "H", "H", "H", "H", "C"]
				]
			},
			{
				"type": "compactcrafting:filled",
				"component": "C"
			}],
			"catalyst": {id:"compactmachines:personal_shrinking_device",Count:1},
			"components": {
				"A": {
					"type": "compactcrafting:block",
					"block": "extendedcrafting:black_iron_block"
				},
				"B": {
					"type": "compactcrafting:block",
					"block": "compactmachines:machine_normal"
				},
				"C": {
					"type": "compactcrafting:block",
					"block": "compactmachines:wall"
				  },
				"D": {
					"type": "compactcrafting:block",
					"block": "minecraft:glass"
				},
				"E": {
					"type": "compactcrafting:block",
					"block": "minecraft:beacon"
				},
				"F": {
					"type": "compactcrafting:block",
					"block": "extendedcrafting:ender_ingot_block"
				},
				"G": {
					"type": "compactcrafting:block",
					"block": "extendedcrafting:enhanced_ender_ingot_block"
				},
				"H": {
					"type": "compactcrafting:block",
					"block": "industrialforegoing:dark_glass"
				},
			},
			"outputs": [{id:"compactmachines:machine_large",Count:1}]
		  });

		  //Giant Machine
		  event.custom({
			  "type": "compactcrafting:miniaturization",
			  "recipeSize": 9,
			  "layers": [
				{
					"type": "compactcrafting:filled",
					"component": "C"
				},
				{
					"type": "compactcrafting:mixed",
					"pattern": [
						["C", "H", "H", "H", "H", "H", "H", "H", "C"],
						["H", "F", "F", "F", "F", "F", "F", "F", "H"],
						["H", "F", "-", "-", "-", "-", "-", "F", "H"],
						["H", "F", "-", "-", "-", "-", "-", "F", "H"],
						["H", "F", "-", "-", "-", "-", "-", "F", "H"],
						["H", "F", "-", "-", "-", "-", "-", "F", "H"],
						["H", "F", "-", "-", "-", "-", "-", "F", "H"],
						["H", "F", "F", "F", "F", "F", "F", "F", "H"],
						["C", "H", "H", "H", "H", "H", "H", "H", "C"]
					]
				},
				{
					"type": "compactcrafting:mixed",
					"pattern": [
						["C", "H", "H", "H", "H", "H", "H", "H", "C"],
						["H", "F", "-", "-", "-", "-", "-", "F", "H"],
						["H", "-", "-", "-", "-", "-", "-", "-", "H"],
						["H", "-", "-", "-", "-", "-", "-", "-", "H"],
						["H", "-", "-", "-", "-", "-", "-", "-", "H"],
						["H", "-", "-", "-", "-", "-", "-", "-", "H"],
						["H", "-", "-", "-", "-", "-", "-", "-", "H"],
						["H", "F", "-", "-", "-", "-", "-", "F", "H"],
						["C", "H", "H", "H", "H", "H", "H", "H", "C"]
					]
				},
				{
					"type": "compactcrafting:mixed",
					"pattern": [
						["C", "H", "H", "H", "H", "H", "H", "H", "C"],
						["H", "F", "-", "-", "-", "-", "-", "F", "H"],
						["H", "-", "-", "-", "-", "-", "-", "-", "H"],
						["H", "-", "-", "F", "F", "F", "-", "-", "H"],
						["H", "-", "-", "F", "D", "F", "-", "-", "H"],
						["H", "-", "-", "F", "F", "F", "-", "-", "H"],
						["H", "-", "-", "-", "-", "-", "-", "-", "H"],
						["H", "F", "-", "-", "-", "-", "-", "F", "H"],
						["C", "H", "H", "H", "H", "H", "H", "H", "C"]
					]
				},
				{
					"type": "compactcrafting:mixed",
					"pattern": [
						["C", "H", "H", "H", "H", "H", "H", "H", "C"],
						["H", "F", "-", "-", "-", "-", "-", "F", "H"],
						["H", "-", "-", "-", "-", "-", "-", "-", "H"],
						["H", "-", "-", "F", "D", "F", "-", "-", "H"],
						["H", "-", "-", "D", "B", "D", "-", "-", "H"],
						["H", "-", "-", "F", "D", "F", "-", "-", "H"],
						["H", "-", "-", "-", "-", "-", "-", "-", "H"],
						["H", "F", "-", "-", "-", "-", "-", "F", "H"],
						["C", "H", "H", "H", "H", "H", "H", "H", "C"]
					]
				},
				{
					"type": "compactcrafting:mixed",
					"pattern": [
						["C", "H", "H", "H", "H", "H", "H", "H", "C"],
						["H", "F", "-", "-", "-", "-", "-", "F", "H"],
						["H", "-", "-", "-", "-", "-", "-", "-", "H"],
						["H", "-", "-", "F", "F", "F", "-", "-", "H"],
						["H", "-", "-", "F", "D", "F", "-", "-", "H"],
						["H", "-", "-", "F", "F", "F", "-", "-", "H"],
						["H", "-", "-", "-", "-", "-", "-", "-", "H"],
						["H", "F", "-", "-", "-", "-", "-", "F", "H"],
						["C", "H", "H", "H", "H", "H", "H", "H", "C"]
					]
				},
				{
					"type": "compactcrafting:mixed",
					"pattern": [
						["C", "H", "H", "H", "H", "H", "H", "H", "C"],
						["H", "F", "-", "-", "-", "-", "-", "F", "H"],
						["H", "-", "-", "-", "-", "-", "-", "-", "H"],
						["H", "-", "-", "-", "-", "-", "-", "-", "H"],
						["H", "-", "-", "-", "-", "-", "-", "-", "H"],
						["H", "-", "-", "-", "-", "-", "-", "-", "H"],
						["H", "-", "-", "-", "-", "-", "-", "-", "H"],
						["H", "F", "-", "-", "-", "-", "-", "F", "H"],
						["C", "H", "H", "H", "H", "H", "H", "H", "C"]
					]
				},
				{
					"type": "compactcrafting:mixed",
					"pattern": [
						["C", "H", "H", "H", "H", "H", "H", "H", "C"],
						["H", "F", "F", "F", "F", "F", "F", "F", "H"],
						["H", "F", "-", "-", "-", "-", "-", "F", "H"],
						["H", "F", "-", "-", "-", "-", "-", "F", "H"],
						["H", "F", "-", "-", "-", "-", "-", "F", "H"],
						["H", "F", "-", "-", "-", "-", "-", "F", "H"],
						["H", "F", "-", "-", "-", "-", "-", "F", "H"],
						["H", "F", "F", "F", "F", "F", "F", "F", "H"],
						["C", "H", "H", "H", "H", "H", "H", "H", "C"]
					]
				},
				{
					"type": "compactcrafting:filled",
					"component": "C"
				}
			],
			"catalyst": {id:"compactmachines:personal_shrinking_device",Count:1},
			"components": {
				"B": {
					"type": "compactcrafting:block",
					"block": "compactmachines:machine_large"
				},
				"C": {
					"type": "compactcrafting:block",
					"block": "compactmachines:wall"
				  },
				"D": {
					"type": "compactcrafting:block",
					"block": "extendedcrafting:frame"
				},
				"F": {
					"type": "compactcrafting:block",
					"block": "extendedcrafting:black_iron_block"
				},
				"H": {
					"type": "compactcrafting:block",
					"block": "cyclic:dark_glass_connected"
				},
			},
			"outputs": [{id:"compactmachines:machine_giant",Count:1}]
		  })
		  
})


