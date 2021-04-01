<template>
  <header class="t-header">
    <!-- t 的含义是top，代表页面顶部header -->
    <div class="t-header__container">
      <div v-for="(item) in sublist" :key="item.name" class="t-header__item" @click="jump(item.path)">
        {{ item.name }}
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Index',
  data() {
    return {
      sublist: [
        { name: '首页', path: 'home' },
        { name: '赛事引言', path: 'describe' },
        { name: '赛程安排', path: 'plan' },
        { name: '奖项设置', path: 'reward' },
        { name: '组织单位', path: 'unit' },
        { name: '联系方式', path: 'rank' },
      ],
    }
  },
  methods: {
    jump(ref) {

    },
  },
}
</script>

<style scoped lang="scss">
$front-color-default: #fff;
$front-color-active: #000;
$front-color-hover: #000;
$header-bg: rgba(0, 122, 224, .7);
$header-bg-active: #fff;
$header-bg-hover: #fff;

// t-header
@include b(t, header) {
  background: $header-bg;
  font-size: 16px;
  font-weight: 700;
  height: 60px;
  line-height: 60px;
  position: fixed;
  width: 100%;
  left: 0;
  top: 0;
  z-index: 999;
  cursor: pointer;

  // t-header__container
  @include e(container) {
    float: right;
  }
  // t-header__item
  @include e(item) {
    color: $front-color-default;
    width: 150px;
    text-align: center;
    float: left;
    &:hover{
      transition: .3s;
      background: $header-bg-hover;
      color: $front-color-hover;
    }

    // 激活状态的样式 is-active
    @include when(active) {
      color: $header-bg-active;
    }
  }
}

</style>
