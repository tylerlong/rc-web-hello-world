import RingCentral from '@rc-ex/core';

const node = document.createElement('h1');
node.innerText = 'Hello world!';
document.body.appendChild(node);

const button = document.createElement('button');
button.innerText = 'Click me';
document.body.appendChild(button);
button.onclick = () => {
  main();
};

const rc = new RingCentral({
  clientId: 'jJxc4f1ASJ2JlizgMdNnvg',
  clientSecret: 'fake',
  server: 'https://platform.ringcentral.com',
});

const main = async () => {
  await rc.authorize({username: 'fake', extension: '', password: 'fake'});
};
// main();
