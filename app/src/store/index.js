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
    competitionID: {
      id: 0,
      areaName: ''
    },
    // personel: [],
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
    }
    // setPersonel (state, payload) {
    //   state.personel = payload.personel
    // }
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
          console.log(data.teams)
          context.commit('setClubs', { clubs: data.teams })
        })
        .catch(err => console.log(err))
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
          // console.log(res.data)
          router.push({ name: 'ClubProfile' })
        })
        .catch(err => console.log(err))
    },
    inputCompetitionID (context, payload) {
      context.commit('setCompetitionID', payload)
      router.push({ name: 'Clubs' })
    },
    // getPersonel (context, payload) {
    //   context.commit('setPersonel', payload)
    // },
    goBack () {
      router.back()
    }
  }
})

export default store
