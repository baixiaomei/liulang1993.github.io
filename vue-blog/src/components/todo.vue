<template>
  <div>
    <div class="container" id="todo">
    <section class="panel">
      <input type="checkbox" id="mark-all" @click="selectAll" :checked="areAllSelected">
      <input v-model="newTask" @keyup.enter="addTask" placeholder="What do you need to do?" autofocus class="text-input">
      <button @click="clearList">Clear List</button>
    </section>
    <section class="list">
      <ul class="list-item">
        <li v-for="task in tasks" :class="{done: isChecked(task)}">
          <input type="checkbox" class="checkbox" @click="check" v-model="task.checked">
          <input type="text" v-if="task === editingTask" v-auto-focus class="text-input" @keyup.enter="endEditing(task)" @blur="endEditing(task)" v-model="task.text">
          <label for="checkbox" v-if="task !== editingTask" @dblclick="editTask(task)">{{ task.text }}</label>
          <button class="delete" @click="removeTask(task)">Delete</button>
        </li>
      </ul>
    </section>
  </div>
  </div>
</template>
<script>
  export default{
    data(){
      return{
        newTask: "",
        tasks: [
          {
            text: "This is an example task. Delete or add your own",
            checked: false
          }
        ],
        editingTask: {

        }
      }
    },
        computed: {
          areAllSelected: function () {
            return this.tasks.every(function(task) {
              return task.checked;
            }) &&  this.tasks.length > 0;
          },
        },

        methods: {

          addTask: function () {
            var task = this.newTask.trim();
            if (task) {
              this.tasks.push({text: task, checked: false});
              this.newTask = "";
            }
          },

          removeTask: function (task) {
            var index = this.tasks.indexOf(task);
            this.tasks.splice(index, 1);
          },

          editTask: function (task) {
            this.editingTask = task;
          },

          endEditing: function (task) {
            this.editingTask = {};
            if (task.text.trim() === ""){
              this.removeTask(task);
            }

          },

          clearList: function () {
            this.tasks = [

            ];
          },

          selectAll: function (task) {
            var targetValue = this.areAllSelected ? false : true;
            for (var i = 0; i < this.tasks.length; i++) {
              this.tasks[i].checked = targetValue;
            }
          },

          check: function (task) {
            task.checked = true;
          },

          isChecked: function (task) {
            return task.checked;
          }

        }
  }
</script>
<style scoped>
  ul, li {
    margin: 0;
    padding: 0;
    border: 0;
  }

  /* Global Styles */

  body {
    line-height: 1;
    font-family: "Lato", sans-serif;
    background-color: #EFF1F2;
  }

  .container {
    width: 80%;
    margin: 1em auto 3em;
    border: 1px solid #efefef;
  }

  .panel, li {
    display: flex;
    align-items: center;
    justify-content: space-between;
    list-style-type: none;
    padding: 10px;
    border-bottom: 1px solid #efefef;
    background-color: #E7E8EB;
  }

  .text-input {
    border: 1px solid #dedede;
    padding-left: 10px;
    width: 70%;
    height: 35px;
    border-radius: 5px;
    outline: none;
    color: #555;
  }


  button {
    /* color: #555; */
    background-color: #FFFFFF;
    border: none;
    border-radius: 5px;
    outline: 0;
    width: 10%;
    height: 38px;
    cursor: pointer;
    font-size: 14px;
    color: #fff;
    background: #252525;
  }

  /* Task  area */

  .list li {
    background-color: #454545;
  }

  .list li button {
    /* background-color: transparent; */
    color: #fff;
    visibility: hidden;
    font-size: 14px;
  }

  .list li:hover > button {
    visibility: visible;
  }

  .list label {
    padding-right: 10px;
    display: inline-block;
    width: 70%;
    font-size: 18px;
    line-height: 24px;
    color: #fcfcfc;
    z-index: 2;
    overflow: hidden;
  }

  .list li.done label {
    color: red;
    text-decoration: line-through;
  }

  /* Media Queries */

  @media screen and (max-width: 768px) {
    .container {
      width: 90%;
      max-width: 90%;
    }

    .text-input, .list label {
      width: 60%;
      font-size: 14px;
    }

    button {
      width: 50px;
      height: 50px;
    }
  }
</style>
