async function loadStores() {
  try {
    const request = await fetch("/api/stores");

    if (!request.ok) {
      throw new Error("Failed to fetch all available stores.");
    }

    return await request.json();
  } catch (e) {
    throw new Error("loadStores unable to fetch all available stores" + e);
  }
}

export default { loadStores };
