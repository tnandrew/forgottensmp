/*
Final recipes for the Petrochemical age.
This age covers oil processing, rocket fuel, steam, and early electricity.
*/

ServerEvents.tags('fluid', event => {
  // Routed tags away from removed Immersive Petroleum to existing TFMG / Ender IO equivalents
  event.add('kubejs:petrochemical_diesel_sulfur', 'tfmg:diesel')
  event.add('kubejs:petrochemical_benzol', 'tfmg:kerosene')
})

ServerEvents.recipes(event => {
  const heated = recipe => recipe.heated()

  event.custom({
    type: 'tconstruct:melting_fuel',
    duration: 100,
    fluid: {
      amount: 50,
      fluid: 'ad_astra:fuel'
    },
    rate: 25,
    temperature: 2500
  }).id('kubejs:petrochemical_age/tconstruct_rocket_fuel')
/* Already in TFMG
  // FIXED: Converted logs to creosote melting into a raw custom recipe structure
  event.custom({
    type: 'tconstruct:melting',
    ingredient: { tag: 'minecraft:logs_that_burn' },
    result: { fluid: 'tfmg:creosote', amount: 50 },
    temperature: 2000,
    time: 100
  }).id('kubejs:petrochemical_age/logs_to_creosote')

  // FIXED: Converted creosote steel alloy into a raw custom recipe structure
  event.custom({
    type: 'tconstruct:alloy',
    inputs: [
      { fluid: 'tconstruct:molten_iron', amount: 810 },
      { fluid: 'immersiveengineering:creosote', amount: 450 }
    ],
    result: { fluid: 'tconstruct:molten_steel', amount: 810 },
    temperature: 2500
  }).id('kubejs:petrochemical_age/creosote_steel')
*/
  event.remove({ type: 'tconstruct:melting', input: 'tconstruct:steel_shard' })
  event.remove({ type: 'tconstruct:melting', input: 'tconstruct:steel_cluster' })

  // FIXED: Converted steel shard melting into a raw custom recipe structure
  event.custom({
    type: 'tconstruct:melting',
    ingredient: { item: 'tconstruct:steel_shard' },
    result: { fluid: 'tconstruct:molten_steel', amount: 10 },
    temperature: 2500,
    time: 22
  }).id('kubejs:petrochemical_age/steel_shard_melting')

  // FIXED: Converted steel cluster melting into a raw custom recipe structure
  event.custom({
    type: 'tconstruct:melting',
    ingredient: { item: 'tconstruct:steel_cluster' },
    result: { fluid: 'tconstruct:molten_steel', amount: 40 },
    temperature: 2500,
    time: 162
  }).id('tconstruct:smeltery/melting/metal/steel/cluster')

  /* event.custom({
    type: 'immersiveengineering:refinery',
    catalyst: {
      item: 'immersiveengineering:dust_saltpeter'
    },
    energy: 80,
    input0: {
      amount: 30,
      tag: 'kubejs:petrochemical_diesel_sulfur'
    },
    input1: {
      amount: 10,
      tag: 'kubejs:petrochemical_benzol'
    },
    result: {
      amount: 40,
      fluid: 'enderio:rocket_fuel'
    }
  }).id('kubejs:petrochemical_age/refinery_rocket_fuel')
  */

  // Added recipe to make rocket fuel again. 

  
  event.custom({
    type: 'ad_astra:refining',
    cookingtime: 1,          // (20 seconds) Time in ticks to process (20 ticks = 1 second)
    energy: 20,               // Energy consumed per tick (RF/FE)
    input: {
        ingredient: {
          fluid: 'tfmg:kerosene'
        },
        millibuckets: 10              // Fluid amount in mB (1000mB = 1 bucket)
    },
    result: {
        fluid: 'ad_astra:fuel',   // The resulting output fluid ID
        millibuckets: 5               // Fluid amount in mB
    }
  }).id('kubejs:petrochemical_age/kerosene_to_fuel')
  
  // FIXED: Converted TFMG Vat Machine recipe into a raw custom JSON recipe to resolve line 99 crash
  event.custom({
    type: 'tfmg:vat_machine_recipe',
    fluidInputs: [
      { fluid: 'tfmg:hot_air', amount: 1500 },
      { fluid: 'tfmg:kerosene', amount: 1000 },
      { fluid: 'tfmg:sulfuric_acid', amount: 100 }
    ],
    fluidOutputs: [
      { fluid: 'enderio:rocket_fuel', amount: 1000 }
    ],
    processingTime: 250,
    heatRequirement: 'heated',
    machineType: 'tfmg:mixing',
    allowedVats: ['tfmg:steel_vat', 'tfmg:firebrick_lined_vat']
  }).id('kubejs:petrochemical_age/vat_rocket_fuel')

  // Steel infrastructure.
  heated(event.recipes.create.compacting('tfmg:cast_iron_ingot', [
    '#forge:ingots/iron',
    '#minecraft:coals'
  ])).id('kubejs:petrochemical_age/cast_iron_ingot')

  heated(event.recipes.create.compacting('tfmg:fireproof_brick', [
    'tfmg:fireclay_ball',
    '#forge:dusts/coal_coke',
    'minecraft:magma_cream'
  ])).id('kubejs:petrochemical_age/fireproof_brick')

  event.shaped('tfmg:fireproof_bricks', [
    'BB',
    'BB'
  ], {
    B: 'tfmg:fireproof_brick'
  }).id('kubejs:petrochemical_age/fireproof_bricks')

  heated(event.recipes.create.mixing(Fluid.of('createbigcannons:molten_cast_iron', 90), [
    Fluid.of('tconstruct:molten_iron', 90),
    '#forge:dusts/coal_coke'
  ])).id('kubejs:petrochemical_age/cbc_molten_cast_iron')
/*
  heated(event.recipes.create.mixing('3x immersiveengineering:cokebrick', [
    '#forge:clay',
    '#forge:clay',
    '#forge:clay',
    '#forge:ingots/brick',
    '#forge:ingots/brick',
    '#forge:ingots/brick',
    '#forge:sandstone'
  ])).id('kubejs:petrochemical_age/ie_cokebrick')

  heated(event.recipes.create.mixing('3x immersiveengineering:blastbrick', [
    '#forge:ingots/nether_brick',
    '#forge:ingots/nether_brick',
    '#forge:ingots/nether_brick',
    '#forge:ingots/brick',
    '#forge:ingots/brick',
    '#forge:ingots/brick',
    'minecraft:magma_block'
  ])).id('kubejs:petrochemical_age/ie_blastbrick')

  event.custom({
    type: 'immersiveengineering:blast_furnace',
    input: { tag: 'forge:ingots/iron' },
    result: { item: 'immersiveengineering:ingot_steel' },
    slag: { tag: 'forge:slag' },
    time: 1200
  }).id('kubejs:petrochemical_age/ie_blast_furnace_steel')

  event.shaped('immersiveengineering:hammer', [
    ' NI',
    ' SI',
    'S  '
  ], {
    N: '#forge:nuggets/hepatizon',
    I: '#forge:ingots/iron',
    S: '#forge:rods/wooden'
  }).id('kubejs:petrochemical_age/ie_hammer')

  event.shapeless('immersiveengineering:manual', [
    'minecraft:book',
    'create:goggles',
    '#forge:nuggets/hepatizon'
  ]).id('kubejs:petrochemical_age/ie_manual')

  event.shaped('immersiveengineering:workbench', [
    'SHS',
    'RCR',
    'R R'
  ], {
    S: '#forge:treated_wood_slab',
    H: 'immersiveengineering:hammer',
    R: '#forge:rods/treated_wood',
    C: 'minecraft:crafting_table'
  }).id('kubejs:petrochemical_age/ie_workbench')
*/
  event.shaped('2x tfmg:coke_oven', [
    ' C ',
    'FIF',
    ' C '
  ], {
    C: '#forge:ingots/cast_iron',
    F: 'tfmg:fireproof_bricks',
    I: 'create:industrial_iron_block'
  }).id('kubejs:petrochemical_age/tfmg_coke_oven')

  event.shaped('4x tfmg:blast_furnace_reinforcement', [
    'CPF',
    'CPF',
    'CPF'
  ], {
    C: '#forge:ingots/cast_iron',
    P: '#forge:plates/cast_iron',
    F: 'tfmg:fireproof_bricks'
  }).id('kubejs:petrochemical_age/tfmg_blast_furnace_reinforcement')

  event.shaped('tfmg:blast_furnace_hatch', [
    'FIF',
    'PTP',
    'FIF'
  ], {
    F: 'tfmg:fireproof_bricks',
    I: '#forge:plates/cast_iron',
    P: 'tfmg:cast_iron_pipe',
    T: 'tfmg:cast_iron_fluid_tank'
  }).id('kubejs:petrochemical_age/tfmg_blast_furnace_hatch')

  event.shaped('tfmg:blast_furnace_output', [
    'FCF',
    'CQC',
    'FCF'
  ], {
    F: 'tfmg:fireproof_bricks',
    C: 'tfmg:cast_iron_pipe',
    Q: '#forge:storage_blocks/cast_iron'
  }).id('kubejs:petrochemical_age/tfmg_blast_furnace_output')

  event.shaped('2x tfmg:blast_stove', [
    'CC ',
    'TT ',
    'FF '
  ], {
    C: 'tfmg:cast_iron_pipe',
    T: 'tfmg:cast_iron_fluid_tank',
    F: 'tfmg:fireproof_bricks'
  }).id('kubejs:petrochemical_age/tfmg_blast_stove')

  event.custom({
    type: 'tfmg:industrial_blasting',
    hotAirUsage: 30,
    ingredients: [
      { item: 'minecraft:raw_iron' },
      { tag: 'tfmg:flux' }
    ],
    processingTime: 40,
    results: [
      { amount: 288, fluid: 'tfmg:molten_steel' },
      { amount: 288, fluid: 'tfmg:molten_slag' },
      { amount: 200, fluid: 'tfmg:furnace_gas' }
    ]
  }).id('kubejs:petrochemical_age/tfmg_industrial_blasting_steel_from_raw_iron')

  event.custom({
    type: 'tfmg:industrial_blasting',
    hotAirUsage: 20,
    ingredients: [
      { item: 'create:crushed_raw_iron' },
      { tag: 'tfmg:flux' }
    ],
    processingTime: 20,
    results: [
      { amount: 144, fluid: 'tfmg:molten_steel' },
      { amount: 144, fluid: 'tfmg:molten_slag' },
      { amount: 200, fluid: 'tfmg:furnace_gas' }
    ]
  }).id('kubejs:petrochemical_age/tfmg_industrial_blasting_steel')

  event.custom({
    type: 'tfmg:casting',
    ingredients: [
      { amount: 144, fluid: 'tfmg:molten_steel', nbt: {} }
    ],
    processingTime: 200,
    results: [
      { item: 'tfmg:steel_ingot' }
    ]
  }).id('kubejs:petrochemical_age/tfmg_casting_steel')

  event.shapeless('9x tfmg:steel_nugget', ['#forge:ingots/steel'])
    .id('kubejs:petrochemical_age/steel_ingot_to_nuggets')

  event.shaped('tfmg:steel_ingot', [
    'NNN',
    'NNN',
    'NNN'
  ], {
    N: '#forge:nuggets/steel'
  }).id('kubejs:petrochemical_age/steel_nuggets_to_ingot')
})