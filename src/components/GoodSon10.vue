<template>
  <div class="son">
    <!-- 내용을 추가하세요 -->
     <p>큰아들 : {{ message }} {{ msg }}</p>
     <Cute-Gson-11 ref = "gson11"/>
     <Cute-Gson-12 ref = "gson12" @event_report = "receiveEvent"/>
     <input type="text" v-model = "sendMessage"><br>
     <button @click = "clickSon10">큰아들버튼</button><br>
     <button @click = "clickSon20">큰아들버튼2</button><br>
     <button @click = "clickSon30">큰아들버튼3</button>
     {{ gpapaMin }}
  </div>
</template>

<script>
import CuteGson11 from './CuteGson11.vue';
import CuteGson12 from './CuteGson12.vue';
export default {
  name: 'GoodSon10',
  components: {
    // 추가적으로 사용할 컴포넌트들을 등록합니다.
    CuteGson11, 
    CuteGson12
  },
  props: {
    // 문자열 타입의 prop 예시
    //sampleString: {
    //  type: String,
    //  default: ''
    //},
    // 숫자 타입의 prop 예시
    //sampleNumber: {
    //  type: Number,
    //  default: 0
    //},
    // 배열 타입의 prop 예시
    //sampleArray: {
    //  type: Array,
    //  default: () => []
    //},
    // 객체 타입의 prop 예시
    //sampleObject: {
    //  type: Object,
    //  default: () => ({})
    //}
  },
  data() {
    return {
      // 컴포넌트의 데이터를 초기화합니다.
      message: '',
      sendMessage: '',
    }
  },
  inject: ['gpapaMin'],
  watch: {
    // 데이터를 감시하고 처리할 로직을 작성합니다.
    // sample1() {a
    //   console.log('')
    // }
  },
  computed: {
    // 필요한 계산된 속성을 정의합니다.
    // msg() {
    //   this.message = this.$refs.gson11.gsonMsg +'!!'
    //   return ''
    // }
  },
  methods: {
    // 컴포넌트에서 사용할 메서드를 정의합니다.
    clickSon10() {
      this.message = '큰아들이 버튼을 눌렀습니다.'
      this.$refs.gson11.clickMsg()

    },
    clickSon20() {
      this.message = '큰아들2가 버튼을 눌렀습니다.'
      this.$refs.gson12.clickMsg('큰아버지가 둘째아들을 불러봄')

    },
    clickSon30() {
      this.message = '큰아들3이 버튼을 눌렀쪄.'
      this.$refs.gson11.message = this.sendMessage
      this.$refs.gson12.message = this.sendMessage
    },
    changeTextColor (idx, data) {
      //  alert('goodson2=>' + idx + ',' + data)
      this.$refs.gson11.changeTextColor(idx, data)
      this.$refs.gson12.changeTextColor(idx, data)
      // alert('goodson2=>' + idx + ',' + data)
    },
    receiveEvent (data) {
      // alert(data)
      this.message = data
    }

  },
  setup() {
    // Vue 3 Composition API의 setup 함수에서 추가적인 로직을 처리할 수 있습니다.
  },
  created() {
    // 컴포넌트가 생성될 때 실행될 로직을 작성합니다.
  },
  mounted() {
    // 컴포넌트가 DOM에 마운트된 직후 실행될 로직을 작성합니다.
  },
  unmounted() {
    // 컴포넌트가 파괴되기 전 실행될 로직을 작성합니다.
  }
}
</script>

<style scoped>
/* 스타일을 추가하세요 */
.son{
  background-color: rgb(178, 255, 229);
  padding: 20px;
  margin: 20px;
}
.gson{
  background-color: rgb(250, 212, 218);

}
</style>