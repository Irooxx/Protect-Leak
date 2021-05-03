const variablediscordaskip = require("discord.js")
const skid = new variablediscordaskip.Client()
const prefixquichangepas = "."
const moment = require("moment")

const LEAKED = require("./leaked.json")

skid.on("message", async message => {
    const args = message.content.slice(prefixquichangepas.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();

    if (command === "help") {
        var leaked = new variablediscordaskip.MessageEmbed()
            .setTitle("・Menu d'aide du bot")
            .setDescription("Mon prefix est : `Tous les prefix marche` :boulontah:")
            .addField(":diverstah:・Divers :", "> \`vc\`, \`invite\`, \`say\`, \`userinfo\`, \`server-info\`, \`botinfo\`")
            .addField(":stafftah:・Modération :", "> \`nuke\`, \`addrole\`, \`banid\`, \`unban\`, \`lock\`, \`unlock\`, \`clear\`, \`voicekick\`")
            .addField(":invitetah:・Administration :", "> \`la\`, \`backup\`")
            .addField(":protecttah:・Protection :", "> \`antiwebhook (auto)\`")
            .addField(":devtah:・Owner :", "> \`serverlist\`, \`setavatar\`")
            .setFooter(`${message.author.tag}`, "https://images-ext-2.discordapp.net/external/F3GkLRDhrrTzo-4lExq_XVf2Jy8vkG4C_xdDXGw34TY/https/cdn.discordapp.com/avatars/793540308628799559/c0d43b2097768b8c6da770dd9e26eedc.webp")
        message.channel.send(leaked)
    }

    if (command === "vc") {
        const ftgbg = message.guild.channels.cache.filter(c => c.type === 'voice');
        let count = 0;
        let counter = 0;
        for (const [id, voiceChannel] of ftgbg) count += voiceChannel.members.size;
        message.channel.send(`Il y a ${count} en vocal bande de chomeur`)
    }

    if(command === "invite") {
        let ezzzzzzzzzzzzzzzzzzzzzzzzzzz = new variablediscordaskip.MessageEmbed()
        .setDescription("**Bot Invite :invitetah: :**\n[Cliquez ici](https://discord.gg/leaked)")
        .setFooter(`${message.author.tag}`, "https://images-ext-2.discordapp.net/external/F3GkLRDhrrTzo-4lExq_XVf2Jy8vkG4C_xdDXGw34TY/https/cdn.discordapp.com/avatars/793540308628799559/c0d43b2097768b8c6da770dd9e26eedc.webp")
        message.channel.send(ezzzzzzzzzzzzzzzzzzzzzzzzzzz)
    }

    if(command === "say") {
        message.delete()
        if(!args[0]) return message.channel.send("Merci de dire le message à envoyer.")
        if(args[0]) {
            message.channel.send(args[0])
        }
    }

    if(command === "userinfo") {
        message.channel.send("je suis inconpétant désole les amis.")
    }

    if(command === "server-info") {
        const filterLevels = {
            DISABLED: 'Off',
            MEMBERS_WITHOUT_ROLES: 'No Role',
            ALL_MEMBERS: 'Everyone'
        };

        const verificationLevels = {
            NONE: 'None',
            LOW: 'Low',
            MEDIUM: 'Medium',
            HIGH: '(╯°□°）╯︵ ┻━┻',
            VERY_HIGH: '┻━┻ ﾐヽ(ಠ益ಠ)ノ彡┻━┻'
        };

        const regions = {
            brazil: 'Brazil',
            europe: 'Europe',
            hongkong: 'Hong Kong',
            india: 'India',
            japan: 'Japan',
            russia: 'Russia',
            singapore: 'Singapore',
            southafrica: 'South Africa',
            sydeny: 'Sydeny',
            'us-central': 'US Central',
            'us-east': 'US East',
            'us-west': 'US West',
            'us-south': 'US South'
        };

        const flags = {
            DISCORD_EMPLOYEE: 'Discord Employee',
            DISCORD_PARTNER: 'Discord Partner',
            BUGHUNTER_LEVEL_1: 'Bug Hunter (Level 1)',
            BUGHUNTER_LEVEL_2: 'Bug Hunter (Level 2)',
            HYPESQUAD_EVENTS: 'HypeSquad Events',
            HOUSE_BRAVERY: 'House of Bravery',
            HOUSE_BRILLIANCE: 'House of Brilliance',
            HOUSE_BALANCE: 'House of Balance',
            EARLY_SUPPORTER: 'Early Supporter',
            TEAM_USER: 'Team User',
            SYSTEM: 'System',
            VERIFIED_BOT: 'Verified Bot',
            VERIFIED_DEVELOPER: 'Verified Bot Developer'
        };
        const rolesGuild = message.guild.roles.cache.sort((a, b) => b.position - a.position).map(role => role.toString());
        const membersGuild = message.guild.members.cache;
        const channelsGuild = message.guild.channels.cache;
        const emojisGuild = message.guild.emojis.cache;

        let online = message.guild.members.cache.filter(member => member.user.presence.status !== 'online');
        let offline = message.guild.members.cache.filter(member => member.user.presence.status !== 'offline');
        let idle = message.guild.members.cache.filter(member => member.user.presence.status !== 'idle');
        let dnd = message.guild.members.cache.filter(member => member.user.presence.status !== 'dnd');
        const embed = new variablediscordaskip.MessageEmbed()
            .setDescription(`**Guild information for __${message.guild.name}__**`)
            .setColor('BLUE')
            .setThumbnail(message.guild.iconURL({ dynamic: true }))
            .addField('General', [
                `**❯ Nom:** ${message.guild.name}`,
                `**❯ ID:** ${message.guild.id}`,
                `**❯ Owner:** <@${message.guild.ownerID}>`,
                `**❯ Région:** ${regions[message.guild.region]}`,
                `**❯ Niveau de boost:** ${message.guild.premiumTier ? `Tier ${message.guild.premiumTier}` : 'None'}`,
                `**❯ Filtre explicite:** ${filterLevels[message.guild.explicitContentFilter]}`,
                `**❯ Niveau de vérification:** ${verificationLevels[message.guild.verificationLevel]}`,
                `**❯ Time Created:** ${moment(message.guild.createdTimestamp).format('LT')} ${moment(message.guild.createdTimestamp).format('LL')} ${moment(message.guild.createdTimestamp).fromNow()}`,
                '\u200b'
            ])
            .addField('Statistiques', [
                `**❯ Nombre de role:** ${rolesGuild.length}`,
                `**❯ Nombre d'Emoji:** ${emojisGuild.size}`,
                `**❯ Nombre d'Emoji normaux:** ${emojisGuild.filter(emoji => !emoji.animated).size}`,
                `**❯ Nombre d'Emoji animé(s):** ${emojisGuild.filter(emoji => emoji.animated).size}`,
                `**❯ Member Count:** ${message.guild.memberCount}`,
                `**❯ Humain:** ${membersGuild.filter(member => !member.user.bot).size}`,
                `**❯ Bots:** ${membersGuild.filter(member => member.user.bot).size}`,
                `**❯ Text Channels:** ${channelsGuild.filter(channel => channel.type === 'text').size}`,
                `**❯ Voice Channels:** ${channelsGuild.filter(channel => channel.type === 'voice').size}`,
                `**❯ Nombre de boost:** ${message.guild.premiumSubscriptionCount || '0'}`,
                '\u200b'
            ])
            .addField('Presence', [
                `**❯ En ligne:** ${online.size}`,
                `**❯ Invisible:** ${idle.size}`,
                `**❯ Ne pas déranger:** ${dnd.size}`,
                `**❯ Hors ligne:** ${offline.size}`,
                '\u200b'
            ])
        message.channel.send(embed);
    }

    if(command === "botinfo") {
        var leakeencore = new variablediscordaskip.MessageEmbed()
        .setTitle("Protect")
        .setDescription("Bon aller cherche tous seul le botinfo il est vrm nul \nDevelopper\n<@761984865775124491> & <@731627642100645908>")
        message.channel.send(leakeencore)
    }

    if(command === "backup") {
        message.channel.send("C'est un module donc cherche bien :) lol leak by Irox & Wassim")
    }

    if(command === "serverlist") {
        message.channel.send(":warntah: `ERREUR` Vous n'êtes pas le créateur du bot.")
    }

    if(command === "setavatar") {
        message.channel.send("Seul Irox#0012 & ***#0002 peuvent utilisé cette commande.")
    }

    if (command === "la") {
        var mdrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrlol = message.guild.members.cache.filter(member => member.hasPermission("ADMINISTRATOR"))
        var lolllllllllllllllllllllllllllllll = mdrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrlol.map(m => `${m.user.id}: ${m.user.username},`).join("\n")
        message.channel.send(`Liste des membres ayant les permissions \`ADMINISTRATOR\` (**${mdrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrlol.size}**)`)
        for (let i = 0; i < lolllllllllllllllllllllllllllllll.length; i += 1995) {
            const vocalcountmdrrrrrrrrrrrrrrrrr = lolllllllllllllllllllllllllllllll.substring(i, Math.min(lolllllllllllllllllllllllllllllll.length, i + 1995));
            message.channel.send(`\`\`\`html\n${vocalcountmdrrrrrrrrrrrrrrrrr}\`\`\``);
        }
    }

    if(command === "nuke") {
        var leakeencore = await message.channel.clone()
        message.channel.delete()
        leakeencore.send(`${message.mentions} salon recrée :newstah:`)
    }

    if(command === "banid") {
        message.channel.send("S'il vous plaît veuillez insérez le user ID.")
    }

    if(command === "addrole") {
        message.channel.send("Il faut que tu spécifies un **membre** !")
    }

    if(command === "unban") {
        message.channel.send("S'il vous plaît veuillez entre un ID à unban.")
    }
})

skid.login(LEAKED.tokenleak)