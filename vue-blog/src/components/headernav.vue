<template>
  <div>
    <div class="header-main">
      <div class="logo">LEARNER</div>
      <ul class="nav" v-for="item in nav">
        <li>{{ item.title }}</li>
      </ul>
    </div>
  </div>
</template>
<script>
  export default{
    date(){
      return{
        nav:[
          {
            title:'asda'
          },
          {
            title:'asda'
          }
        ]
      }
    }
  }
</script>
<style scoped>
  .header-main{
    width: 80%;
    height: 100%;
    margin: 0 auto;
  }
  .logo{
    width: 15%;
    height: 100%;
    line-height: 100px;
    text-align: center;
    font-size: 35px;
    float: left;
  }
  .nav{
    width: 70%;
    height: 100%;
    line-height: 100px;
    background: pink;
    margin-left: 15%;
    float: left;
    display: inline-block;
    li{
      color: red;
    }
  }
</style>
