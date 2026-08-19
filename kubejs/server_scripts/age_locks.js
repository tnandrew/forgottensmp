/*
Recipes removed here belong to mods that are locked behind later ages.
Add replacement recipes in the relevant age file when that age is ready.
*/
ServerEvents.recipes(event => {

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

PlayerEvents.tick(e => {
  let {player} = e

  if (player.level.dimension != "minecraft:the_end"
    || (player.isCreative() || player.isSpectator()))
    return;

    if ((player.persistentData.safeTravel || 0) > 0 && player.inventory.count('kubejs:dimensional_rift_transporter') < 1)
      if (player.persistentData.safeTravel > 0 && player.persistentData.safeTravel < 400)
        player.displayClientMessage(Text.red('Warning - KEEP your dimensional rift transporter in your inventory or risk destabilization'), true)  
      player.persistentData.safeTravel--

    if (player.inventory.count('kubejs:dimensional_rift_transporter') < 1) {
      if ((player.persistentData.safeTravel || 0) <= 0) {
        player.tell('That end dimension is too unstable to travel without protection!')
        player.tell('KEEP a Dimensional Rift Transporter in your inventory to protect yourself.')
        player.teleportTo('minecraft:overworld', 0.5, 65, 0.5, 0, 0)
      }
    }
    else {
      player.persistentData.safeTravel = 500 
    }
})
