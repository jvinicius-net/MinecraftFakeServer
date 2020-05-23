var mc = require('minecraft-protocol');
var {server} = require('minecraft-protocol');

const fs = require('fs');
var server;
const beforePing = (res, client, reply) => {
    let pingRes = {
        'description': "§f[§4§LAntiBOT§f]\n§7Estou verificando seu endereço de ip: "+client.socket.remoteAddress,
        'version': {
            'name': 'KNZK',
            'protocol': client.version
        },
        'players': {
            'max': server.maxPlayers,
            'online': server.playerCount
        },
        'favicon': "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAFPklEQVR4XuVbz4scRRT+3pBIbqJ/g7AX3R70KmaqZQURNV0jYhZEBBHcRCUoq6JJTBQ1KEFJjIggIpgokp4g4iHq9kZy9NA18SCC/4KCJ3FxSrozM+mZ7Z5+VV3d0+BeEnbfr+97r36/JjT0E8veGQId5rjT0Ge74fazHNmqMlTVQJG+kuIKgHsc2f/JC6P9jmzNmHFKgDrgH0RHn68j0KnNEa17l7YuuPLhhAAlxYcANlwFxbRzzgujQ0zZQrFKBKigdzuIrlUNopK+1nd4g+1fbG1YE6Ck0LZO69DzwsgKi7HScP3uW/Tfe/+oA0RVm7Rv59bV81f/NLFjRMBQ+pc19JqJg6ZlCfT9arh1H9cvmwAlxT8A9nINL1luxwujmzgxsAhwNd613lnpDq7+tigw9ZBYwR7EAPZxACyS4cwLpQRUybzW+Ks7iG6uAkQF4mcQ7rK0UVoJCwmwH/P6Sy/cPmgZdK5aLMVRAk6a2iybEwoJsJ3tOWVnCiIrH0uxQ8AeExuLVodCAkzH/b8a3TsHkTIJzEZWBf53IH2/qW5RYnIJMAVfd9YnYGMpviXgAVPwE/m8OHcRYLq9bQq8kr1vAHrQFnyql7Nt3k2AwRa3MfCBuATCw5XAj5XnY54hwORU1xT4WPZCAgUuwI9tzJwi5wlgHXAIem013P7BYVC5pobS/1pDP+LaTzZ5UwJMLjOayH4ciK+I8CgbPI02oDvnWPKZS5UbBDDHfhPglfQvAPoxFphEiEYb3sUrHyX/5a5gExxGBBDw+2oY3cYOzEJQSfEFgHW2agZ8ohNLERPglenPEMC9wKw7+0qKzwE8Xhb89O9z4Ce/Z1bBlhdG96YVwFRAnQSoQHwGwhNVwY/xjJKBUWYrwcMmoE7wsRSfEvBkWcBlmc/qc5LaCgKU9D8B9FMuwXOrOiWA+2JTRwXEUnxMwNOuwXMJSF6giFMq0Nj0BtG77EAZgkqKZM1+hiF6XaRgwivSH/bFMa1xosw+iwDX2Y/74ixp8B81DMGbrAaNE6D64gNoPFeWGZMJr8gWp7obJWAYiNOacKQJ8Nx5oDEClPTfA/QLTYFvFQGxFKcI2GwSfGsIiIPe20T0ctPgW0GACvw3QfrVZYBfOgHDQJzQhGPLAu+UACIcX70YsR8llOwdB+j1ZYIfSrGpgVNlMTjfCsfSf42g3yhz7GKdX+SDswdIt8LcUuHsBpUUrwB4a9ngTTA5IyAOei8R0TttAF8LAcmzghdGnTyAKvBfBGn+Yclyb88ll1P+ia3sfQCrpy9vGAwDcUQTTnODMz3Vse1mBJkE3LgS45aMBlQ3jLoTX6rfex6a3mcHWXPmUxyB+BWElbKYrG6FJ2WT/Dvs9w5rTWfKHNU928/7Z2Z/er9p9TAyAg51gKQ5kvfTQOa5VZwGnPcwYmSAB/u6VEPgrwX710bUucwJLfdpbEyA25bXhsAbJq/4cdTQ0GKy2wl+19tG5QaJXBZaCp7VIFG5CtoKfrzxmU+Ysyaptk54E8BGTVLpOm/ZFM05NHFm6iIZ7jqf1bdqk0tJsGyOnt8xVgE80eXu8HaX+OLm6dIX1CqtsosOUFxSbDKesV2tVXbKPrN7pAwU52aJe5NT5iv5O2c4llZAhoT/b7v8hATbOYGTLVcyZc3R7GWwKCDb1cEVwEV2av9kJuu84uTknA/OeM9zyp4D8pRN+4qdo04MLuuzublqcHuK5DG1/A8n5+M06TblYcyRauOns7nDQ4ofAfjWQGcV0wtMR7ZmzFSaA0wC4jZjpcO6wc/n/wP/J8Mnp77PpAAAAABJRU5ErkJggg=="
    }

    reply(null, pingRes)
}



