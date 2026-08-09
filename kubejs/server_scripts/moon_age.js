/*
Final recipes for the Moon age.
*/

ServerEvents.recipes(event => {
  // Grains of Infinity on Moon bedrock.
  event.remove({ id: 'enderio:fire_crafting/infinity' })
  event.custom({
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