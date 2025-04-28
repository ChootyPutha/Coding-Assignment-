/**
 * Delays the execution for a given number of milliseconds.
 * @param ms - Time in milliseconds to delay
 */
export const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));