server = mc.createServer({
  'online-mode': false,   // optional
  encryption: true,      // optional
  host: '0.0.0.0',       // optional
  port: 25565,           // optional
  keepAlive: true,
  'max-players': maxPlayers = 200,
  'beforePing': beforePing,
  favicon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAFPklEQVR4XuVbz4scRRT+3pBIbqJ/g7AX3R70KmaqZQURNV0jYhZEBBHcRCUoq6JJTBQ1KEFJjIggIpgokp4g4iHq9kZy9NA18SCC/4KCJ3FxSrozM+mZ7Z5+VV3d0+BeEnbfr+97r36/JjT0E8veGQId5rjT0Ge74fazHNmqMlTVQJG+kuIKgHsc2f/JC6P9jmzNmHFKgDrgH0RHn68j0KnNEa17l7YuuPLhhAAlxYcANlwFxbRzzgujQ0zZQrFKBKigdzuIrlUNopK+1nd4g+1fbG1YE6Ck0LZO69DzwsgKi7HScP3uW/Tfe/+oA0RVm7Rv59bV81f/NLFjRMBQ+pc19JqJg6ZlCfT9arh1H9cvmwAlxT8A9nINL1luxwujmzgxsAhwNd613lnpDq7+tigw9ZBYwR7EAPZxACyS4cwLpQRUybzW+Ks7iG6uAkQF4mcQ7rK0UVoJCwmwH/P6Sy/cPmgZdK5aLMVRAk6a2iybEwoJsJ3tOWVnCiIrH0uxQ8AeExuLVodCAkzH/b8a3TsHkTIJzEZWBf53IH2/qW5RYnIJMAVfd9YnYGMpviXgAVPwE/m8OHcRYLq9bQq8kr1vAHrQFnyql7Nt3k2AwRa3MfCBuATCw5XAj5XnY54hwORU1xT4WPZCAgUuwI9tzJwi5wlgHXAIem013P7BYVC5pobS/1pDP+LaTzZ5UwJMLjOayH4ciK+I8CgbPI02oDvnWPKZS5UbBDDHfhPglfQvAPoxFphEiEYb3sUrHyX/5a5gExxGBBDw+2oY3cYOzEJQSfEFgHW2agZ8ohNLERPglenPEMC9wKw7+0qKzwE8Xhb89O9z4Ce/Z1bBlhdG96YVwFRAnQSoQHwGwhNVwY/xjJKBUWYrwcMmoE7wsRSfEvBkWcBlmc/qc5LaCgKU9D8B9FMuwXOrOiWA+2JTRwXEUnxMwNOuwXMJSF6giFMq0Nj0BtG77EAZgkqKZM1+hiF6XaRgwivSH/bFMa1xosw+iwDX2Y/74ixp8B81DMGbrAaNE6D64gNoPFeWGZMJr8gWp7obJWAYiNOacKQJ8Nx5oDEClPTfA/QLTYFvFQGxFKcI2GwSfGsIiIPe20T0ctPgW0GACvw3QfrVZYBfOgHDQJzQhGPLAu+UACIcX70YsR8llOwdB+j1ZYIfSrGpgVNlMTjfCsfSf42g3yhz7GKdX+SDswdIt8LcUuHsBpUUrwB4a9ngTTA5IyAOei8R0TttAF8LAcmzghdGnTyAKvBfBGn+Yclyb88ll1P+ia3sfQCrpy9vGAwDcUQTTnODMz3Vse1mBJkE3LgS45aMBlQ3jLoTX6rfex6a3mcHWXPmUxyB+BWElbKYrG6FJ2WT/Dvs9w5rTWfKHNU928/7Z2Z/er9p9TAyAg51gKQ5kvfTQOa5VZwGnPcwYmSAB/u6VEPgrwX710bUucwJLfdpbEyA25bXhsAbJq/4cdTQ0GKy2wl+19tG5QaJXBZaCp7VIFG5CtoKfrzxmU+Ysyaptk54E8BGTVLpOm/ZFM05NHFm6iIZ7jqf1bdqk0tJsGyOnt8xVgE80eXu8HaX+OLm6dIX1CqtsosOUFxSbDKesV2tVXbKPrN7pAwU52aJe5NT5iv5O2c4llZAhoT/b7v8hATbOYGTLVcyZc3R7GWwKCDb1cEVwEV2av9kJuu84uTknA/OeM9zyp4D8pRN+4qdo04MLuuzublqcHuK5DG1/A8n5+M06TblYcyRauOns7nDQ4ofAfjWQGcV0wtMR7ZmzFSaA0wC4jZjpcO6wc/n/wP/J8Mnp77PpAAAAABJRU5ErkJggg=="

});

