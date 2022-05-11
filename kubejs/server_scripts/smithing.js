onEvent('recipes', event => {

    //Diamond Armor To Neptunium Armor
    event.custom({
        "type": "minecraft:smithing",
        "base": {"item": "minecraft:diamond_helmet"},
        "addition": {"item": "aquaculture:neptunium_ingot"},
        "result": {"item": "aquaculture:neptunium_helmet"}
    })
    event.custom({
        "type": "minecraft:smithing",
        "base": {"item": "minecraft:diamond_chestplate"},
        "addition": {"item": "aquaculture:neptunium_ingot"},
        "result": {"item": "aquaculture:neptunium_chestplate"}
    })
    event.custom({
        "type": "minecraft:smithing",
        "base": {"item": "minecraft:diamond_leggings"},
        "addition": {"item": "aquaculture:neptunium_ingot"},
        "result": {"item": "aquaculture:neptunium_leggings"}
    })
    event.custom({  
        "type": "minecraft:smithing",
        "base": {"item": "minecraft:diamond_boots"},
        "addition": {"item": "aquaculture:neptunium_ingot"},
        "result": {"item": "aquaculture:neptunium_boots"}
    })

    //Neptunium Armor To Netherite Armor
    event.custom({
        "type": "minecraft:smithing",
        "base": {"item": "aquaculture:neptunium_helmet"},
        "addition": {"item": "minecraft:netherite_ingot"},
        "result": {"item": "minecraft:netherite_helmet"}
    })
    event.custom({
        "type": "minecraft:smithing",
        "base": {"item": "aquaculture:neptunium_chestplate"},
        "addition": {"item": "minecraft:netherite_ingot"},
        "result": {"item": "minecraft:netherite_chestplate"}
    })
    event.custom({
        "type": "minecraft:smithing",
        "base": {"item": "aquaculture:neptunium_leggings"},
        "addition": {"item": "minecraft:netherite_ingot"},
        "result": {"item": "minecraft:netherite_leggings"}
    })
    event.custom({
        "type": "minecraft:smithing",
        "base": {"item": "aquaculture:neptunium_boots"},
        "addition": {"item": "minecraft:netherite_ingot"},
        "result": {"item": "minecraft:netherite_boots"}
    })

    //Netherite Armor To Terminite Armor
    event.custom({
        "type": "minecraft:smithing",
        "base": {"item": "minecraft:netherite_helmet"},
        "addition": {"item": "betterendforge:terminite_ingot"},
        "result": {"item": "betterendforge:terminite_helmet"}
    })
    event.custom({
        "type": "minecraft:smithing",
        "base": {"item": "minecraft:netherite_chestplate"},
        "addition": {"item": "betterendforge:terminite_ingot"},
        "result": {"item": "betterendforge:terminite_chestplate"}
    })
    event.custom({
        "type": "minecraft:smithing",
        "base": {"item": "minecraft:netherite_leggings"},
        "addition": {"item": "betterendforge:terminite_ingot"},
        "result": {"item": "betterendforge:terminite_leggings"}
    })
    event.custom({
        "type": "minecraft:smithing",
        "base": {"item": "minecraft:netherite_boots"},
        "addition": {"item": "betterendforge:terminite_ingot"},
        "result": {"item": "betterendforge:terminite_boots"}
    })

    //Crystalite Armor To Aeterium Armor
    event.custom({
        "type": "minecraft:smithing",
        "base": {"item": "betterendforge:crystalite_helmet"},
        "addition": {"item": "betterendforge:eternal_crystal"},
        "result": {"item": "betterendforge:aeternium_helmet"}
    })
    event.custom({
        "type": "minecraft:smithing",
        "base": {"item": "betterendforge:crystalite_chestplate"},
        "addition": {"item": "betterendforge:eternal_crystal"},
        "result": {"item": "betterendforge:aeternium_chestplate"}
    })
    event.custom({
        "type": "minecraft:smithing",
        "base": {"item": "betterendforge:crystalite_leggings"},
        "addition": {"item": "betterendforge:eternal_crystal"},
        "result": {"item": "betterendforge:aeternium_leggings"}
    })
    event.custom({
        "type": "minecraft:smithing",
        "base": {"item": "betterendforge:crystalite_boots"},
        "addition": {"item": "betterendforge:eternal_crystal"},
        "result": {"item": "betterendforge:aeternium_boots"}
    })


})