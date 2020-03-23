const data = async () => {
  const response = await fetch('https://private-21e8de-rafaellucio.apiary-mock.com/users');
  const client = await response.json();
}
data();

