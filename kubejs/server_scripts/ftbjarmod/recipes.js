onEvent("recipes", (event) => {
    const jar = event.recipes.ftbjarmod.jar;

    jar("minecraft:slime_ball", [
        Fluid.of("minecraft:water", 1000),
        ["minecraft:brown_mushroom", "minecraft:red_mushroom"],
    ]).lowTemp();

    jar("minecraft:obsidian", [Fluid.of("minecraft:water", 1000), Fluid.of("minecraft:lava", 1000)]).time(60);

    jar("minecraft:stone", [Fluid.of("minecraft:water", 1000), Fluid.of("minecraft:lava", 125)]).time(60);

    jar("minecraft:cobblestone", [Fluid.of("minecraft:water", 125), Fluid.of("minecraft:lava", 125)]).time(60);

    jar("minecraft:ice", [Fluid.of("minecraft:water", 1000)]).subzeroTemp();

    jar("minecraft:netherrack", ["minecraft:redstone", Fluid.of("minecraft:lava", 1000)]).time(20);
    jar("16x minecraft:netherrack", ["16x minecraft:redstone", Fluid.of("minecraft:lava", 16000)]).time(20);

    jar("minecraft:end_stone", ["minecraft:glowstone_dust", Fluid.of("minecraft:lava", 1000)]).time(20);
    jar("16x minecraft:end_stone", ["16x minecraft:glowstone_dust", Fluid.of("minecraft:lava", 16000)]).time(20);

    jar(Fluid.of("minecraft:lava", 1000), "#forge:cobblestone").time(3200).lowTemp();
    jar(Fluid.of("minecraft:lava", 1000), "#forge:cobblestone").time(300).highTemp();

    jar("minecraft:iron_ingot", "#forge:clusters/iron").time(400).lowTemp();
    jar("minecraft:iron_ingot", "#forge:clusters/iron").time(100).highTemp();
    jar("minecraft:iron_block", "9x #forge:clusters/iron").time(250).highTemp();

    jar("minecraft:gold_ingot", "#forge:clusters/gold").time(400).lowTemp();
    jar("minecraft:gold_ingot", "#forge:clusters/gold").time(100).highTemp();
    jar("minecraft:gold_block", "9x #forge:clusters/gold").time(250).highTemp();

    jar("6x minecraft:redstone", "#forge:clusters/redstone").time(175).lowTemp();
    jar("6x minecraft:redstone_block", "9x #forge:clusters/redstone").time(300).highTemp();

    jar("minecraft:lapis_lazuli", "#forge:clusters/lapis").time(175).lowTemp();
    jar("minecraft:lapis_block", "9x #forge:clusters/lapis").time(300).highTemp();

    jar("minecraft:quartz", "#forge:clusters/quartz").time(175).lowTemp();
    jar("minecraft:quartz_block", "4x #forge:clusters/quartz").time(300).highTemp();

    jar("minecraft:diamond", "#forge:clusters/diamond").time(250).highTemp();
    jar("minecraft:diamond_block", "9x #forge:clusters/diamond").time(500).highTemp();

    jar("minecraft:emerald", "#forge:clusters/emerald").time(250).highTemp();
    jar("minecraft:emerald_block", "9x #forge:clusters/emerald").time(500).highTemp();

    jar("better_diving:titanium_ingot", "#forge:clusters/titanium").time(250).highTemp();
    jar("better_diving:titanium_block", "9x #forge:clusters/titanium").time(500).highTemp();

    jar("appliedenergistics2:sky_stone_block", "appliedenergistics2:sky_dust").time(250).highTemp();
    jar("9x appliedenergistics2:sky_stone_block", "9x appliedenergistics2:sky_dust").time(650).highTemp();

    jar("9x mysticalagriculture:soulstone_cobble", ["mysticalagriculture:soulium_dust", "8x #forge:cobblestone"])
        .time(250)
        .highTemp();

    event.remove({ id: "mysticalagriculture:prosperity_seed_base" });
    jar("mysticalagriculture:prosperity_seed_base", [
        "4x mysticalagriculture:prosperity_shard",
        "minecraft:wheat_seeds",
    ]);
    jar("16x mysticalagriculture:prosperity_seed_base", [
        "64x mysticalagriculture:prosperity_shard",
        "16x minecraft:wheat_seeds",
    ]).time(60);

    event.remove({ id: "dimpaintings:nether_painting" });
    jar("dimpaintings:nether_painting", ["4x minecraft:obsidian", "4x minecraft:netherrack", "minecraft:painting"])
        .time(175)
        .lowTemp();

    event.remove({ id: "dimpaintings:end_painting" });
    jar("dimpaintings:end_painting", ["4x minecraft:ender_pearl", "4x minecraft:ender_eye", "minecraft:painting"])
        .time(175)
        .lowTemp();

    event.remove({ id: "dimpaintings:overworld_painting" });
    jar("dimpaintings:overworld_painting", ["4x minecraft:dirt", "4x #minecraft:logs", "minecraft:painting"])
        .time(175)
        .lowTemp();

    jar("8x fluxnetworks:flux_dust", [
        "8x minecraft:redstone",
        "#forge:dusts/titanium",
        Fluid.of("minecraft:lava", 250),
    ])
        .time(20)
        .lowTemp();
    jar("32x fluxnetworks:flux_dust", [
        "32x minecraft:redstone",
        "4x #forge:dusts/titanium",
        Fluid.of("minecraft:lava", 1000),
    ])
        .time(60)
        .lowTemp();

    event.remove({ id: "tesseract:tesseract" });
    jar("tesseract:tesseract", [
        "thermal:energy_cell_frame",
        "thermal:fluid_cell_frame",
        Fluid.of("tconstruct:molten_ender", 1000),
    ])
        .time(250)
        .highTemp();

    jar("mekanism:ingot_uranium", "#forge:clusters/uranium").time(250).highTemp();
    jar("mekanism:block_uranium", "9x #forge:clusters/uranium").time(500).highTemp();

    jar("mekanism:ingot_osmium", "#forge:clusters/osmium").time(250).highTemp();
    jar("mekanism:block_osmium", "9x #forge:clusters/osmium").time(500).highTemp();

    jar("mekanism:fluorite_gem", "#forge:clusters/fluorite").time(250).highTemp();
    jar("9x mekanism:fluorite_gem", "9x #forge:clusters/fluorite").time(500).highTemp();

    jar("mekanism:salt", Fluid.of("minecraft:water", 250)).time(10).lowTemp();

    jar("appliedenergistics2:engineering_processor_press", ["minecraft:iron_block", "minecraft:diamond"])
        .time(10)
        .lowTemp();
    jar("appliedenergistics2:logic_processor_press", ["minecraft:iron_block", "minecraft:gold_ingot"])
        .time(10)
        .lowTemp();
    jar("appliedenergistics2:calculation_processor_press", [
        "minecraft:iron_block",
        "appliedenergistics2:purified_certus_quartz_crystal",
    ])
        .time(10)
        .lowTemp();
    jar("appliedenergistics2:silicon_press", ["minecraft:iron_block", "refinedstorage:silicon"]).time(10).lowTemp();

    jar("minecraft:soul_sand", [Fluid.of("kubejs:liquid_mob_souls", 100), "#minecraft:sand"]).time(20);
    jar("16x minecraft:soul_sand", [Fluid.of("kubejs:liquid_mob_souls", 1600), "16x #minecraft:sand"]).time(20);

    jar(Fluid.of("kubejs:liquid_mob_souls", 500), ["rid:mob_soul"]).time(280).lowTemp();
    jar(Fluid.of("kubejs:liquid_mob_souls", 500), ["rid:mob_soul"]).time(80).highTemp();

    jar(Fluid.of("kubejs:molten_essence", 1000), ["mysticalagradditions:creative_essence"]).time(180).highTemp();

    jar("minecraft:basalt", [Fluid.of("kubejs:liquid_mob_souls", 250), Fluid.of("minecraft:lava", 1000)])
        .time(20)
        .lowTemp();

    jar("16x minecraft:basalt", [Fluid.of("kubejs:liquid_mob_souls", 4000), Fluid.of("minecraft:lava", 16000)])
        .time(20)
        .lowTemp();

    jar("minecraft:netherite_scrap", "9x tconstruct:debris_nugget").time(250).highTemp();
    jar("9x minecraft:netherite_scrap", "81x tconstruct:debris_nugget").time(500).highTemp();

    jar("immersiveengineering:ingot_aluminum", "#forge:clusters/aluminum").time(400).lowTemp();
    jar("immersiveengineering:ingot_aluminum", "#forge:clusters/aluminum").time(100).highTemp();
    jar("immersiveengineering:storage_aluminum", "9x #forge:clusters/aluminum").time(250).highTemp();

    jar("thermal:nickel_ingot", "#forge:clusters/nickel").time(400).lowTemp();
    jar("thermal:nickel_ingot", "#forge:clusters/nickel").time(100).highTemp();
    jar("thermal:nickel_block", "9x #forge:clusters/nickel").time(250).highTemp();

    jar("thermal:silver_ingot", "#forge:clusters/silver").time(400).lowTemp();
    jar("thermal:silver_ingot", "#forge:clusters/silver").time(100).highTemp();
    jar("thermal:silver_block", "9x #forge:clusters/silver").time(250).highTemp();

    jar("thermal:tin_ingot", "#forge:clusters/tin").time(400).lowTemp();
    jar("thermal:tin_ingot", "#forge:clusters/tin").time(100).highTemp();
    jar("thermal:tin_block", "9x #forge:clusters/tin").time(250).highTemp();

    jar("thermal:lead_ingot", "#forge:clusters/lead").time(400).lowTemp();
    jar("thermal:lead_ingot", "#forge:clusters/lead").time(100).highTemp();
    jar("thermal:lead_block", "9x #forge:clusters/lead").time(250).highTemp();

    jar("thermal:copper_ingot", "#forge:clusters/copper").time(400).lowTemp();
    jar("thermal:copper_ingot", "#forge:clusters/copper").time(100).highTemp();
    jar("thermal:copper_block", "9x #forge:clusters/copper").time(250).highTemp();

    jar("tconstruct:cobalt_ingot", "#forge:clusters/cobalt").time(400).lowTemp();
    jar("tconstruct:cobalt_ingot", "#forge:clusters/cobalt").time(100).highTemp();
    jar("tconstruct:cobalt_block", "9x #forge:clusters/cobalt").time(250).highTemp();

    jar("minecraft:dirt", "8x #minecraft:saplings").time(800);
    jar("minecraft:dirt", "8x #forge:seeds").time(800);

    jar("8x minecraft:dirt", "64x #minecraft:saplings").time(1200);
    jar("8x minecraft:dirt", "64x #forge:seeds").time(1200);

    jar("32x minecraft:clay_ball", ["1x #minecraft:sand", "1x #forge:gravel", Fluid.of("minecraft:water", 1000)]).time(
        20
    );

    jar(
        [
            "9x draconicevolution:large_chaos_frag",
            "8x draconicevolution:medium_chaos_frag",
            "7x draconicevolution:small_chaos_frag",
        ],
        [
            "1x draconicevolution:chaos_shard",
            Fluid.of("kubejs:liquid_mob_souls", 1000),
            Fluid.of("kubejs:molten_essence", 10),
        ]
    )
        .time(80)
        .highTemp();

    jar(
        ["6x botania:life_essence", "8x botania:terrasteel_nugget"],
        ["1x botania:gaia_ingot", Fluid.of("kubejs:liquid_mob_souls", 16000), Fluid.of("kubejs:molten_essence", 10)]
    )
        .time(80)
        .highTemp();

    jar("minecraft:iron_ingot", [Fluid.of("minecraft:water", 10), "#forge:ingots/cast_iron"])
        .time(120)
        .lowTemp();
    jar("minecraft:iron_ingot", [Fluid.of("minecraft:water", 10), "#forge:ingots/cast_iron"])
        .time(20)
        .highTemp();

    jar("16x minecraft:iron_ingot", [Fluid.of("minecraft:water", 100), "16x #forge:ingots/cast_iron"])
        .time(240)
        .lowTemp();
    jar("16x minecraft:iron_ingot", [Fluid.of("minecraft:water", 100), "16x #forge:ingots/cast_iron"])
        .time(60)
        .highTemp();
});
