// priority: 0

settings.logAddedRecipes = true
settings.logRemovedRecipes = true
settings.logSkippedRecipes = false
settings.logErroringRecipes = true

onEvent('recipes', event => {
	
})

onEvent("recipes", (event) => {
    event.recipes.ftbjarmod
        .jar("16x ftbjarmod:cast_iron_ingot", ["16x #forge:ingots/iron", "#minecraft:coals"])
        .time(1800)
        .highTemp();

    // the mekanism way
    event.smelting("#forge:ingots/cast_iron", "mekanism:enriched_iron");
    event.blasting("#forge:ingots/cast_iron", "mekanism:enriched_iron");

    // the immersive way
    event.recipes.immersiveengineering
        .arc_furnace(["32x #forge:ingots/cast_iron"], "32x #forge:ingots/iron", ["2x #forge:silicon", "2x #coals"])
        .energy(102400)
        .time(200);
});

onEvent("recipes", (event) => {
    event.campfireCooking("minecraft:torch", "minecraft:stick").cookingTime(0);
});

onEvent("item.right_click", (event) => {
    if (event.item.hasTag("minecraft:boats")) {
        event.cancel();
    }
});



