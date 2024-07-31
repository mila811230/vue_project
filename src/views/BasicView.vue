<template>
<h3>-----------------------------value 값 연결-----------------------------</h3>
  <div class="basic">
    <h1>hello, {{title}}</h1>
    <h3>{{title}}는 수원시 장안구 영화동에 있습니다</h3>
    <p>{{message}}</p>
    <p v-html ='message'></p>
    
  </div>
  <div>
  <input type="text" v-model ="nickname" />
  </div>
  <div>
  <input type="number" v-model.number ="age" />
  </div>
  <div>
    <textarea v-model = "message" id="" cols="30" rows="10"></textarea>
  </div>
  <div>
    <select name="city" v-model = "city">
      <option value="01">서울</option>
      <option value="02" selected>부산</option>
      <option value="03">대구</option>
      <option value="04">수원</option>
    </select>
  </div>
  <br/>
  <div>
    <label><input type="checkbox" v-model = "cbox">{{cbox}}</label>
    <br/>
    <br/>
    <label><input type="checkbox" v-model = "cbox2" true-value = "동의"
    false-value = "비동의">{{cbox2}}</label>
  </div>
  <div>
    <p>좋아하는 음식은?</p>
    <label><input type="checkbox" v-model = "goodfood" value = "케익">케익</label>
    <label><input type="checkbox" v-model = "goodfood" value = "빵">빵</label>
    <label><input type="checkbox" v-model = "goodfood" value = "떡">떡</label>

    <p>당신이 좋아하는 음식은 {{goodfood}}  입니다</p>

    <p>싫어하는 음식은?</p>
    <label><input type="checkbox" v-model = "badfood" value = "마라탕">마라탕</label>
    <label><input type="checkbox" v-model = "badfood" value = "닭백숙">닭백숙</label>
    <label><input type="checkbox" v-model = "badfood" value = "홍어삼합">홍어삼합</label>

    <p>당신이 싫어하는 음식은 {{badfood}} 입니다</p>
  </div>
  <div>
    <p>당신의 성별은?</p>
    <label for=""><input type="radio" v-model = "gender" value = "남">남</label>
    <label for=""><input type="radio" v-model = "gender" value = "여">여</label>
    <p>당신은 {{gender}}자 입니다</p>
  </div>
  <h3>-----------------------------속성 연결-----------------------------</h3>
  <div>
    <img v-bind:src="imgSrc" alt="" v-bind:title = "툴팁메세지">
  </div>
  <div>
    <button v-bind:disabled = "show1">눌러주세요</button>
    <button v-bind:disabled = "show2">눌러주세요</button>
  </div>
  <div>
    <button v-bind:style = "btn1">눌러주세요</button>
    <button v-bind:style = "btn2">눌러주세요</button>
  </div>
  <h3>-----------------------------제어문(v-for, v-if, v-else)-----------------------------</h3>
  <div>
    <table >
      <thead>
        <tr>
          <th>제품명</th>
          <th>가격</th>
          <th>카테고리</th>
          <th>배송료</th>
        </tr>
      </thead>
      <tbody>
        <tr v-bind:key = "i" v-for = "(item, i) in products">
          <td>{{item.name}}</td>
          <td>{{item.price}}</td>
          <td>{{item.category}}</td>
          <td>{{item.delivery}}</td>
        </tr>
      </tbody>
    </table>
  </div>

  <div>
    <!-- v-if 요소를 만드느냐 마느냐 -->
    <p v-if = "true">if가 참일때</p>
    <p v-if = "false">if가 거짓일때</p>
    <!-- v-show 요소를 만들지만 diplay:none 로 요소는 있지만 보여지는 처리 -->
    <p v-show = "true">show가 참일때</p>
    <p v-show = "flase">show가 거짓일때</p>
  </div>

   <h3>-----------------------------이벤트(v-on / @)-----------------------------</h3>

  <div>
    <button v-on:click = "increaseCounter"> 클릭(증가)</button>
    <button @:click = "decreaseCounter"> 클릭(감소)</button>
    <p>counter : {{counter}}</p>
    <button @:click = "increaseCounter(), showMsg()"> 증가후 알림창</button>
    <button @:click = "decreaseCounter(), showMsg()"> 감소후 알림창</button>
    <br>
    <input type="number" v-model = "countValue">
    <button @:click = "applyCounter"> 적용</button>
  </div>

  <br><br>

  <div>
    <select v-model = "cityValue" @change = "changeCity" >
      <option value="서울">서울</option>
      <option value="부산">부산</option>
      <option value="대구">대구</option>
      <option value="수원">수원</option>
    </select>
  </div>

  <br><br>

  <div>
    <input type="text" v-model = "emailValue" @input = "changeEmail" placeholder = "이메일을 입력하세요.">
    <!-- <p>{{changeEmail}}/{{errEmail}}</p> -->
    <p v-if = "errEmail">{{errEmail}}</p>
  </div>

  <br><br>

  <div>
    <input type="text" v-model = "pwdValue1" @input = "changePwd1" placeholder = "비밀번호를 입력하세요."><br><br>
    <input type="text" v-model = "pwdValue2" @input = "changePwd2" placeholder = "비밀번호를 확인하세요."><br>
    <p v-if = "errPwd">{{errPwd}}</p>
  </div>

  <br>

   <h3>-----------------------------메소드 computed-----------------------------</h3>

  <div>
    <p>{{hello()}}</p>
    <p>{{hello()}}</p>
    <p>{{hello()}}</p>
    <p>{{hello2}}</p>
    <p>{{hello2}}</p>
    <p>{{hello2}}</p>
  </div>

