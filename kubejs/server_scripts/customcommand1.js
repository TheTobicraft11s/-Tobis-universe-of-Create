ServerEvents.commandRegistry(event => {
    const { commands: Commands } = event;

event.register(
        Commands.literal("givediacoin")
		.requires(src => src.hasPermission(3)
        )
            )
            });