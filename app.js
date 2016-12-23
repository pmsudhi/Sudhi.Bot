var restify = require('restify');
var builder = require('botbuilder');

var server =restify.createServer();
server.listen(process.env.PORT || 1976,function()
{
    console.log('% Listenting to %s',server.name,server.url);
    //http://sudhibot.azurewebsites.net
    //https://sudhibot.azurewebsites.net/api/messages
    //APPNAME: SudhiBot
    //APP ID: be4c389e-cce7-4868-b570-8bf61d117e8a
    //APP PASSWORD: NZC2pMnMZViMcav1hVWprTB
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