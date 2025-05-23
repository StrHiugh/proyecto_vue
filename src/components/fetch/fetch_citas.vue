<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'
import TablaCitas from '../TablaCitas.vue'

const citas = ref([])

const fetchCitas = async () => {
    try {
        const response = await axios.get('http://127.0.0.1:8000/api/v1/citas/')
        citas.value = response.data.results
    } catch (error) {
        console.error('Error al obtener las citas:', error)
    }
}

onMounted(fetchCitas)
</script>

<template>
    <slot :citas="citas"></slot>
</template>