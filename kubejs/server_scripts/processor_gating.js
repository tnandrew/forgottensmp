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
  
})