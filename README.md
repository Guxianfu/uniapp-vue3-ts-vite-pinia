# 项目使用方法

## 1. 安装依赖
```shell
git clone https://github.com/Guxianfu/uniapp-vue3-ts-vite-pinia.git
yarn install
<!--如果vue报错,可以尝试安装 -->
yarn upgrade
```

## 2. 运行项目
```shell
yarn run dev:h5
```

## 3. 打包项目
```shell
<!--最好是用hbuildx打包 -->
yarn run build:h5
```

## 4. 实现功能
- [x] il8n
- [x] 路由守卫
- [x] tabbar
- [x] pinia

## 5. husky 提交字段
| 提交字段 | 说明 |
| --- | --- |
| feat: | 增加新功能 |
| fix: | 修复问题/BUG |
| style: | 代码风格相关（无影响运行结果的） |
| perf: | 优化/性能提升 |
| refactor: | 重构 |
| revert: | 撤销修改 |
| test: | 测试相关 |
| docs: | 文档/注释 |
| chore: | 依赖更新/脚手架配置修改等 |
| workflow: | 工作流改进 |
| ci: | 持续集成 |
| types: | 类型定义文件更改 |
| wip: | 开发中 |