document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const navUl = document.querySelector('nav ul');

    if (menuToggle && navUl) {
        menuToggle.addEventListener('click', () => {
            navUl.classList.toggle('showing');
        });
    }
});

function calculateLoan() {
    const amount = parseInt(document.getElementById('amount').value);
    const duration = parseInt(document.getElementById('duration').value);

    if (isNaN(amount) || isNaN(duration)) {
        alert('Harap masukkan jumlah pinjaman dan durasi yang valid.');
        return;
    }

    let total = 0;

    if (amount === 50000) {
        total = duration === 1 ? 60000 : duration === 2 ? 70000 : duration === 3 ? 80000 : 90000;
    } else if (amount === 100000) {
        total = duration === 1 ? 110000 : duration === 2 ? 120000 : duration === 3 ? 140000 : 160000;
    }

    document.getElementById('result').innerHTML = `
        <div class="result-box">
            <p>Total yang harus dibayar: Rp ${total}</p>
            <p>Durasi: ${duration} minggu</p>
            <p>Berikan Tangkapan Layar Untuk Memproses Pengajuan</p>
            <button type="button" class="apply-button" onclick="applyLoan()">Ajukan</button>
        </div>
    `;
}

function applyLoan() {
    const name = document.getElementById('name').value;
    const bank = document.getElementById('bank').value;
    const accountNumber = document.getElementById('account-number').value;
    const amount = parseInt(document.getElementById('amount').value);
    const duration = parseInt(document.getElementById('duration').value);

    if (!name || !bank || !accountNumber || isNaN(amount) || isNaN(duration)) {
        alert('Harap masukkan nama, bank, nomor rekening, jumlah pinjaman, dan durasi yang valid.');
        return;
    }

    let total = 0;

    if (amount === 50000) {
        total = duration === 1 ? 60000 : duration === 2 ? 70000 : duration === 3 ? 80000 : 90000;
    } else if (amount === 100000) {
        total = duration === 1 ? 110000 : duration === 2 ? 120000 : duration === 3 ? 140000 : 160000;
    }

    const message = `Saya ingin mengajukan pinjaman:\n\nNama: ${name}\nBank: ${bank}\nNomor Rekening: ${accountNumber}\nJumlah Pinjaman: Rp ${amount}\nDurasi: ${duration} minggu\nTotal yang harus dibayar: Rp ${total}\n\nMohon diproses.`;
    const encodedMessage = encodeURIComponent(message);
    const phoneNumber = '6289506326018'; // Ganti dengan nomor WhatsApp Anda

    window.location.href = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
}
