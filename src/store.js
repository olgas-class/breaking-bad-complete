import { reactive } from 'vue'

export const store = reactive({
    charactersList: [],
    apiURL: "https://www.breakingbadapi.com/api/characters",
    apiCategoryParameter: "category",
    categoryValue: "",
    loading: true,
});