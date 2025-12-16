<template>
  <label class="block">
    <span class="text-gray-700 font-semibold">
      <slot></slot>
    </span>
    <input
      :type="type"
      :value="modelValue"
      @input="
        $emit(
          'update:modelValue',
          type === 'number'
            ? parseInt(($event.target as HTMLInputElement).value)
            : ($event.target as HTMLInputElement).value,
        )
      "
      class="form-input mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
    />
    <ErrorFieldMessage :error="error" />
  </label>
</template>

<script setup lang="ts" generic="T">
import ErrorFieldMessage from './ErrorFieldMessage.vue'
defineProps<{
  modelValue: T
  type: string
  error?: string
}>()

defineEmits(['update:modelValue'])
</script>
