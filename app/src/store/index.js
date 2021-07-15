import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../api/axios'
import router from '../router'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    areas: [],
    clubs: [],
    clubProfile: {},
    areaID: 0
  },
  mutations: {
    setAreas (state, payload) {
      state.areas = payload.areas
    },
    setClubs (state, payload) {
      state.clubs = payload.clubs
    },
    setClubProfile (state, payload) {
      state.clubProfile = payload.clubProfile
    },
    setAreaID (state, payload) {
      state.areaID = payload.areaID
    }
  },
  actions: {
    getAreas (context) {
      axios({
        method: 'GET',
        url: '/areas',
        headers: {
          'X-Auth-Token': '6ea42207124e443e9dadda879c2bee5f'
        }
      })
        .then(res => {
          context.commit('setAreas', { areas: res.data.areas })
        })
        .catch(err => console.log(err))
    },
    getClubs (context) {
      axios({
        method: 'GET',
        url: '/competitions',
        headers: {
          'X-Auth-Token': '6ea42207124e443e9dadda879c2bee5f'
        }
      })
        .then(res => {
          context.commit('setClubs', { clubs: res.data })
          console.log(res.data)
        })
        .catch(err => console.log(err))
    },
    getClubProfile (context, payload) {
      axios({
        method: 'GET',
        url: '/teams/' + payload.id,
        headers: {
          'X-Auth-Token': '6ea42207124e443e9dadda879c2bee5f'
        }
      })
        .then(res => {
          context.commit('setClubProfile', { clubProfile: res.data })
        })
        .catch(err => console.log(err))
    },
    inputAreaID (context, payload) {
      context.commit('setAreaID', payload)
      router.push({ name: 'Clubs' })
    }
  }
})

export default store
