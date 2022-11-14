<!-- componente da aggiungere il secondo giorno, per fare la ricerca -->
<script>
// il secondo giorno aggiungiamo la ricerca con lo state management
import { store } from '../store.js'
export default {
    name: "AppSearch",
    data() {
        return {
            store,
            categories: [
                "Better Call Saul",
                "Breaking Bad"
            ],
        }
    },
    methods: {
        resetSearch() {
            store.categoryValue = "";
            this.$emit("performSearch");
        }
    },
};
</script>
    
<template>
    <section class="search py-4">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <form class="d-flex justify-content-between align-items-center">
                        <div class="form-group">
                            <select v-model="store.categoryValue" @change="$emit('performSearch')"
                                class="form-select search-select">
                                <option value="">Select category</option>
                                <option v-for="(category, index) in this.categories" :key="index" :value="category">
                                    {{ category }}
                                </option>
                            </select>
                            <button @click.prevent="resetSearch">Reset</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>
</template>
    
<style scoped lang="scss">
@use '../styles/partials/variables' as *;

.search {
    background-color: $bg-color;
    flex-basis: 50%;
}

.search-container {
    width: 250px;
}

.search-select {
    max-width: 200px;
}
</style>
    