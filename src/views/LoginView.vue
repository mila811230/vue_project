<template>
  <div class="subsub">
    <form action="">
      <div>
        <h2>{{title}}</h2>
        <p>{{userName}}</p>
        <input type="text" name="" class="boxx" v-model ="name" />
      </div>

      <div>
        <p>이메일</p>
        <input type="text" name="" class="boxx" v-model ="email">
      </div>
<br>
      <div>
        <label for="password">비밀번호</label><br>
        <input type="password" name="" class="boxx" v-model ="password1">
      </div>
<br>
      <div>
        <label for="password">비밀번호 확인</label><br>
        <input type="password" name="" class="boxx" v-model ="password2">
      </div>
   <br>  
      <div>
        <p>성별</p>
        <label for=""><input type="radio" value="male" v-model="gender" required>남</label>
        <label for=""><input type="radio" value="female" v-model="gender" >여</label>
      </div>
<br>
      <div>
        <p>좋아하는 음식</p>
        <select name="food" v-model = "food">
          <option value="01">한식</option>
          <option value="02" selected>이탈리안</option>
          <option value="03">중식</option>
          <option value="04">일식</option>
          <option value="05">집밥</option>
        </select>
      </div>
  <br>
      <div>
        <label><input type="checkbox" v-model="privacy" required>{{cbox}}</label>
      </div>
  <br>
      <div class= "bigBtn">
        <button class = "btn">가입하기</button>
      </div>
</form>

  </div>
  
</template>

<script>
export default {
  name: 'LoginView',
  components: {
    
  },
  data() {
    return {
      title: '회원가입',
      userName: '사용자 이름' ,
      name: '루피' ,
      email: 'abcde@gmail.com' ,
      password1: '12345' ,
      password2: '12345' ,
      gender: '' ,
      food: '01' ,
      cbox: '정보 공개 동의' ,
            
    };
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
    
  }
};
</script>

<style scoped>
.subsub{
  background-color: rgb(231, 242, 253);
  width: 320px;
  margin: 0 auto;
  margin-top: 50px;
  text-align: left;
  padding: 30px;
  border: 1px solid 32325d40;
  border-radius: 20px;
  font-weight: bold;
  line-height: 100%;
  box-shadow: 0 13px 27px -5px #32325d40, 
              0 8px 16px -8px #0000004d, 
              0 -6px 16px -6px #00000040;

}
.boxx{
  width: 100%;
  height: 25px;
  border-radius: 5px;
}
.bigBtn{
  justify-content: center;
}

.btn{
  border-radius: 5px;
  width: 100px;
  height: 30px;
  font-size: 15px;
  background-color: rgb(58, 55, 255);
  border: 2px solid rgb(58, 55, 255);
  color: white;
  align-items: center;
}

</style>