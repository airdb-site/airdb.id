# airdb.id — 统一身份平台 · 宣传首页

airdb 体系统一身份平台（SSO / OIDC / 实名核验 / 零信任 / 机器人身份）的**纯静态宣传首页**（Astro）。

本仓库**只做首页展示**——说明平台要做什么、怎么做、做到哪一步了。
IdP、账号中心、实名核验（Vault）等后端系统均为独立项目，不在本仓库。

核心口径：

- **一个身份，通行所有 airdb 服务**：OIDC / OAuth 2.1 单点登录；
- **核验即弃**：实名核验只留「结果 + 哈希 + 时间」，不留证件影像与明文证件号；
- **机器人也有身份**：AI Agent / 爬虫 / 自动化任务持 Agent ID 上岗——归属到已实名的人、
  短时效凭据、act 代行委托、全程可审计（标准协议：OAuth 2.1 client credentials + Token Exchange）；
- 环境约定：**国内走 id.airdb.net（已备案），海外走 airdb.id**（`.id` 无法 ICP 备案，仅部署海外节点），两边一一对应。

## 开发

```bash
pnpm install
pnpm dev      # 或 make run
pnpm build    # 构建产物输出到 dist/，Netlify 使用相同命令
```

## 目录结构

- `src/config/site.ts` — **能力清单 / 路线图 / 环境与接入方（对外口径的权威来源，改这里）**
- `src/pages/index.astro` — 首页（唯一的内容页）
- `src/layouts/ProductLayout.astro` — 站点外壳（导航 / 页脚 / SEO）
- `src/styles/product.css` — 设计体系（证件纸感：paper + 护照藏青 + 印章红，Fraunces + IBM Plex）
- `static/` — 静态资源（`publicDir`）

## 归档

- `archive/legacy-nonprofit/` — 原公益组织站点（Hugo 迁移内容），不参与构建；
- `archive/devportal/` — 本仓库改造前的 airdb.dev 研发门户页面（docs / get-access / portal.ts），
  研发门户现另行维护，如需参考直接从该目录取。
