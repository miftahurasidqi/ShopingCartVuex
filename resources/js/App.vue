<script>
import ShoppingCart from "./assets/icon/ShoppingCart.vue";

import Header from "./components/Header.vue";
import ProductList from "./components/ProductList.vue";
import CartList from "./components/CartList.vue";
import CheckOut from "./components/CheckOut.vue";
export default {
    components: { ShoppingCart, Header, ProductList, CartList, CheckOut },
    data() {
        return {
            listBarang: [
                {
                    id: "1",
                    nama: "ACER Aspire",
                    harga: 600,
                    stock: 6,
                    img: "../assets/images/ACER-Aspire.jpg",
                },
                {
                    id: "2",
                    nama: "ASUS Vivobook 14 ",
                    harga: 466,
                    stock: 5,
                    img: "ASUS-Vivobook-14-A1404ZAFHD321.jpg",
                },
                {
                    id: "3",
                    nama: "Asus Vivobook pro",
                    harga: 2000,
                    stock: 10,
                    img: "Asus-vivobook-pro-16x.jpg",
                },
                {
                    id: "4",
                    nama: "DELL G15 5511",
                    harga: 1335,
                    stock: 15,
                    img: "DELL-G15-5511-Gaming.jpg",
                },
                {
                    id: "5",
                    nama: "LENOVO Yoga 7 Pro",
                    harga: 1000,
                    stock: 10,
                    img: "LENOVO Yoga Slim-7-Pro-14ACH5.jpg",
                },
                {
                    id: "6",
                    nama: "LENOVO IdeaPad 3",
                    harga: 600,
                    stock: 10,
                    img: "LENOVO-IdeaPad-3.jpg",
                },
            ],
            listBarangCart: [],
            totalHarga: 0,
        };
    },
    methods: {
        addToCart(index) {
            const barang = this.listBarang[index];

            // mengurangi jumlah stock
            if (barang.stock > 1) {
                barang.stock = barang.stock - 1;
            } else {
                this.listBarang.splice(index, 1);
            }

            // mencari stock apakah ada dalam cart
            function getBarangById(id, listCart) {
                const findCart = listCart.find((item) => item.id === id);
                return findCart || null; // Mengembalikan null jika barang tidak ditemukan
            }
            const findCart = getBarangById(barang.id, this.listBarangCart);

            // menambahkan stock kedalam cart
            if (findCart) {
                findCart.jumlah = findCart.jumlah + 1;
                findCart.hargaTotal = findCart.harga * findCart.jumlah;
            } else {
                this.listBarangCart.push({
                    id: barang.id,
                    nama: barang.nama,
                    harga: barang.harga,
                    jumlah: 1,
                    hargaTotal: barang.harga,
                });
            }

            // merubah total Harga
            let totalHarga = 0;
            this.listBarangCart.map((barangCard, i) => {
                totalHarga = totalHarga + barangCard.hargaTotal;
            });
            console.log(totalHarga);
            this.totalHarga = totalHarga;
        },
        addJumlah(index) {
            const barangCart = this.listBarangCart[index];

            // mencari cart apakah masih ada dalam stock
            function getBarangById(id, listCart) {
                const findCart = listCart.find((item) => item.id === id);
                return findCart || null; // Mengembalikan null jika barang tidak ditemukan
            }
            const findCart = getBarangById(barangCart.id, this.listBarang);
            console.log(findCart);

            if (findCart) {
                // mengurangi jumlah stock
                if (findCart.stock > 1) {
                    findCart.stock = --findCart.stock;
                } else {
                    this.listBarang = this.listBarang.filter(
                        (barang) => barang.id !== findCart.id
                    );
                }
                // menambah jumlah cart
                barangCart.jumlah = barangCart.jumlah + 1;
                barangCart.hargaTotal = barangCart.harga * barangCart.jumlah;
            } else {
                console.log("habis");
            }
            // merubah total Harga
            let totalHarga = 0;
            this.listBarangCart.map((barangCard, i) => {
                totalHarga = totalHarga + barangCard.hargaTotal;
            });
            console.log(totalHarga);
            this.totalHarga = totalHarga;
        },
        minJumlah(index) {
            const barangCart = this.listBarangCart[index];

            // mencari cart apakah masih ada dalam stock
            function getBarangById(id, listCart) {
                const findCart = listCart.find((item) => item.id === id);
                return findCart || null; // Mengembalikan null jika barang tidak ditemukan
            }
            const findCart = getBarangById(barangCart.id, this.listBarang);
            console.log(findCart);
            // mengurangi stock
            if (barangCart.jumlah > 1) {
                barangCart.jumlah = barangCart.jumlah - 1;
                barangCart.hargaTotal = barangCart.harga * barangCart.jumlah;
            } else {
                this.listBarangCart.splice(index, 1);
            }
            // menambah jumlah stock
            if (findCart) {
                findCart.stock = ++findCart.stock;
            } else {
                console.log("habis");
                this.listBarang.push({
                    id: barangCart.id,
                    nama: barangCart.nama,
                    harga: barangCart.harga,
                    stock: 1,
                });
            }
            // merubah total Harga
            let totalHarga = 0;
            this.listBarangCart.map((barangCard, i) => {
                totalHarga = totalHarga + barangCard.hargaTotal;
            });
            console.log(totalHarga);
            this.totalHarga = totalHarga;
        },
    },
};
</script>

<template>
    <Header>
        <a
            class="d-lg-none"
            data-bs-toggle="offcanvas"
            href="#offcanvasResponsive"
            aria-controls="offcanvasResponsive"
        >
            <ShoppingCart />
        </a>
    </Header>

    <main class="container mt-5">
        <div class="row">
            <div class="col-lg-8 py-5">
                <ProductList
                    :listBarang="listBarang"
                    @emit-addToCart="addToCart"
                />
            </div>

            <div class="col-lg-4 bg-light pt-5">
                <div
                    class="offcanvas-lg offcanvas-end"
                    tabindex="-1"
                    id="offcanvasResponsive"
                    aria-labelledby="offcanvasResponsiveLabel"
                >
                    <div class="offcanvas-header">
                        <button
                            type="button"
                            class="btn-close"
                            data-bs-dismiss="offcanvas"
                            data-bs-target="#offcanvasResponsive"
                            aria-label="Close"
                        ></button>
                    </div>
                    <div class="offcanvas-body ps-2">
                        <div>
                            <CartList
                                :listBarangCart="listBarangCart"
                                @emit-addJumlah="addJumlah"
                                @emit-minJumlah="minJumlah"
                            />
                            <CheckOut :totalHarga="totalHarga" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>
