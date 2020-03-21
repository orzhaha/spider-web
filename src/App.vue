<template>
  <div id="app">
    <div>
      <p>
        If Element is successfully added to this project, you'll see an
        <code v-text="'<el-button>'"></code>
        below
      </p>
      <el-button>el-button</el-button>
    </div>
    <br />
    <div>
      <codemirror v-model="code" :options="cmOptions" />
    </div>
  </div>
</template>

<script>
import { codemirror } from 'vue-codemirror'
import 'codemirror/lib/codemirror.css'
import 'codemirror/mode/lua/lua'
import 'codemirror/theme/monokai.css'

export default {
  name: 'app',
  components: {
    codemirror
  },
  data() {
    return {
      code: 'x=0.34',
      cmOptions: {
        tabSize: 4,
        mode: 'text/x-lua',
        theme: 'monokai',
        lineNumbers: true,
        line: true
      }
    }
  }
}
</script>

<style>
#app {
  /* text style */
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
