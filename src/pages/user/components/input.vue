<template>
  <div>
      <input placeholder-class="placeholder-class" :placeholder="placeholder"
        ref="input" :type="type" :value="currentValue" @input="handleInput" @blur="handleBlur"/>
  </div>
</template>

<script>
import Emitter from '../components/emitter'
export default {
  name: 'xFormItem',
  data () {
    return {
      currentValue: this.value, id: this.label
    }
  },
  mixins: [Emitter],
  props: {
    type: {type: String, default: 'text'},
    value: {type: String, default: ''},
    placeholder: {type: String, default: ''}
  },
  watch: {
    value (value) {
      this.currentValue = value
    }
  },
  methods: {
    handleInput (e) {
      const value = e.target.value
      this.currentValue = value
      this.$emit('input', value)
      this.dispatch('xFormItem', 'xform-change', value)
    },
    handleBlur () {
      this.dispatch('xFormItem', 'xform-blur', this.currentValue)
    }
  },
  mounted () {
    if (this.$parent.labelFor) this.$refs.input.id = this.$parent.labelFor
  }
}
</script>

<style lang="scss">
@import '@/css/common.scss';

.placeholder-class {
  color: #ccc;
  font-size: 34rpx;
}


</style>