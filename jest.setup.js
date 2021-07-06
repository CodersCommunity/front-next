import path from 'path'
import glob from 'glob'
import Vue from 'vue'
import camelcase from 'camelcase'

// Automatically register all components
const fileComponents = glob.sync(path.join(__dirname, './components/**/*.vue'))

for (const file of fileComponents) {
  const name = (file.match(/([\w-]*)\.vue$/) || [])[1]

  if (name) {
    Vue.component(camelcase(name), require(file).default)
  }
}
