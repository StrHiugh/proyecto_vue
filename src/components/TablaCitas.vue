<script setup>
import { defineProps } from 'vue'
import { RouterLink, RouterView } from 'vue-router'
import FetchCitas from '../components/fetch/fetch_citas.vue'
import Nav from './Nav.vue'
const props = defineProps({
    citas: {
        type: Array,
        required: true
    }
})
</script>

<template>
    <div class="tabla_citas">
        <div class="titulo">
            <h1>Tablas que Raul quería consumir</h1>
        </div>
        <Nav />
        <RouterView />
        <FetchCitas>
        <template v-slot="{ citas }">
            <table>
            <thead>
                <tr>
                <th>ID</th>
                <th>Título</th>
                <th>Inicio</th>
                <th>Fin</th>
                <th>Todo el día</th>
                <th>Color de fondo</th>
                <th>Usuario</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="cita in citas" :key="cita.id">
                <td>{{ cita.id }}</td>
                <td>{{ cita.title }}</td>
                <td>{{ cita.start }}</td>
                <td>{{ cita.end }}</td>
                <td>{{ cita.allDay ? 'Sí' : 'No' }}</td>
                <td>{{ cita.backgroundColor || 'Ninguno' }}</td>
                <td>{{ cita.usuario }}</td>
                </tr>
            </tbody>
            </table>
        </template>
        </FetchCitas>
    </div>
</template>

<style scoped>

@media (min-width: 1024px) {
    .tabla_citas {
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: left;
        margin-top: 5%;
        margin-bottom: 5%;
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
    }
    th {
        background-color: #3f3f3f;
    }
}
</style>