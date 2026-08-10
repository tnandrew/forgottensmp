ServerEvents.commandRegistry(event => {
    const { commands } = event

    event.register(
        commands.literal('currenttags')
            .executes(ctx => {
                const player = ctx.source.player

                if (!player) {
                    ctx.source.sendFailure(
                        Text.literal('This command can only be run by a player.')
                    )
                    return 0
                }

                const biomeHolder = player.level.getBiome(player.blockPosition())

                const tags = biomeHolder.tags().toArray()

                player.tell(Text.literal('Biome Tags:'))

                tags.forEach(tag => {
                    player.tell(Text.literal('#' + tag.location()))
                })

                return 1
            })
    )
})