<template>
  <a-config-provider :locale="locale">
    <router-view />
  </a-config-provider>
</template>

<script lang="ts">
import zhCN from "ant-design-vue/es/locale/zh_CN";
export default {
  name: "App",
  created() {},
  data() {
    return {
      locale: zhCN,
    };
  },
};
</script>

<style>
/* 隐藏 tinymce 提示弹窗 */
.tox-notifications-container {
  display: none !important;
}
</style>
