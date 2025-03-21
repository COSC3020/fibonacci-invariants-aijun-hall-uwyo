function fib(n) {
    if (n === 0) {
        return [0];
    } else if (n === 1) {
        return [0, 1];
    }

    const prev_fib_array = fib(n - 1);

    const last_fib_array_value = prev_fib_array[prev_fib_array.length - 1];
    const second_last_fib_array_value = prev_fib_array[prev_fib_array.length - 2];

    const current_fib_value = last_fib_array_value + second_last_fib_array_value;

    console.log( [...prev_fib_array, current_fib_value])
    return [...prev_fib_array, current_fib_value];
}
