export default {
    namespaced: true,
    state: {
        list: []
    },
    getters:{
        statusList:(state)=>(status)=>{
            let arr = []
            state.list.map(item=>{
                if(item.status == status){
                    arr.push(item)
                }
            })
            return arr
        }
    },
    mutations: {
        //增加一条选项
        add: function (state, payload) {
            state.list.unshift(payload.payload)
        },
        //完成这条选项
        toFinsh: function (state, payload) {
            state.list.map((item, index) => {
                if (item.id == payload.id) {
                    state.list[index].status = 'FINISHED';
                }
            })
        },
        //更新列表(从loaclstorage取缓存数据)
        updateList: function (state, payload) {
            state.list = payload.data
        },
    }
}