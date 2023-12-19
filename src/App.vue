<template>
  <div class="container">
    <h1>Motos</h1>
    <h3>The Selected ID is - {{ form.moto }}</h3>
    <check-input-list :dividedby="2"
                      :list="list"
                      :value="form.moto"
                      v-model:value="form.moto"
                      name="motos"
                      :selectall="false"
                      selectalltext="Select All" ></check-input-list>
  </div>
</template>
<script setup>
import CheckInputList from '@/components/CheckInputList.vue'
import { reactive, ref } from 'vue'
const list = ref([{ id: '1', title: 'Ducati' }, { id: '2', title: 'Triumph' }, { id: '3', title: 'Harley-Davidson' }, { id: '4', title: 'BMW'}, { id: '5', title: 'Suzuki'}, { id: '6', title: 'Kawasaki'}, { id: '7', title: 'Yamaha'}, { id: '8', title: 'Honda'} ])
const form = reactive({ moto: [1]})
</script>

<style scoped>
h1 {
  padding-bottom:45px;
  font-size: 30px;
}
h3 {
  font-size: 24px;
}
div.container {
  padding-top: 400px;
  width: 100%;
}
</style>
