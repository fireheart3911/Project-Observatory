onEvent("recipes", (event) => {
    const sluice = event.recipes.ftbsluice.sluice;

    sluice(["gold"], "ftbsluice:crushed_netherrack", [
        ["mekanism:dust_quartz", 0.08],
        ["minecraft:glowstone_dust", 0.08],
        ["minecraft:blaze_powder", 0.07],
        ["minecraft:nether_wart", 0.11],
        ["minecraft:crimson_fungus", 0.1],
        ["minecraft:warped_fungus", 0.13],
        ["minecraft:nether_sprouts", 0.7],
    ]).fluid("minecraft:lava");

    sluice(["diamond"], "ftbsluice:crushed_netherrack", [
        ["mekanism:dust_quartz", 0.14],
        ["minecraft:glowstone_dust", 0.14],
        ["minecraft:blaze_powder", 0.12],
    ]).fluid("minecraft:lava");

    sluice(["blazing"], "ftbsluice:crushed_netherrack", [
        ["minecraft:quartz", 0.16],
        ["minecraft:glowstone_dust", 0.17],
        ["minecraft:blaze_powder", 0.15],
    ]).fluid("minecraft:lava");
});
