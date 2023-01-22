<template>
    <div>
    <h1>Add a Contact</h1>
    <form @submit.prevent="ajoutContact">
      <p>Name :</p>
      <input type="text" placeholder="Name" v-model="formContact.Name">
      <p>Number :</p>
      <input type="number" placeholder="Number" v-model="formContact.number">
      <button class ="Submit" type="submit">Ajouter</button>
    </form>
  </div>
</template>
<script>
export default {
    name: 'FormContact',
    data(){
        return{
            formContact:{
                Name:"",
                number:null
            },
        }
    },
    props:[
        'Contacts'
    ],
    methods:{
        ajoutContact(){
            console.log(this.Contacts)
            if(this.formContact.Name ==null)return
            if(this.formContact.number ==null)return
            if(this.Contacts.find((Contact) => Contact.Name == this.formContact.Name))return
            this.$store.commit('ajoutContact',this.formContact)

            this.formContact = {
                Name:"",
                number: null
            }
        }
    },
    
}
</script>
<style scoped>
    form{
    display: flex;
    flex-direction: column;
    width: 40%;
    margin-left: auto;
    margin-right: auto;
    }
    form > p {
        margin-right: auto;
    }
    form >input{
        border: 0;
        text-align: center;
        border-bottom: 2px orange solid
    }
    form > button{
        margin-top: 20px;
        padding: 12px 24px;
        width: 150px;
        border: 3px solid rgb(152, 100, 3);;
        background-color: orange;
        margin-left: auto;
        margin-right: auto;

    }
</style>