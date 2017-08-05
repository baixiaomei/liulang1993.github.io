<template>
  <div>
    <div class="todolist">
      <div class="todolist-main">
        <input type="text" class="output" v-model="newItem" @keyup.enter="addItem">
        <button class="search-btn" @click="addItem">Search</button>
        <ul class="todo-nav">
          <li v-bind:class="{finished:item.isFinished}" v-for="item in items" @click="toggeleFinish(item)">{{ item.label }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
  import Store from '../store.js'
  console.log(Store)
  export default{
    data(){
      return{
        items:Store.fetch(),
        newItem:''
      }
    },
    watch:{
      items:{
        handler:function(items){
          Store.save(items)
        },
        deep:false
      }
    },
    methods:{
      toggeleFinish:function(item){
        item.isFinished = !item.isFinished
      },
      addItem:function(){
        if (this.newItem == '') {
          console.log('add empty item')
        }
        else{
          this.items.push({
          label:this.newItem,
          isFinished:false
          })
        }
        this.newItem = ''
      }
    }
  }
</script>
<style scope>
  *{
    margin: 0;
    padding: 0;
  }
  .todolist{
    width: 80%;
    height: 600px;
    margin: 0 auto;
    margin-top: 20px;
    position: relative
  }
  .todolist-main{
    width: 100%;
    height: 600px;
    position: absolute;
  }
  .output{
    width: 82%;
    height: 48px;
    border: 1px solid #A0FFBD;
    border-radius: 10px;
    padding-left: 10px;
    outline: none;
    float: left;
    margin-top: 50px;
  }
  .search-btn{
    width: 16%;
    height: 50px;
    background: #252525;
    cursor: pointer;
    border: 1px solid #252525;
    font-size: 22px;
    float: left;
    color: #ccc;
    border-radius: 10px;
    margin-top:50px;
    margin-left: 5px;
    outline: none;
  }
  .search-btn:hover{
    color: #fff;
  }
  .todo-nav{
    width: 99%;
    margin-top: 25px;
    display: block;
    float: left;
    font-size: 20px;
    list-style: none;
  }
  .todo-nav li{
    background: red;
    display: block;
    height: 40px;
    line-height: 40px;
    padding-left: 1%;
    border-radius: 5px;
    background: #fff;
    margin: 2px auto;
  }
  .finished{
    color: green;
    text-decoration: underline;
  }
</style>












