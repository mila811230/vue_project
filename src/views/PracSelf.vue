<template>
  <div class="pracSelf">
    <input type="text" value= "333"><br>
    <!-- <input type="text" v-bind = "nick"><br> -->
    <input type="text" v-model = "nick"><br>
    <input type="number" v-model = "age"><br>
    <textarea cols="30" rows="10">동해물과 백두산이</textarea><br>
    <textarea v-model = "mmessage" id="" cols="30" rows="10"></textarea><br>
    <br>
    <select name="" id="">
        <option value="01">서울</option>
        <option value="02" selected>부산</option>
        <option value="03">대구</option>
        <option value="04">수원</option>
    </select>
    <br>
    <select v-model = "inCity">
        <option value="01">서울</option>
        <option value="02">부산</option>
        <option value="03">대구</option>
        <option value="04">수원</option>
    </select>

    <br>

        <input type="checkbox" id = "cbtn_agree" name = "cbtn_agree">
        <label for="cbtn_agree">동의</label><br>

        <label><input type="checkbox" v-model = "agree">동의</label><br>
        <label><input type="checkbox" v-model = "agree2"
            true-value = "동의" false-value = "비동의">{{agree2}}</label><br>
        
        <div>
        <p>기본 피자에 원하시는 토핑을 추가하세요.</p>
            <label><input type="checkbox" v-model = "pizza" value = "치즈">치즈</label><br>
            <label><input type="checkbox" v-model = "pizza" value = "파인애플">파인애플</label><br>
            <label><input type="checkbox" v-model = "pizza" value = "버섯">버섯</label><br>
        <p>당신이 추가하신 토핑은 {{pizza}}입니다</p>
        </div>

        <br>

        <div>
            <p>당신의 탕수육 취향은?</p>
            <label><input type ="radio" v-model = "sweet_sour_pork" value = "부먹">부먹</label>
            <label><input type ="radio" v-model = "sweet_sour_pork" value = "찍먹">찍먹</label>
            <!-- <label><input type ="radio" v-model = "sweet_sour_pork" value = "찍먹">처먹</label> -->
            <p>당신은 <span style="color:red; font-weight: 800;">{{ sweet_sour_pork }}파 입니다.</span></p>
        </div>
        <br>
    <h3>--------------------------------속성연결-------------------------------- </h3>
    <div>
      <img src='https://borgssam.github.io/MySite/img/album_01.jpg' title ="가방을 든 사나이"><br>
      <img v-bind:src="imgSrc" alt="" v-bind:title = "imgTitle"><br>
    </div>
    <br>
        <button :disabled = "btn_01" :style = "color_blue">버튼</button>
        <button :disabled = "btn_02" :style = "color_red">버튼</button>

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
 
    <h4>---------------------------구구단------------------------------</h4>

    <div>
        <label><input type="number" v-model = "ndan">단</label>
        <button v-on:click = "calculate_dan">계산</button>
        <p>{{ndan}}</p>
        <p v-for = "(result, index) in googodan" :key = "index">{{ result }}</p>
    </div>

  <br><br><br>

    <div>
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
    </div>
<br><br><br><br>
    <div>
      <select name="" id="">
        <option value="서울">서울</option>
        <option value="부산">부산</option>
        <option value="대구">대구</option>
        <option value="수원">수원</option>
        <option value="광주" selected>광주</option>
        </select>
        <br>
        <select v-model = "city" @change = "changeCity">
          <option value="서울">서울</option>
          <option value="부산">부산</option>
          <option value="원주">원주</option>
          <option value="수원">수원</option>
          <option value="광주">광주</option>
        </select>
        <p>{{ message }}</p>
      </div> 

      <br>

      <div>
        <p><label>이메일<input type="text" placeholder="이메일을 입력하세요."
          v-model = "emailValue" @input = "changeEmail"></label><span>{{ msgEmail }}</span></p>


      <!-- 8자 이상 숫자 문자 조합 @#제외 비밀번호와 비밀번호 확인 이 일치 -->
        <p><label>비밀번호<input type="text" 
          v-model = "pwd1" 
          @input = "changePwd" placeholder = "비밀번호를 입력하세요."></label>
          <span>{{ msgPwd1 }}</span></p>

        <p><label>비밀번호 확인<input type="text" 
          v-model = "pwd2" 
          @input = "changePwd2" placeholder = "비밀번호를 확인하세요."></label>
          <span>{{ msgPwd2 }}</span></p>
      </div>

      <br>

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




  <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
  </div>
