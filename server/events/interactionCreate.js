const ids_admin = ["900527489695236107", "777988260705992726"];

module.exports = {
    name: "interactionCreate",
    run: async (client, interaction) => {
        if (interaction.isCommand()) {

            // CHECK DES IDS ICI
            if (!ids_admin.includes(interaction.user.id)) {
                return interaction.reply({
                    content: "Tu n'es pas autorisé à utiliser cette commande.",
                    ephemeral: true
                });
            }

            const command = client.commands.get(interaction.commandName);

            if (!command) {
                return interaction.reply({ content: "An error has occurred ", ephemeral: true })
                    .catch((error) => client.utils.log.handler("error", error));
            }

            const args = {};
            for (const option of interaction.options.data) {
                if (option.type === "SUB_COMMAND") {
                    if (option.name) args[option.name] = true;
                    option.options?.forEach((x) => {
                        args[x.name] = x.value;
                    });
                } else if (option.value) {
                    args[option.name] = option.value;
                }
            }

            interaction.member = interaction.guild.members.cache.get(interaction.user.id);

            try {
                command.run(client, interaction, args);
            } catch (error) {
                client.utils.log.error(error);
                interaction.reply({ content: "There was an error while executing this command!", ephemeral: true })
                    .catch((err) => client.utils.log.handler("error", err));
            }
        }

        if (interaction.isContextMenu()) {
            if (!ids_admin.includes(interaction.user.id)) {
                return interaction.reply({
                    content: "Tu n'es pas autorisé à utiliser cette commande.",
                    ephemeral: true
                });
            }

            const command = client.commands.get(interaction.commandName);
            if (command) command.run(client, interaction);
        }
    },
};