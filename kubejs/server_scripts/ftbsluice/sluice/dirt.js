onEvent("recipes", (event) => {
    const sluice = event.recipes.ftbsluice.sluice;

    sluice(["cloth"], "minecraft:dirt", [
        ["minecraft:pumpkin_seeds", 0.15],
        ["minecraft:melon_seeds", 0.15],
        ["minecraft:beetroot_seeds", 0.15],
        ["minecraft:cocoa_beans", 0.15],
        ["minecraft:bamboo", 0.15],
        ["minecraft:sugar_cane", 0.15],
        ["cottonly:cotton_seeds", 0.15],
        ["integrateddynamics:menril_sapling", 0.15],
        ["flowerseeds:dandelion_seed", 0.09],
        ["flowerseeds:poppy_seed", 0.09],
        ["flowerseeds:orchid_seed", 0.09],
        ["flowerseeds:allium_seed", 0.09],
        ["flowerseeds:azure_seed", 0.09],
        ["flowerseeds:tulip_red_seed", 0.09],
        ["flowerseeds:tulip_orange_seed", 0.09],
        ["flowerseeds:tulip_white_seed", 0.09],
        ["flowerseeds:tulip_pink_seed", 0.09],
        ["flowerseeds:oxeye_seed", 0.09],
        ["flowerseeds:cornflower_seed", 0.09],
        ["flowerseeds:lily_seed", 0.09],
        ["jags:jags", 0.09],
    ]).max(2);

    sluice(["iron"], "minecraft:dirt", [
        ["minecraft:oak_sapling", 0.2],
        ["minecraft:spruce_sapling", 0.2],
        ["minecraft:birch_sapling", 0.2],
        ["minecraft:jungle_sapling", 0.2],
        ["minecraft:acacia_sapling", 0.2],
        ["minecraft:dark_oak_sapling", 0.2],
        ["cottonly:cotton_seeds", 0.2],
        ["integrateddynamics:menril_sapling", 0.2],
    ]).max(2);

    sluice(["cloth"], "minecraft:dirt", [
        ["minecraft:brown_mushroom", 0.13],
        ["minecraft:red_mushroom", 0.13],
        ["botania:white_mushroom", 0.13],
        ["botania:orange_mushroom", 0.13],
        ["botania:magenta_mushroom", 0.13],
        ["botania:light_blue_mushroom", 0.13],
        ["botania:yellow_mushroom", 0.13],
        ["botania:lime_mushroom", 0.13],
        ["botania:pink_mushroom", 0.13],
        ["botania:gray_mushroom", 0.13],
        ["botania:light_gray_mushroom", 0.13],
        ["botania:cyan_mushroom", 0.13],
        ["botania:purple_mushroom", 0.13],
        ["botania:blue_mushroom", 0.13],
        ["botania:brown_mushroom", 0.13],
        ["botania:green_mushroom", 0.13],
        ["botania:red_mushroom", 0.13],
        ["botania:black_mushroom", 0.13],
        ["farmersdelight:brown_mushroom_colony", 0.13],
        ["farmersdelight:red_mushroom_colony", 0.13],
    ])
        .max(2)
        .fluid("kubejs:liquid_mob_souls")
        .mb(250);
});
