async function loadStores() {
  const request = await fetch("/api/stores");
  return await request.json();
}

export default { loadStores };
