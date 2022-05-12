onEvent("recipes", (event) => {
    const sluice = event.recipes.ftbsluice.sluice;

    sluice(["cloth"], "minecraft:gravel", [
        ["mekanism:clump_iron", 0.44],
        ["minecraft:flint", 0.17],
        ["minecraft:coal", 0.14],
        ["mekanism:clump_copper", 0.64],
        ["mekanism:dust_sulfur", 0.24],
        ["mekanism:clump_lead", 0.07],
        ["mekanism:clump_tin", 0.1],
        ["mekanism:dust_fluorite", 0.1],
        ["mekanism:clump_osmium", 0.06],
    ]).max(2); //.time().mb();

    sluice(["iron"], "minecraft:gravel", [
        ["mekanism:clump_iron", 0.54],
        ["minecraft:flint", 0.22],
        ["minecraft:coal", 0.18],
        ["mekanism:clump_copper", 0.14],
        ["mekanism:dust_sulfur", 0.34],
        ["mekanism:clump_lead", 0.1],
        ["mekanism:clump_tin", 0.12],
        ["mekanism:dust_fluorite", 0.15],
        ["mekanism:clump_osmium", 0.09],
    ]);

    sluice(["gold"], "minecraft:gravel", [
        ["mekanism:clump_iron", 0.64],
        ["minecraft:coal", 0.22],
        ["mekanism:dust_lapis_lazuli", 0.14],
        ["mekanism:dust_diamond", 0.03],
        ["mekanism:dust_emerald", 0.04],
        ["mekanism:clump_copper", 0.18],
        ["mekanism:dust_sulfur", 0.44],
        ["mekanism:clump_lead", 0.13],
        ["mekanism:dust_tin", 0.14],
        ["mekanism:dust_uranium", 0.13],
        ["mekanism:block_uranium", 0.007],
        ["mekanism:clump_osmium", 0.13],
    ]);

    sluice(["diamond"], "minecraft:gravel", [
        ["mekanism:clump_iron", 0.69],
        ["minecraft:coal", 0.26],
        ["mekanism:dust_lapis_lazuli", 0.16],
        ["mekanism:dust_diamond", 0.04],
        ["mekanism:dust_emerald", 0.05],
        ["mekanism:clump_copper", 0.22],
        ["mekanism:dust_sulfur", 0.49],
        ["mekanism:clump_lead", 0.16],
        ["mekanism:clump_tin", 0.16],
        ["mekanism:crystal_uranium", 0.15],
        ["mekanism:clump_uranium", 0.12],
        ["mekanism:shard_uranium", 0.09],
        ["mekanism:clump_osmium", 0.17],
        ["moremekanismprocessing:clump_titanium", 0.14],
    ]);

    sluice(["blazing"], "minecraft:gravel", [
        ["minecraft:iron_ingot", 0.71],
        ["minecraft:lapis_lazuli", 0.18],
        ["minecraft:diamond", 0.06],
        ["minecraft:emerald", 0.07],
        ["mekanism:ingot_copper", 0.24],
        ["mekanism:ingot_lead", 0.18],
        ["mekanism:ingot_tin", 0.18],
        ["mekanism:ingot_uranium", 0.17],
        ["mekanism:ingot_osmium", 0.19],
        ["immersiveengineering:ingot_aluminum", 0.21],
        ["better_diving:titanium_ingot", 0.16],
    ]).fluid("minecraft:lava");
});
