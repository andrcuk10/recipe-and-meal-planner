<template>
  <label class="block">
    <span class="text-gray-700 font-semibold">
      <slot></slot>
    </span>
    <textarea
      @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
      :value="modelValue"
      class="form-textarea mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
    ></textarea>
    <ErrorFieldMessage :error="error" />
  </label>
</template>

<script setup lang="ts">
import ErrorFieldMessage from './ErrorFieldMessage.vue'
defineProps<{
  modelValue?: string
  error?: string
}>()

defineEmits(['update:modelValue'])
</script>
