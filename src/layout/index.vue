<template>
  <div>
    <a-layout id="components-layout-demo-custom-trigger" style="height: 100vh">
      <a-layout-sider
        v-model:collapsed="collapsed"
        :trigger="null"
        collapsible
        style="overflow-y: scroll"
        class="menuSider"
      >
        <!-- 顶部的logo -->
        <div class="logo" />

        <!-- 菜单列表 -->
        <a-menu theme="dark" mode="inline" v-model:selectedKeys="selectedKeys">
          <!-- :key 选择重定向地址 || path -->
          <a-menu-item v-for="item in routes" :key="item.redirect || item.path">
            <router-link :to="item.path">
              <my-icon :type="item.meta.icon" />

              <span>{{ item.meta.title || "" }}</span>
            </router-link>
          </a-menu-item>
        </a-menu>
      </a-layout-sider>

      <a-layout>
        <!-- 顶部操作栏 -->
        <a-layout-header style="background: #fff; padding: 0">
          <menu-unfold-outlined
            v-if="collapsed"
            class="trigger"
            @click="() => (collapsed = !collapsed)"
          />

          <menu-fold-outlined
            v-else
            class="trigger"
            @click="() => (collapsed = !collapsed)"
          />
        </a-layout-header>

        <!-- 业务页面 -->
        <a-layout-content
          :style="{
            margin: '24px 16px',
            padding: '24px',
            background: '#fff',
            minHeight: 'auto',
          }"
        >
          <router-view v-slot="{ Component }">
            <keep-alive :include="cachedViews">
              <component :is="Component" :key="key" />
            </keep-alive>
          </router-view>
        </a-layout-content>
      </a-layout>
    </a-layout>
  </div>
</template>

<script lang="ts">
import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons-vue";
import { useStore } from "vuex";
import { ref } from "vue";
import { getCurrentInstance } from "vue";
import { createFromIconfontCN } from "@ant-design/icons-vue";

const MyIcon = createFromIconfontCN({
  scriptUrl: "//at.alicdn.com/t/font_2379642_k23gr2d16ne.js", // 在 iconfont.cn 上生成
});
export default {
  components: {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    MyIcon,
  },
  data() {
    return {
      routes: [],
    };
  },
  setup() {
    const store = useStore();
    const ctx: any = getCurrentInstance();

    // 当前 menu key ，默认为当前路由path
    const selectedKeys = ref<string[]>([
      ctx.ctx.$router.currentRoute.value.path,
    ]);

    const collapsed = ref<boolean>(false);

    let routes: any = [];

    store.state.permission.routes.map((v: any) => {
      if (!v.hidden) {
        routes.push(v);
      }
    });
    return {
      routes,
      selectedKeys,
      collapsed,
    };
  },
  computed: {
    cachedViews() {
      return [];
    },
    key() {
      return this.$route.path;
    },
  },
};
</script>
<style>
#components-layout-demo-custom-trigger .trigger {
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color 0.3s;
}

#components-layout-demo-custom-trigger .trigger:hover {
  color: #1890ff;
}

#components-layout-demo-custom-trigger .logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px;
}

.ant-layout::-webkit-scrollbar,
.menuSider::-webkit-scrollbar {
  width: 0 !important;
}
</style>
