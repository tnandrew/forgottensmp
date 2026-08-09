/*
Final recipes for the Moon age.
*/

ServerEvents.recipes(event => {
  // Grains of Infinity on Moon bedrock.
  event.remove({ output: 'enderio:grains_of_infinity' })
  event.remove({ id: 'enderio:fire_crafting/infinity' })
  event.custom({
    type: 'enderio:fire_crafting',
    base_blocks: [
      { block: 'minecraft:bedrock' }
    ],
    dimensions: [
      'ad_astra:moon'
    ],
    loot_table: 'kubejs:fire_crafting/moon_infinity',
    max_item_drops: 1
  }).id('kubejs:moon_age/enderio/grains_of_infinity')
})

BlockEvents.rightClicked(event => {
  const player = event.player
  if (!player || !player.isCrouching()) return
  if (player.offHandItem.id !== 'minecraft:flint') return
  if (
    player.mainHandItem.id !== 'minecraft:deepslate' &&
    player.mainHandItem.id !== 'minecraft:cobbled_deepslate'
  ) return
  if (
    event.block.id !== 'minecraft:grindstone' &&
    event.block.id !== 'minecraft:crying_obsidian' &&
    !event.block.hasTag('forge:obsidian')
  ) return

  event.cancel()
})
