import { SDK } from '@ringcentral/sdk';
import Config from '../../config.json';

var rcsdk = new SDK({
  server: Config.RINGCENTRAL_SERVER,
  clientId: Config.CLIENT_ID,
  clientSecret: Config.CLIENT_SECRET,
});
var platform = rcsdk.platform();

function login() {
  return platform.login({
    username: Config.ACCOUNT_ID,
    password: Config.ACCOUNT_PASSWORD,
    extension: Config.RINGCENTRAL_EXTENSION,
  });
}

function sendMessage(recipient, message) {
  return platform.post('/restapi/v1.0/account/~/extension/~/sms', {
    from: { phoneNumber: Config.ACCOUNT_ID },
    to: [{ phoneNumber: recipient }],
    text: message,
  });
}

export { login, sendMessage };
