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

//Dimensional Seed
event.custom({
  "type": "extendedcrafting:shaped_table",
  "pattern": [
    " AAABCCC ",
    "AADAECFCC",
    "AGHAICJKC",
    "AAAALCCCC",
    "BEILMLIEB",
    "NNNNLOOOO",
    "NPQNIORSO",
    "NNTNEOUOO",
    " NNNBOOO "
  ],
  "key": {
    "A": {
      "item": "compressedblocks:c0_dirt"
    },
    "B": {
      "item": "immersiveengineering:coil_hv"
    },
    "C": {
      "item": "compressedblocks:c1_cobblestone"
    },
    "D": {
      "item": "farmersdelight:red_mushroom_colony"
    },
    "E": {
      "item": "mekanism:teleportation_core"
    },
    "F": {
      "item": "sophisticatedbackpacks:stack_upgrade_tier_4"
    },
    "G": {
      "item": "farmersdelight:brown_mushroom_colony"
    },
    "H": {
      "item": "aquaculture:lockbox"
    },
    "I": {
      "item": "mekanism:enriched_refined_obsidian"
    },
    "J": {
      "type": "forge:nbt",
      "item": "immersiveengineering:survey_tools",
      "count": 1,
      "nbt": "{Damage:0}"
    },
    "K": {
      "item": "immersivepetroleum:oil_bucket"
    },
    "L": {
      "item": "draconicevolution:wyvern_io_crystal"
    },
    "M": {
      "item": "compactmachines:machine_giant"
    },
    "N": {
      "item": "compressedblocks:c0_netherrack"
    },
    "O": {
      "item": "compressedblocks:c0_end_stone"
    },
    "P": {
      "item": "nethers_delight:crimson_fungus_colony_item"
    },
    "Q": {
      "type": "forge:nbt",
      "item": "minecraft:splash_potion",
      "count": 1,
      "nbt": "{Potion:\"minecraft:long_fire_resistance\"}"
    },
    "R": {
      "item": "betterendforge:crystal_shards"
    },
    "S": {
      "item": "cyclic:gem_obsidian"
    },
    "T": {
      "item": "nethers_delight:warped_fungus_colony_item"
    },
    "U": {
      "item": "draconicevolution:awakened_draconium_block"
    }
  },
  "result": {
    "item": "atmadditions:dimensional_seed"
  }
})

})