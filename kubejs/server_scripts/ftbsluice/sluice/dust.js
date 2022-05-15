onEvent("recipes", (event) => {
    const sluice = event.recipes.ftbsluice.sluice;

    sluice(["cloth"], "ftbsluice:dust", [
        ["mekanism:dust_gold", 0.04],
        ["minecraft:bone_meal", 0.11],
    ]).max(2);

    sluice(["iron"], "ftbsluice:dust", [
        ["mekanism:dust_gold", 0.07],
        ["minecraft:bone_meal", 0.16],
        ["minecraft:gunpowder", 0.09],
    ]);

    sluice(["gold"], "ftbsluice:dust", [
        ["mekanism:dust_gold", 0.11],
        ["minecraft:bone_meal", 0.21],
        ["minecraft:gunpowder", 0.14],
        ["minecraft:redstone", 0.11]
    ]);

    sluice(["diamond"], "ftbsluice:dust", [
        ["mekanism:dust_gold", 0.16],
        ["minecraft:bone_meal", 0.25],
        ["minecraft:gunpowder", 0.19],
        ["minecraft:redstone", 0.21]
    ]);

    sluice(["blazing"], "ftbsluice:dust", [
        ["minecraft:gold_ingot", 0.18],
        ["2x minecraft:redstone", 0.23]
    ]).fluid("minecraft:lava");
});
