<template>
  <transition-group
    enter-active-class="animated bounceInDown"
    leave-active-class="animated bounceOutUp"
    tag="el-container" class="main">
    <el-aside width="200px" class="leftMenu" v-show="showMenu" key="leftMenu">
      <el-menu :default-openeds="menu.defaultOpeneds">
        <left-menu :menu="menu" v-for="menu in menu.data" :key="menu.index"></left-menu>
      </el-menu>
    </el-aside>
    <el-container class="rightMain" key="rightMain">
      <el-header>
        <label class="logo" @click="showMenu = !showMenu;">开发者平台</label>
        <a href="#/logout" class="exit">退出</a>
      </el-header>
      <el-main>Main</el-main>
      <el-footer>@版权所有：万能的小明</el-footer>
    </el-container>
  </transition-group>
</template>

<script>
import leftMenu from './menu.vue';
export default {
  data() {
    return {
      showMenu: true,
      menu: {
        defaultOpeneds: [],
        data: [
          {
            index: "1",
            title: "左侧菜单1",
            iconClass: "el-icon-setting",
            child: [
              {
                index: "1-1",
                title: "左侧菜单1-1",
                iconClass: "",
                child: [
                  {
                    index:"1-1-1",
                    title:"用左侧菜1-1-1",
                    iconClass:"",
                    child:[]
                  }
                ]
              }
            ]
          },
          {
            index: "2",
            title: "左侧菜单2",
            iconClass: "el-icon-menu",
            child: [
              {
                index: "2-1",
                title: "左侧菜单2-1",
                iconClass: "",
                child: [
                  {
                    index:"2-1-1",
                    title:"左侧菜单2-1-1",
                    iconClass:"",
                    child:[
                      {
                        index:"2-1-1-1",
                        title:"左侧菜单2-1-1-1",
                        iconClass:"",
                        child:[]
                      }
                    ]
                  }
                ]
              },
              {
                index:"2-2",
                title:"左侧菜单2-2",
                iconClass:"",
                child:[]
              }
            ]
          },
          {
            index: "3",
            title: "左侧菜单3",
            iconClass: "el-icon-message",
            child: []
          }
        ]
      }
    };
  },
  components:{
    leftMenu
  }
};
</script>

<style scoped>
.main,
.rightMain {
  display: flex;
}
.main {
  flex-direction: row;
}
.rightMain {
  flex-direction: column;
}
.main,
.leftMenu,
.el-menu {
  height: 100%;
}
.el-header,
.el-footer {
  background-color: #f0f0f0;
  line-height: 60px;
}
.el-header {
  position: relative;
}
.el-footer {
  color: rgb(145, 145, 145);
  text-align: center;
}
.logo,
.exit {
  position: absolute;
  cursor: pointer;
  font-weight: bold;
  color: black;
}
.logo {
  left: 10px;
  font-size: 20px;
}
.exit {
  right: 40px;
  text-decoration: none;
}
</style>
