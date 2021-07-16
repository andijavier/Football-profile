<template>
  <div class="modal fade" id="PersonelList" tabindex="-1" role="dialog" aria-labelledby="PersonalList" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLongTitle">{{clubName}}</h5>
          <h5 class="modal-title" id="exampleModalShortTitle">List Personel</h5>
        </div>
        <div class="list modal-body">
          <ol v-if="personelList.length > 0" class="list-group btn list-group-numbered">
            <li class="list-group-item d-flex justify-content-between align-items-center"
              v-for="(personel) in personelList" :key="personel.id"
              @click="goToPersonelProfile(personel.id)">
              <div class="ms-2 me-auto">
                <div class="fw-bold">{{personel.name}}</div>
                {{personel.position}}
              </div>
            </li>
          </ol>
          <h5 v-else>Sorry we do not have this data for now</h5>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PersonelList',
  props: ['personelList', 'clubName'],
  // computed: {
  //   personelList () {
  //     return this.$store.state.personel
  //   }
  // },
  methods: {}
}
</script>

<style>
.modal-content {
  max-height: 90vh;
}
</style>
