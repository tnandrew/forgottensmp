/*
Final recipes for the Create age.
*/

ServerEvents.recipes(event => {
  // Factory Gauge NBT clearing.
  event.remove({ output: 'create:factory_gauge' })
  event.shapeless('create:factory_gauge', [
    'create:factory_gauge'
  ]).id('kubejs:create_age/factory_gauge_nbt_clear')

  // Empty Blaze Burner Sequence assembly..
  event.remove({ output: 'create:empty_blaze_burner' })
  event.recipes.create
    .sequenced_assembly([
      Item.of('create:empty_blaze_burner')
    ], '#forge:netherrack', [
      event.recipes.create.filling('create:empty_blaze_burner', [
        'create:empty_blaze_burner',
        Fluid.of('minecraft:lava', 100)
      ]),
      event.recipes.create.deploying('create:empty_blaze_burner', [
        'create:empty_blaze_burner',
        '#forge:ingots/slimesteel'
      ]),
      event.recipes.create.pressing('create:empty_blaze_burner', [
        'create:empty_blaze_burner'
      ]),
      event.recipes.create.deploying('create:empty_blaze_burner', [
        'create:empty_blaze_burner',
        '#forge:nuggets/hepatizon'
      ]),
      event.recipes.create.deploying('create:empty_blaze_burner', [
        'create:empty_blaze_burner',
        '#forge:nuggets/hepatizon'
      ]),
      event.recipes.create.pressing('create:empty_blaze_burner', [
        'create:empty_blaze_burner'
      ])
    ])
    .transitionalItem('create:empty_blaze_burner')
    .loops(1)
    .id('kubejs:create_age/empty_blaze_burner')

  event.remove({ output: 'create:electron_tube' })
  event.recipes.create
    .sequenced_assembly([
      Item.of('create:electron_tube')
    ], '#forge:plates/iron', [
      event.recipes.create.deploying('create:electron_tube', [
        'create:electron_tube',
        '#forge:nuggets/constantan'
      ]),
      event.recipes.create.deploying('create:electron_tube', [
        'create:electron_tube',
        'create:polished_rose_quartz'
      ]),
      event.recipes.create.pressing('create:electron_tube', [
        'create:electron_tube'
      ])
    ])
    .transitionalItem('create:electron_tube')
    .loops(1)
    .id('kubejs:create_age/electron_tube')

  event.recipes.create
    .sequenced_assembly([
      Item.of('create:precision_mechanism').withChance(120),
      Item.of('create:golden_sheet').withChance(8),
      Item.of('create:andesite_alloy').withChance(8),
      Item.of('create:cogwheel').withChance(5),
      Item.of('minecraft:gold_nugget').withChance(3),
      Item.of('create:shaft').withChance(2),
      Item.of('create:crushed_raw_gold').withChance(2),
      Item.of('minecraft:iron_ingot'),
      Item.of('minecraft:clock')
    ], '#forge:plates/gold', [
      event.recipes.create.deploying('create:incomplete_precision_mechanism', [
        'create:incomplete_precision_mechanism',
        'create:cogwheel'
      ]),
      event.recipes.create.deploying('create:incomplete_precision_mechanism', [
        'create:incomplete_precision_mechanism',
        'create:large_cogwheel'
      ]),
      event.recipes.create.deploying('create:incomplete_precision_mechanism', [
        'create:incomplete_precision_mechanism',
        '#forge:nuggets/iron'
      ])
    ])
    .transitionalItem('create:incomplete_precision_mechanism')
    .loops(5)
    .id('create:sequenced_assembly/precision_mechanism')
})
