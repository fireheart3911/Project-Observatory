onEvent("recipes", (event) => {
    const sluice = event.recipes.ftbsluice.sluice;

    sluice(["cloth"], "minecraft:dirt", [
        ["minecraft:pumpkin_seeds", 0.15],
        ["minecraft:melon_seeds", 0.15],
        ["minecraft:beetroot_seeds", 0.15],
        ["minecraft:cocoa_beans", 0.15],
        ["minecraft:bamboo", 0.15],
        ["minecraft:sugar_cane", 0.15],
        ["minecraft:wheat_seeds", 0.15],
    ]).max(2);

    sluice(["iron"], "minecraft:dirt", [
        ["minecraft:oak_sapling", 0.2],
        ["minecraft:spruce_sapling", 0.2],
        ["minecraft:birch_sapling", 0.2],
        ["minecraft:jungle_sapling", 0.2],
        ["minecraft:acacia_sapling", 0.2],
        ["minecraft:dark_oak_sapling", 0.2],
    ]).max(2);

    sluice(["cloth"], "minecraft:dirt", [
        ["minecraft:brown_mushroom", 0.13],
        ["minecraft:red_mushroom", 0.13],
        ["farmersdelight:brown_mushroom_colony", 0.13],
        ["farmersdelight:red_mushroom_colony", 0.13],
    ])
        .max(2)
        .fluid("minecraft:lava")
        .mb(250);
});
