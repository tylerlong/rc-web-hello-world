import RingCentral from '@rc-ex/core';

const node = document.createElement('h1');
node.innerText = 'Hello world!';
document.body.appendChild(node);

const rc = new RingCentral({
  clientId: 'fake',
  clientSecret: 'fake',
  server: 'https://platform.ringcentral.com',
});

const main = async () => {
  await rc.authorize({username: 'fake', extension: '', password: 'fake'});
};
main();
