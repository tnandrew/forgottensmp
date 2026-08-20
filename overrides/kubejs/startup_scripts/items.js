StartupEvents.registry('item', event => {
    event.create('cold_iron_ingot')
        .displayName('Cold Iron Ingot')
        .texture('kubejs:item/cold_iron_ingot')
        .tag('forge:ingots')
        .tag('forge:ingots/cold_iron')

    event.create('dimensional_rift_transporter')
        .displayName('Dimensional Rift Transporter')
        .texture('kubejs:item/dimensional_rift_transporter')
        .rarity('epic')
        .maxStackSize(1)

})