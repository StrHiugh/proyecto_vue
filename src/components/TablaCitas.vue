<script setup>
import { defineProps } from 'vue'
import { RouterLink, RouterView } from 'vue-router'
import FetchCitas from '../components/fetch/fetch_citas.vue'

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
        <nav>
            <RouterLink to="/tablacitas">Citas</RouterLink>
            <RouterLink to="/tabladoctor">Consultas</RouterLink>
        </nav>
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

nav {
    width: 100%;
    font-size: 12px;
    text-align: center;
}

nav a.router-link-exact-active {
    color : var(--color-text);
}   

nav a.router-link-exact-active:hover {
    background-color: transparent;
}

nav a {
    display: inline-block;
    border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
    border: 0;
}

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
    nav {
        text-align: left;
        font-size: 1rem;
        padding: 1rem 0;
    }

}
</style>