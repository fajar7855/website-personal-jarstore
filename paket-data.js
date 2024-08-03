document.addEventListener('DOMContentLoaded', () => {
    const data = {
        telkomsel: [
            { amount: 'TELKOMSEL', description: 'Paket Data 1GB dari Telkomsel.', price: 'Rp 10.000' },
            { amount: 'TELKOMSEL', description: 'Paket Data 5GB dari Telkomsel.', price: 'Rp 50.000' },
            { amount: 'TELKOMSEL', description: 'Paket Data 10GB dari Telkomsel.', price: 'Rp 100.000' },
        ],
        xl: [
            { amount: 'XL', description: 'Paket Data 1GB dari XL.', price: 'Rp 10.000' },
            { amount: 'XL', description: 'Paket Data 5GB dari XL.', price: 'Rp 50.000' },
            { amount: 'XL', description: 'Paket Data 10GB dari XL.', price: 'Rp 100.000' },
        ],
        indosat: [
            { amount: 'INDOSAT', description: 'Paket Data 1GB dari Indosat.', price: 'Rp 10.000' },
            { amount: 'INDOSAT', description: 'Paket Data 5GB dari Indosat.', price: 'Rp 50.000' },
            { amount: 'INDOSAT', description: 'Paket Data 10GB dari Indosat.', price: 'Rp 100.000' },
        ],
        tri: [
            { amount: 'TREE', description: 'Paket Data 1GB dari Tri.', price: 'Rp 10.000' },
            { amount: 'TREE', description: 'Paket Data 5GB dari Tri.', price: 'Rp 50.000' },
            { amount: 'TREE', description: 'Paket Data 10GB dari Tri.', price: 'Rp 100.000' },
        ],
        axis: [
            { amount: 'AXIS', description: 'Paket Data 1GB dari Axis.', price: 'Rp 10.000' },
            { amount: 'AXIS', description: 'Paket Data 5GB dari Axis.', price: 'Rp 50.000' },
            { amount: 'AXIS', description: 'Paket Data 10GB dari Axis.', price: 'Rp 100.000' },
        ]
    };

    const paketDataGrid = document.getElementById('paket-data-grid');
    const providerSelect = document.getElementById('provider-select');
    const modal = document.getElementById('info-modal');
    const closeModal = document.getElementById('close-modal');
    const modalTitle = document.getElementById('modal-title');
    const modalDescription = document.getElementById('modal-description');
    const modalPrice = document.getElementById('modal-price');
    const phoneNumberInput = document.getElementById('phone-number');
    const purchaseButton = document.getElementById('purchase-button');

    // Ganti dengan nomor WhatsApp Anda
    const whatsappNumber = '628956326018'; // Nomor WhatsApp Anda tanpa kode negara dan spasi

    function updatePaketDataGrid(provider) {
        paketDataGrid.innerHTML = '';
        const items = provider ? data[provider] : [].concat(...Object.values(data));
        
        items.forEach(item => {
            const dataItem = document.createElement('div');
            dataItem.classList.add('data-item');
            dataItem.innerHTML = `
                <h3>${item.amount}</h3>
                <p>${item.description}</p>
                <p>Harga: ${item.price}</p>
                <button class="buy-button" data-amount="${item.amount}" data-description="${item.description}" data-price="${item.price}">BELI</button>
            `;
            paketDataGrid.appendChild(dataItem);
        });

        document.querySelectorAll('.buy-button').forEach(button => {
            button.addEventListener('click', (e) => {
                const amount = e.target.getAttribute('data-amount');
                const description = e.target.getAttribute('data-description');
                const price = e.target.getAttribute('data-price');
                modalTitle.textContent = amount;
                modalDescription.textContent = description;
                modalPrice.textContent = `Harga: ${price}`;
                modal.style.display = 'flex';
            });
        });
    }

    providerSelect.addEventListener('change', (e) => {
        updatePaketDataGrid(e.target.value);
    });

    closeModal.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });

    purchaseButton.addEventListener('click', () => {
        const phoneNumber = phoneNumberInput.value;
        const amount = modalTitle.textContent;
        const description = modalDescription.textContent;
        const price = modalPrice.textContent;

        if (phoneNumber) {
            // Format pesan WhatsApp
            const message = `Saya ingin membeli Paket-data:\n\nProvider: ${amount}\nDeskripsi: ${description}\nHarga: ${price}\nNomor Telepon untuk Diisi: ${phoneNumber}`;
            const encodedMessage = encodeURIComponent(message);
            const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
            window.open(whatsappUrl, '_blank');
            modal.style.display = 'none';
        } else {
            alert('Harap masukkan nomor telepon.');
        }
    });

    // Initialize grid with all paket data
    updatePaketDataGrid('');
});
