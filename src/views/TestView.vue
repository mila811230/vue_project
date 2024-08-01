
<template>
  <div class="">
    <h4> ---------------------------------- v-for----------------------------------</h4>
    <table>
        <thead>
            <th>제품명</th>
            <th>가격</th>
            <th>품목</th>
            <th>배송료</th>
        </thead>
        <tbody>
            <tr v-for = "(item, index) in goods" v-bind:key = "index">
                <td>{{item.name}}</td>
                <td>{{item.price}}</td>
                <td>{{item.category}}</td>
                <td>{{item.delivery}}</td>
            </tr>
        </tbody>
    </table>

    <br>
    <h4> ---------------------------v-if, v-else, v-else if-----------------------------</h4>
    <p v-if = "true">호랑이</p>    
    <p v-if = "false">사자</p>    

    <br>

    <div>
        <label for=""> 국어 : <input type="number" v-model = "kor"></label><br>
        <label for=""> 영어 : <input type="number" v-model = "eng"></label><br>
        <label for=""> 수학 : <input type="number" v-model = "math"></label><br>
        <br>
            <p v-if = "average >= 90">A학점({{ average }})</p>
            <p v-else-if = "average >= 80">B학점({{ average }})</p>
            <p v-else-if = "average >= 70">C학점({{ average }})</p>
            <p v-else-if = "average >= 60">D학점({{ average }})</p>
            <p v-else>F학점({{ average }})</p><br>
    </div>

    <h4>---------------------------이벤트 v-on // @------------------------------</h4>
    <br>

    <div>
        <button v-on:click = "showScore">평균 계산</button>
    </div>
   
    <br><br><br>
 
    <div>
        <label><input type="number">단</label>
        <button v-on:click = "resultArray">계산</button>
        <p>{{dan}}</p>
        <p v-for = "(result, index) in resultArray" :key = "index">{{ result }}</p>
    </div>

  
    <!-- <div>
      <h3>구구단 계산기</h3>
      <label fo r= "dan">구구단의 단을 입력하세요 (1-9): </label>
      <input type = "number" v-model = "dan" id = "dan" min = "1" max = "9" />
      
      <button @click = "generateGugudan">구구단 보기</button>
      
      <div v-if = "gugudan.length">
        <h2>{{ dan }} 단</h2>
        <ul>
          <li v-for = "(value, index) in gugudan" :key = "index">
            {{ dan }} x {{ index + 1 }} = {{ value }}
          </li>
        </ul>
      </div>
    </div> -->

    
    <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
    
  </div>
</template>

<script>
export default {
  name: 'TestView',
 
  data() {
    return {
      goods: [
        {"name": "마우스", "price": 10000, "category": "PC용품", "delivery": 3000},
        {"name": "키보드", "price": 20000, "category": "PC용품", "delivery": 2000},
        {"name": "모니터", "price": 800000, "category": "PC용품", "delivery": 30000},
      ],
      score: 0,
      kor: 0,
      eng: 0,
      math: 0,
      average: 0,
      dan: 1,
      // gugudan: [],
      resultArray: [],
      
    }
  },
  
  methods: {
    showMessage(){
        alert('메세지 발생')
    },
    showScore(){
        this.average = (this.kor + this.eng + this.math) / 3
    },
    // generateGugudan() {
    //   this.gugudan = []; // 이전 구구단 결과 초기화
    //   for (let i = 1; i <= 9; i++) {
    //     this.gugudan.push(this.dan * i)
    //   }
    // },
    gugudan(){
      this.resultArray = []
      for (let n = 2; n < 10; n++){
          this. resultArray.push(`${this.dan} * ${n} = ${this.dan * n}`)
      }
    }
  }
}

</script>

<style scoped>

    table{
        width: 100%;
        border-collapse: collapse;
    }
    td, th{
        border: 1px solid gray;

    }
    div> ul> li{
      list-style: none;

    }
</style>


