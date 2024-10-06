import { expect } from 'chai';
import { tambah, kali } from './math';

import { expect } from 'chai';
import { tambah, kali, kurang, bagi } from './math';

describe('Latihan Pengujian Fungsi Matematika', function () {
    // Latihan 1: Pengujian negative case untuk fungsi kurang dan bagi
    describe('Fungsi kurang', function () {
        it('seharusnya menangani angka negatif dengan benar', function () {
            expect(kurang(5, -3)).to.equal(8); // 5 - (-3) = 8
            expect(kurang(-5, 3)).to.equal(-8); // -5 - 3 = -8
            expect(kurang(-5, -3)).to.equal(-2); // -5 - (-3) = -2
        });

        it('seharusnya mengembalikan hasil yang benar untuk pengurangan nol', function () {
            expect(kurang(5, 0)).to.equal(5); // 5 - 0 = 5
            expect(kurang(0, 5)).to.equal(-5); // 0 - 5 = -5
        });
    });

    describe('Fungsi bagi', function () {
        it('seharusnya mengembalikan error saat membagi dengan 0', function () {
            expect(() => bagi(6, 0)).to.throw('Tidak bisa membagi dengan nol');
        });

        it('seharusnya menangani pembagian dengan angka negatif', function () {
            expect(bagi(6, -2)).to.equal(-3); // 6 / -2 = -3
            expect(bagi(-6, 2)).to.equal(-3); // -6 / 2 = -3
            expect(bagi(-6, -2)).to.equal(3); // -6 / -2 = 3
        });

        it('seharusnya mengembalikan hasil yang benar untuk pembagian dengan nol sebagai pembilang', function () {
            expect(bagi(0, 5)).to.equal(0); // 0 / 5 = 0
        });
    });

    // Latihan 2: Pengujian negative case untuk fungsi tambah dan kali
    describe('Fungsi tambah', function () {
        it('seharusnya mengembalikan NaN saat input adalah string', function () {
            expect(tambah(2, 'a')).to.be.NaN;
            expect(tambah('a', 2)).to.be.NaN;
            expect(tambah('a', 'b')).to.be.NaN;
        });

        it('seharusnya mengembalikan NaN saat input adalah null', function () {
            expect(tambah(2, null)).to.be.NaN;
            expect(tambah(null, 2)).to.be.NaN;
            expect(tambah(null, null)).to.be.NaN;
        });
    });

    describe('Fungsi kali', function () {
        it('seharusnya mengembalikan NaN saat input adalah string', function () {
            expect(kali(2, 'a')).to.be.NaN;
            expect(kali('a', 2)).to.be.NaN;
            expect(kali('a', 'b')).to.be.NaN;
        });
    });
});


describe('Pengujian Kasus Negatif untuk Fungsi Tambah dan Kali', function () {
    // Pengujian Fungsi Tambah
    describe('Fungsi tambah', function () {
        it('seharusnya mengembalikan NaN jika salah satu input adalah string', function () {
            expect(tambah(2, 'a')).to.be.NaN; // 2 + 'a' => NaN
            expect(tambah('a', 2)).to.be.NaN; // 'a' + 2 => NaN
            expect(tambah('a', 'b')).to.be.NaN; // 'a' + 'b' => NaN
        });

        it('seharusnya mengembalikan NaN jika salah satu input adalah null', function () {
            expect(tambah(2, null)).to.be.NaN; // 2 + null => NaN
            expect(tambah(null, 2)).to.be.NaN; // null + 2 => NaN
            expect(tambah(null, null)).to.be.NaN; // null + null => NaN
        });
    });

    // Pengujian Fungsi Kali
    describe('Fungsi kali', function () {
        it('seharusnya mengembalikan NaN jika salah satu input adalah string', function () {
            expect(kali(2, 'a')).to.be.NaN; // 2 * 'a' => NaN
            expect(kali('a', 2)).to.be.NaN; // 'a' * 2 => NaN
            expect(kali('a', 'b')).to.be.NaN; // 'a' * 'b' => NaN
        });

        it('seharusnya mengembalikan NaN jika salah satu input adalah null', function () {
            expect(kali(2, null)).to.be.NaN; // 2 * null => NaN
            expect(kali(null, 2)).to.be.NaN; // null * 2 => NaN
            expect(kali(null, null)).to.be.NaN; // null * null => NaN
        });
    });
});
