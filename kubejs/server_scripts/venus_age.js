ServerEvents.recipes(e => {

    e.remove({id: 'ad_astra:calorite_engine'})
    e.shaped('ad_astra:calorite_engine', [
        'OOO',
        'ODO',
        'CFC'
    ], {
        O: '#forge:plates/calorite',
        D: 'ad_astra:ostrum_engine',
        C: 'mekanism:pellet_antimatter',
        F: 'ad_astra:fan'
    }).id('kubejs:venus_age/ad_astra/calorite_engine')

    e.remove({id: 'mekanism:supercharged_coil'})
    e.shaped('mekanism:supercharged_coil', [
        'CCC',
        'ULU',
        'PPP'
    ], {
        C: '#forge:ingots/calorite',
        U: 'mekanism:ultimate_control_circuit',
        L: 'mekanism:laser',
        P: 'mekanism:pellet_polonium'
    }).id('kubejs:venus_age/mekanism/supercharged_coil')

})