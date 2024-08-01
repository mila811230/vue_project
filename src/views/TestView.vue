<template>
  <div class="test">
    <input type="text" value= "333"><br>
    <!-- <input type="text" v-bind = "nick"><br> -->
    <input type="text" v-model = "nick"><br>
    <input type="number" v-model = "age"><br>
    <textarea cols="30" rows="10">동해물과 백두산이</textarea><br>
    <textarea v-model = "message" id="" cols="30" rows="10"></textarea><br>
    <select name="" id="">
        <option value="01">서울</option>
        <option value="02" selected>부산</option>
        <option value="03">대구</option>
        <option value="04">수원</option>
    </select>
    <br>
    <select v-model = "city">
        <option value="01">서울</option>
        <option value="02">부산</option>
        <option value="03">대구</option>
        <option value="04">수원</option>
    </select>
    
  </div>
</template>

<script>
export default {
  name: 'TestView',
  components: {
    
  },
  data() {
    return {
      nick: '노래하는 해달',
      age: 30,
      message: '깊은 산속 옹달샘 누가와서 먹나요?',
      city: '03',
    }
  },
  
  methods: {
    
  }
}
</script>

<style scoped>

</style>