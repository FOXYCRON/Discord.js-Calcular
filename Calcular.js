const Discord = require('discord.js');
const { MessageActionRow, MessageSelectMenu, MessageEmbed, MessageButton} = require('discord.js')

module.exports = {
  name: "calcular", //Nombre del comando
  alias: ["calc"], //Alias del comando (Por si quieres activar el comando de 2 maneras)
  desc: ["Una calculadora por si las moscas."], // Agregar descripcion del comando
  premisos: [""],  // Cambiar los permisos dependiendo del comando
  permisos_bot: [""], // Cambiar los permisos dependiendo del comando
   execute (client, message, args) {

    message.channel.sendTyping();

    if(!args[0]) return message.reply("Da una operacion");
    var op = args.join(" ");
    var r;
    try{
    r = eval(op);
    }catch (e) {
    return message.reply("Da una operacion valida");
    }

   const embed = new Discord.MessageEmbed()
   .setThumbnail(client.user.avatarURL())
   .setAuthor(client.user.username , client.user.avatarURL())
   .setTitle("Calculadora")
   .addField(`Operacion:`, `${op}`)
   .addField(`Resultado:`, `${r}`)
   .setTimestamp() 
   .setColor("RANDOM")
   .setFooter(message.author.username, message.author.displayAvatarURL())
   
   message.channel.send({ embeds: [embed]});
   

  }

}
