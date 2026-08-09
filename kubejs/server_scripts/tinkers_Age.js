/*
This file serves as the master recipe control file for the entire tinkers age aka the first age of the pack. 
*/

// Slime Steel -> Andesite Alloy Recipes
ServerEvents.recipes(event => {
  const andesiteAlloy = 'create:andesite_alloy'
  const andesiteAlloyBlock = '#forge:storage_blocks/andesite_alloy'
  const andesite = '#forge:andesite'
  const constantanIngot = '#forge:ingots/constantan'
  const constantanPlate = '#forge:plates/constantan'
  const slimeSteelNugget = '#forge:nuggets/slimesteel'
  const strippedLogs = '#forge:stripped_logs'

  // Remove Andesite Alloy recipes.
  event.remove({ output: andesiteAlloy })
  event.remove({ output: 'create:copper_casing' })
  event.remove({ output: 'create:fluid_pipe' })
  event.remove({ output: 'create:fluid_tank' })
  event.remove({ output: 'create_connected:fluid_vessel' })
  event.remove({ output: constantanIngot })

  // FIXED: Converted to native JSON to fix 5-argument constructor error
  event.custom({
    type: 'tconstruct:casting_basin',
    cast: { tag: 'forge:andesite' },
    cast_consumed: true,
    fluid: { name: 'tconstruct:molten_slimesteel', amount: 30 },
    result: andesiteAlloy,
    cooling_time: 60
  }).id('kubejs:tinkers_age/andesite_alloy_casting')

  // FIXED: Converted to native JSON to fix 5-argument constructor error
  event.custom({
    type: 'tconstruct:casting_table',
    cast: { tag: 'tconstruct:casts/multi_use/ingot' },
    cast_consumed: false,
    fluid: { name: 'tconstruct:molten_constantan', amount: 90 },
    result: 'thermal:constantan_ingot',
    cooling_time: 64
  }).id('kubejs:tinkers_age/constantan_ingot_casting')

  // FIXED: Converted to native JSON to fix 5-argument constructor error
  event.custom({
    type: 'tconstruct:casting_basin',
    cast: { tag: 'forge:stripped_logs' },
    cast_consumed: true,
    fluid: { name: 'tconstruct:molten_constantan', amount: 90 },
    result: 'create:copper_casing',
    cooling_time: 64
  }).id('kubejs:tinkers_age/copper_casing_casting')

  // Constantan + stripped log.
  event.recipes.create
    .deploying('create:copper_casing', [strippedLogs, constantanIngot])
    .id('kubejs:tinkers_age/copper_casing_deploying')

  // Constantan + stripped log.
  event.custom({
    type: 'create:item_application',
    ingredients: [
      { tag: 'forge:stripped_logs' },
      { tag: 'forge:ingots/constantan' }
    ],
    results: [
      { item: 'create:copper_casing' }
    ]
  }).id('kubejs:tinkers_age/copper_casing_item_application')

  // Constantan plates + ingot.
  event.shaped(Item.of('create:fluid_pipe', 4), [
    'P',
    'I',
    'P'
  ], {
    P: constantanPlate,
    I: constantanIngot
  }).id('kubejs:tinkers_age/fluid_pipe')

  // Constantan plates + barrel.
  event.shaped('create:fluid_tank', [
    'P',
    'B',
    'P'
  ], {
    P: constantanPlate,
    B: '#forge:barrels'
  }).id('kubejs:tinkers_age/fluid_tank')

  // Constantan plates + barrel.
  event.shaped('create_connected:fluid_vessel', [
    'PBP'
  ], {
    P: constantanPlate,
    B: '#forge:barrels'
  }).id('kubejs:tinkers_age/fluid_vessel')

  // Tank -> vessel.
  event.shapeless('create_connected:fluid_vessel', [
    'create:fluid_tank'
  ]).id('kubejs:tinkers_age/fluid_vessel_from_tank')

  // Vessel -> tank.
  event.shapeless('create:fluid_tank', [
    'create_connected:fluid_vessel'
  ]).id('kubejs:tinkers_age/fluid_tank_from_vessel')

  // Blaze head conversion.
  event.shapeless('tconstruct:blaze_head', [
    'spartanweaponry:blaze_head'
  ]).id('kubejs:tinkers_age/blaze_head_conversion')

  // 2 nuggets + 2 Andesite.
  event.shaped(Item.of(andesiteAlloy, 2), [
    'NA',
    'AN'
  ], {
    N: slimeSteelNugget,
    A: andesite
  }).id('kubejs:tinkers_age/andesite_alloy_shaped')

  // Nugget + Andesite.
  event.recipes.create
    .mixing(andesiteAlloy, [andesite, slimeSteelNugget])
    .id('kubejs:tinkers_age/andesite_alloy_mixing')

  // FIXED: Replaced dead thermal:smelter recipe with heated bulk Create Mixing to retain the 9x bulk processing tier
  event.recipes.create.mixing(
    Item.of(andesiteAlloy, 9), 
    [
      '#forge:ingots/slimesteel', 
      '9x #forge:andesite'
    ]
  ).heated().id('kubejs:tinkers_age/andesite_alloy_bulk_mixing')

  // Alloy block -> 9 alloy.
  event.shapeless(Item.of(andesiteAlloy, 9), [
    andesiteAlloyBlock
  ]).id('kubejs:tinkers_age/andesite_alloy_from_block')
})