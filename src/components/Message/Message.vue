<template>
    <transition name="fade">
        <div class="message" :class="type" v-show="show">
        <i class="icon"></i>
        <span class="text">{{text}}</span>
        </div>
    </transition>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'message',
    props: {
      type: {
        type: String,
        default: 'info',
        validator: val => ['info', 'success', 'warning', 'error'].includes(val)
      },
      text: {
        type: String,
        default: ''
      },
      show: {
        type: Boolean,
        default: false
      }
    }
  }
</script>

<style scoped lang="stylus">
  @import '../../common/stylus/mixin.styl';
   // fade动画 <transition name="fade"> </transition>
   // 下面的样式可以自己改
.fade-enter-active,
.fade-leave-active 
    transition: opacity .3s
.fade-enter,
.fade-leave-to
    opacity: 0
.message
    position fixed
    top 40px
    text-align center
    left 50%
    transform translateX(-50%)
    min-width 400px
    padding 10px 20px
    color $strong-text-color
    background #f5f5f5
    font-size 14px
    line-height 1.4
    border-radius 4px
    z-index 1000
    box-shadow 0 0 10px rgba(0, 0, 0, .3)
    &.info
        color $strong-text-color
    &.success
        color $success-color
    &.error
        color $danger-color
    &.warning
        color $warning-color
</style>