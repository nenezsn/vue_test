<template>
  <div>
    <div>
      <label for="todo">输入待办事物</label>
      <input name="todo" v-model="text" @keyup.enter="add(text);text=''">
    </div>
    <h4>待办</h4>
    <ul>
      <li v-for="(item,index) in notCompleteList" :key="index">
        <span>{{item.content}}</span>
        <button @click="finish(item.id)">完成</button>
        <button @click="deleteItem(item.id)">删除</button>
      </li>
    </ul>
    <h4>已完成</h4>
    <ul>
      <li v-for="(item,index) in hasFinishList" :key="index">
        <span class="hasDone">{{item.content}}</span>
        <button @click="deleteItem(item.id)">删除</button>
      </li>
    </ul>
        <draggable element="ul" v-model="arr">
      <li v-for="(item,index) in arr" :key="index">
        {{item}}
      </li>
    </draggable>
  </div>
</template>

<script>
import { mapState,mapGetters,mapMutations } from 'vuex'
import draggable from 'vuedraggable'
export default {
  data: function () {
    return {
      text: '',
      arr:[1,2,3]
    }
  },
  components:{
    draggable
  },
  methods: {
    // addItem() {
    //   if (this.text) {
    //     // this.list.push({ id: Date.now(), content: this.text, status: 'NOT_FINISH' })
    //     // this.text = ''
    //   }
    // },
    // handleFinishItem(id) {
    //   console.log(this.list,id)
    //   this.list.find(item=>item.id == id).status = 'FINISH'
    // },
    // deleteItem(id){
    //   this.list = this.list.filter(item=>item.id != id)
    // },
    ...mapMutations('todo',['add','finish','deleteItem'])
  },
  computed:{
    // notCompleteList:function(){
    //   return this.list.filter(item=>item.status == 'NOT_FINISH')
    // },
    // hasFinishList:function(){
    //   return this.list.filter(item=>item.status == 'FINISH')
    // },
    ...mapState('todo',['list']),
    ...mapGetters('todo',['notCompleteList','hasFinishList'])
  }
}
</script>

<style>
.list li {
  list-style: none;
}
.hasDone {
  color: #cecece;
  text-decoration: line-through;
}
</style>
