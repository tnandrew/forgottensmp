ServerEvents.recipes(e => {

    e.remove({id: 'minecraft:kjs/computercraft_computer_normal'})
    e.remove({id: 'computercraft:computer_normal' })
    e.shaped('computercraft:computer_normal', [
        'SSS',
        'SPS',
        'SGS'
    ], {
        S: '#forge:stone',
        P: 'ae2:calculation_processor',
        G: '#forge:glass_panes'
    }).id('kubejs:processor/computer')

    e.remove({id: 'computercraft:pocket_computer_normal'})
    e.shaped('computercraft:pocket_computer_normal', [
        'SSS',
        'SPS',
        'SGS'
    ], {
        S: '#forge:stone',
        P: 'ae2:calculation_processor',
        G: 'minecraft:golden_apple'
    }).id('kubejs:processor/pocket_computer')

    e.remove({id: 'computercraft:computer_advanced' })
    e.remove({id: 'minecraft:kjs/computercraft_computer_advanced' })
    e.shaped('computercraft:computer_advanced', [
        'SSS',
        'SPS',
        'SGS'
    ], {
        S: '#forge:ingots/gold',
        P: 'ae2:logic_processor',
        G: '#forge:glass_panes'
    }).id('kubejs:processor/advanced_computer')

    e.remove({id: 'computercraft:pocket_computer_advanced'})
    e.shaped('computercraft:pocket_computer_advanced', [
        'SSS',
        'SPS',
        'SGS'
    ], {
        S: '#forge:ingots/gold',
        P: 'ae2:calculation_processor',
        G: 'minecraft:golden_apple'
    }).id('kubejs:processor/pocket_computer_advanced')

})