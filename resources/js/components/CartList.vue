<script>
export default {
  emits: ["emit-addJumlah", "emit-minJumlah"],
  props: {
    listBarangCart: {
      type: Array,
    },
  },
  methods: {
    addJumlah(index) {
      this.$emit("emit-addJumlah", index);
    },
    minJumlah(index) {
      this.$emit("emit-minJumlah", index);
    },
  },
};
</script>

<template>
  <h3 class="offcanvas-title">Cart</h3>
  <div class="pt-4 row">
    <div v-for="(item, i) in listBarangCart" :key="i" class="card mb-2">
      <div class="row g-0">
        <div class="col-4">
          <img src="https://dummyimage.com/600x4:3" class="img-fluid rounded-start" alt="..." />
        </div>
        <div class="col-6">
          <div class="p-1">
            <h6 class="card-title">{{ item.nama }}</h6>
            <p class="card-subtitle">$ {{ item.hargaTotal }}</p>
            <div class="d-flex justify-content-evenly">
              <div>
                <button @click="minJumlah(i)" class="text-secondary-emphasis bg-secondary-subtle border border-secondary-subtle px-2 rounded-circle">-</button>
              </div>
              <div>{{ item.jumlah }}</div>
              <div>
                <button @click="addJumlah(i)" class="text-secondary-emphasis bg-secondary-subtle border border-secondary-subtle px-2 rounded-circle">+</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
