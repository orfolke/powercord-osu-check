const { Plugin } = require('powercord/entities');

module.exports = class osuchecker extends Plugin {
  startPlugin () {
    powercord.api.commands.registerCommand({
      command: 'osucheck',
      description: 'Searches for osu! profile and send statistics',
      usage: '{c} [profile name]',
      executor: (args) => ({
        send: true,
        result: "http://lemmmy.pw/osusig/sig.php?colour=pink&uname=" + args.join(" ") + "&pp=0&onlineindicator=undefined"
      })
    });
  }

  pluginWillUnload () {
    powercord.api.commands.unregisterCommand('osucheck');
  }
};
