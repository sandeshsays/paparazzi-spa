<template>
  <button
  class="border rounded font-medium focus:outline-none"
  :class="[buttonType,buttonSize,buttonDisabled]"
  :disabled="disabled"
  v-on="$listeners"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: {
    danger: Boolean,
    primary: Boolean,
    small: Boolean,
    disabled: Boolean,
  },
  computed: {
    buttonType() {
      if (this.danger) return this.buttonDanger
      if (this.primary) return this.buttonPrimary
      return this.buttonDefault
    },

    buttonDanger() {
      return 'bg-red-100 border-red-300 text-red-700 hover:border-red-400 hover:text-red-800'
    },

    buttonPrimary() {
      return 'bg-blue-500 border-blue-300 text-white uppercase hover:border-blue-400 hover:text-blue-800'
    },

    buttonDefault() {
      return 'bg-white border-grey-400 hover:border-gray-500 hover:text-gray-900'
    },

    buttonSize(){
        return this.small ? 'px-4 py-1 text-xs' : 'px-4 py-2 text-sm'
    },

    buttonDisabled(){
        return this.disabled ? 'cursor-not-allowed' : 'shadow hover:shadow-md'
    },
  }
};
</script>

<style>
</style>
