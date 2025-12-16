<script setup lang="ts">
import { useForm } from 'vee-validate'
import { toTypedSchema } from '@vee-validate/zod'
import { createRecipeSchema } from '@/schemas/recipeSchema'
import ButtonItem from '../ButtonItem.vue'
import InputField from '../inputs/InputField.vue'
import SelectField from '../inputs/SelectField.vue'
import TextareaField from '../inputs/TextareaField.vue'

const { errors, handleSubmit, defineField } = useForm({
  validationSchema: toTypedSchema(createRecipeSchema),
})

const [name, nameAttrs] = defineField('name', { props: (state) => ({ error: state.errors[0] }) })
const [servings, servingsAttrs] = defineField('servings')
const [prepTime, prepTimeAttrs] = defineField('prepTime')
const [cookTime, cookTimeAttrs] = defineField('cookTime')
const [difficulty, difficultyAttrs] = defineField('difficulty')
const [description, descriptionAttrs] = defineField('description')

const onSubmit = handleSubmit((values, { resetForm }) => {
  alert(JSON.stringify(values, null, 2))
  resetForm()
})
</script>

<template>
  <form @submit="onSubmit" class="mt-4 flex flex-col gap-4">
    <InputField type="text" v-model="name" v-bind="nameAttrs">Naziv recepta</InputField>

    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      <InputField type="number" v-model="servings" :error="errors.servings" v-bind="servingsAttrs"
        >Porcije</InputField
      >

      <InputField type="number" v-model="prepTime" v-bind="prepTimeAttrs" :error="errors.prepTime"
        >Priprema(min)</InputField
      >

      <InputField type="number" v-model="cookTime" v-bind="cookTimeAttrs" :error="errors.cookTime"
        >Kuvanje(min)</InputField
      >

      <SelectField v-model="difficulty" v-bind="difficultyAttrs" :error="errors.difficulty">
        <template #default>Težina</template>
        <template #options>
          <option value="easy">Lako</option>
          <option value="mid">Srednje</option>
          <option value="hard">Tesko</option>
        </template>
      </SelectField>
    </div>

    <TextareaField v-model="description" v-bind="descriptionAttrs" :error="errors.description"
      >Opis recepta</TextareaField
    >

    <div class="flex gap-2">
      <RouterLink :to="{ name: 'Recipes' }" class="flex-1">
        <ButtonItem class-name="w-full bg-transparent border-slate-200 hover:bg-slate-100">
          Otkazi
        </ButtonItem>
      </RouterLink>
      <ButtonItem
        class-name="flex-1 w-full bg-emerald-600 border-slate-200 hover:bg-emerald-700 text-white"
        >Sacuvaj recept</ButtonItem
      >
    </div>
  </form>
</template>
