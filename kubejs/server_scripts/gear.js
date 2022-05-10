onEvent('recipes', (event) => {
    
    //Aeternium Recipe
    event.remove({output: 'betterendforge:aeternium_ingot'});
    event.custom({
        "type": "betterendforge:alloying",
        "ingredients": ["betterendforge:terminite_ingot", "minecraft:netherite_ingot"],
        "result": {
            "item": " moremekanismprocessing:azure_silver_ingot",
            "count": 1
        },
        "experience": 0.0,
        "smelttime": 2400
    })
    event.custom({
        "type": "betterendforge:infusion",
        "input": {
            "item": "moremekanismprocessing:azure_silver_ingot"
        },
        "result": {
            "item": "betterendforge:aeternium_ingot",
            "count": 1
        },
        "time": 300,
        "catalysts": {
            "north": "minecraft:netherite_ingot",
            "north_east": "betterendforge:terminite_ingot",
            "east": "minecraft:netherite_ingot",
            "south_east": "betterendforge:eternal_crystal",
            "south": "minecraft:netherite_ingot",
            "south_west": "betterendforge:terminite_ingot",
            "west": "minecraft:netherite_ingot",
            "north_west": "betterendforge:eternal_crystal"
        }
    })
    

})