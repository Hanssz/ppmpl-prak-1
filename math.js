// math.js
export function tambah(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number' || isNaN(a) || isNaN(b)) {
        return NaN;
    }
    return a + b;
}

export function kali(a, b) {
    return a * b;
}

export function kurang(a, b) {
    return a - b;
}

export function bagi(a, b) {
    if ((b === 0) || (a === 0)) {
        throw new Error('Tidak bisa membagi dengan nol');
    }
    return a / b;
}
