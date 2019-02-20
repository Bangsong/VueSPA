<template>
  <el-submenu :index="menu.index" v-if="menu.child.length > 0">
    <template slot="title">
      <i :class="menu.iconClass" v-if="menu.iconClass !='' "></i>
      {{menu.title}}
    </template>
    <left-menu :menu="subMenu" v-for="subMenu in menu.child" :key="subMenu.index"></left-menu>
  </el-submenu>
  <el-menu-item :index="menu.index" v-else>
    <i :class="menu.iconClass" v-if="menu.iconClass !='' "></i>
    {{menu.title}}
  </el-menu-item>
</template>

<script>
export default {
    name:"left-menu",
    props:{
        menu:Object
    }
}
</script>