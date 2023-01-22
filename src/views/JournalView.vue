<template>
  <div>
    <div class="flex" v-for="Appel in Historique" :key="Appel.Name">
      <Appel :Appel="Appel"/>
    </div>
  </div>
</template>

<script>

import Appel from'@/components/Appel.vue'
export default {
  name: 'JournalView',
  computed:{
      Historique(){
            return this.$store.state.Historique
        }
    },
  components:{
      Appel
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
