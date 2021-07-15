<template>
  <div class="container p-5 row justify-content-between">
    <div class="col-4">
      <h2>Areas</h2>
    </div>
    <div class="list col-8">
      <ol class="list-group btn list-group-numbered">
        <li class="list-group-item d-flex justify-content-between align-items-center"
          v-for="(area) in areas" :key="area.id"
          @click="goToClubs(area.id)">
          <div class="ms-2 me-auto">
            <div class="fw-bold">{{area.countryCode}}</div>
            {{area.name}}
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
    goToClubs (areaID) {
      this.$store.dispatch('inputAreaID', { areaID })
    }
  }
}
</script>

<style>
.list {
  max-height: 70vh;
  overflow: auto;
}
.btn :hover {
  background-color: greenyellow;
}
</style>
