import { mount } from '@vue/test-utils'
import { CategoryDto } from '~/services/__generated-api'
import CategoriesItem from '@/components/categories-item.vue'

const exampleCategory: CategoryDto = {
  id: 1,
  description: 'description',
  path: 'path',
  questionsCount: 12,
  slug: 'slug',
  subcategories: [],
  title: 'title',
}

describe('CategoriesItem', () => {
  test.todo('is a list item')
  test.todo('has heading with level based on depth')
  test.todo('has title')
  test.todo('has questions count')
  test.todo('has description')
  test.todo('has subcategories')
  test.todo('links to questions by category slug')
})
