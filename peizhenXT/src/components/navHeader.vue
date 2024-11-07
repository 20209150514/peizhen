<template>
  <div class="header-container">
    <div class="header-left flex-box">
      <el-icon class="icon" size="20" @click="store.commit('CollapseMenu')"
        ><Fold
      /></el-icon>
      <!-- 用ul、li创建tap栏。 v-for渲染  -->
      <ul class="flex-box">
        <li
          v-for="(item, index) in selectMenu"
          :key="item.path"
          :class="{selected:route.path === item.path}"
          class="tab flex-box"
        >
        <!-- :class动态绑定。判断路由路径是否与渲染路径相同。同则改为选中效果 -->
            <!-- 图标 -->
            <el-icon  size="12" ><component :is="item.icon"/> </el-icon>
           <!-- 页面名称 -->
            <router-link class="text flex-box" :to=" {path:item.path}">
              {{ item.name }}
            </router-link>
           <!-- 关闭按钮 -->
            <el-icon  size="12" class="close" @click="closeTab(item,index)"><Close /> </el-icon>
        </li>
      </ul>
    </div>
    <div class="header-right">
      <el-dropdown>
        <!-- 拿的组件，并修改 -->
        <!-- 修改1.头像  2.用户名-->
        <div class="el-dropdown-link flex-box">
          <el-avatar
            src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
          />
          <P class="user-name">admin</P>
        </div>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item>Action 1</el-dropdown-item>
            <el-dropdown-item>Action 2</el-dropdown-item>
            <el-dropdown-item>Action 3</el-dropdown-item>
            <el-dropdown-item disabled>Action 4</el-dropdown-item>
            <el-dropdown-item divided>Action 5</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useStore } from "vuex";
import { useRoute,useRouter } from "vue-router";

const router=useRouter()
const route =useRoute()//获取当前路由信息
const store = useStore()
const selectMenu = computed(() => store.state.menu.selectMenu); //获取数据

//点击关闭tag
const closeTab =(item,index)=>{
  store.commit('closeMenu',item)
  //删除非当前页tag
  if(route.path !== item.path){
    return
  }
  const  selectMenuData = selectMenu.value
  // 如果删除最后一项
  if(index == selectMenuData.length){
    //如果tag只有一个元素
    if(!selectMenuData.length){
      router.push('/')
    }  else{
      router.push({
        path:selectMenuData[index-1].path
      })
    }
  }else{
    //如果删除的是中间位置的path
    router.push({
      path:selectMenuData[index].path
    })
  }
}
</script>



<style lang="less" scoped>
.flex-box {
  display: flex;
  align-items: center; //垂直方向居中
  height: 100%;
}
.header-container {
  margin-left: -20px;
  margin-right: 20px;
  display: flex;
  justify-content: space-between;
  padding-right: 25px;
  align-items: center; //居 中
  height: 100%;
  background-color: #fff;
  padding-right: 25px;
  border-bottom: 1px solid black;
  .header-left {
    height: 100%;
    .icon {
      width: 45px;
      height: 100%;
    }
    .icon:hover {
      //鼠标放置后
      background-color: #f5f5f5; //改底部背景
      cursor: pointer; //变成小手
    }
    .tab{
      height: 100%;
      padding: 0 10px;
      
      .text{
        margin: 0 5px;
        text-decoration: none;
      
      }
      .close{
        //平时隐藏
      visibility: hidden;}
        
      &.selected{
        a{
          color: #409eff;
        }
        i{
          color: #409eff;
        }
        background-color: #f5f5f5;
      }
    }
    .tab:hover {
      background-color: #f5f5f5;
      .close{
        visibility: inherit;
        cursor: pointer;
        color: #000;
      }
    }
  }

  .header-right {
  .user-name {
    margin-left: 10px;
  }
}
}


a{
  height: 100%;
  color: #333;
  font-size: 15px;
}
</style>
