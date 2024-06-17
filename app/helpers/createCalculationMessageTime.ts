export function createCalculationMessageTime(text: string) {
  const wordsPerMinute = 200;
  const words = text.split(/\s+/).length;
  const readingTimeMinutes = words / wordsPerMinute;
  const readingTimeMilliseconds = readingTimeMinutes * 60 * 1000;

  return readingTimeMilliseconds;
}