server.on('login', function(client) {
client.favicon = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAFPklEQVR4XuVbz4scRRT+3pBIbqJ/g7AX3R70KmaqZQURNV0jYhZEBBHcRCUoq6JJTBQ1KEFJjIggIpgokp4g4iHq9kZy9NA18SCC/4KCJ3FxSrozM+mZ7Z5+VV3d0+BeEnbfr+97r36/JjT0E8veGQId5rjT0Ge74fazHNmqMlTVQJG+kuIKgHsc2f/JC6P9jmzNmHFKgDrgH0RHn68j0KnNEa17l7YuuPLhhAAlxYcANlwFxbRzzgujQ0zZQrFKBKigdzuIrlUNopK+1nd4g+1fbG1YE6Ck0LZO69DzwsgKi7HScP3uW/Tfe/+oA0RVm7Rv59bV81f/NLFjRMBQ+pc19JqJg6ZlCfT9arh1H9cvmwAlxT8A9nINL1luxwujmzgxsAhwNd613lnpDq7+tigw9ZBYwR7EAPZxACyS4cwLpQRUybzW+Ks7iG6uAkQF4mcQ7rK0UVoJCwmwH/P6Sy/cPmgZdK5aLMVRAk6a2iybEwoJsJ3tOWVnCiIrH0uxQ8AeExuLVodCAkzH/b8a3TsHkTIJzEZWBf53IH2/qW5RYnIJMAVfd9YnYGMpviXgAVPwE/m8OHcRYLq9bQq8kr1vAHrQFnyql7Nt3k2AwRa3MfCBuATCw5XAj5XnY54hwORU1xT4WPZCAgUuwI9tzJwi5wlgHXAIem013P7BYVC5pobS/1pDP+LaTzZ5UwJMLjOayH4ciK+I8CgbPI02oDvnWPKZS5UbBDDHfhPglfQvAPoxFphEiEYb3sUrHyX/5a5gExxGBBDw+2oY3cYOzEJQSfEFgHW2agZ8ohNLERPglenPEMC9wKw7+0qKzwE8Xhb89O9z4Ce/Z1bBlhdG96YVwFRAnQSoQHwGwhNVwY/xjJKBUWYrwcMmoE7wsRSfEvBkWcBlmc/qc5LaCgKU9D8B9FMuwXOrOiWA+2JTRwXEUnxMwNOuwXMJSF6giFMq0Nj0BtG77EAZgkqKZM1+hiF6XaRgwivSH/bFMa1xosw+iwDX2Y/74ixp8B81DMGbrAaNE6D64gNoPFeWGZMJr8gWp7obJWAYiNOacKQJ8Nx5oDEClPTfA/QLTYFvFQGxFKcI2GwSfGsIiIPe20T0ctPgW0GACvw3QfrVZYBfOgHDQJzQhGPLAu+UACIcX70YsR8llOwdB+j1ZYIfSrGpgVNlMTjfCsfSf42g3yhz7GKdX+SDswdIt8LcUuHsBpUUrwB4a9ngTTA5IyAOei8R0TttAF8LAcmzghdGnTyAKvBfBGn+Yclyb88ll1P+ia3sfQCrpy9vGAwDcUQTTnODMz3Vse1mBJkE3LgS45aMBlQ3jLoTX6rfex6a3mcHWXPmUxyB+BWElbKYrG6FJ2WT/Dvs9w5rTWfKHNU928/7Z2Z/er9p9TAyAg51gKQ5kvfTQOa5VZwGnPcwYmSAB/u6VEPgrwX710bUucwJLfdpbEyA25bXhsAbJq/4cdTQ0GKy2wl+19tG5QaJXBZaCp7VIFG5CtoKfrzxmU+Ysyaptk54E8BGTVLpOm/ZFM05NHFm6iIZ7jqf1bdqk0tJsGyOnt8xVgE80eXu8HaX+OLm6dIX1CqtsosOUFxSbDKesV2tVXbKPrN7pAwU52aJe5NT5iv5O2c4llZAhoT/b7v8hATbOYGTLVcyZc3R7GWwKCDb1cEVwEV2av9kJuu84uTknA/OeM9zyp4D8pRN+4qdo04MLuuzublqcHuK5DG1/A8n5+M06TblYcyRauOns7nDQ4ofAfjWQGcV0wtMR7ZmzFSaA0wC4jZjpcO6wc/n/wP/J8Mnp77PpAAAAABJRU5ErkJggg==";
	console.log('[+] ' + client.username + ' (' + client.uuid + ') (' + client.socket.remoteAddress + ')');

	client.on('end', () => {
		console.log('[-] ' + client.username + ' (' + client.uuid + ')');
  });
  
 
  client.write('login', {
    entityId: client.id,
    levelType: 'default',
    gameMode: 0,
    dimension: 1,
    difficulty: 3,
    hashedSeed: [1337, 0],
    maxPlayers: server.maxPlayers,
    reducedDebugInfo: true,
    enableRespawnScreen: false
  });
  client.write('position', {
    x: 666,
    y: -666,
    z: 666,
    yaw: 0,
    pitch: 0,
    flags: 0x01
  });


  
  var msg = {
    translate: 'chat.type.announcement',
    "with": [
      '§4§lANTIBOT',
      '§7Você esta usando proxy, por favor §7retire o §7servidor proxy §7e tente se §7conectar §7novamente!'
    ]
  };
//client.end("§f[§4§lANTIBOT§f]\n§7Você esta usando proxy, por favor tire a proxy §7e §7conecte §7novamente!");

  client.on('chat', function (data) {
    if(!data.message.includes("/")){
      const message = '[' + client.username + ']' + ' ' + data.message
      console.log(message);
    }else{
      const message = client.username + ' executou o comando ' + data.message
      console.log(message);
    }
    if(data.message.includes("/")){

    if(data.message.includes("info")){

      client.write("chat", { message: JSON.stringify({
        translate: 'chat.type.announcement',
        "with": [
          '§5§lINFORMAÇÕES',
          `§7Players Online: §5${server.playerCount} §8- §7IP: §5${client.socket.remoteAddress} §8- §7Ping: §5${client.latency} §7ms`
        ]
      }), position: 0 });
      
    }else{
      client.write("chat", { message: JSON.stringify({
        translate: 'chat.type.announcement',
        "with": [
          '§4§lERRO',
          `§7Este comando não existe!`
        ]
      }), position: 0 });
    }
       //playerCoun
      }
  })

  client.write("chat", { message: JSON.stringify(msg), position: 0 });

});