<template>
    <div class="box">
        <img src="../assets/images/public/arrow.jpg" @click="$router.back()" />
    </div>
</template>

<script>
export default {
    data() {
        return {
            // s:require('../assets/images/index_images/')
        };
    },
};
</script>

<style  lang="" scoped>
    .box{
        height: 0.58rem;
    }
    .box img{
        height: 0.3rem;
        margin-left: 0.3rem;
        margin-top: 0.25rem;
    }
</style>
