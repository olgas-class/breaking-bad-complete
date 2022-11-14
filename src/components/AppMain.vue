<script>
import { store } from '../store'
import CharacterCard from './CharacterCard.vue';
import AppLoader from './AppLoader.vue'
import ResultsMessage from './ResultsMessage.vue'

export default {
    name: "AppMain",
    components: {
        CharacterCard,
        AppLoader,
        ResultsMessage
    },
    data() {
        return {
            store,
        }
    },
};
</script>

<template>
    <main class="container p-5">
        <div v-if="!store.loading" class="row">
            <div class="col-12">
                <ResultsMessage />
            </div>
            <div class="col-12 card-container d-flex flex-wrap justify-content-between">
                <CharacterCard v-for="(character, index) in store.charactersList" :key="index" :character="character" />
            </div>
        </div>
        <!-- facoltativo: visualizzare un loader fintantoché la chiamata API non restituisce i risultati -->
        <AppLoader v-else label="Breaking Bad API" />
    </main>
</template>

<style scoped lang="scss">
main {
    background-color: #fff;
}
</style>