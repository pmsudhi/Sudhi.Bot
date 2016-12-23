var restify = require('restify');
var builder = require('botbuilder');
var server =restify.createServer();
server.listen(process.env.PORT || 1976,function()
{
    console.log('% Listenting to %s',server.name,server.url);
     console.log('APPID: %s',process.env.MY_APP_ID);
     console.log('appsecret: %s',process.env.MY_APP_SECRET);
}
);
// Create chat bot
var connector = new builder.ChatConnector
(
    
   // {appid: null,appsecret: null }
   {appid: process.env.MY_APP_ID,appPassword: process.env.MY_APP_SECRET }
); 
var bot = new builder.UniversalBot(connector);

server.get('/', restify.serveStatic({
 directory: __dirname,
 default: '/index.html'
}));

server.post('/api/messages', connector.listen());


bot.dialog('/',function(session)
{
    session.send("You said: %s", session.message.text);
});