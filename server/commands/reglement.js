module.exports = {
    name: "reglement",
    description: "Envoie l'embed règlement",
    role: "god",
    run: async (client, interaction, args) => {
        const embed = new client.Embed()
            .setTitle("Règlement")
            .setColor("#00bf62")
            .setDescription("Merci de respecter ces règles. Tout manquement peut entraîner des sanctions.")
            .addFields(
                { name: "1 • Objet", value: "Définit les règles de fonctionnement du serveur et garantit un environnement respectueux.", inline: false },
                { name: "2 • Champ d'application", value: "S'applique à tous les membres, invités et bots présents sur le serveur.", inline: false },
                { name: "3 • Horaires & Présence", value: "Respectez les horaires d'événements et signalez vos absences ou retards aux modérateurs.", inline: false },
                { name: "4 • Comportement & Respect", value: "Respect mutuel, courtoisie et tolérance. Aucune forme de discrimination ou de harcèlement tolérée.", inline: false },
                { name: "5 • Image & Présentation", value: "Comportement et contenu adaptés au public et aux événements. Respectez la charte graphique et la bonne image du serveur.", inline: false },
                { name: "6 • Sécurité & Santé", value: "Signalez toute situation dangereuse. Aucune promotion de substances illicites ou de comportements dangereux.", inline: false },
                { name: "7 • Confidentialité & Données", value: "Ne divulguez pas d'informations privées sans autorisation. Respect des données personnelles des membres.", inline: false },
                { name: "8 • Utilisation des outils", value: "Pas d'abus des bots, pas de spam, interdiction d'installer ou d'exécuter des scripts malveillants.", inline: false },
                { name: "9 • Conflits d'intérêts", value: "Signalez tout conflit d'intérêt susceptible d'influencer vos actions ici.", inline: false },
                { name: "10 • Procédure disciplinaire", value: "Sanctions : rappel, avertissement, suspension ou bannissement selon la gravité et la récidive.", inline: false },
                { name: "11 • Signalement & Réclamations", value: "Contactez les modérateurs ou utilisez le canal dédié. Protection des lanceurs d'alerte garantie.", inline: false },
                { name: "12 • Formation & Développement", value: "Participation aux formations et événements recommandée pour rester informé des règles.", inline: false },
                { name: "13 • Amendements", value: "Le règlement peut être modifié par la direction/les admins ; vous en serez informés.", inline: false },
                { name: "14 • Entrée en vigueur", value: "Le règlement est consultable en tout temps. Respect et acceptation nécessaires pour rester membre.", inline: false },
            )
            .setFooter({ text: "Règlement du Serveur • Merci de le respecter ❤️" });

        return interaction.reply({ embeds: [embed], ephemeral: false });
    },
};