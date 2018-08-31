// var app = getApp()
Page({
  data: {
    readTrueUUID: [],
    button_text: '连接设备',
    button_type: 'primary',
    button_status: false,
    devices_data: false,
    devices_data_services: false,
    steps_uuid: '00002A2B-0000-1000-8000-00805F9B34FB',
    stepsData: false, // 步数
    stepsData_count: '...', // 当前步数
    shock_uuid: '00002A06-0000-1000-8000-00805F9B34FB',
    shockData: false, // 震动
    electricity_uuid: '00002A27-0000-1000-8000-00805F9B34FB',
    electricityData: false, // 电量
    electricityData_surplus: '...' // 剩余电量
  },
  can_str: function () {
    var that = this
    if (that.data.button_status) {
      console.log('------------点击按钮状态' + that.data.button_status)
      if (that.data.devices_data) {
        wx.closeBLEConnection({
          deviceId: that.data.devices_data.deviceId,
          success: function (res) {
            console.log('断开与低功耗蓝牙设备的连接', res)
          }
        })
      }
      console.log('------------流程往下走')
      wx.stopBluetoothDevicesDiscovery({
        success: function (res) {
          console.log('停止搜索周边设备', res)
        }
      })
      wx.closeBluetoothAdapter({
        success: function (res) {
          console.log('关闭蓝牙模块', res)
        }
      })
      that.setData({
        button_text: '连接设备',
        button_type: 'primary',
        button_status: false,
        devices_data: false,
        devices_data_services: false
      })
    } else {
      console.log('--------设备启动')
      that.can_str_api()
    }
  },
  can_str_api: function () {
    var that = this
    wx.openBluetoothAdapter({
      success: function (res) {
        console.log('初始化蓝牙适配器', res)
        wx.getBluetoothAdapterState({
          success: function (res) {
            console.log('获取本机蓝牙适配器状态', res)
            wx.onBluetoothAdapterStateChange(function (res) {
              console.log('监听蓝牙适配器状态变化事件', res)
            })
            wx.startBluetoothDevicesDiscovery({
              services: [],
              success: function (res) {
                console.log('开始搜索周边设备', res)
                that.setData({
                  button_text: '正在连接',
                  button_type: 'default',
                  button_status: true
                })
                wx.onBluetoothDeviceFound(function (devices) {
                  console.log('发现设备设备', devices)
                  console.log('设备id: ' + devices.devices[0].deviceId)
                  console.log('设备name: ' + devices.devices[0].name)
                  if (devices.devices[0].name === 'MI Band 2') {
                    that.setData({
                      button_text: '断开连接',
                      button_type: 'warn',
                      devices_data: devices.devices[0]
                    })
                    wx.stopBluetoothDevicesDiscovery({
                      success: function (res) {
                        console.log('已经链接——停止搜索周边设备', res)
                      }
                    })
                    that.link_ble_device()
                  }
                })
              }
            })
          }
        })
      }
    })
  },
  link_ble_device: function () {
    var that = this
    console.log(that.data)
    wx.showLoading({
      title: '连接蓝牙设备中...'
    })
    wx.createBLEConnection({
      deviceId: that.data.devices_data.deviceId,
      success: function (res) {
        wx.hideLoading()
        wx.showToast({
          title: '连接成功',
          icon: 'success',
          duration: 1000
        })
        console.log('连接低功耗蓝牙设备', res)
        wx.onBLEConnectionStateChanged(function (res) {
          console.log('监听低功耗蓝牙连接的错误事件，包括设备丢失，连接异常断开等等', res)
          if (!res.connected) {
            // that.link_ble_device()
          }
        })
        wx.getBLEDeviceServices({
          deviceId: that.data.devices_data.deviceId,
          success: function (service) {
            console.log('获取蓝牙设备所有service服务', service)
            that.setData({
              devices_data_services: service.services
            })
            var servicesList = that.data.devices_data_services
            servicesList.forEach(function (value, index, array) {
              wx.getBLEDeviceCharacteristics({
                deviceId: that.data.devices_data.deviceId,
                serviceId: value.uuid,
                success: function (characteristics) {
                  console.log(index + '、获取蓝牙设备所有characteristic特征值', characteristics)
                  array[index].characteristics = characteristics.characteristics
                  that.setData({
                    devices_data_services: servicesList
                  })
                  if (index === (array.length - 1)) {
                    that.select_characteristics()
                  }
                }
              })
            })
          }
        })
      }
    })
    wx.onBLECharacteristicValueChange(function (res) {
      console.log('特征值变化', res)
      const arrayBuffer = new Uint8Array(res.value)
      console.log('特征值解析', arrayBuffer)
      if (res.characteristicId === that.data.steps_uuid) {
        that.setData({
          stepsData_count: arrayBuffer[0]
        })
      }
      if (res.characteristicId === that.data.electricity_uuid) {
        that.setData({
          electricityData_surplus: arrayBuffer[0] + '%'
        })
      }
    })
  },
  select_characteristics: function () {
    var that = this
    that.data.readTrueUUID = []
    var servicesList = that.data.devices_data_services
    var steps = {
      service: false,
      characteristic: false
    }
    var shock = {
      service: false,
      characteristic: false
    }
    var electricity = {
      service: false,
      characteristic: false
    }
    console.log('获取封装好的服务、特征值', that.data.devices_data_services)
    servicesList.forEach(function (value, index, array) {
      array[index].characteristics.forEach(function (values, indexs, arrays) {
        // 获取所有 read: true 的特征值
        if (values.properties.read) {
          that.data.readTrueUUID.push(values.uuid)
        }

        if (values.uuid === that.data.steps_uuid) {
          console.log('找到步数控制特征值', values)
          steps.service = value
          steps.characteristic = values
          that.setData({
            stepsData: steps
          })
        }
        if (values.uuid === that.data.shock_uuid) {
          console.log('找到震动控制特征值', values)
          shock.service = value
          shock.characteristic = values
          that.setData({
            shockData: shock
          })
        }
        if (values.uuid === that.data.electricity_uuid) {
          console.log('找到电量信息特征值', values)
          electricity.service = value
          electricity.characteristic = values
          that.setData({
            electricityData: electricity
          })
        }
        if (values.uuid === '0000180d-0000-1000-8000-00805f9b34fb') {
          console.log('找到一个未知特征值', values)
        }
      })
    })
    console.log('收集所有read: true的uuid: ', that.data.readTrueUUID)
  },
  steps_control: function () {
    var that = this
    var stepsData = that.data.stepsData
    console.log('stepsData: ', stepsData)
    wx.readBLECharacteristicValue({
      deviceId: that.data.devices_data.deviceId,
      serviceId: stepsData.service.uuid,
      characteristicId: stepsData.characteristic.uuid,
      success: function (res) {
        console.log('读取步数', res)
        that.setData({
          stepsData_count: '...'
        })
      }
    })
  },
  steps_realtime_control: function () {
    var that = this
    var stepsData = that.data.stepsData
    wx.notifyBLECharacteristicValueChanged({
      deviceId: that.data.devices_data.deviceId,
      serviceId: stepsData.service.uuid,
      characteristicId: stepsData.characteristic.uuid,
      state: true,
      success: function (res) {
        console.log('读取实时步数', res)
      }
    })
  },
  shock_control: function (attr) {
    var that = this
    var shockData = that.data.shockData
    let buffer = new ArrayBuffer(1)
    let dataView = new DataView(buffer)
    dataView.setUint8(0, attr.currentTarget.dataset.strength)
    wx.writeBLECharacteristicValue({
      deviceId: that.data.devices_data.deviceId,
      serviceId: shockData.service.uuid,
      characteristicId: shockData.characteristic.uuid,
      value: buffer,
      success: function (res) {
        console.log('震动命令发送成功', res)
      }
    })
  },
  electricity_control: function () {
    var that = this
    var electricityData = that.data.electricityData
    wx.readBLECharacteristicValue({
      deviceId: that.data.devices_data.deviceId,
      serviceId: electricityData.service.uuid,
      characteristicId: electricityData.characteristic.uuid,
      success: function (res) {
        console.log('读取电量信息', res)
        that.setData({
          electricityData_surplus: '...'
        })
      }
    })
  }
})
