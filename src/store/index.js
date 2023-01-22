import { createStore } from 'vuex'

export default createStore({
  state: {
    Contacts:[
      {
        Name: 'albert',
        number: "1111111111"
      },
      {
        Name: 'Clement',
        number: "2222222222"
      },
    ],
    Historique:[],
    numero: "",
    date: new Date(),
    AppelInfo:[],
  },
  
  getters: {
  },
  mutations: {
    ajoutContact(state, contact){
      console.log(contact)
      state.Contacts.push(contact)
    },
    numero(state,value){
      state.numero += value
    },
    Appel(state,Info){
      state.AppelInfo.push({
        Name: Info,
        Date: "Le "+(state.date.getDate()<10?'0':'')+state.date.getDate()
        +"/"+((state.date.getMonth()+1)<10?'0':'')+(state.date.getMonth()+1)
        +"/"+state.date.getFullYear()
        +" à "+(state.date.getHours()<10?'0':'')+state.date.getHours()
        +"h"+(state.date.getMinutes()<10?'0':'') + state.date.getMinutes()
      }
      )

      console.log(state.date) 
      state.Historique.push(state.AppelInfo[0])
      state.AppelInfo = []
    }
  },
  actions: {
  },
  modules: {
  }
})
