<template >
    <div class="Numéro">
        <h1>{{ numero }}</h1>
        <div v-for="Contact in Contacts" :key="Contact.Name">
            <h2 v-if="Contact.number == numero">{{ Contact.Name }}</h2>
            
        </div>
        
    </div>
    <button v-if='numero != ""' class="appel" @click=reset() type="button"><span>Reset</span></button>
    <div class="calculatrice">
    <button @click="increment('7')" type="button">
            <span>7</span>
    </button>
    <button @click="increment('8')" type="button">
            <span>8</span>
    </button>
    <button @click="increment('9')" type="button">
            <span>9</span>
    </button>
    <button @click="increment('4')" type="button">
            <span>4</span>
    </button>
    <button @click="increment('5')" type="button">
            <span>5</span>
    </button>
    <button @click="increment('6')" type="button">
            <span>6</span>
    </button>
    <button @click="increment('1')" type="button">
            <span>1</span>
    </button>
    <button @click="increment('2')" type="button">
            <span>2</span>
    </button>
    <button @click="increment('3')" type="button">
            <span>3</span>
    </button>
    <button @click="increment('*')" type="button">
            <span>*</span>
    </button>
    <button @click="increment('0')" type="button">
            <span>0</span>
    </button>
    <button @click="increment('#')" type="button">
            <span>#</span>
    </button>
  </div>
  <form @submit.prevent="Appeler">
        <button class="appel" type="submit"><i class="fa-solid fa-phone fa-2x"></i></button>
    </form>
  
</template>
<script>
export default {
    name: 'ClavierView',
    computed:{
      numero(){
        return this.$store.state.numero
      },
      Contacts(){
            return this.$store.state.Contacts
        }
    },
    data(){
        return{
            formAppel:{
                Name:"",
            },
            NameContact:""
        }
    },
    methods:{
      increment(value){
        if(this.$store.state.numero.length <10) this.$store.commit('numero',value) 
    },
    Appeler(){
        if(this.numero != ""){
            this.$store.state.Contacts.find(Contact => {if (Contact.number == this.numero) {
                this.NameContact= Contact.Name
            }
            
        }
        )
        if(this.NameContact == "") this.NameContact = this.numero
        this.$store.commit('Appel',this.NameContact)
        this.NameContact = ""
            
        }
        
        
    },
    reset(){
        this.$store.state.numero = ""
    },
    },
    
    
}
</script>
<style scoped>
    .calculatrice{
        display: grid;
        grid-template-columns: repeat(3,100px);
        grid-auto-rows: 100px;
        gap: 8px;
        margin-left: auto;
        margin-right: auto;
        align-items: center;
        justify-content: center;
        
    }
    button{
        height: 100%;
        width: 100%;
        font-size: 32px;
    }
    .appel{
    margin-top: 20px;
    margin-bottom: 20px;
    padding: 24px 124px;
    width: auto;
    border: 3px solid rgb(152, 100, 3);;
    background-color: orange;
    margin-left: auto;
    margin-right: auto;

  }
</style>