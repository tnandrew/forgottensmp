//recipes for the space age, leading up to the tier 1 rocket

ServerEvents.recipes( e => {
    const sheetPressing = (input, output) => {
        e.custom({
            "type": "ad_astra:compressing",
            "cookingtime": 100,
            "energy": 20,
            "ingredient": {
                "item": input
            },
            "result": {
            "count": 1,
            "id": output
            }
        })
        e.recipes.create.pressing(output, input)
        e.custom({
            "type":"immersiveengineering:metal_press",
            "energy":2400,
            "input":{"item":input},
            "mold":"immersiveengineering:mold_plate",
            "result":{"item":output}
        })
    }

    e.shaped('thermal:machine_frame',
        [
            'ABA',
            'BCB',
            'ABA'
        ],
        {
            A: '#forge:ingots/steel',
            B: 'tfmg:rubber_sheet',
            C: 'tfmg:circuit_board'
        }
    )
    e.shaped('thermal:rf_coil',
        [
            '  A',
            ' B ',
            'A  '
        ],
        {
            A: 'minecraft:redstone',
            B: '#forge:ingots/electrum'
        }
    )
    e.shaped('thermal:redstone_servo',
        [
            'A',
            'B',
            'A'
        ],
        {
            A: '#forge:dusts/cinnabar',
            B: '#forge:ingots/invar'
        }
    )
    e.shaped('thermal:machine_smelter',
        [
            ' A ',
            'BCB',
            'DED'
        ],
        {
            A: 'thermal:redstone_servo',
            B: 'immersiveengineering:coil_lv',
            C: 'thermal:machine_frame',
            D: '#forge:gears/invar',
            E: 'thermal:rf_coil'
        }
    )
    e.shaped('thermal:machine_crucible',
        [
            ' A ',
            'BCB',
            'DED'
        ],
        {
            A: 'thermal:redstone_servo',
            B: 'minecraft:netherite_scrap',
            C: 'thermal:machine_frame',
            D: '#forge:gears/invar',
            E: 'thermal:rf_coil'
        }
    )
    e.shaped('ad_astra:nasa_workbench',
        [
            'ABA',
            'CDC',
            'EFE'
        ],
        {
            A: '#forge:rods/steel',
            B: 'tfmg:circuit_board',
            C: 'thermal:signalum_plate',
            D: '#forge:ingots/hop_graphite',
            E: '#forge:gears/invar',
            F: 'thermal:machine_frame'
        }
    )
    e.shaped('ad_astra:space_suit',
        [
            'ABA',
            'CDC',
            'AEA'
        ],
        {
            A: '#forge:ingots/plastic',
            B: 'tfmg:circuit_board',
            C: 'ad_astra:gas_tank',
            D: 'ad_astra:oxygen_gear',
            E: '#forge:ingots/rubber'
        }
    )
    e.shaped('ad_astra:space_pants',
        [
            'ABA',
            'C C',
            'A A'
        ],
        {
            A: '#forge:ingots/plastic',
            B: '#forge:ingots/steel',
            C: '#forge:ingots/rubber',
        }
    )
    e.shaped('ad_astra:rocket_nose_cone',
        [
            ' A ',
            ' B ',
            'BCB'
        ],
        {
            A: 'minecraft:lightning_rod',
            B: '#forge:plates/steel',
            C: 'computercraft:computer_advanced',
        }
    )
    e.shaped('ad_astra:engine_frame',
        [
            'ABA',
            'BCB',
            'ABA'
        ],
        {
            A: '#forge:plates/steel',
            B: 'create_new_age:overcharged_iron_sheet',
            C: 'thermal:machine_frame',
        }
    )
    e.shaped('computercraft:computer_normal',
        [
            'ABA',
            'ACA',
            'ADA'
        ],
        {
            A: '#forge:stone',
            B: 'create_new_age:overcharged_golden_wire',
            C: 'thermal:obsidian_glass',
            D: 'thermal:machine_frame',
        }
    )
    e.shaped('computercraft:computer_advanced',
        [
            'ABA',
            'ACA',
            'ADA'
        ],
        {
            A: '#forge:ingots/gold',
            B: 'create_new_age:overcharged_golden_wire',
            C: 'thermal:obsidian_glass',
            D: 'thermal:machine_frame',
        }
    )

    e.replaceInput({output:'ad_astra:space_boots'}, '#minecraft:wool', '#forge:ingots/plastic')
    e.replaceInput({output:'ad_astra:space_helmet'}, 'minecraft:glass_pane', 'thermal:obsidian_glass')
    e.replaceInput({output:'#forge:dusts/invar'}, '#forge:dusts/iron', 'immersiveengineering:dust_steel')
    e.replaceInput({output:'thermal:machine_furnace'}, 'minecraft:bricks', 'tfmg:fireproof_bricks')
    e.replaceInput({output:'thermal:machine_crystallizer'}, 'thermal:signalum_plate', 'thermal:redstone_servo')

    e.custom({
        "type":"immersiveengineering:arc_furnace",
        "additives":[{"tag":"forge:ingots/nickel"}],
        "energy":51200,
        "input":{"base_ingredient":{"tag":"forge:ingots/steel"},"count":2},
        "results":[{"base_ingredient":{"tag":"forge:ingots/invar"},"count":3}],
        "time":100
    })
    e.custom({
        "type": "tconstruct:casting_basin",
        "cooling_time": 160,
        "fluid": {
            "amount": 1000,
            "tag": "forge:latex"
        },
        "result": "thermal:rubber_block"
    })
    e.custom({
        "type": "tconstruct:alloy",
        "inputs": [{
            "amount": 180,
            "tag": "forge:molten_steel"
        },{
            "amount": 90,
            "tag": "forge:molten_nickel"
        }],
        "result": {
        "amount": 270,
        "tag": "forge:molten_invar"
        },
        "temperature": 1500
    })
    /* commented due to allowing skips bcs rocket fuel
    e.custom({
        "type": "tconstruct:alloy",
        "inputs": [{
            "amount": 270,
            "tag": "forge:molten_tin"
        },{
            "amount": 90,
            "tag": "forge:molten_silver"
        },{
            "amount": 500,
            "fluid": "thermal:glowstone"
        }],
        "result": {
        "amount": 360,
        "tag": "forge:molten_lumium"
        },
        "temperature": 2500
    })
    e.custom({
        "type": "tconstruct:alloy",
        "inputs": [{
            "amount": 270,
            "tag": "forge:molten_copper"
        },{
            "amount": 90,
            "tag": "forge:molten_silver"
        },{
            "amount": 400,
            "fluid": "thermal:redstone"
        }],
        "result": {
        "amount": 360,
        "tag": "forge:molten_signalum"
        },
        "temperature": 2500
    })
    e.custom({
        "type": "tconstruct:alloy",
        "inputs": [{
            "amount": 270,
            "tag": "forge:molten_lead"
        },{
            "amount": 100,
            "tag": "tconstruct:molten_diamond"
        },{
            "amount": 500,
            "fluid": "thermal:ender"
        }],
        "result": {
        "amount": 180,
        "tag": "forge:molten_enderium"
        },
        "temperature": 2500
    })
    */
    e.custom({
        "type": "thermal:smelter",
        "ingredients": [
            {
                "value": [
                    {"tag": "forge:ingots/steel"},
                    {"tag": "forge:dusts/steel"}
                ],
                "count": 2
            },
            {
                "value": [
                    {"tag": "forge:ingots/nickel"},
                    {"tag": "forge:dusts/nickel"}
                ],
                "count": 1
            }
        ],
        "result": [{
            "item": "thermal:invar_ingot",
            "count": 3
        }],
        "energy": 4800
    })
    e.custom({
        "type": "thermal:smelter",
        "ingredients": [
            {
                "value": [
                    {"tag": "forge:dusts/quartz"}
                ],
                "count": 1
            },
            {
                "value": [
                    {"tag": "forge:dusts/coal_coke"}
                ],
                "count": 1
            }
        ],
        "result": [{
            "item": "ae2:silicon",
            "count": 1
        }],
        "energy": 4800
    })
    e.custom({
        "type": "thermal:smelter",
        "ingredients": [
            {
                "value": [
                    {"tag": "forge:ingots/invar"}
                ],
                "count": 1
            },
            {
                "value": [
                    {"tag": "forge:dusts/enderium"}
                ],
                "count": 1
            }
        ],
        "result": [{
            "item": "thermal:enderium_ingot",
            "count": 1
        }],
        "energy": 16000
    })
    e.custom({
        "type": "thermal:smelter",
        "ingredients": [
            {
                "value": [
                    {"tag": "forge:ingots/invar"}
                ],
                "count": 1
            },
            {
                "value": [
                    {"tag": "forge:dusts/signalum"}
                ],
                "count": 1
            }
        ],
        "result": [{
            "item": "thermal:signalum_ingot",
            "count": 1
        }],
        "energy": 16000
    })
    e.custom({
        "type": "thermal:smelter",
        "ingredients": [
            {
                "value": [
                    {"tag": "forge:ingots/invar"}
                ],
                "count": 1
            },
            {
                "value": [
                    {"tag": "forge:dusts/lumium"}
                ],
                "count": 1
            }
        ],
        "result": [{
            "item": "thermal:lumium_ingot",
            "count": 1
        }],
        "energy": 16000
    })
    e.custom({
        "type": "thermal:crystallizer",
        "ingredients": [
            {"fluid": "thermal:ender", "amount": 500},
            {"tag": "forge:dusts/lead", "amount": 2},
            {"tag": "forge:dusts/diamond"}
        ],
        "result": [
            {"item": "thermal:enderium_dust", "amount": 2}
        ]
    })
    e.custom({
        "type": "thermal:crystallizer",
        "ingredients": [
            {"fluid": "thermal:glowstone", "amount": 500},
            {"tag": "forge:dusts/tin", "amount": 3},
            {"tag": "forge:dusts/silver"}
        ],
        "result": [
            {"item": "thermal:lumium_dust", "amount": 4}
        ]
    })
    e.custom({
        "type": "thermal:crystallizer",
        "ingredients": [
            {"fluid": "thermal:redstone", "amount": 400},
            {"tag": "forge:dusts/copper", "amount": 3},
            {"tag": "forge:dusts/silver"}
        ],
        "result": [
            {"item": "thermal:signalum_dust", "amount": 4}
        ]
    })
    sheetPressing('thermal:cured_rubber', 'tfmg:rubber_sheet')
})