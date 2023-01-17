export default function debounce<T extends Function>(callback: T, delay: number = 200) {
    let timeout: ReturnType<typeof setInterval>;
    return function (this: any, ...args: any[]) {
        clearTimeout(timeout);

        timeout = setTimeout(() => callback.apply(this, args), delay);
    };
}
