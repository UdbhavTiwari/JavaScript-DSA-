/**
 * This function creates a timer that can be cancelled
 * @param {Function} fn - The function to run (like x * 5)
 * @param {Array} args - The numbers to use (like [2])
 * @param {number} t - How long to wait (in milliseconds)
 * @return {Function} - A function to cancel the timer
 */
var cancellable = function(fn, args, t) {
    // Step 1: Start a timer
    // Think of this like setting an alarm
    let timer = setTimeout(() => {
        // Step 2: When time is up, run the function
        // Like when alarm rings, wake up
        fn(...args);
    }, t);

    // Step 3: Return a function to cancel the timer
    // Like a button to turn off the alarm
    return function() {
        clearTimeout(timer);
    };
};

// Example of how to use it:
const fn = (x) => x * 5;  // Function to multiply by 5
const args = [2];         // Use number 2
const t = 20;            // Wait 20 milliseconds

// Create the timer
const cancelFn = cancellable(fn, args, t);

// Optionally cancel it after 50ms
setTimeout(cancelFn, 50); 