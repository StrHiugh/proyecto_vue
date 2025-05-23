<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'

const doctores = ref([])

const fetchCitas = async () => {
    try {
        const response = await axios.get('http://127.0.0.1:8000/api/v1/doctor/')
        doctores.value = response.data.results
    } catch (error) {
        console.error('Error al obtener los doctores:', error)
    }
}

onMounted(fetchCitas)
</script>

<template>
    <slot :doctores="doctores"></slot>
</template>