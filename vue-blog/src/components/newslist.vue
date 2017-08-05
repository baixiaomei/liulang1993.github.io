<template>
  <div>
    <div class="news">
      <div class="news-list"  v-for="item in newslist">
        <div class="news-img">
          <img src="" :style="bgimg(item.src)">
        </div>
        <div class="news-main">
          <h2>{{ item.title }}</h2>
          <p>{{ item.description }}</p>
          <button>READ MORE</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default{
    data(){
      return{
        newslist:[
          {
            title:'SED PORTA DOLOR',
            description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab dolorem, necessitatibus rem. Minus deleniti animi itaque culpa debitis.',
            src:'https://unsplash.it/227/200?image=4'
          },
          {
            title:'SED PORTA DOLOR',
            description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab dolorem, necessitatibus rem. Minus deleniti animi itaque culpa debitis.',
            src:'https://unsplash.it/227/200?image=3'
          },
          {
            title:'SED PORTA DOLOR',
            description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab dolorem, necessitatibus rem. Minus deleniti animi itaque culpa debitis.',
            src:'https://unsplash.it/227/200?image=2'
          },
          {
            title:'SED PORTA DOLOR',
            description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab dolorem, necessitatibus rem. Minus deleniti animi itaque culpa debitis.',
            src:'https://unsplash.it/227/200?image=1'
          }
        ]
      }
    },
    methods:{
      bgimg(src){
        return {
          "background-image":"url("+src+")"
        }
      }
    }
  }
</script>

<style scoped lang="less">
  .news{
    width: 80%;
    height: 500px;
    margin: 0 auto;
    background: #fff;
    padding-bottom: 50px;
  }
  .news-list{
    width: 25%;
    height: 100%;
    float: left;
    text-align: center;
  }
  .news-img{
    width: 100%;
    height: 40%;
    float: left;
    padding-top: 50px;
    img{
      width: 80%;
      height: 100%;
      background: red;
    }
  }
  .news-main{
    width: 100%;
    height: 60%;
    float: left;
    h2{
      height: 30px;
      padding: 0 10px;
    }
    p{
      padding: 10px 15px;
      text-align: center;
    }
    button{
      width: 120px;
      height: 40px;
      border-radius: 5px;
      border: none;
      outline: none;
      cursor: pointer;
      color: #fff;
      background: #252525;
      &:hover{
        background: #ff5454;
        color: #fff;
      }
    }
  }


</style>
