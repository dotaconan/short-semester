<template>
  <div>
    <!-- userinfo -->
    <div class="userinfo" @click="bindViewTap">
      <img class="userinfo-avatar" v-if="userInfo.avatarUrl" :src="userInfo.avatarUrl" background-size="cover" />
      <div class="userinfo-nickname">
        {{userInfo.nickName}}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      userInfo: {}
    }
  },
  created () {
    this.getUserInfo()
  },
  methods: {
    // 获取用户信息
    getUserInfo () {
      // 调用登录接口
      wx.login({
        success: () => {
          wx.getUserInfo({
            success: (res) => {
              this.userInfo = res.userInfo
            }
          })
        }
      })
    }
  }
}
</script>

<style>
.userinfo {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.userinfo-avatar {
  width: 128rpx;
  height: 128rpx;
  margin: 20rpx;
  border-radius: 50%;
}

.userinfo-nickname {
  color: #bbb;
}
</style>
