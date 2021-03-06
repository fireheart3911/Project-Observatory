onEvent("recipes", (event) => {
    const temp = event.recipes.ftbjarmod.temperature_source;

    event.remove({ id: "ftbjarmod:temperature_sources/beacon" });
    event.remove({ id: "ftbjarmod:temperature_sources/blue_ice" });
    event.remove({ id: "ftbjarmod:temperature_sources/blue_magma_block" });
    event.remove({ id: "ftbjarmod:temperature_sources/campfire" });
    event.remove({ id: "ftbjarmod:temperature_sources/creative_high" });
    event.remove({ id: "ftbjarmod:temperature_sources/creative_low" });
    event.remove({ id: "ftbjarmod:temperature_sources/creative_subzero" });
    event.remove({ id: "ftbjarmod:temperature_sources/crying_obsidian" });
    event.remove({ id: "ftbjarmod:temperature_sources/fire" });
    event.remove({ id: "ftbjarmod:temperature_sources/glowstone_block" });
    event.remove({ id: "ftbjarmod:temperature_sources/ice" });
    event.remove({ id: "ftbjarmod:temperature_sources/lava" });
    event.remove({ id: "ftbjarmod:temperature_sources/magma_block" });
    event.remove({ id: "ftbjarmod:temperature_sources/packed_ice" });
    event.remove({ id: "ftbjarmod:temperature_sources/respawn_anchor" });
    event.remove({ id: "ftbjarmod:temperature_sources/soul_campfire" });
    event.remove({ id: "ftbjarmod:temperature_sources/soul_fire" });
    event.remove({ id: "ftbjarmod:temperature_sources/torch" });
    event.remove({ id: "ftbjarmod:temperature_sources/wall_torch" });

    const source = (temperature, block, efficiency) => {
        temp({
            temperature: temperature,
            block: block,
            efficiency: efficiency,
        });
    };

    const sourcewithitem = (temperature, block, item, efficiency) => {
        temp({
            temperature: temperature,
            block: block,
            item: item,
            efficiency: efficiency,
        });
    };

    //No temp
    source("none", "minecraft:glowstone", 1.5);
    source("none", "minecraft:crying_obsidian", 2.0);
    source("none", "minecraft:respawn_anchor", 4.0);

    //Low temp
    source("low", "minecraft:campfire[lit=true]", 0.5);
    sourcewithitem(
        "low",
        "minecraft:fire",
        {
            item: "minecraft:flint_and_steel",
            nbt: {
                display: {
                    Name: '{"translate": "block.minecraft.fire"}',
                },
            },
        },
        0.25
    );

    sourcewithitem("low", "minecraft:lava", "minecraft:lava_bucket", 1.0);
    source("low", "minecraft:magma_block", 1.25);

    //High temp
    source("high", "minecraft:soul_campfire[lit=true]", 0.5);
    sourcewithitem(
        "high",
        "minecraft:soul_fire",
        {
            item: "minecraft:flint_and_steel",
            nbt: {
                display: {
                    Name: '{"translate": "block.minecraft.soul_fire"}',
                },
            },
        },
        0.25
    );
    source("high", "ftbjarmod:blue_magma_block", 2.0);
    source("high", "minecraft:beacon", 1.0);

    //Sub temp
    source("subzero", "minecraft:ice", 0.25);
    source("subzero", "minecraft:packed_ice", 0.75);
    source("subzero", "minecraft:blue_ice", 1.0);
    source("subzero", "betterendforge:ancient_emerald_ice", 2.0);
});
