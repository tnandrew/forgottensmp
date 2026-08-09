/*
Recipes removed here belong to mods that are locked behind later ages.
Add replacement recipes in the relevant age file when that age is ready.
*/

ServerEvents.recipes(event => {
  // Thermal Expansion
  const thermalExpansion = [
    'thermal:cured_rubber',
    'thermal:diving_fabric',
    'thermal:energy_cell_frame',
    'thermal:fluid_cell_frame',
    'thermal:hazmat_fabric',
    'thermal:machine_frame',
    'thermal:redstone_servo',
    'thermal:rf_coil',

    'thermal:energy_duct',
    'thermal:fluid_duct',
    'thermal:fluid_duct_windowed',

    'thermal:earth_grenade',
    'thermal:ender_grenade',
    'thermal:explosive_grenade',
    'thermal:fire_grenade',
    'thermal:glowstone_grenade',
    'thermal:ice_grenade',
    'thermal:lightning_grenade',
    'thermal:redstone_grenade',
    'thermal:slime_grenade',

    'thermal:earth_tnt',
    'thermal:ender_tnt',
    'thermal:fire_tnt',
    'thermal:glowstone_tnt',
    'thermal:ice_tnt',
    'thermal:lightning_tnt',
    'thermal:redstone_tnt',
    'thermal:slime_tnt'
  ]

  thermalExpansion.forEach(item => {
    event.remove({ output: item })
  })

  // Mekanism
  const mekanism = [
    'mekanism:alloy_infused',
    'mekanism:cardboard_box',

    'mekanismgenerators:heat_generator',

    'mekanism:steel_casing',
    'mekanism:metallurgic_infuser',

    'mekanism:basic_chemical_tank',
    'mekanism:basic_fluid_tank',

    'mekanism:basic_logistical_transporter',
    'mekanism:basic_pressurized_tube',
    'mekanism:basic_thermodynamic_conductor',
    'mekanism:basic_universal_cable'
  ]

  mekanism.forEach(item => {
    event.remove({ output: item })
  })

  // Ender IO
  const enderIO = [
    'enderio:conduit_binder',
    'enderio:conduit_binder_composite',
    'enderio:grains_of_infinity'
  ]

  enderIO.forEach(item => {
    event.remove({ output: item })
  })
  // Industrial Foregoing
  const industrialForegoing = [
    'industrialforegoing:machine_frame_pity'
  ]

  industrialForegoing.forEach(item => {
    event.remove({ output: item })
  })

  // Ad Astra
  const adAstra = [
    'ad_astra:cable_duct',
    'ad_astra:desh_fluid_pipe',
    'ad_astra:fluid_pipe_duct',
    'ad_astra:ostrum_fluid_pipe',
    'ad_astra:steel_cable',

    'ad_astra:compressor',
    'ad_astra:fuel_refinery',
    'ad_astra:nasa_workbench',
    'ad_astra:oxygen_loader',
    'ad_astra:oxygen_sensor',
    'ad_astra:solar_panel',

    'ad_astra:engine_frame',
    'ad_astra:etrionic_blast_furnace',
    'ad_astra:large_gas_tank',
    'ad_astra:launch_pad',
    'ad_astra:rocket_fin',
    'ad_astra:rocket_nose_cone',
    'ad_astra:steel_engine',
    'ad_astra:steel_tank',
    'ad_astra:tier_1_rocket',
    'ad_astra:tier_1_rover',
    'ad_astra:tier_2_rocket',
    'ad_astra:tier_3_rocket',
    'ad_astra:tier_4_rocket',

    'ad_astra:space_boots',
    'ad_astra:space_helmet',
    'ad_astra:space_pants',
    'ad_astra:space_suit',

    'ad_astra:ti_69',
    'ad_astra:wrench',
    'ad_astra:zip_gun',

    'ad_astra_giselle_addon:fuel_loader',
    'ad_astra_giselle_addon:gravity_normalizer',
    'ad_astra_giselle_addon:oxygen_can',
    'ad_astra_giselle_addon:rocket_sensor'
  ]

  adAstra.forEach(item => {
    event.remove({ output: item })
  })

  // Create New Age
  const createNewAge = [
    'create_new_age:blank_circuit',
    'create_new_age:copper_wire',
    'create_new_age:generator_coil',
    'create_new_age:redstone_magnet',
    'create_new_age:thorium',

    'create_new_age:heat_pipe',
    'create_new_age:reactor_casing',

    'create_new_age:basic_energiser',
    'create_new_age:basic_motor',
    'create_new_age:heat_pump',
    'create_new_age:stirling_engine'
  ]

  createNewAge.forEach(item => {
    event.remove({ output: item })
  })

  // Steel Recipes
  const steelRecipes = [
    '#forge:ingots/steel',
    '#forge:nuggets/steel'
  ]

  steelRecipes.forEach(item => {
    event.remove({ output: item })
  })

  // Immersive Engineering
  const immersiveEngineering = [
    'immersiveengineering:alloybrick',
    'immersiveengineering:blastbrick',
    'immersiveengineering:cokebrick',
    'immersiveengineering:manual',
    'immersiveengineering:workbench',

    'immersiveengineering:hammer',
    'immersiveengineering:screwdriver',
    'immersiveengineering:toolbox',
    'immersiveengineering:wirecutter'
  ]

  immersiveEngineering.forEach(item => {
    event.remove({ output: item })
  })

  // TFMG
  const tfmg = [
    'tfmg:cast_iron_ingot',

    'tfmg:coke_oven',
    'tfmg:fireproof_brick'
  ]

  tfmg.forEach(item => {
    event.remove({ output: item })
  })

  // Create Big Cannons cast iron should not share TFMG's heated iron + coal path.
  event.remove({ id: 'createbigcannons:compacting/iron_to_cast_iron_ingot' })
  event.remove({ id: 'createbigcannons:compacting/iron_to_cast_iron_block' })

  // Misc
  const misc = [
    'create_power_loader:empty_andesite_chunk_loader',
    'create_power_loader:empty_brass_chunk_loader',

    'createoreexcavation:diamond_drill',
    'createoreexcavation:drill',
    'createoreexcavation:drilling_machine',
    'createoreexcavation:extractor',
    'createoreexcavation:netherite_drill',

    'minecraft:netherite_ingot',

    'psi:cad_assembly_psimetal',
    'psi:cad_assembly_gold',
    'psi:cad_assembly_ivory_psimetal',
    'psi:cad_assembly_ebony_psimetal',
    'psi:psidust_block',
    'psi:cad_assembler',
    'psi:cad_assembly_iron',
    'psi:psidust',
    'psi:psimetal',
    'psi:psigem',
    'psi:ebony_psimetal',
    'psi:ivory_psimetal'
  ]

  misc.forEach(item => {
    event.remove({ output: item })
  })

  // Draconic Evolution
  const draconicEvolution = [
    'draconicevolution:draconium_dust',
    'draconicevolution:draconium_ingot',

    'draconicevolution:dislocator',
    'draconicevolution:dislocator_pedestal',
    'draconicevolution:magnet',
    'draconicevolution:p2p_dislocator_unbound',
    'draconicevolution:player_dislocator_unbound'
  ]

  draconicEvolution.forEach(item => {
    event.remove({ output: item })
  })

  // ComputerCraft and Advanced Peripherals
  const computerCraft = [
    'computercraft:cable',
    'computercraft:disk_drive',
    'computercraft:printer',
    'computercraft:speaker',
    'computercraft:wired_modem',
    'computercraft:wireless_modem_advanced',
    'computercraft:wireless_modem_normal',

    'computercraft:computer_advanced',
    'computercraft:computer_normal',
    'computercraft:monitor_advanced',
    'computercraft:monitor_normal',
    'computercraft:pocket_computer_advanced',
    'computercraft:pocket_computer_normal',

    'advancedperipherals:block_reader',
    'advancedperipherals:chat_box',
    'advancedperipherals:chunk_controller',
    'advancedperipherals:colony_integrator',
    'advancedperipherals:computer_tool',
    'advancedperipherals:energy_detector',
    'advancedperipherals:environment_detector',
    'advancedperipherals:geo_scanner',
    'advancedperipherals:inventory_manager',
    'advancedperipherals:me_bridge',
    'advancedperipherals:memory_card',
    'advancedperipherals:nbt_storage',
    'advancedperipherals:peripheral_casing',
    'advancedperipherals:player_detector',
    'advancedperipherals:redstone_integrator',
    'advancedperipherals:rs_bridge',

    'advancedperipherals:end_automata_core',
    'advancedperipherals:husbandry_automata_core',
    'advancedperipherals:overpowered_end_automata_core',
    'advancedperipherals:overpowered_husbandry_automata_core',
    'advancedperipherals:overpowered_weak_automata_core',
    'advancedperipherals:weak_automata_core'
  ]

  computerCraft.forEach(item => {
    event.remove({ output: item })
  })
})
