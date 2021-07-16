<template>
  <div class="container p-5 row justify-content-between">
    <div class="col-md-4 col-sm-12">
      <h2>Club Profile</h2>
      <h3>{{clubs.areaName}}</h3>
      <div class="btn my-3">
        <button class="btn col-12" @click="goBack">
          <i class="fas fa-angle-double-left"></i>
          Back
        </button>
        <button class="btn col-12"
          data-bs-toggle="modal"
          data-bs-target="#PersonelList"
          ><i class="far fa-eye"></i>
          See Personel
        </button>
      </div>
    </div>
    <div class="col-md-8 col-sm-12">
      <img
        class="mb-2 picture"
        :src="clubProfile.crestUrl"
        alt="clubProfile.crestUrl"/>
      <h4>{{clubProfile.name}} ({{clubProfile.shortName}})</h4>
      <h6>Since {{clubProfile.founded}}</h6>
      <h6>Club Colors: {{clubProfile.clubColors}}</h6>
      <h6>Stadium: {{clubProfile.venue}}</h6>
      <h6>Website: <a :href="clubProfile.website" target="_blank">{{clubProfile.website}}</a></h6>
      <h6>Email: {{clubProfile.email}}</h6>
      <h6>Phone: {{clubProfile.phone}}</h6>
      <h6>Address: {{clubProfile.address}}</h6>
    </div>
    <PersonelList
      :personelList="clubProfile.squad"
      :clubName="clubProfile.name"/>
  </div>
</template>

<script>
import PersonelList from '../components/PersonelList.vue'

export default {
  name: 'ClubProfile',
  components: {
    PersonelList
  },
  computed: {
    clubProfile () {
      return this.$store.state.clubProfile
    },
    clubs () {
      const clubs = {
        data: this.$store.state.clubs,
        areaName: this.$store.state.competitionID.areaName
      }
      return clubs
    }
  },
  methods: {
    goBack () {
      this.$store.dispatch('goBack')
    }
  }
}
</script>

<style>
.picture {
  max-height: 25vh;
}
</style>
