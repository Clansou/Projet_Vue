<template>
  <div class="flex" v-for="Contact in Contacts" :key="Contact.Name">
    <Contact :Contact="Contact"/>
  </div>
  <formContact :Contacts="Contacts"></formContact>
</template>
<script>

import Contact from'@/components/Contact.vue'
import FormContact from '@/components/FormContact.vue'
export default {
  name: 'ContactView',
  emits:[
        'ajoutContact'
  ],
  components:{
        Contact,
        FormContact,

  },
  computed:{
      Contacts(){
            return this.$store.state.Contacts
        }
    },
}
</script>
<style scoped>
  .flex{
    margin-left: auto;
    display: flex;
    margin-right: auto;
    align-items: center;
    justify-content: space-between;
    width: 50%;
    margin-left: auto;
    margin-right: auto;
    border-bottom: 2px orange solid;
  }
</style>

