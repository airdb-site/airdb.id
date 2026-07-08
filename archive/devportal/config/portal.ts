// 研发门户数据：系统台账与门户能力清单。
// 域名与系统的权威来源是本文件；原始清单来自 content/zh/dev（已归档）。

export type Access = "public" | "staff";
export type Status = "live" | "migrating" | "planned";

export type SystemItem = {
  name: string;
  host: string;
  url: string;
  access: Access;
  status?: Status;
};

export type SystemGroup = {
  key: string;
  title: string;
  note: string;
  items: SystemItem[];
};

export const SYSTEM_GROUPS: SystemGroup[] = [
  {
    key: "code",
    title: "代码托管",
    note: "主站 + 国内镜像",
    items: [
      { name: "GitHub 主站", host: "github.com/airdb", url: "https://github.com/airdb", access: "public" },
      { name: "Gitee 镜像", host: "gitee.com/airdb", url: "https://gitee.com/airdb", access: "public" },
    ],
  },
  {
    key: "cn",
    title: "国内环境",
    note: "airdb.net · 已备案",
    items: [
      { name: "用户系统 SSO", host: "sso.airdb.net", url: "https://sso.airdb.net", access: "staff" },
      { name: "论坛 BBS", host: "bbs.airdb.net", url: "https://bbs.airdb.net", access: "public" },
      { name: "管理后台 XAdmin", host: "xadmin.airdb.net", url: "https://xadmin.airdb.net", access: "staff" },
    ],
  },
  {
    key: "global",
    title: "海外环境",
    note: "airdb.dev / airdb.io",
    items: [
      { name: "用户系统 SSO", host: "sso.airdb.dev", url: "https://sso.airdb.dev", access: "staff" },
      { name: "论坛 BBS", host: "bbs.airdb.dev", url: "https://bbs.airdb.dev", access: "public" },
      { name: "管理后台 XAdmin", host: "airdb.io/xadmin", url: "https://airdb.io/xadmin", access: "staff" },
    ],
  },
  {
    key: "prod",
    title: "正式环境",
    note: "业务站点",
    items: [
      { name: "宝贝回家论坛", host: "bbs.baobeihuijia.com", url: "https://bbs.baobeihuijia.com", access: "public", status: "migrating" },
    ],
  },
];

export type Capability = {
  no: string;
  title: string;
  copy: string;
  status: Status | "staff";
  href?: string;
};

export const CAPABILITIES: Capability[] = [
  {
    no: "01",
    title: "开发文档",
    copy: "对外公开的平台与 API 文档，无需登录即可阅读、可被搜索引擎索引。",
    status: "live",
    href: "/docs/",
  },
  {
    no: "02",
    title: "内部组件库",
    copy: "前后端通用组件的文档、用法示例与版本记录，替代散落在各仓库的 README。",
    status: "planned",
  },
  {
    no: "03",
    title: "部署运维手册",
    copy: "从构建、发布到排障的标准流程，沉淀在文档里，而不是聊天记录里。",
    status: "planned",
  },
  {
    no: "04",
    title: "CI/CD 工具链",
    copy: "流水线与构建状态入口，跟随代码托管平台提供，按仓库授权。",
    status: "staff",
    href: "https://github.com/airdb",
  },
  {
    no: "05",
    title: "资产台账",
    copy: "域名、服务器与系统的权威清单，本页系统导航即第一版台账。",
    status: "live",
    href: "/#systems",
  },
  {
    no: "06",
    title: "埋点统计后台",
    copy: "数据看板与埋点统计工具的入口，员工经 SSO 登录后使用。",
    status: "staff",
    href: "https://airdb.io/xadmin",
  },
];

export const STATUS_LABEL: Record<Capability["status"], string> = {
  live: "已上线",
  migrating: "迁移中",
  planned: "筹备中",
  staff: "需登录",
};

export const SSO_URL = "https://sso.airdb.dev";
export const GITHUB_URL = "https://github.com/airdb";
