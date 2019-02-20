<template>
  <div @keyup.enter="onSubmit('form')">
    <el-container>
      <el-main>
        <el-row type="flex" justify="center" style="margin-top:10%;">
          <el-col :span="6"></el-col>
          <el-col :span="7"><h1>开发者平台</h1></el-col>
        </el-row>
        <el-row type="flex" justify="center">
          <el-col :span="6">
            <el-form ref="form" :rules="rules" :model="form" label-width="80px">
              <el-form-item label="账号：" prop="userId">
                <el-input v-model="form.userId" clearable autofocus></el-input>
              </el-form-item>
              <el-form-item label="密码：" prop="password">
                <el-input type="password" v-model="form.password" clearable></el-input>
              </el-form-item>
              <el-form-item>
                <el-button type="primary" @click="onSubmit('form')" style="width:100%" :loading="loading" v-if="!loading" >登录</el-button>
                <el-button type="primary" @click="onSubmit" style="width:100%" :loading="loading" v-else >登录中</el-button>
              </el-form-item>
            </el-form>
          </el-col>
        </el-row>
      </el-main>
      <el-footer>@版权所有：万能的小明</el-footer>
    </el-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loading: false,
      form: {
        userId: "",
        password: ""
      },
      rules: {
        userId: [{ required: true, message: "账号不能为空", trigger: "burl" }],
        password: [{ required: true, message: "密码不能为空", trigger: "burl" }]
      }
    };
  },
  methods: {
    onSubmit(form) {
      this.$refs[form].validate(valid => {
        if (valid) {
          this.loading = true;
          setTimeout(() => {
            let { userId, password } = this.form;
            if (userId == "admin" && password == "123") {
              localStorage.setItem("token", userId);
              this.$router.push({ path: "/index" });
            } else {
              this.$message.error("账号或密码错误!");
            }
            this.loading = false;
          }, 3000);
          console.log("submit!");
        }
        else{
          return false;
        }
      });
    }
  }
};
</script>

<style scoped>
.el-footer {
  color: rgb(184, 184, 184);
  text-align: center;
}
</style>
