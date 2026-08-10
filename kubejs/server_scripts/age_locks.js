/*
Recipes removed here belong to mods that are locked behind later ages.
Add replacement recipes in the relevant age file when that age is ready.
*/
ServerEvents.recipes(event => {
  // Immersive Engineering was removed
  /*const immersiveEngineering = [
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
  })*/

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
})
