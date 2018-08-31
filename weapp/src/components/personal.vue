<template>
  <div>
    <!-- userinfo -->
    <div class="userinfo">
      <!-- <img class="userinfo-avatar" v-if="userInfo.avatarUrl" :src="userInfo.avatarUrl" background-size="cover" /> -->
      <open-data type="userAvatarUrl"></open-data>

      <div class="userinfo-nickname">
        <open-data type="userNickName"></open-data>
      </div>
    </div>
    <div style="text-align: center; font-size: 13px; margin: 15px;">
      <a href="/pages/bluetooth/index">点击获取并上传数据</a>
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
        <i-cell @click="setWeightTarget" title="体重目标" :value="weightTarget + ' kg'" is-link></i-cell>
        <i-cell @click="setSportTarget" title="运动目标" :value="sportTarget + ' 步'" is-link></i-cell>
      </i-cell-group>
    </i-panel>
    <div class="white_space"></div>
    <i-panel title="更多">
      <i-cell-group>
        <i-cell title="我的健康状况" is-link></i-cell>
        <i-cell title="设置" is-link></i-cell>
      </i-cell-group>
    </i-panel>
    <div style="padding-bottom: 150px;"></div>

    <!-- weight model -->
    <i-modal :visible="weightModel" @ok="weightOk" @cancel="handleClick">
      <i-input type="number" :value="inputWeight" placeholder="请输入目标体重 (kg)" @change="changeWeight"/>
      <div style="margin: 0 0 5px 0;width: 80%;margin-left:auto;margin-right:auto; border-top: 1px solid #bbb"></div>
    </i-modal>
    <!-- sport model -->
    <i-modal :visible="sportModel" @ok="sportOk" @cancel="handleClick">
      <i-input type="number" :value="inputWeight" placeholder="请输入目标步数 (步)" @change="changeSport"/>
      <div style="margin: 0 0 5px 0;width: 80%;margin-left:auto;margin-right:auto; border-top: 1px solid #bbb"></div>
    </i-modal>

  </div>
</template>

<script>

export default {
  data () {
    return {
      userInfo: {},
      weightModel: false,
      weightTarget: 0,
      inputWeight: '',
      sportModel: false,
      sportTarget: 0,
      inputSport: ''
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
              console.log(res)
              this.userInfo = res.userInfo
            }
          })
        }
      })
    },
    // 体重
    setWeightTarget () {
      this.weightModel = true
    },
    changeWeight (e) {
      if (e.target.detail.value !== '') {
        this.inputWeight = e.target.detail.value
      } else {
        this.inputWeight = ''
      }
    },
    // 体重目标确认
    weightOk () {
      this.weightModel = false
      if (this.inputWeight !== '') {
        this.inputWeight = parseInt(this.inputWeight)
        this.weightTarget = parseInt(this.inputWeight)
      }
    },
    // 运动
    setSportTarget () {
      this.sportModel = true
    },
    changeSport (e) {
      if (e.target.detail.value !== '') {
        this.inputSport = e.target.detail.value
      } else {
        this.inputSport = ''
      }
    },
    // 运动目标确认
    sportOk () {
      this.sportModel = false
      if (this.inputSport !== '') {
        this.inputSport = parseInt(this.inputSport)
        this.sportTarget = parseInt(this.inputSport)
      }
    },
    // 取消
    handleClick () {
      this.inputWeight = ''
      this.inputSport = ''
      this.weightModel = false
      this.sportModel = false
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
