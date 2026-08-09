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
