
async function onFormSubmit() {
  let response = await fetch('https://private-21e8de-rafaellucio.apiary-mock.com/users');
  let client = await response.json();
  let formData = readFormData();
  client.push(formData)
  console.log(client)
  createList(client)
}

let readFormData = () => {
  let formData = {};
  formData['name'] = document.getElementById('name').value;
  formData['cpf'] = document.getElementById('cpf').value;
  formData['phone'] = document.getElementById('telefone').value;
  formData['email'] = document.getElementById('email').value;
  return formData;
}

function createList(client) {
  const data = client;
  const clientList = document.getElementById('client-list')
  const clientItem = document.createElement('li')
  clientList.appendChild(clientItem)
}

