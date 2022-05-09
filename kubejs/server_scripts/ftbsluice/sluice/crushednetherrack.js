onEvent("recipes", (event) => {
    const sluice = event.recipes.ftbsluice.sluice;

    sluice(["gold"], "ftbsluice:crushed_netherrack", [
        ["rid:quartz_chunk", 0.08],
        ["minecraft:glowstone_dust", 0.08],
        ["minecraft:blaze_powder", 0.07],
        ["mysticalagriculture:soulium_dust", 0.27],
        ["tconstruct:blood_slime_sapling", 0.09],
        ["rid:cobalt_chunk", 0.05],
        ["minecraft:nether_wart", 0.11],
        ["minecraft:crimson_fungus", 0.1],
        ["minecraft:warped_fungus", 0.13],
        ["minecraft:nether_sprouts", 0.7],
    ]).fluid("minecraft:lava");

    sluice(["diamond"], "ftbsluice:crushed_netherrack", [
        ["rid:quartz_chunk", 0.14],
        ["minecraft:glowstone_dust", 0.14],
        ["minecraft:blaze_powder", 0.12],
        ["mysticalagriculture:soulium_dust", 0.37],
        ["tconstruct:blood_slime_sapling", 0.13],
        ["rid:cobalt_chunk", 0.07],
    ]).fluid("minecraft:lava");

    sluice(["blazing"], "ftbsluice:crushed_netherrack", [
        ["minecraft:quartz", 0.16],
        ["minecraft:glowstone_dust", 0.17],
        ["minecraft:blaze_powder", 0.15],
        ["mysticalagriculture:soulium_dust", 0.4],
        ["tconstruct:blood_slime_sapling", 0.16],
        ["tconstruct:cobalt_ingot", 0.09],
    ]).fluid("minecraft:lava");
});
