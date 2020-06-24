<template>
  <div>
    <KForm :model="model" :rules="rules" ref="loginForm">
      <KFormItem label="用户名" prop="username"
        ><KInput v-model="model.username"></KInput>
      </KFormItem>
      <KFormItem label="密码" prop="password"
        ><KInput v-model="model.password" type="password"></KInput>
      </KFormItem>
      <KFormItem>
        <button @click="onLogin">Login</button>
      </KFormItem>
    </KForm>

    {{ model }}
  </div>
</template>
<script>
import KInput from "./KInput"
import KFormItem from "./KFormItem"
import KForm from "./KForm"
export default {
  components: { KInput, KFormItem, KForm },
  data() {
    return {
      model: {
        username: "daytoy",
        password: ""
      },
      rules: {
        username: [{ required: true, message: "用户名必填" }],
        password: [{ required: true, message: "密码必填" }]
      }
    }
  },
  methods: {
    onLogin() {
      this.$refs.loginForm.validate((err) => {
        if (err) {
          alert("错误！！")
        } else {
          alert("登录成功！！")
        }
      })
    }
  }
}
</script>
