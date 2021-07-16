<template>
  <div>
    <div class="modal fade" id="PersonelList" tabindex="-1" role="dialog" aria-labelledby="PersonalList" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div v-if="this.personelDetail === null" class="modal-header">
            <h5 class="modal-title mx-2" id="exampleModalLongTitle">{{clubName}}</h5>
            <h5 class="modal-title" id="exampleModalShortTitle">List Personel</h5>
          </div>
          <div v-else class="modal-header">
            <h5 class="modal-title" id="exampleModalLongTitle">{{personelDetail.name}}</h5>
          </div>
          <div v-if="this.personelDetail === null" class="list modal-body">
            <ol v-if="personelList.length > 0" class="list-group btn list-group-numbered">
              <li class="list-group-item d-flex justify-content-between align-items-center"
                v-for="(personel) in personelList" :key="personel.id"
                @click="getPersonelDetail(personel)">
                  <div class="ms-2 me-auto">
                    <div class="fw-bold">{{personel.name}}</div>
                    {{personel.position}}
                  </div>
              </li>
            </ol>
            <h5 v-else>Sorry we do not have this data for now</h5>
          </div>
          <div v-else class="modal-body">
            <p>Position: {{personelDetail.position}}</p>
            <p>Birthdate: {{personelDetail.dateOfBirth.split("T")[0]}}</p>
            <p>Country Of Birth: {{personelDetail.countryOfBirth}}</p>
            <p>Nationality: {{personelDetail.nationality}}</p>
            <p>Role: {{personelDetail.role}}</p>
          </div>
          <div class="modal-footer">
            <button v-if="this.personelDetail === null" type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button v-else type="button" @click="goBack" class="btn btn-secondary">Back</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PersonelList',
  data () {
    return {
      personelDetail: null
    }
  },
  props: ['personelList', 'clubName'],
  methods: {
    getPersonelDetail (personel) {
      this.personelDetail = personel
    },
    goBack () {
      this.personelDetail = null
    }
  }
}
</script>

<style>
.modal-content {
  max-height: 90vh;
}
.modal-title {
  text-align: center;
  font-weight: bold;
}
.modal-header {
  justify-content: center;
}
</style>