<br>

<div>
  성 : <input type="text" v-model = "lastName" @input = "changeLastName"><br>
  성 : <input type="text" v-model = "firstName" @input = "changeFirstName"><br>
  <p>method : {{methodFullName()}}</p>
  <p>method : {{methodFullName()}}</p>

  <p>computed : {{computeFullName}}</p>
  <p>computed : {{computeFullName}}</p>

  <p>fullName : {{fullName}}</p>
  <p>fullName : {{fullName}}</p>
</div>

   <h3>-----------------------------watch-----------------------------</h3>
  <div>
    <h4>user_info : {{userInfo}}</h4>
    <input type="text" v-model = "userName">
    <input type="text" v-model = "userAge">
  </div>


  <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
</template>

<script>
export default {
  name: 'BasicView',
  components: {
    
  },
  data() {
    return {
      title: '연세IT',
      message: '<b>연세IT는</b> <b><span>5년</span></b> 우수 직업훈련학교입니다',
      nickname: '돌쇠',
      age: 22+4 ,
      city: '01' ,
      cbox: false ,
      cbox2: '동의' ,
      goodfood: [] ,
      badfood: [] ,
      gender: '남' ,
      imgSrc: "https://item.kakaocdn.net/do/009619490db024d6a8acf277cb93a6c58f324a0b9c48f77dbce3a43bd11ce785" ,
      tooltip: '툴팁메세지' ,
      show1: true ,
      show2: false ,
      btn1: {
        backgroundColor: 'skyblue',
        color: 'yellow',
        fontSize: '16px',
        borderRadius: '8px'

      } ,
      btn2: {
        backgroundColor: 'pink',
        color: 'green',
        fontSize: '16px',
        borderRadius: '8px'
      } ,
      products: [
        {"name" : "마우스1", "price" : "25000", "category" : "pc 용품1", "delivery" : "3000"},
        {"name" : "키보드", "price" : "35000", "category" : "pc 용품2", "delivery" : "3000"},
        {"name" : "무선 키보드", "price" : "45000", "category" : "pc 용품3", "delivery" : "3000"},
      ],
      counter: 0 ,
      countValue : 10 ,
      cityValue: '수원' ,
      emailValue: '' ,
      errEmail: '' ,
      pwdValue1: '' ,
      pwdValue2: '' ,
      errPwd: '비번을 입력하세요' ,
      lastName:'' ,
      firstName:'' ,
      fullName:'' ,
      userName:'왕왕왕' ,
      userAge: '17' ,
      userInfo: '' ,

    }
  },
  watch:{
    userName(){
      this.userInfo = this.userName + '(' + this.userAge + ')'
    },
    // userAge(){
    //   this.userInfo = this.userName + '(' + this.userAge + ')'
    // },
  },
  computed: {
    hello2() {
      console.log('hello2 호출');
      return '안녕하세요, 반가워요';
    },
    computeFullName() {
      console.log('computeFullName 호출');
      return this.lastName + this.firstName;
    }
  },
  setup() {
    
  },
  created() {
    
  },
  mounted() {
    
  },
  unmounted() {
    
  },
  
  methods: {
    increaseCounter(){
      this.counter = this.counter + 1
    },
    decreaseCounter(){
      this.counter = this.counter - 1
    },
    applyCounter(){
      this.counter = this.countValue
    },
    showMsg(){
      alert('현재값 =>' + this.counter)
    },
    changeCity(){
      alert('선택하신 도시 : ' + this.cityValue)
    },
    changeEmail(){
      console.log('sss')
      //이메일 정규 표현식
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      // this.errEmail = this.emailValue
      if(this.emailValue === '' || emailPattern.test(this.emailValue)){
        this.errEmail = ''
        console.log('ok' + this.emailValue)
      } else {
        this.errEmail = '이메일 형식에 어긋납니다'
        console.log('err' + this.emailValue)
      }
    },
    changePwd1(){
      if (this.pwdValue1 === ''){
        this.errPwd = '비번을 입력하세요.'
      } else if (this.pwdValue2 === ''){
        this.errPwd = '비밀번호를 확인하세요.'
      } else if (this.pwdValue1 === this.pwdValue2){
        this.errPwd = ''
      } else {
        this.errPwd = '비밀번호가 일치하지 않습니다.'
      }
    },
    changePwd2(){
      if (this.pwdValue1 === ''){
        this.errPwd = '비번을 입력하세요.'
      } else if (this.pwdValue2 === ''){
        this.errPwd = '비밀번호를 확인하세요.'
      } else if (this.pwdValue1 === this.pwdValue2){
        this.errPwd = ''
      } else {
        this.errPwd = '비밀번호가 일치하지 않습니다.'
      }
    },
    hello(){
      console.log('hello()호출');
      return '안녕하세요, 반갑습니다.';
    },
    changeLastName() {
      // lastName 변경 시 fullName 업데이트
      console.log('changeLastName 호출');
      this.fullName = this.lastName + this.firstName;
    },
    changeFirstName() {
      // firstName 변경 시 fullName 업데이트
      console.log('changeFirstName 호출');
      this.fullName = this.lastName + this.firstName;
    },
    methodFullName() {
      // 메소드로 fullName 계산
      console.log('methodFullName 호출');
      return this.lastName + this.firstName;
    },
  }
}
</script>

<style scoped>
table{
  border-collapse: collapse;
  width: 100%;

}
td, th{
  border: 1px solid #ddd;
  text-align: center;
  padding: 8px;
}
th{
  text-align: center;
  font-weight: 600;
}
</style>