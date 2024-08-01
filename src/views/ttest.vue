<template>
  <div class="">
   
    <div>
      <select name="" id="">
        <option value="서울">서울</option>
        <option value="부산">부산</option>
        <option value="대구">대구</option>
        <option value="수원">수원</option>
        <option value="광주" selected>광주</option>
        </select>
        
        <select v-model = "city" @change = "changeCity">
          <option value="서울">서울</option>
          <option value="부산">부산</option>
          <option value="대구">대구</option>
          <option value="수원">수원</option>
          <option value="광주">광주</option>
        </select>
        <p>{{ message }}</p>
      </div> 

      <br>

      <div>
        <p><label>이메일<input type="text" placeholder="이메일을 입력하세요."
          v-model = "emailValue" @input = "changeEmail"></label><span>{{ msgEmail }}</span></p>

        <p><label>비밀번호<input type="text" placeholder="비밀번호를 입력하세요."
          @input = "changePwd"></label><span>{{ msgPwd }}</span></p>

        <p><label>비밀번호 확인<input type="text" placeholder="비밀번호를 확인하세요."
          @input = "changePwd2"></label><span>{{ msgPwd2 }}</span></p>
      </div>
      
      

  </div>
</template>

<script>
export default {
  name: '',
 
  data() {
    return {
      city: '서울',
      message: '안녕 반가워!',
      emailValue: '',
      messageEmail: '이메일을 입력하세요',
    }
  },
  
  methods: {
    changeCity(){
      switch(this.city){
        case '서울' :
          this.message = '안녕 반가워!'
          break
        case '부산' :
          this.message = '안녕! 반갑데이'
          break
        case '대전' :
          this.message = '안녕 반가워!'
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
    changeEmail() {
      // this.emailValue 이메일 형식에 맞는지 체크
      const emailExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/ 
      // 위에 이메일 형식 : 문자열 + @ + 문자열 + . + 문자열
      if (this.emailValue.length == 0) {
        this.messageEmail = '이메일을 입력하세요.'
      } else if (emailExp.test(this.emailValue) == true) {
        this.msgEmail = '정상적인 이메일 주소입니다.'
      } else {
        this.msgEmail = '정상적인 이메일 주소가 아닙니다.'
      }
    }
  }
}
</script>

<style scoped>

</style>