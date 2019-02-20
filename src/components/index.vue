<template>
    <transition-group
    enter-active-class="animated bounceInDown"
    leave-active-class="animated bounceOutUp" 
    tag="el-container" class="main" >
    <el-aside width="200px" class="leftMenu" v-show="showMenu" key="leftMenu">
      <el-menu :default-openeds="['1', '3']">
      <el-submenu index="1">
        <template slot="title"><i class="el-icon-message"></i>导航一</template>
        <el-menu-item-group>
          <template slot="title">分组一</template>
          <el-menu-item index="1-1">选项1</el-menu-item>
          <el-menu-item index="1-2">选项2</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="分组2">
          <el-menu-item index="1-3">选项3</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="1-4">
          <template slot="title">选项4</template>
          <el-menu-item index="1-4-1">选项4-1</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-submenu index="2">
        <template slot="title"><i class="el-icon-menu"></i>导航二</template>
        <el-menu-item-group>
          <template slot="title">分组一</template>
          <el-menu-item index="2-1">选项1</el-menu-item>
          <el-menu-item index="2-2">选项2</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="分组2">
          <el-menu-item index="2-3">选项3</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="2-4">
          <template slot="title">选项4</template>
          <el-menu-item index="2-4-1">选项4-1</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-submenu index="3">
        <template slot="title"><i class="el-icon-setting"></i>导航三</template>
        <el-menu-item-group>
          <template slot="title">分组一</template>
          <el-menu-item index="3-1">选项1</el-menu-item>
          <el-menu-item index="3-2">选项2</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="分组2">
          <el-menu-item index="3-3">选项3</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="3-4">
          <template slot="title">选项4</template>
          <el-menu-item index="3-4-1">选项4-1</el-menu-item>
        </el-submenu>
      </el-submenu>
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
export default {
  data() {
    return {
      showMenu:true
    };
  }
};
</script>

<style scoped>
.main,.rightMain{
  display: flex;
}
.main {
  flex-direction: row;
}
.rightMain{
  flex-direction: column;
}
.main,.leftMenu,.el-menu {
  height: 100%;
}
.el-header,
.el-footer {
  background-color: #f0f0f0;
  line-height: 60px;
}
.el-header{
  position: relative;
}
.el-footer{
  color: rgb(145, 145, 145);
  text-align: center;
}
.logo,
.exit
{
  position: absolute;
  cursor: pointer;
  font-weight: bold;
  color: black;
}
.logo{
  left: 10px;
  font-size: 20px;
}
.exit{
  right: 40px;
  text-decoration:none;
}
</style>
