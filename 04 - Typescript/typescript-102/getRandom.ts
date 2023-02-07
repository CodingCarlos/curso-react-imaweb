export function getRandomElement<T>(arr: T[]): T {
    const aleatorio = Math.floor(Math.random() * (arr.length - 1));
    return arr[aleatorio];
}
