<script setup lang="ts">
import { useForm } from 'vee-validate'
import { toTypedSchema } from '@vee-validate/zod'
import { createRecipeSchema } from '@/schemas/recipeSchema'
import ButtonItem from '../ButtonItem.vue'

const { errors, handleSubmit, defineField } = useForm({
  validationSchema: toTypedSchema(createRecipeSchema),
})

const [name, nameAttrs] = defineField('name')
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
    <label class="block">
      <span class="text-gray-700 font-semibold">Naziv recepta</span>
      <input
        type="text"
        v-model="name"
        v-bind="nameAttrs"
        class="form-input mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
      />
      <div class="text-sm text-red-600">{{ errors.name }}</div>
    </label>

    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      <label class="block">
        <span class="text-gray-700 font-semibold">Porcije</span>
        <input
          type="number"
          v-model="servings"
          v-bind="servingsAttrs"
          class="form-input mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        />
        <div class="text-sm text-red-600">{{ errors.servings }}</div>
      </label>

      <label class="block">
        <span class="text-gray-700 font-semibold">Priprema(min)</span>
        <input
          type="number"
          v-model="prepTime"
          v-bind="prepTimeAttrs"
          class="form-input mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        />
      </label>

      <label class="block">
        <span class="text-gray-700 font-semibold">Kuvanje(min)</span>
        <input
          type="number"
          v-model="cookTime"
          v-bind="cookTimeAttrs"
          class="form-input mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        />
      </label>

      <label class="block">
        <span class="text-gray-700 font-semibold">Težina</span>
        <select
          v-model="difficulty"
          v-bind="difficultyAttrs"
          class="form-select mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        >
          <option value="easy">Lako</option>
          <option value="mid">Srednje</option>
          <option value="hard">Tesko</option>
        </select>
      </label>
    </div>

    <label class="block">
      <span class="text-gray-700 font-semibold">Opis recepta</span>
      <textarea
        v-model="description"
        v-bind="descriptionAttrs"
        class="form-textarea mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
      ></textarea>
    </label>

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
