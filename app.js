var restify = require('restify');
var builder = require('botbuilder');

var server =restify.createServer();
server.listen(process.env.PORT || 1976,function()
{
    console.log('% Listenting to %s',server.name,server.url);
   
}
);

// Create chat bot
var connector = new builder.ChatConnector
({appid: process.env.MY_APP_ID,appsecret: process.env.MY_APP_SECRET }); 
var bot = new builder.UniversalBot(connector);
server.post('/api/messages', connector.listen());

bot.dialog('/',function(session)
{
    session.send("Hi Iam Personal Assiatnt to Sudheesh. May i Help You");
});