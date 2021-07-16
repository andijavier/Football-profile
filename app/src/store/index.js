import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../api/axios'
import router from '../router'
import Swal from 'sweetalert2'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    areas: [],
    clubs: [],
    clubProfile: {},
    competitionID: {
      id: 0,
      areaName: ''
    },
    personelDetail: {}
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
    setCompetitionID (state, payload) {
      state.competitionID = payload.competitionID
    },
    setPersonelDetail (state, payload) {
      state.personel = payload.personel
    }
  },
  actions: {
    getAreas (context) {
      const areas = []
      axios({
        method: 'GET',
        url: '/competitions?plan=TIER_ONE',
        headers: {
          'X-Auth-Token': '6ea42207124e443e9dadda879c2bee5f'
        }
      })
        .then(({ data }) => {
          const competition = data.competitions
          let isCopy = false
          for (let i = 0; i < competition.length; i++) {
            isCopy = false
            if (areas.length) {
              for (let j = 0; j < areas.length; j++) {
                if (areas[j].area.id === competition[i].area.id) {
                  isCopy = true
                }
              }
              if (!isCopy) {
                areas.push({ area: competition[i].area, id: competition[i].id })
              }
            } else {
              areas.push({ area: competition[i].area, id: competition[i].id })
            }
          }
          context.commit('setAreas', { areas })
        })
        .catch(err => console.log(err))
    },
    getClubs (context) {
      const competitionID = this.state.competitionID
      axios({
        method: 'GET',
        url: `/competitions/${competitionID.id}/teams`,
        headers: {
          'X-Auth-Token': '6ea42207124e443e9dadda879c2bee5f'
        }
      })
        .then(({ data }) => {
          context.commit('setClubs', { clubs: data.teams })
        })
        .catch(err => {
          Swal.fire({
            title: 'Error!',
            text: err.message,
            icon: 'error',
            confirmButtonText: 'Cool'
          })
        })
    },
    getClubProfile (context, payload) {
      axios({
        method: 'GET',
        url: '/teams/' + payload.clubID,
        headers: {
          'X-Auth-Token': '6ea42207124e443e9dadda879c2bee5f'
        }
      })
        .then(res => {
          context.commit('setClubProfile', { clubProfile: res.data })
          router.push({ name: 'ClubProfile' })
        })
        .catch(err => {
          Swal.fire({
            title: 'Error!',
            text: err.message === 'Network Error' ? 'Access Blocked! Please wait a minute' : err.message,
            icon: 'error',
            confirmButtonText: 'Cool'
          })
        })
    },
    getPersonelDetail (context, payload) {
      axios({
        method: 'GET',
        url: '/players/' + payload.personelID,
        headers: {
          'X-Auth-Token': '6ea42207124e443e9dadda879c2bee5f'
        }
      })
        .then(res => {
          console.log(res.data)
          context.commit('setPersonelDetail', { personel: res.data })
        })
        .catch(err => {
          Swal.fire({
            title: 'Error!',
            text: err.message === 'Network Error' ? 'Access Blocked! Please wait a minute' : err.message,
            icon: 'error',
            confirmButtonText: 'Cool'
          })
        })
    },
    inputCompetitionID (context, payload) {
      context.commit('setCompetitionID', payload)
      router.push({ name: 'Clubs' })
    },
    goBack () {
      router.back()
    }
  }
})

export default store
