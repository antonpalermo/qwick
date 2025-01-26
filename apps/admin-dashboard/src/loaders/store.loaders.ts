async function loadStores() {
  try {
    const request = await fetch("/api/stores");
    return await request.json();
  } catch (e) {
    throw new Error("loadStores unable to fetch all available stores" + e);
  }
}

export default { loadStores };
