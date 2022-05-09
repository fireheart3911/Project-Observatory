onEvent("recipes", (event) => {
    const sluice = event.recipes.ftbsluice.sluice;

    sluice(["gold"], "ftbsluice:crushed_endstone", [
        ["minecraft:chorus_flower", 0.05],
        ["miniutilities:ender_lily_seeds", 0.06],
        ["betterendforge:crystal_shards", 0.07],
        ["betterendforge:glowing_bulb", 0.08],
        ["betterendforge:lumecorn_rod", 0.07],
    ]);

    sluice(["diamond"], "ftbsluice:crushed_endstone", [
        ["minecraft:chorus_flower", 0.12],
        ["miniutilities:ender_lily_seeds", 0.12],
        ["draconicevolution:draconium_dust", 0.05],
        ["minecraft:shulker_shell", 0.02],
    ]);

    sluice(["blazing"], "ftbsluice:crushed_endstone", [["draconicevolution:draconium_ingot", 0.07]]).fluid(
        "minecraft:lava"
    );
});
