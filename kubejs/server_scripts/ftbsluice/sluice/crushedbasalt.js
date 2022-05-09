onEvent("recipes", (event) => {
    const sluice = event.recipes.ftbsluice.sluice;

    sluice(["gold"], "ftbsluice:crushed_basalt", [
        ["minecraft:netherrack", 0.6],
        ["tconstruct:debris_nugget", 0.02],
    ])
        .fluid("minecraft:lava")
        .max(1);

    sluice(["diamond"], "ftbsluice:crushed_basalt", [
        ["minecraft:netherrack", 0.4],
        ["tconstruct:debris_nugget", 0.04],
    ])
        .fluid("minecraft:lava")
        .max(1);

    sluice(["blazing"], "ftbsluice:crushed_basalt", [["minecraft:ancient_debris", 0.05]])
        .fluid("minecraft:lava")
        .max(1);
});
