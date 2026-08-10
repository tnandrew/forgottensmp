ServerEvents.recipes( e => {
    //silicon
    e.replaceInput({input: 'tfmg:silicon_ingot'}, 'tfmg:silicon_ingot', 'ae2:silicon')
    e.remove({id: 'tfmg:casting/silicon'})
    e.custom({
        "type": "tfmg:casting",
        "ingredients": [{
            "amount": 144,
            "fluid": "tfmg:liquid_silicon",
            "nbt": {}
        }],
        "processingTime": 200,
        "results": [{"item": "ae2:silicon"}]
    })
})
// tmfg:blast_furnace_fuel tag doesnt work so coal coke dust has to be unified to tfmg

// Add dust tags to create crushed items. 
ServerEvents.tags('item', event => {
    event.add('forge:dusts/nickel', 'create:crushed_raw_nickel')
    event.add('forge:dusts', 'create:crushed_raw_nickel')
    event.add('forge:dusts/iron', 'create:crushed_raw_iron')
    event.add('forge:dusts', 'create:crushed_raw_iron')

    event.add('forge:dusts/gold', 'create:crushed_raw_gold')
    event.add('forge:dusts', 'create:crushed_raw_gold')

    event.add('forge:dusts/copper', 'create:crushed_raw_copper')
    event.add('forge:dusts', 'create:crushed_raw_copper')

    event.add('forge:dusts/zinc', 'create:crushed_raw_zinc')
    event.add('forge:dusts', 'create:crushed_raw_zinc')

    event.add('forge:dusts/osmium', 'create:crushed_raw_osmium')
    event.add('forge:dusts', 'create:crushed_raw_osmium')

    event.add('forge:dusts/silver', 'create:crushed_raw_silver')
    event.add('forge:dusts', 'create:crushed_raw_silver')

    event.add('forge:dusts/tin', 'create:crushed_raw_tin')
    event.add('forge:dusts', 'create:crushed_raw_tin')

    event.add('forge:dusts/lead', 'create:crushed_raw_lead')
    event.add('forge:dusts', 'create:crushed_raw_lead')

    event.add('forge:dusts/uranium', 'create:crushed_raw_uranium')
    event.add('forge:dusts', 'create:crushed_raw_uranium')

    event.add('forge:dusts/lithium', 'create:crushed_raw_lithium')
    event.add('forge:dusts', 'create:crushed_raw_lithium')
})
