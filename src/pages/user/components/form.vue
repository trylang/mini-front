<template>
  <div>
    <slot></slot>
  </div>
</template>

<script>
import { setTimeout } from 'timers'
export default {
  name: 'xForm',
  data () {
    return {fields: []}
  },
  props: {
    model: {type: Object},
    rules: {type: Object}
  },
  provide () {
    return {form: this}
  },
  methods: {
    resetFields () {
      this.fields.forEach(field => field.resetField())
    },
    validate (cb) {
      return new Promise(resolve => {
        let valid = true
        let count = 0
        this.fields.forEach(field => {
          field.validate('', error => {
            if (error) valid = false
            if (++count === this.fields.length) {
              resolve(valid)
              if (typeof cb === 'function') cb(valid)
            }
          })
        })
      })
    }
  },
  created () {
    let haha = []
    this.$on('xform-add', field => {
      if (field) haha.push(field)
      // this.fields.push(field)
      // console.log(this.fields)
      return false
    })
    this.$on('xform-remove', field => {
      if (field.prop) this.fields.splice(this.fields.indexOf(field), 1)
      return false
    })
    setTimeout(() => {
      this.fields = haha
      console.log(654, this.fields)
    }, 100)
  }
}
</script>
