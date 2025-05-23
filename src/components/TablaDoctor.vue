<script setup>
import { defineProps } from 'vue'
import { RouterLink, RouterView } from 'vue-router'
import FetchDoctor from '../components/fetch/fetch_doctor.vue'
import Nav from './Nav.vue'

const props = defineProps({
    doctores: {
        type: Array,
        required: true
    }
})
</script>

<template>
    <div class="tabla_doctor">
        <div class="titulo">
            <h1>Tablas que Raul quería consumir</h1>
        </div>
        <Nav/>
        <RouterView />
        <FetchDoctor>
        <template v-slot="{ doctores }">
            <table>
            <thead>
                <tr>
                <th>ID</th>
                <th>Nombre Completo</th>
                <th>RFC</th>
                <th>CURP</th>
                <th>Tipo Empleado</th>
                <th>Puesto</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="doctor in doctores" :key="doctores.id">
                <td>{{ doctor.id }}</td>
                <td>{{ doctor.nombre_completo }}</td>
                <td>{{ doctor.empleado.datos.rfc }}</td>
                <td>{{ doctor.empleado.datos.curp }}</td>
                <td>{{ doctor.empleado.tipo_empleado }}</td>
                <td>{{ doctor.empleado.puesto }}</td>
                </tr>
            </tbody>
            </table>
        </template>
        </FetchDoctor>
    </div>
</template>

<style scoped>
@media (min-width: 1024px) {
    .tabla_doctor {
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: left;
        margin-top: 5%;
        margin-bottom: 5%;
        font-size: auto;
    }
    .titulo {
        margin-top: 40%;
        text-align: left;
    }
    table {
        width: 100%;
        border-collapse: collapse;
    }
    th, td {
        border: 1px solid #5b5b5b;
        padding: 8px;
        text-align: left;
        font-size: 12px;
    }
    th {
        background-color: #3f3f3f;
    }
}
</style>