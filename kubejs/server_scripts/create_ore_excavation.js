ServerEvents.recipes(event => {
  event.remove({ type: 'immersiveengineering:mineral_mix' })
  event.remove({ type: 'createoreexcavation:vein' })
})
