<script>
export default {
    data() {
        return {
            isShowAlert: false,
        };
    },

    props: {
        totalHarga: {
            type: Number,
        },
    },
    methods: {
        showAlert() {
            this.isShowAlert = true;

            setInterval(() => {
                window.location.reload();
            }, 5000);
        },
    },
};
</script>
<template>
    <div
        v-if="isShowAlert"
        class="alert fixed-top mt-5 p-5 d-flex justify-content-end"
    >
        <div class="alert alert-dark p-5">
            Checkout succsessful, you pay <b>$ {{ totalHarga }}</b>
        </div>
    </div>

    <div v-if="totalHarga" class="card col-12 mt-5">
        <div class="card-body">
            <div class="d-flex justify-content-between mb-3">
                <h5 class="card-title">Total</h5>

                <h5 class="card-title">$ {{ totalHarga }}</h5>
            </div>

            <button @click="showAlert()" class="col-12 btn btn-dark">
                Checkout
            </button>
        </div>
    </div>

    <div v-else class="m-5 col-12 p-5">
        <h4>No Product</h4>
    </div>
</template>
