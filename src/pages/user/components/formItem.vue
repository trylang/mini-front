<template :name="prop">
  <div>
    <div class="item-wrap" :style="{borderBottomColor: isShowMes? '#FA553D': 'D9D9D9'}">
      <label :for="labelFor" v-if="label">{{label}}</label>
      <slot></slot>
    </div>
    <text :class="['message', isShowMes?'message-show':'message-hide']">{{message}}</text>
  </div>
</template>

<script>
import AsyncValidator from 'async-validator'
import Emitter from '../components/emitter'
export default {
  name: 'xFormItem',
  data () {
    return {
      isRequired: false,
      isShowMes: false,
      message: '',
      labelFor: 'input' + new Date().valueOf()
    }
  },
  computed: {
    fieldValue () {
      return this.form.model[this.prop]
    }
  },
  props: {
    label: { type: String, default: '' },
    prop: { type: String }
  },
  methods: {
    setRules () {
      let rules = this.getRules()
      if (rules.length) {
        rules.forEach(rule => {
          if (rule.required !== undefined) this.isRequired = rule.required
        })
      }
      this.$on('xform-blur', this.onFieldBlur)
      this.$on('xform-change', this.onFieldChange)
    },
    getRules () {
      let formRules = this.form.rules
      formRules = formRules ? formRules[this.prop] : []
      return formRules
    },
    getFilteredRule (trigger) {
      const rules = this.getRules()
      return rules.filter(
        rule => !rule.trigger || rule.trigger.indexOf(trigger) !== -1
      )
    },
    validate (trigger, cb) {
      let rules = this.getFilteredRule(trigger)
      if (!rules || rules.length === 0) return true
      const validator = new AsyncValidator({ [this.prop]: rules })
      let model = { [this.prop]: this.fieldValue }
      validator.validate(model, { firstFields: true }, errors => {
        this.isShowMes = !!errors
        this.message = errors ? errors[0].message : ''
        if (cb) cb(this.message)
      })
    },
    resetField () {
      this.message = ''
      this.form.model[this.prop] = this.initialValue
    },
    onFieldBlur () {
      this.validate('blur')
    },
    onFieldChange () {
      this.validate('change')
    }
  },
  mixins: [Emitter],
  inject: ['form'],
  mounted () {
    if (this.prop) {
      this.dispatch('xForm', 'xform-add', this)
      this.initialValue = this.fieldValue
      console.log('initvalue', this.initialValue)
      this.setRules()
    }
  },
  beforeDestroy () {
    this.dispatch('xForm', 'xform-remove', this)
  }
}
</script>

<style lang="scss" scoped>
@import '@/css/common.scss';

.item-wrap {
  padding: 20rpx 0 20rpx 0;
  display: flex;
  transition: .5s;
}

.message {
  transition: .5s; 
  margin-top: 10rpx 0 0 60rpx;
  color: $error-color;
  font-size: 24rpx;
  opacity: 0;
}

.message-show {
  opacity: 1;
}
.message-hide {
  opacity: 0;
}
</style>

