<template>
  <div ref="home" class="b-banner">
    <img src="@/assets/jinMenBei/headPicture.jpg" alt="">
    <div v-show="false" class="b-end">
      报名已结束
    </div>
    <div class="b-signup">
      <div class="b-button fcenter">报名要求</div>
      <div class="b-button fcenter">立即报名</div>
      <div class="b-button fcenter">报名查询</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Index',
}
</script>
<style scoped lang="scss">
$b-button-bg: url('~@/assets/jinMenBei/bgBtn.png');
$b-button-shadow: #006ee9;
$b-end-color: #1d1d1d;
$b-end-bg: rgb(66, 149, 255);

@include b(b, banner) {
  width: 100%;
  position: relative;
  img {
    width: 100%;
    margin-bottom: 20px;
  }

  //
  @include b(b, end) {
    width: 480px;
    border: 2px solid $b-end-color;
    border-radius: 35px;
    height: 70px;
    background: $b-end-bg;
    color: $b-end-color;
    line-height: 70px;
    font-size: 20px;
    font-weight: 700;
    font-style: italic;
    text-align: center;
    position: absolute;
    margin: 0 auto;
    left: 0;
    right: 0;
    bottom: 123px;
  }
  // 报名按钮 begin
  @include b(b, signup) {
    padding: 0 100px;
    display: flex;
    justify-content: space-between;
  }
  @include b(b, button) {
    width: 180px;
    height: 63px;
    background: $b-button-bg;
    background-size: 100% 100%;
    font-weight: 700;
    font-size: 16px;
    cursor: pointer;
    &:hover {
      transition: .3s;
      box-shadow: 0 0 50px 0 $b-button-shadow;
    }
  }
}
</style>
