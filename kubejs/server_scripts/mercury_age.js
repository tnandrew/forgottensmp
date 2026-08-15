// remove the drop from mercurian iron ore, replace it with
LootJS.modifiers((event) => {
    event.addBlockLootModifier('ad_astra:mercury_iron_ore')
        .removeLoot('ad_astra:mercury_iron_ore')
        .removeLoot('minecraft:raw_iron')
        .addLoot('megacells:sky_steel_ingot')
})

ServerEvents.recipes(e => {
    e.remove({id: 'jei:/enderio/smelting/ad_astra/smelting/iron_ingot_from_smelting_mercury_iron_ore'})
    e.remove({id: 'megacells:transform/sky_steel_ingot'})
    e.remove({id: 'advanced_ae:reaction_chamber'})
    e.shaped('advanced_ae:reaction_chamber', [
        'FOF',
        'FDF',
        'GBG'
    ], {
        O: 'ae2:condenser',
        D: 'ae2:vibration_chamber',
        F: 'ae2:fluix_dust',
        G: 'megacells:printed_accumulation_processor',
        B: 'minecraft:bucket'
    }).id('kubejs:mercury_age/reaction_chamber')
    e.remove({id: 'ad_astra:smelting/iron_ingot_from_smelting_mercury_iron_ore'})
    e.remove({id: 'ad_astra:blasting/iron_ingot_from_blasting_mercury_iron_ore'})
    e.smelting('megacells:sky_steel_ingot','ad_astra:mercury_iron_ore')
    e.blasting('megacells:sky_steel_ingot','ad_astra:mercury_iron_ore')

})

ServerEvents.tags('item', e => {
    e.remove('forge:ores/iron', 'ad_astra:mercury_iron_ore')
    e.remove('minecraft:iron_ores', 'ad_astra:mercury_iron_ore')
})

ServerEvents.tags('block', e => {
    e.remove('forge:ores/iron', 'ad_astra:mercury_iron_ore')
    e.remove('minecraft:iron_ores', 'ad_astra:mercury_iron_ore')
})