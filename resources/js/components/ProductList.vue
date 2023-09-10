<script>
export default {
  emits: ["emit-addToCart"],
  props: {
    listBarang: {
      type: Array,
    },
  },
  methods: {
    addToCart(index) {
      this.$emit("emit-addToCart", index);
    },
  },
};
</script>

<template>
  <div class="container">
    <div class="row row-cols-2 row-cols-md-3 g-3">
      <!--  -->
      <div v-for="(item, i) in listBarang" :key="i">
        <div class="col">
          <div class="card">
            <img src="https://dummyimage.com/640x4:3" class="img-fluid" alt="..." />
            <div class="card-body">
              <h6 class="card-title">{{ item.nama }}</h6>
              <h6 class="card-subtitle mb-2 text-body-secondary">$ {{ item.harga }}</h6>
              <div class="d-flex justify-content-between align-items-center">
                <button @click="addToCart(i)" type="button" class="btn btn-sm btn-outline-secondary">Add To Card</button>
                <p class="text-muted pt-2">Stock {{ item.stock }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!--  -->
    </div>
  </div>
</template>
