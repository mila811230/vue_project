
<template>
  <br><br><br><br><br><br><br>
  <div class="">

    <div>
      <label>성 : <input type="text" v-model = "familyName1" @input = "makeFullName1"></label>
      <label>이름 : <input type="text" v-model = "name1"  @input = "makeFullName1"></label>
      <p>성명(method) : {{ fullName1 }}</p>
    </div>

    <br><br>

    <div>
      <label>성 : <input type="text" v-model = "familyName2"></label>
      <label>이름 : <input type="text" v-model = "name2"></label>
      <p>성명(computed) : {{ makeFullName2 }}</p>
    </div>

    <br><br>

    <div>
      <label>성 : <input type="text" v-model = "familyName3"></label>
      <label>이름 : <input type="text" v-model = "name3"></label>
      <p>성명(watch) : {{ fullName3 }}</p>
    </div>


  </div>
</template>

<script>
export default {
  name: 'TestView',
  components: {
    
  },
  data() {
    return {
      familyName1: '',
      name1: '',
      fullName1: '',
      familyName2: '',
      name2: '',
      familyName3: '',
      name3: '',
      fullName3: '',
   
    }
  },
  watch: {
    familyName3 () {
      this.fullName3 = this.familyName3 + ' - ' + this.name3
    },
    name3 () {
      this.fullName3 = this.familyName3 + '-' + this.name3
    }
  },
  computed: {
    makeFullName2 () {
      return this.familyName2 + '-' + this.name2
    }
  },
  methods: {
    makeFullName1 () {
      this.fullName1 = this.familyName1 + '-' + this.name1
    }
  }
}
</script>

<style scoped>

</style>