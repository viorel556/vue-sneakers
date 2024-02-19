
export function  see (...args) { // func to shorten the printing syntax
    console.log(...args);
}

export function calculateTax(total) {
    let tax = total * 0.19;
    return tax = tax.toFixed(2);
}

export function roundTotal(total) {
    return total.toFixed(2);
}

export default see;