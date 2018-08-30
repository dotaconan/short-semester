<template>
  <div>
    <!-- userinfo -->
    <div class="userinfo" @click="bindViewTap">
      <img class="userinfo-avatar" v-if="userInfo.avatarUrl" :src="userInfo.avatarUrl" background-size="cover" />
      <div class="userinfo-nickname">
        {{userInfo.nickName}}
      </div>
    </div>
    <!-- 日均步数 -->
    <div class="record">
      <div class="record_day_step">
        <p>日均步数</p>
        <p>0</p>
      </div>
      <div class="record_day_step">
        <p>日均步数</p>
        <p>0</p>
      </div>
      <div class="record_day_step">
        <p>日均步数</p>
        <p>0</p>
      </div>
    </div>
    <!-- 分割线 -->
    <div class="line"></div>
    <!-- 分组 -->
    <i-panel title="目标设定">
      <i-cell-group>
        <i-cell title="体重目标" is-link></i-cell>
        <i-cell title="运动目标" is-link></i-cell>
      </i-cell-group>
    </i-panel>

    <div class="white_space"></div>

    <i-panel title="目标设定">
      <i-cell-group>
        <i-cell title="体重目标" is-link></i-cell>
        <i-cell title="运动目标" is-link></i-cell>
      </i-cell-group>
    </i-panel>

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
        success: (loginRes) => {
          console.log(loginRes)
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
  color: #111;
}
.record {
  margin-top: 15px;
  height: 50px;
  width: 90%;
  margin-left: auto;
  margin-right: auto;
}
.record_day_step {
  width: 33.333%;
  float: left;
}
.record_day_step p{
  font-size: 12px;
  text-align: center;
}

.line {
  margin: 15px 0 15px 0;
  width: 90%;
  margin-left: auto;
  margin-right: auto;
  height: 1px;
  background: #bbb;
}
.white_space {
  width: 100%;
  padding-top: 15px;
}
</style>
