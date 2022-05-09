onEvent("recipes", (event) => {
    const sluice = event.recipes.ftbsluice.sluice;

    sluice(["cloth"], "#forge:sand", [
        ["rid:iron_chunk", 0.33],
        ["rid:gold_chunk", 0.06],
        ["rid:copper_chunk", 0.43],
        ["rid:lead_chunk", 0.06],
        ["rid:tin_chunk", 0.09],
        ["rid:silver_chunk", 0.07],
        ["rid:nickel_chunk", 0.06],
        ["rid:osmium_chunk", 0.05],
        ["rid:aluminum_chunk", 0.08],
    ]).max(2);

    sluice(["iron"], "#forge:sand", [
        ["rid:iron_chunk", 0.43],
        ["rid:gold_chunk", 0.09],
        ["rid:copper_chunk", 0.53],
        ["rid:lead_chunk", 0.09],
        ["rid:tin_chunk", 0.12],
        ["rid:silver_chunk", 0.12],
        ["rid:nickel_chunk", 0.09],
        ["rid:osmium_chunk", 0.08],
        ["rid:aluminum_chunk", 0.12],
        ["projectred-core:electrotine_dust", 0.13],
    ]);

    sluice(["gold"], "#forge:sand", [
        ["rid:iron_chunk", 0.53],
        ["rid:gold_chunk", 0.13],
        ["rid:copper_chunk", 0.63],
        ["rid:lead_chunk", 0.12],
        ["rid:tin_chunk", 0.13],
        ["rid:silver_chunk", 0.15],
        ["rid:nickel_chunk", 0.13],
        ["mysticalagriculture:prosperity_shard", 0.12],
        ["rid:osmium_chunk", 0.12],
        ["rid:uranium_chunk", 0.11],
        ["rid:aluminum_chunk", 0.15],
        ["projectred-core:electrotine_dust", 0.15],
    ]);

    sluice(["diamond"], "#forge:sand", [
        ["rid:iron_chunk", 0.63],
        ["rid:gold_chunk", 0.18],
        ["rid:copper_chunk", 0.7],
        ["rid:lead_chunk", 0.15],
        ["rid:tin_chunk", 0.15],
        ["rid:silver_chunk", 0.17],
        ["rid:nickel_chunk", 0.16],
        ["mysticalagriculture:prosperity_shard", 0.19],
        ["rid:osmium_chunk", 0.16],
        ["rid:uranium_chunk", 0.13],
        ["rid:aluminum_chunk", 0.18],
        ["projectred-core:electrotine_dust", 0.16],
    ]);

    sluice(["blazing"], "#forge:sand", [
        ["minecraft:iron_ingot", 0.65],
        ["minecraft:gold_ingot", 0.2],
        ["thermal:copper_ingot", 0.72],
        ["thermal:lead_ingot", 0.17],
        ["thermal:tin_ingot", 0.17],
        ["thermal:silver_ingot", 0.19],
        ["thermal:nickel_ingot", 0.18],
        ["mekanism:ingot_osmium", 0.18],
        ["immersiveengineering:ingot_aluminum", 0.2],
        ["mekanism:ingot_uranium", 0.15],
    ]).fluid("minecraft:lava");
});
