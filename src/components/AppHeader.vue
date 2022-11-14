<script>
import { store } from '../store'

export default {
    name: "AppHeader",
    props: {
        message: String,
    },
    data() {
        return {
            store,
        }
    },
    methods: {},
};
</script>

<template>
    <header class="d-flex justify-content-start align-items-center ps-3 pe-3">
        <img src="/logo.png" />
        <h1 class="text-center text-dark">{{ message }}</h1>
    </header>
</template>

<style lang="scss" scoped>
@use '../styles/partials/variables' as *;

header {
    height: 70px;
    background-color: #ffffff;
    line-height: 70px;

    img {
        width: 50px;
        margin: 0 10px;
    }

    h1 {
        padding: 0 10px;
    }
}
</style>