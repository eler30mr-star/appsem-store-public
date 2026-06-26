const CLIENT_KEY = "appsem_store_client_id";

export function getClientId() {
  const existing = localStorage.getItem(CLIENT_KEY);
  if (existing) return existing;

  const id = crypto?.randomUUID?.() || `${Date.now()}-${Math.random().toString(16).slice(2)}`;
  localStorage.setItem(CLIENT_KEY, id);
  return id;
}
