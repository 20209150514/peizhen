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
    },
    closeMenu(state,payload){
        //通过点击数据得到索引
        const index = state.selectMenu.findIndex(val => val.name === payload.name)
        //通过索引删除数组指定元素
        state.selectMenu.splice(index,1)
    }
}

export default {
    state,
    mutations
}