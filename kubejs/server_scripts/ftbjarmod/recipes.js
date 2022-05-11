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

    event.remove({ id: "dimpaintings:nether_painting" });
    jar("dimpaintings:nether_painting", ["4x minecraft:obsidian", "4x minecraft:netherrack", "atmadditions:dimensional_seed"])
        .time(175)
        .highTemp();

    event.remove({ id: "dimpaintings:end_painting" });
    jar("dimpaintings:end_painting", ["4x minecraft:ender_pearl", "4x minecraft:ender_eye", "atmadditions:dimensional_seed"])
        .time(175)
        .subzeroTemp();

    event.remove({ id: "dimpaintings:overworld_painting" });
    jar("dimpaintings:overworld_painting", ["4x minecraft:dirt", "4x #minecraft:logs", "minecraft:painting"])
        .time(175)
        .lowTemp();

    jar("mekanism:ingot_uranium", "#forge:clusters/uranium").time(250).highTemp();
    jar("mekanism:block_uranium", "9x #forge:clusters/uranium").time(500).highTemp();

    jar("mekanism:ingot_osmium", "#forge:clusters/osmium").time(250).highTemp();
    jar("mekanism:block_osmium", "9x #forge:clusters/osmium").time(500).highTemp();

    jar("mekanism:fluorite_gem", "#forge:clusters/fluorite").time(250).highTemp();
    jar("9x mekanism:fluorite_gem", "9x #forge:clusters/fluorite").time(500).highTemp();

    jar("mekanism:salt", Fluid.of("minecraft:water", 250)).time(10).lowTemp();

    jar("minecraft:basalt", [Fluid.of("mekanism:liquid_stea", 250), Fluid.of("minecraft:lava", 1000)])
        .time(20)
        .lowTemp();

    jar("16x minecraft:basalt", [Fluid.of("kubejs:liquid_mob_souls", 4000), Fluid.of("minecraft:lava", 16000)])
        .time(20)
        .lowTemp();

    jar("minecraft:dirt", "8x #minecraft:saplings").time(800);
    jar("minecraft:dirt", "8x #forge:seeds").time(800);

    jar("8x minecraft:dirt", "64x #minecraft:saplings").time(1200);
    jar("8x minecraft:dirt", "64x #forge:seeds").time(1200);

    jar("32x minecraft:clay_ball", ["1x #minecraft:sand", "1x #forge:gravel", Fluid.of("minecraft:water", 1000)]).time(
        20
    );

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
