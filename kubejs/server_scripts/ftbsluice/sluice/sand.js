onEvent("recipes", (event) => {
    const sluice = event.recipes.ftbsluice.sluice;

    sluice(["cloth"], "#forge:sand", [
        ["mekanism:clump_iron", 0.33],
        ["mekanism:clump_gold", 0.06],
        ["mekanism:clump_copper", 0.43],
        ["mekanism:clump_lead", 0.06],
        ["mekanism:clump_tin", 0.09],
        ["moremekanismprocessing:clump_silver", 0.07],
        ["moremekanismprocessing:clump_nickel", 0.06],
        ["mekanism:clump_osmium", 0.05],
        ["moremekanismprocessing:clump_aluminum", 0.08],
    ]).max(2);

    sluice(["iron"], "#forge:sand", [
        ["mekanism:clump_iron", 0.43],
        ["mekanism:clump_gold", 0.09],
        ["mekanism:clump_copper", 0.53],
        ["mekanism:clump_lead", 0.09],
        ["mekanism:clump_tin", 0.12],
        ["moremekanismprocessing:clump_silver", 0.12],
        ["moremekanismprocessing:clump_nickel", 0.09],
        ["mekanism:clump_osmium", 0.08],
        ["moremekanismprocessing:clump_aluminum", 0.12],
        ["projectred-core:electrotine_dust", 0.13],
    ]);

    sluice(["gold"], "#forge:sand", [
        ["mekanism:clump_iron", 0.53],
        ["mekanism:clump_gold", 0.13],
        ["mekanism:clump_copper", 0.63],
        ["mekanism:clump_lead", 0.12],
        ["mekanism:clump_tin", 0.13],
        ["moremekanismprocessing:clump_silver", 0.15],
        ["moremekanismprocessing:clump_nickel", 0.13],
        ["mysticalagriculture:prosperity_shard", 0.12],
        ["mekanism:clump_osmium", 0.12],
        ["mekanism:clump_uranium", 0.11],
        ["moremekanismprocessing:clump_aluminum", 0.15],
        ["projectred-core:electrotine_dust", 0.15],
    ]);

    sluice(["diamond"], "#forge:sand", [
        ["mekanism:clump_iron", 0.63],
        ["mekanism:clump_gold", 0.18],
        ["mekanism:clump_copper", 0.7],
        ["mekanism:clump_lead", 0.15],
        ["mekanism:clump_tin", 0.15],
        ["moremekanismprocessing:clump_silver", 0.17],
        ["moremekanismprocessing:clump_nickel", 0.16],
        ["mysticalagriculture:prosperity_shard", 0.19],
        ["mekanism:clump_osmium", 0.16],
        ["mekanism:clump_uranium", 0.13],
        ["moremekanismprocessing:clump_aluminum", 0.18],
        ["projectred-core:electrotine_dust", 0.16],
    ]);

    sluice(["blazing"], "#forge:sand", [
        ["minecraft:iron_ingot", 0.65],
        ["minecraft:gold_ingot", 0.2],
        ["mekanism:copper_ingot", 0.72],
        ["mekanism:lead_ingot", 0.17],
        ["mekanism:tin_ingot", 0.17],
        ["immersiveengineering:silver_ingot", 0.19],
        ["immersiveengineering:nickel_ingot", 0.18],
        ["mekanism:ingot_osmium", 0.18],
        ["immersiveengineering:ingot_aluminum", 0.2],
        ["mekanism:ingot_uranium", 0.15],
    ]).fluid("minecraft:lava");
});
