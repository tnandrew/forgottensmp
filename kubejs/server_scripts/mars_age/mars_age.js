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

})