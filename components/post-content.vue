<template>
  <!-- eslint-disable-next-line -->
  <div v-if="contentType === 'html'" v-html="parsedContent" class="content" />
  <div v-else>
    <p v-for="(text, i) in content.split('\n')" :key="i" v-text="text" />
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'
// @ts-ignore
import Prism from 'prismjs'
import 'prismjs/plugins/line-numbers/prism-line-numbers'
import 'prismjs/components/prism-markup-templating.js'
import 'prismjs/components/prism-clike'
import 'prismjs/components/prism-bash'
import 'prismjs/components/prism-c'
import 'prismjs/components/prism-cpp'
import 'prismjs/components/prism-java'
import 'prismjs/components/prism-php'
import 'prismjs/components/prism-python'
import 'prismjs/components/prism-ruby'
import 'prismjs/components/prism-scss'
import 'prismjs/components/prism-sql'

export default Vue.extend({
  props: {
    contentType: {
      type: String as PropType<'html' | 'text'>,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
  },
  computed: {
    parsedContent(): string {
      if (this.contentType === 'text') return this.content

      const knownLanguages = [
        'html',
        'xml',
        'javascript',
        'bash',
        'cpp',
        'java',
        'php',
        'python',
        'ruby',
        'scss',
        'sql',
      ]

      return this.content.replace(
        /<pre class="brush:(.*?);.*?">((?:.|\n)*?)<\/pre>/gm,
        (_match, language, code) => {
          if (language === 'jscript') language = 'javascript'
          if (language === 'css') language = 'scss'
          if (language === 'csharp') language = 'java'
          if (language === 'ps') language = 'bash'

          if (!knownLanguages.includes(language)) language = 'plaintext'

          return `<pre class="language-${language}"><code class="line-numbers language-${language}">${code.trim()}</code></pre>`
        }
      )
    },
  },
  mounted() {
    Prism.highlightAllUnder(this.$el)
    const codeBlocks = [...this.$el.querySelectorAll('pre')]

    codeBlocks.forEach((codeBlock) => {
      const baseWidth = codeBlock.offsetWidth
      const scrollWidth = codeBlock.scrollWidth

      if (scrollWidth <= baseWidth) return

      codeBlock.style.width = `${baseWidth}px`
      codeBlock.style.overflowX = 'scroll'

      codeBlock.addEventListener('mouseenter', () => {
        const offset = codeBlock.getBoundingClientRect()
        const widthToScreenBorder = window.innerWidth - offset.left - 40
        const newWidth = Math.min(scrollWidth + 1, widthToScreenBorder)
        codeBlock.style.width = `${newWidth}px`
      })

      codeBlock.addEventListener('mouseleave', () => {
        codeBlock.style.width = `${baseWidth}px`
      })
    })
  },
})
</script>

<style lang="scss" scoped>
.content ::v-deep {
  pre {
    border: 1px solid var(--box--border-color);
    transition: width 0.3s;
  }
}
</style>
