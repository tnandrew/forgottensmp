/*
Final recipes for the Moon age.
*/

ServerEvents.recipes(e => {
  // Grains of Infinity on Moon bedrock.
  e.remove({ id: 'enderio:fire_crafting/infinity' })
  e.custom({
    type: 'enderio:fire_crafting',
    base_blocks: [
      { block: 'minecraft:bedrock' }
    ],
    dimensions: [
      'ad_astra:moon'
    ],
    loot_table: "enderio:fire_crafting/infinity",
    max_item_drops: 1
  }).id('kubejs:moon_age/enderio/grains_of_infinity')
  
  e.remove({id: 'ad_astra:desh_engine'})
  e.shaped('ad_astra:desh_engine', [
      'PPP',
      'PSP',
      'DFD'
    ], {
      P: 'ad_astra:desh_plate',
      S: 'ad_astra:steel_engine',
      F: 'ad_astra:fan',
      D: 'enderio:double_layer_capacitor'
  }).id('kubejs:moon_age/ad_astra/desh_engine')

})



BlockEvents.rightClicked( e => {
  // Stops the alternate grains of infinity recipe
  const block = e.getBlock().getId()
  const player = e.getPlayer()
  const mainHand = player.getMainHandItem().getId()
  const offHand = player.getOffHandItem().getId()

  if (
    offHand == 'minecraft:flint' &&
    (mainHand == 'minecraft:deepslate' || mainHand == 'minecraft:cobbled_deepslate') &&
    player.isCrouching() && 
    (block == 'minecraft:obsidian' || block == 'minecraft:crying_obsidian' || block == 'minecraft:grindstone')
  ) {
    e.cancel()
  }
})