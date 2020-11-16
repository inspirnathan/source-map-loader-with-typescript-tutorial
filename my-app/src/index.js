import * as greetings from 'my-typescript-library';

const root = document.getElementById('root');

root.innerHTML = `
  <h2>${greetings.sayHelloEnglish()}</h2>
  <h2>${greetings.sayHelloSpanish()}</h2>
  <h2>${greetings.sayHelloFrench()}</h2>
  <h2>${greetings.sayHelloPersian()}</h2>`;