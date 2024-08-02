export function capitalizeWords(description: string): string {
  return description
    .split(" ")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}
