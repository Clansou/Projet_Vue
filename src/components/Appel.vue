<template>
    <p class="Name">{{ Appel.Name }}</p>
    <p class="Date">{{ Appel.Date }}</p>
    <button @click="Appeler(Appel.Name)"><i class="fa-solid fa-phone fa-2x"></i></button>

</template>
<script>
export default {
    name:'AppelInfo',
    props:[
        'Appel'
    ],
    methods:{
        Appeler(Info){
            this.$store.commit('Appel',Info)
        }
    }
    
}
</script>
<style scoped>
    .Name{
        font-size: x-large;
    }
    .Date{
        font-size: large;
        opacity: 0.6;
    }
</style>