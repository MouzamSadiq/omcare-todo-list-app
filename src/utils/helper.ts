export function generateUniqueId(): number {
  const timestamp = new Date().getTime();
  const randomValue = Math.floor(Math.random() * 10000);
  return timestamp * 10000 + randomValue;
}
