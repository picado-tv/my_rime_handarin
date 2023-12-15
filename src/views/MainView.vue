<script setup lang="ts">
import { ref, computed, watch, defineAsyncComponent } from 'vue'
import { useRoute } from 'vue-router'
import { NInput, NSpace, NSwitch, useMessage, NH1 } from 'naive-ui'
import MyMenu from '../components/MyMenu.vue'
import MyPanel from '../components/MyPanel.vue'
import MyBar from '../components/MyBar.vue'
import MyAppearance from '../components/MyAppearance.vue'
import MyFont from '../components/MyFont.vue'
import MyDeployer from '../components/MyDeployer.vue'
import type MySimulator from '../components/MySimulator.vue'
import type MyEditor from '../components/MyEditor.vue'
import MicroPlum from '../components/micro-plum/MicroPlum.vue'
import MyPlatform from '../components/MyPlatform.vue'
import {
  setQuery,
  getTextarea,
  getQueryString,
  isMobile
} from '../util'
import {
  init,
  text
} from '../control'
import { setMessage } from '../micro-plum'

setQuery(useRoute().query)
setMessage(useMessage())
init()

let savedStart = 0
let savedEnd = 0

function onBlur () {
  const textarea = getTextarea()
  savedStart = textarea.selectionStart
  savedEnd = textarea.selectionEnd
}

function onFocus () {
  const textarea = getTextarea()
  textarea.selectionStart = savedStart
  textarea.selectionEnd = savedEnd
}

const panel = ref<InstanceType<typeof MyPanel>>()
const simulator = ref<InstanceType<typeof MySimulator>>()
const editor = ref<InstanceType<typeof MyEditor>>()

const advancedLoaded = ref<boolean>(Boolean(getQueryString('debug')))
const showAdvanced = ref<boolean>(advancedLoaded.value)
const editorLoaded = ref<boolean>(advancedLoaded.value && !isMobile.value)
const showEditor = computed(() => showAdvanced.value && !isMobile.value)

watch(showEditor, (newValue: boolean) => {
  if (newValue) {
    editorLoaded.value = true
  }
})

function toggleAdvanced (newValue: boolean) {
  advancedLoaded.value = true
  showAdvanced.value = newValue
}

const AsyncSimulator = defineAsyncComponent(() => import('../components/MySimulator.vue'))
const AsyncEditor = defineAsyncComponent(() => import('../components/MyEditor.vue'))
</script>

<template>
  <n-space
    vertical
    class="my-column"
  >
    <n-input
      id="container"
      v-model:value="text"
      type="textarea"
      :input-props="{ autocapitalize: 'off' }"
      :rows="15"
      clearable
      @blur="onBlur"
      @focus="onFocus"
    />
    <my-bar />
    <div style="cursor: pointer; text-align: center; margin-top: 16px">
      <n-h1> 韩官话 演示<br/><span style="font-size: smaller"> 한관화 연시 </span> </n-h1>
    </div>
    <my-menu />
    <my-panel
      ref="panel"
      :debug-mode="simulator?.debugMode"
    />
    <my-appearance />
    <my-font />
    <my-deployer />
    <micro-plum />
    <n-space style="align-items: center">
      <h3>Advanced</h3>
      <n-switch
        :value="showAdvanced"
        @update:value="toggleAdvanced"
      />
    </n-space>
    <component
      :is="AsyncSimulator"
      v-if="advancedLoaded"
      v-show="showAdvanced"
      ref="simulator"
      :debug="panel?.debug"
    />
    <component
      :is="AsyncEditor"
      v-if="editorLoaded"
      v-show="showEditor"
      ref="editor"
    />
    <my-platform />
  </n-space>
  
  <div class="my-footer">
    <p> The Web IME is forked from <a class="n-a" href="https://github.com/LibreService/my_rime/commit/8bd65bd024189bdd7aad0b987d0b727a292d9ee0" target="_blank" style="--n-text-color: #18a058; --n-bezier: cubic-bezier(.4, 0, .2, 1);">My Rime</a></p>
    <p> Commit <a class="n-a" href="https://github.com/LibreService/my_rime/commit/8bd65bd024189bdd7aad0b987d0b727a292d9ee0" target="_blank" style="--n-text-color: #18a058; --n-bezier: cubic-bezier(.4, 0, .2, 1);">8bd65bd</a> · Built at 11/22/2023, 6:53:37 AM</p>
  </div>
</template>
