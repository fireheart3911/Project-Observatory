onEvent("recipes", (event) => {
    const sluice = event.recipes.ftbsluice.sluice;

    sluice(["cloth"], "#forge:dust", [
        ["rid:gold_chunk", 0.04],
        ["minecraft:bone_meal", 0.11],
        ["rid:silver_chunk", 0.05],
        ["rid:nickel_chunk", 0.04],
    ]).max(2);

    sluice(["iron"], "#forge:dust", [
        ["rid:gold_chunk", 0.07],
        ["minecraft:bone_meal", 0.16],
        ["minecraft:gunpowder", 0.09],
        ["rid:silver_chunk", 0.09],
        ["rid:nickel_chunk", 0.07],
    ]);

    sluice(["gold"], "#forge:dust", [
        ["rid:gold_chunk", 0.11],
        ["minecraft:bone_meal", 0.21],
        ["minecraft:gunpowder", 0.14],
        ["rid:redstone_chunk", 0.11],
        ["rid:silver_chunk", 0.13],
        ["rid:nickel_chunk", 0.11],
        ["appliedenergistics2:certus_quartz_crystal", 0.1],
        ["appliedenergistics2:charged_certus_quartz_crystal", 0.03],
        ["appliedenergistics2:sky_dust", 0.05],
    ]);

    sluice(["diamond"], "#forge:dust", [
        ["rid:gold_chunk", 0.16],
        ["minecraft:bone_meal", 0.25],
        ["minecraft:gunpowder", 0.19],
        ["rid:redstone_chunk", 0.21],
        ["rid:silver_chunk", 0.15],
        ["rid:nickel_chunk", 0.14],
        ["appliedenergistics2:certus_quartz_crystal", 0.15],
        ["appliedenergistics2:charged_certus_quartz_crystal", 0.07],
        ["appliedenergistics2:sky_dust", 0.09],
    ]);

    sluice(["blazing"], "#forge:dust", [
        ["minecraft:gold_ingot", 0.18],
        ["2x minecraft:redstone", 0.23],
        ["thermal:silver_ingot", 0.17],
        ["thermal:nickel_ingot", 0.16],
        ["appliedenergistics2:sky_stone_block", 0.11],
    ]).fluid("minecraft:lava");
});
