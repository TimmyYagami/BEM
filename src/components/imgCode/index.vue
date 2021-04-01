<template>
  <div style="width: 100%;height: 100%;cursor: pointer">
    <img :src="uidImg" style="width: 100%;height: 100%;" alt="" @click="initUUid()">
  </div>
</template>

<script>

export default {
  name: 'ImgCode',
  model: {
    prop: 'image_code_id',
    event: 'update'
  },
  props: {
    image_code_id: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      uidImg: '',
      uuid: ''
    }
  },
  created() {
    this.initUUid()
  },
  mounted() {

  },
  methods: {
    clearUUid() {
      this.uuid = ''
    },
    // 用于生成uuid
    S4() {
      return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1)
    },
    guid() {
      return (this.S4() + this.S4() + '-' + this.S4() + '-' + this.S4() + '-' + this.S4() + '-' + this.S4() + this.S4() + this.S4())
    },
    initUUid() {
      this.uidImg = '/api/v1/common/web/auth/image_code?image_code_id=' + this.guid()
      // 只将uuid传递给外面的组件。
      this.$emit('update', this.uidImg.split('image_code_id=')[1])
    }
  }
}
</script>

<style>

</style>
