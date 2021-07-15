<template>
  <div class="container p-5 row justify-content-between">
    <div class="col-md-4 col-sm-12">
      <h2>Areas</h2>
    </div>
    <div class="list col-md-8 col-sm-12">
      <ol class="list-group btn list-group-numbered">
        <li class="list-group-item d-flex justify-content-between align-items-center"
          v-for="(area) in areas" :key="area.area.id"
          @click="goToClubs(area.id, area.area.name)">
          <div class="ms-2 me-auto">
            <div class="fw-bold">{{area.area.countryCode}}</div>
            {{area.area.name}}
          </div>
        </li>
      </ol>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Area',
  computed: {
    areas () {
      return this.$store.state.areas
    }
  },
  created () {
    this.$store.dispatch('getAreas')
  },
  methods: {
    goToClubs (competitionID, areaName) {
      this.$store.dispatch('inputCompetitionID', {
        competitionID: {
          id: competitionID,
          areaName
        }
      })
    }
  }
}
</script>

<style>
.list {
  max-height: 75vh;
  overflow: auto;
}
.btn :hover {
  background-color: greenyellow;
}
</style>
