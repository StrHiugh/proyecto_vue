<script setup>
import { RouterLink, RouterView } from 'vue-router'

</script>
<template>
    <nav>
        <router-link to="/tablacitas">Citas</router-link>
        <router-link to="/tabladoctor">Consultas</router-link>
    </nav>
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
    nav {
        text-align: left;
        font-size: 1rem;
        padding: 1rem 0;
    }
}
</style>