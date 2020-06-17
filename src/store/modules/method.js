export default {
    namespaced: true,
    state: {
        weatherInfo:{},
        num:0
    },
    mutations: {
        updateWeathweInfo:function(state,payload){
            state.weatherInfo = payload.payload.weatherInfo
        },
        testAsync:function(state){
            console.log('state',state)
            setTimeout(()=>{
                state.num++
            },1000)
        }
    },
    getters: {

    },
    actions: {
        async getWeather({ commit }) {
            const data = await fetch("https://www.apiopen.top/weatherApi?city=唐山")
                .then(data => {
                    if (data.status == 200) {
                        return data;
                    } else {
                        throw new Error("数据请求失败");
                    }
                })
                .then(data => data.json())
                .then(data => data)
                .catch(err => {
                    alert(err);
                });
            commit({
                type:'updateWeathweInfo',
                payload:{
                    weatherInfo:data.data.forecast[0] 
                }
            })
        }
    }

}