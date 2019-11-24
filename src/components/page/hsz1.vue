<template>
  <div class="hsz">
    <div id="top">
      <div class="topt">
        <div class="time">{{date}}</div>
      </div>
      <div class="topb">
        <div class="logo"></div>
        <div class="search">
          
        </div>
      </div>
      
    </div>
    <div id="middle">
      <ul class="patients">
        <li v-for:="info in patientsinfo"><!-- !! -->
          <span>{{info.name}}</span>
          <span>{{info.sex}}</span>
          <span>{{info.age}}</span>
          <span>{{info.jibie}}</span>
          <span>{{info.house}}</span>
          <span>{{info.qingkuang}}</span>
          <span>{{info.caozuo}}</span>
        </li>
      </ul>
    </div>
    <div id="bottom">
      <ul>
        <li>特级护理</li>
        <li>一级护理</li>
        <li>二级护理</li>
        <li>普通护理</li>
      </ul>
    </div>
    Hellow!
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'hsz',
  data () {
    return {
      date:new Date(),
      patientsinfo:[],
    };
  },
  mounted() {
    let _this = this; // 声明一个变量指向Vue实例this，保证作用域一致
    this.timer = setInterval(() => {
      _this.date = new Date(); // 修改数据date
    }, 1000)
  },
  beforeDestroy() {
    if (this.timer) {
      clearInterval(this.timer); // 在Vue实例销毁前，清除我们的定时器
    }
  },
  created(){
      axios.get('')//!!
      .then(response=>{
         console.log(response);
         this.patientsinfo=response.data;
      })
      .catch(error=>{
          console.log(error);
          alert('网络错误，不能访问');
      })
  },
}
  
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
