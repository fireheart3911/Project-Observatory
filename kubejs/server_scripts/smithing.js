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
        "addition": {"item": "minecraft:netheritre_ingot"},
        "result": {"item": "minecraft:netherite_helmet"}
    })
    event.custom({
        "type": "minecraft:smithing",
        "base": {"item": "aquaculture:neptunium_chestplate"},
        "addition": {"item": "minecraft:netheritre_ingot"},
        "result": {"item": "minecraft:netherite_chestplate"}
    })
    event.custom({
        "type": "minecraft:smithing",
        "base": {"item": "aquaculture:neptunium_leggings"},
        "addition": {"item": "minecraft:netheritre_ingot"},
        "result": {"item": "minecraft:netherite_leggings"}
    })
    event.custom({
        "type": "minecraft:smithing",
        "base": {"item": "aquaculture:neptunium_boots"},
        "addition": {"item": "minecraft:netheritre_ingot"},
        "result": {"item": "minecraft:netherite_boots"}
    })
})