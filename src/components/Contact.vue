<template>
    <p class="Name">{{ Contact.Name }}</p>
    <p class="Number">{{ Contact.number }}</p>
    <button @click="Appeler(Contact.Name)"><i class="fa-solid fa-phone fa-2x"></i></button>

</template>
<script>
export default {
     name:'ContactInfo',
     props:[
        'Contact'
        
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
    .Number{
        
    }
</style>