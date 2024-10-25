const state ={
    isCollapse:false,
    selectMenu:[]
}

const mutations ={
    CollapseMenu(state){
        state.isCollapse = !state.isCollapse
    },
    addMenu(state,payload){
        //数据去重
        if(state.selectMenu.findIndex(item=> item.path === payload.path) === -1){ //如果没有重复，则添加进去
            state.selectMenu.push(payload)
        }
    }
}

export default {
    state,
    mutations
}