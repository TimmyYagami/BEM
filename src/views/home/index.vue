<template>
  <div>
    <myHeader />
    <signUp />

    <div id="describe" style="width: 100px;height: 800px;" />
  </div>
</template>

<script>
import myHeader from './header'
import signUp from './signUp'

export default {
  name: 'Home',
  components: {
    myHeader,
    signUp,
  },
}
</script>

