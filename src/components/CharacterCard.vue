<script>
export default {
    name: "CharacterCard",
    props: {
        character: Object,
    },
}
</script>
    
<template>
    <div class="character-card text-center mb-3">
        <div>
            <img class="img-fluid mb-3" :src="character.img" :alt="character.name" />
            <p class="name text-uppercase fw-bold text-light">{{ character.name }}</p>
            <p class="category lead mb-0">{{ character.category }}</p>
            <p class="status">{{ character.status }}</p>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../styles/partials/variables' as *;

.character-card {
    flex-basis: calc(100% / 5 - 20px);

    div {
        background-color: $bg-color;
        height: 100%;
    }

    .category,
    .status {
        color: #7d7977;
    }
}
</style>