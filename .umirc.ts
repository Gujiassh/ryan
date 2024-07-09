import { defineConfig } from "umi";

const routes = [
  { path: "/", component: "index", redirect: '/dashbord' },
  { path: "/docs", component: "docs" },
  { path: "/dashbord", component: "dashbord" },
]
export default defineConfig({
  routes: routes,
  npmClient: 'pnpm',
  locale: {
    antd: false, // 如果项目依赖中包含 `antd`，则默认为 true
    baseNavigator: true,
    baseSeparator: '-',
    default: 'zh-CN',
    title: false,
    useLocalStorage: true,
  },
  plugins: ['@umijs/plugins/dist/locale',],
});
