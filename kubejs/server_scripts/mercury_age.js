// remove the drop from mercurian iron ore, replace it with
LootJS.modifiers((event) => {
    event.addBlockLootModifier('ad_astra:mercury_iron_ore')
        .removeLoot('ad_astra:mercury_iron_ore')
        .removeLoot('minecraft:raw_iron')
        .addLoot('megacells:sky_steel_ingot')
    event.addBlockLootModifier('ad_astra:glacio_iron_ore')
        .removeLoot('ad_astra:glacio_iron_ore')
        .removeLoot('minecraft:raw_iron')
        .addLoot('kubejs:cold_iron_ingot')
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

    e.remove({id: 'industrialforegoing:machine_frame_pity'})
    e.shaped('industrialforegoing:machine_frame_pity', [
        'LSL',
        'SRS',
        'LSL'
    ], {
        L: '#minecraft:logs',
        S: 'megacells:sky_steel_ingot',
        R: 'minecraft:redstone_block'
    }).id('kubejs:mercury_age/machine_frame_pity')

    e.remove({id: 'industrialforegoing:latex_processing_unit'})
    e.shaped('industrialforegoing:latex_processing_unit', [
        'SCS',
        'BPB',
        'SFS'
    ], {
        S: 'megacells:sky_steel_ingot',
        C: 'megacells:printed_accumulation_processor',
        B: 'minecraft:bucket',
        P: 'industrialforegoing:machine_frame_pity',
        F: 'minecraft:furnace'
    }).id('kubejs:mercury_age/latex_processing_unit')

})

ServerEvents.tags('item', e => {
    e.remove('forge:ores/iron', 'ad_astra:mercury_iron_ore')
    e.remove('minecraft:iron_ores', 'ad_astra:mercury_iron_ore')
    e.remove('forge:ores/iron', 'ad_astra:glacio_iron_ore')
    e.remove('minecraft:iron_ores', 'ad_astra:glacio_iron_ore')
})

ServerEvents.tags('block', e => {
    e.remove('forge:ores/iron', 'ad_astra:mercury_iron_ore')
    e.remove('minecraft:iron_ores', 'ad_astra:mercury_iron_ore')
    e.remove('forge:ores/iron', 'ad_astra:glacio_iron_ore')
    e.remove('minecraft:iron_ores', 'ad_astra:glacio_iron_ore')
})

MoreJSEvents.villagerTrades(event => {
    event.forEachTrades((trades, level, profession) => {
        if (profession.toString() !== 'ae2:fluix_researcher') return
        if (level !== 5) return

        trades.remove(0) // removes sky steel ingot 
        // trades.remove(1) // removes accumulation press
    })
})