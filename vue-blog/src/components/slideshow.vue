<template>
  <div>
    <div class="container" @mouseover="cleartimer" @mouseout="autoplay">
      <a class="arrow prev" @click="goprev">&lt</a>
      <a class="arrow next" @click="gonext">&gt</a>
      <div class="slideshow" :style="movevalue">
        <div class="slideshow-img" v-for="item in slideshow" :style="bgimg(item.src)"></div>
      </div>
    </div>
  </div>
</template>
<script>
  export default{
    data(){
      return {
        nowIndex:0,
        span:1154,
        slideshow:[
          {
            title:'image',
            des:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. ',
            src:'https://unsplash.it/1154/500?image=4'
          },
          {
            title:'image',
            des:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. ',
            src:'https://unsplash.it/1154/500?image=3'
          },
          {
            title:'image',
            des:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. ',
            src:'https://unsplash.it/1154/500?image=2'
          },
          {
            title:'image',
            des:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. ',
            src:'https://unsplash.it/1154/500?image=1'
          }
        ]
      }
    },
    computed:{
      movevalue(){
        var result = {"left":(-this.nowIndex * this.span) + 'px'}
        return result;
      }
    },
    methods:{
      bgimg(src){
        return {
          "background-image":"url("+src+")"
        }
      },
      goprev(){
        if (this.nowIndex == 0) {
          this.nowIndex = 3
        }else{
          this.nowIndex = this.nowIndex - 1
        }
      },
      gonext(){
        if (this.nowIndex == 3) {
          this.nowIndex = 0
        }else{
          this.nowIndex = this.nowIndex + 1
        }
      },
      autoplay(){
        this.timer = setInterval(()=>{
          this.gonext()
        },3000)
      },
      cleartimer(){
        clearInterval(this.timer)
      }
    },
    mounted(){
      this.autoplay()
    }

  }
</script>
<style scoped>
  *{
    margin: 0;
    padding: 0;
  }
  .container{
    width: 80%;
    height: 500px;
    margin: 0 auto;
    position: relative;
    overflow: hidden;
    background: yellow;
  }
  .container:hover .arrow{
    display: block;
  }
  .slideshow{
    width: 4616px;
    height: 500px;
    background: pink;
    position: absolute;
    transition: 0.7s;
  }
  .slideshow-img{
    width: 1154px;
    height: 500px;
    float: left;
  }
  .arrow{
    width: 30px;
    height: 100px;
    background-color: rgba(0, 0, 0, .5);
    position: absolute;
    top: 200px;
    z-index: 2;
    color: #ccc;
    line-height: 100px;
    text-align: center;
    cursor: pointer;
    display: none;
  }
  .prev{
    left: 0;
  }
  .next{
    left: 1110px;
  }
  .arrow:hover {
    background-color: rgba(0, 0, 0, .5);
    color: #fff;
  }
</style>
