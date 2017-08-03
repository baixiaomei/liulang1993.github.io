<template>
  <div>
    <div class="app-header">
      <div class="header-main">
        <div class="logo">LEARNER</div>
        <ul class="nav">
          <li><a href="http://www.baidu.com">HOME</a></li>
          <li><a href="http://www.baidu.com">PROJECT</a></li>
          <li><a href="http://www.baidu.com">ABOUT</a></li>
          <li><a href="http://www.baidu.com">BLOG</a></li>
          <li><a href="http://www.baidu.com">CONTACT</a></li>
        </ul>
      </div>
    </div>
    <div class="app-container">
      <slideshow></slideshow>
      <todo></todo>
    </div>
    <div class="app-footer">Copyright © 优站精选 | 京ICP备11008151号</div>
  </div>
</template>

<script>
import slideshow from './components/slideshow'
import todo from './components/todo'
export default {
  components: {
    slideshow,
    todo
  }
}
</script>

<style scoped lang="less">
  *{
    margin: 0;
    padding: 0;
  }
  .app-header{
    width: 100%;
    height: 100px;
    color: #fff;
    background: #252525;
  }
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
    margin-left: 15%;
    float: left;
    list-style: none;
    display: inline-block;
    transition:0.6s;
    li{
      text-align: center;
      line-height: 100px;
      a{
        display: block;
        float: left;
        width: 16%;
        padding: 0 2%;
        text-decoration: none;
        color: #fff;
        font-size: 14px;
        &:hover{
          background-color: #ff5454;
        }
      }
    }
  }
  .app-container{
    width: 100%;
    padding-top: 5%;
    background:#f5f7fa;
  }
  .app-footer{
    width: 100%;
    height: 100px;
    background: #252525;
    line-height: 100px;
    text-align: center;
    font-size: 12px;
    color: #fff;
  }
</style>
