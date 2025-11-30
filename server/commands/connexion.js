module.exports = {
    name: "connexion",
    description: "Envoie l'embed de connexion au serveur",
    role: "god",
    run: async (client, interaction, args) => {

        const embed = new client.Embed()
            .setTitle("🔌 Comment se connecter au serveur Grimwood")
            .setURL("https://grimwood.fr")
            .setColor("#00bf62")
            .setDescription(
                "**Suis ces étapes pour rejoindre le serveur RP Grimwood :**\n\n" +
                "- **Lance FiveM**\n" +
                "- Appuie sur **F8** pour ouvrir la console\n" +
                "- Copie-colle la commande suivante :\n" +
                "```connect cfx.re/join/undefined```" +
                "- Appuie sur **Entrée** et laisse FiveM te connecter automatiquement"
            );
        return interaction.reply({ embeds: [embed], ephemeral: false });
    },
};