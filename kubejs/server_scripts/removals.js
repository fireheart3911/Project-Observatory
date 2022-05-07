// priority: 99

settings.logAddedRecipes = true
settings.logRemovedRecipes = true
settings.logSkippedRecipes = false
settings.logErroringRecipes = true

console.info('Reloading...')

events.listen('recipes', function (event) {
	event.remove({output: 'mekanism:mekasuit_helmet'})
	event.remove({output: 'mekanism:mekasuit_bodyarmor'})
	event.remove({output: 'mekanism:mekasuit_pants'})
	event.remove({output: 'mekanism:mekasuit_boots'})
	event.remove({output: 'mekanism:meka_tool'})
	event.remove({output: 'mekanism:atomic_disassembler'})
	event.remove({output: 'minecraft:shulker_box'})
	event.remove({output: 'quantumquarryplus:quantum_quarry_plus'})
	event.remove({output: 'industrialforegoing:infinity_backpack'})
	event.remove({output: 'industrialforegoing:infinity_charger'})
	event.remove({output: 'industrialforegoing:infinity_drill'})
	event.remove({output: 'industrialforegoing:infinity_hammer'})
	event.remove({output: 'industrialforegoing:infinity_saw'})
	event.remove({output: 'industrialforegoing:infinity_trident'})
	event.remove({output: 'industrialforegoing:infinity_nuke'})
	event.remove({output: 'industrialforegoing:infinity_launcher'})
	event.remove({output: 'industrialforegoing:infinity_trident'})
	event.remove({output: 'cyclic:ghost_phantom'})
	event.remove({output: 'cyclic:ghost'})
	event.remove({output: 'cyclic:unbreakable_block'})
	event.remove({output: 'cyclic:unbreakable_reactive'})
	event.remove({output: 'cyclic:toxic_carrot'})
	event.remove({output: 'cyclic:soulstone'})
	event.remove({output: 'cyclic:spawner_seeker'})
	event.remove({output: 'cyclic:heart'})
	event.remove({output: 'cyclic:heart_empty'})
	event.remove({output: 'createsupercharged:creative_mechanism'})
	event.remove({output: 'cyclic:chorus_spectral'})
	event.remove({output: 'cyclic:uncrafter'})
	event.remove({output: 'moreminecarts:chunk_loader'})
	event.remove({output: 'mekanism:upgrade_anchor'})
	event.remove({output: 'ftbjarmod:tempered_glass'})
	event.remove({output: 'cyclic:user'})
	event.remove({output: 'cyclic:fisher'})
	event.remove({output: 'better_diving:'})
	event.remove({output: ''})
	event.remove({mod: 'cobblefordays'})
	event.remove({mod: 'mekanismtools'})
	event.remove({input: 'cyclic:gem_obsidian'})
	event.remove({output: 'better_diving:rebreather'})
	event.remove({output: 'better_diving:high_capacity_o2_tank'})
	event.remove({output: 'better_diving:improved_wetsuit_leggings'})
	event.remove({output: 'better_diving:ultra_glide_fins'})
	event.remove({output: 'better_diving:ultra_glide_fins_leggings'})
	event.remove({output: 'minecraft:netherite_helmet'})
	event.remove({output: 'minecraft:netherite_chestplate'})
	event.remove({output: 'minecraft:netherite_leggings'})
	event.remove({output: 'minecraft:netherite_boots'})
})