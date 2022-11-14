<script>
import axios from 'axios';

import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import AppSearch from './components/AppSearch.vue';

import { store } from './store'

export default {
    components: {
        AppHeader,
        AppMain,
        AppSearch
    },
    data() {
        return {
            store
        }
    },
    methods: {
        getCharacters() {

            store.loading = true;
            let myUrl = store.apiURL;

            // if (store.categoryValue !== "") {
            //     myUrl += `?${store.apiCategoryParameter}=${store.categoryValue}`;
            // }
            const paramsObj = {};
            if (store.categoryValue !== "") {
                paramsObj[this.store.apiCategoryParameter] = this.store.categoryValue;
            }

            axios
                .get(myUrl, {
                    params: paramsObj
                })
                .then((res) => {
                    store.charactersList = res.data;
                    store.loading = false;
                })
                .catch((err) => {
                    console.log("Error", err);
                });

        },
    },
    created() {
        this.getCharacters();
    }
};
</script>

<template>
    <AppHeader message="Breaking Bad Api" />
    <AppSearch @performSearch="getCharacters()" />
    <AppMain />
</template>


<style lang="scss">
@use './styles/partials/variables' as *;
@use './styles/general.scss';

body {
    background-color: $bg-color;
}

.logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
}

.logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
    filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