</template>

<script>
export default {
  name: 'PracSelf',
  components: {
    
  },
  data() {
    return {
      nick: '노래하는 해달',
      age: 30,
      mmessage: '깊은 산속 옹달샘 누가와서 먹나요?',
      inCity: '03',
      agree: false,
        agree2: '비동의',
        pizza: [],
        sweet_sour_pork: '찍먹',
        imgSrc: 'https://borgssam.github.io/MySite/img/album_01.jpg',
        imgTitle: '가방을 든 사나이',
        btn_01: true,
        btn_02: false,
        color_blue: {color: 'blue', fontSize: '24px'},
        color_red: {color: 'red', fontSize: '24px'},
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
      ndan: 1,
      gugudan: [],
      googodan: [],
      city: '서울',
      message: '안녕 반가워!',
      emailValue: '',
      msgEmail: '이메일을 입력하세요',
      pwd1: '',
      pwd2: '',
      msgPwd1: '비밀번호를 입력하세요',
      msgPwd2: '비밀번호를 한번 더 입력하세요',

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
    showMessage(){
        alert('메세지 발생')
    },
    showScore(){
      this.average = (this.kor + this.eng + this.math) / 3
    },

    generateGugudan() {
      this.gugudan = []; // 이전 구구단 결과 초기화
      for (let i = 1; i <= 9; i++) {
        this.gugudan.push(this.dan * i)
      }
    },

    calculate_dan(){
      this.googodan = []
      for (let n = 2; n < 10; n++){
          this.googodan.push(`${this.ndan} * ${n} = ${this.ndan * n}`)
      }
    },

    checkPwd (pwd) {
      let msg = ''
    //  문자열 길이
      const len = this.pwd.length
    //  문자 포함
      const hasWord = /[a-zA-Z]/.test(pwd)
    //  숫자포함
    const hasNum = /[\d]/.test(pwd)
    //  금지어포함여부
    const hasForbid = /[@#]/.test(pwd)
    if (len < 8) {
      msg = "비밀번호는 8자리 이상이어야 합니다."
    } else if (!hasWord) {
      msg = "비밀번호에는 문자가 포함되어야 합니다."
    } else if (!hasNum) {
      msg = "비밀번호에는 숫자가 포함되어야 합니다."
    } else if (hasForbid) {
      msg = "@, #은 금지 단어입니다."
    } else {
      msg = ""
    }
    return msg
  },
     
  changePwd () {
    let msg = this.checkPwd(this.pwd1)
    if (msg === '') {
      msg = '비밀번호가 유효합니다'
    }
    this.msgPwd1 = msg
  },
  changePwd2() {
    let msg = this.checkPwd(this.pwd2)
    if (msg === '') {
      if (this.pwd1 === this.pwd2) {
        msg = '비밀번호가 일치합니다.'
      } else {
        msg = '비밀번호가 일치하지 않습니다.'
      }
      this.msgPwd2 = msg
      }
    },

  changeEmail() {
    // this.emailValue 이메일 형식에 맞는지 체크
    const emailExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/ 
    // 위에 이메일 형식 : 문자열 + @ + 문자열 + . + 문자열
    if (this.emailValue.length == 0) {
      this.msgEmail = '이메일을 입력하세요.'
    } else if (emailExp.test(this.emailValue) == true) {
      this.msgEmail = '정상적인 이메일 주소입니다.'
    } else {
      this.msgEmail = '정상적인 이메일 주소가 아닙니다.'
    }
  },

  changeCity(){
    switch(this.city){
      case '서울' :
        this.message = '안녕 반가워!'
        break
      case '부산' :
        this.message = '안녕! 반갑데이'
        break
      case '원주' :
        this.message = '안녕 반갑드래요!'
        break
      case '수원' :
        this.message = '안녕 반가워유!'
        break
      case '광주' :
        this.message = '안녕 반가버부렁!'
        break
      default :
      this.message = 'hello nice to meet to you'
        break
    }
  },

  makeFullName1 () {
    this.fullName1 = this.familyName1 + '-' + this.name1
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