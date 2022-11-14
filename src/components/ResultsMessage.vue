<script>
import { store } from '../store.js'
export default {
    name: "ResultsMessage",
    data() {
        return {
            store
        }
    },
    computed: {
        resultsNumber() {
            return store.charactersList.length;
        }
    }
};
</script>
        
<template>
    <section class="text-white fw-bold bg-dark p-3">Found {{ resultsNumber }} characters</section>
</template>
    
<style scoped lang="scss">
@use '../styles/partials/variables' as *;

.bg-dark {
    background-color: $bg-color;
}
</style>
