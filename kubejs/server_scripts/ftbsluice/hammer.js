onEvent("recipes", (event) => {
    const hammer = event.recipes.ftbsluice.hammer;

    hammer("#forge:stone", ["minecraft:cobblestone"]);
    hammer("#forge:cobblestone", ["minecraft:gravel"]);
    hammer("#forge:gravel", ["minecraft:dirt"]);
    hammer("minecraft:dirt", ["minecraft:sand"]);
    hammer("#forge:sand", ["ftbsluice:dust"]);
    hammer("#forge:netherrack", ["ftbsluice:crushed_netherrack"]);
    hammer("minecraft:basalt", ["ftbsluice:crushed_basalt"]);
    hammer("#forge:end_stones", ["ftbsluice:crushed_endstone"]);

    hammer("#resource:stone/1x", ["9x minecraft:cobblestone"]);
    hammer("#resource:cobblestone/1x", ["9x minecraft:gravel"]);
    hammer("#resource:gravel/1x", ["9x minecraft:dirt"]);
    hammer("#resource:dirt/1x", ["9x minecraft:sand"]);
    hammer("#resource:sand/1x", ["9x ftbsluice:dust"]);
    hammer("#resource:netherrack/1x", ["9x ftbsluice:crushed_netherrack"]);
    hammer("#resource:basalt/1x", ["9x ftbsluice:crushed_basalt"]);
    hammer("#resource:endstone/1x", ["9x ftbsluice:crushed_endstone"]);

    hammer("#resource:stone/2x", ["81x minecraft:cobblestone"]);
    hammer("#resource:cobblestone/2x", ["81x minecraft:gravel"]);
    hammer("#resource:gravel/2x", ["81x minecraft:dirt"]);
    hammer("#resource:dirt/2x", ["81x minecraft:sand"]);
    hammer("#resource:sand/2x", ["81x ftbsluice:dust"]);
    hammer("#resource:netherrack/2x", ["81x ftbsluice:crushed_netherrack"]);
    hammer("#resource:basalt/2x", ["81x ftbsluice:crushed_basalt"]);
    hammer("#resource:endstone/2x", ["81x ftbsluice:crushed_endstone"]);

    hammer("#resource:stone/3x", ["729x minecraft:cobblestone"]);
    hammer("#resource:cobblestone/3x", ["729x minecraft:gravel"]);
    hammer("#resource:gravel/3x", ["729x minecraft:dirt"]);
    hammer("#resource:dirt/3x", ["729x minecraft:sand"]);
    hammer("#resource:sand/3x", ["729x ftbsluice:dust"]);
    hammer("#resource:netherrack/3x", ["729x ftbsluice:crushed_netherrack"]);
    hammer("#resource:basalt/3x", ["729x ftbsluice:crushed_basalt"]);
    hammer("#resource:endstone/3x", ["729x ftbsluice:crushed_endstone"]);

    event.remove({ id: "immersiveengineering:crusher/gravel" });
    event.remove({ id: "mekanism:crushing/gravel_to_sand" });
    event.remove({ id: "thermal:machine/pulverizer/pulverizer_gravel" });

    event.remove({ id: "integrateddynamics:squeezer/ore/flint" });
    event.remove({ id: "integrateddynamics:mechanical_squeezer/ore/flint" });
    event.remove({ id: "integrateddynamics:mechanical_squeezer/convenience/minecraft_lava_netherrack" });

    event.recipes.integrateddynamicsSqueezer(["minecraft:dirt"], "#forge:gravel");
    event.recipes.integrateddynamicsSqueezer(["minecraft:sand"], "minecraft:dirt");
    event.recipes.integrateddynamicsSqueezer(["ftbsluice:dust"], "#forge:sand");

    event.recipes.integrateddynamicsMechanicalSqueezer(["minecraft:dirt"], "#forge:gravel");
    event.recipes.integrateddynamicsMechanicalSqueezer(["minecraft:sand"], "minecraft:dirt");
    event.recipes.integrateddynamicsMechanicalSqueezer(["ftbsluice:dust"], "#forge:sand");

    event.recipes.immersiveengineering.crusher("minecraft:dirt", "#forge:gravel");
    event.recipes.immersiveengineering.crusher("minecraft:sand", "minecraft:dirt");
    event.recipes.immersiveengineering.crusher("ftbsluice:dust", "#forge:sand");

    event.recipes.thermal.pulverizer("minecraft:cobblestone", "minecraft:stone");
    event.recipes.thermal.pulverizer("minecraft:dirt", "#forge:gravel");
    event.recipes.thermal.pulverizer("minecraft:sand", "minecraft:dirt");
    event.recipes.thermal.pulverizer("ftbsluice:dust", "#forge:sand");

    event.recipes.mekanism.crushing("minecraft:dirt", "#forge:gravel");
    event.recipes.mekanism.crushing("minecraft:sand", "minecraft:dirt");
    event.recipes.mekanism.crushing("ftbsluice:dust", "#forge:sand");

    event.recipes.thermal.pulverizer("ftbsluice:crushed_netherrack", "#forge:netherrack");
    event.recipes.mekanism.crushing("ftbsluice:crushed_netherrack", "#forge:netherrack");
    event.recipes.immersiveengineering.crusher("ftbsluice:crushed_netherrack", "#forge:netherrack");
    event.recipes.integrateddynamicsSqueezer(["ftbsluice:crushed_netherrack"], "#forge:netherrack");
    event.recipes.integrateddynamicsMechanicalSqueezer(["ftbsluice:crushed_netherrack"], "#forge:netherrack");

    event.recipes.thermal.pulverizer("ftbsluice:crushed_endstone", "#forge:end_stones");
    event.recipes.mekanism.crushing("ftbsluice:crushed_endstone", "#forge:end_stones");
    event.recipes.immersiveengineering.crusher("ftbsluice:crushed_endstone", "#forge:end_stones");
    event.recipes.integrateddynamicsSqueezer(["ftbsluice:crushed_endstone"], "#forge:end_stones");
    event.recipes.integrateddynamicsMechanicalSqueezer(["ftbsluice:crushed_endstone"], "#forge:end_stones");

    event.recipes.thermal.pulverizer("ftbsluice:crushed_basalt", "minecraft:basalt");
    event.recipes.mekanism.crushing("ftbsluice:crushed_basalt", "minecraft:basalt");
    event.recipes.immersiveengineering.crusher("ftbsluice:crushed_basalt", "minecraft:basalt");
    event.recipes.integrateddynamicsSqueezer(["ftbsluice:crushed_basalt"], "minecraft:basalt");
    event.recipes.integrateddynamicsMechanicalSqueezer(["ftbsluice:crushed_basalt"], "minecraft:basalt");
});
