export const timeAgo = (timestamp: number) => {
  if (!timestamp) return;

  const now = Date.now();
  const timeDifference = now - timestamp;

  if( now - timestamp < 1000) return 'Just now'

  const timeUnits: { [key: string]: number } = {
    second: 1000,
    minute: 1000 * 60,
    hour: 1000 * 60 * 60,
    day: 1000 * 60 * 60 * 24,
    month: 1000 * 60 * 60 * 24 * 30,
    year: 1000 * 60 * 60 * 24 * 365
  };

  const [unit, divisor] = Object.entries(timeUnits)
    .reverse()
    .find(([_, divisor]) => timeDifference >= divisor) || ['second', 1];

    const value = Math.round(timeDifference / divisor);

  const rtf = new Intl.RelativeTimeFormat('en', { numeric: 'auto' });
  return rtf.format(-value, unit as Intl.RelativeTimeFormatUnit);
};
