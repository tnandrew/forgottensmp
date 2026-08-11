ServerEvents.recipes(e => {

    e.remove({id: 'ae2:network/blocks/crystal_processing_charger'})
    //e.remove({id: 'ae2:charger' })
    e.shaped('ae2:charger', [
        'ICI',
        'I Q',
        'ICI'
    ], {
        I: '#forge:ingots/iron',
        C: '#forge:ingots/copper',
        Q: '#forge:gems/certus_quartz'
    }).id('kubejs:mars_charger')

    e.remove({id: 'mekanism:metallurgic_infuser'})
    e.shaped('mekanism:metallurgic_infuser', [
        'IFI',
        'LOL',
        'IFI'
    ], {
        I: '#forge:ingots/iron',
        F: 'minecraft:furnace',
        O: '#forge:ingots/osmium',
        L: 'ae2:logic_processor'
    }).id('kubejs:mars/mekanism/mettalurgic_infuser')

    e.remove({id: 'ad_astra:ostrum_engine'})
    e.shaped('ad_astra:ostrum_engine', [
        'OOO',
        'ODO',
        'CFC'
    ], {
        O: '#forge:plates/ostrum',
        D: 'ad_astra:desh_engine',
        C: 'mekanism:ultimate_control_circuit',
        F: 'ad_astra:fan'
    }).id('kubejs:mars_age/ad_astra/ostrum_engine')
})