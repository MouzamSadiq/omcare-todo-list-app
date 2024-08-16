/**
 * generateUniqueId Function generates a unique identifier
 *
 * @returns {number} A unique identifier.
 */
export function generateUniqueId(): number {
  const timestamp = new Date().getTime();
  const randomValue = Math.floor(Math.random() * 10000);

  // Combine the timestamp and random value to create a unique identifier
  return timestamp * 10000 + randomValue;
}
