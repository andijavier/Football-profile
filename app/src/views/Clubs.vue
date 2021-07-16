<template>
  <div class="container p-5 row justify-content-between">
    <div class="col-md-4 col-sm-12">
      <h2>Clubs</h2>
      <h3>{{clubs.areaName}}</h3>
      <div class="btn my-3">
        <button class="btn" @click="goBack">
          <i class="fas fa-angle-double-left"></i>
          Back
        </button>
      </div>
    </div>
    <div class="list col-md-8 col-sm-12">
      <ol class="list-group btn list-group-numbered">
        <li class="list-group-item d-flex justify-content-between align-items-center"
          v-for="(club) in clubs.data" :key="club.id"
          @click="goToClubProfile(club.id)">
          <div class="ms-2 me-auto">
            <div class="fw-bold">{{club.name}}</div>
            {{club.shortName}}
          </div>
        </li>
      </ol>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Clubs',
  computed: {
    clubs () {
      const clubs = {
        data: this.$store.state.clubs,
        areaName: this.$store.state.competitionID.areaName
      }
      return clubs
    }
  },
  created () {
    this.$store.dispatch('getClubs')
  },
  methods: {
    goToClubProfile (id) {
      this.$store.dispatch('getClubProfile', { clubID: id })
    },
    goBack () {
      this.$store.dispatch('goBack')
    }
  }
}
</script>

<style>

</style>
