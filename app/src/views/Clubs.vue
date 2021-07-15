<template>
  <div class="container p-5 row justify-content-between">
    <div class="col-4">
      <h2>Clubs</h2>
    </div>
    <div class="list col-8">
      <ol class="list-group btn list-group-numbered">
        <li class="list-group-item d-flex justify-content-between align-items-center"
          v-for="(club) in clubs" :key="club.id"
          @click="goToClubs(club.id)">
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
      const allClubs = this.$store.state.clubs
      const areaID = this.$store.state.areaID
      const clubs = []
      console.log(areaID)
      allClubs.forEach(club => {
        if (club.area.id === areaID) {
          clubs.push(club)
        }
      })
      return clubs
    }
  },
  created () {
    this.$store.dispatch('getClubs')
  }
}
</script>

<style>

</style>
