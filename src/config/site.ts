// airdb.id 站点数据：能力清单、路线图、环境与接入方的权威来源（改这里）。
// 本站是纯静态宣传首页；IdP / 账号中心 / Vault 均为独立项目，此处只登记对外口径。

export type Status = "live" | "building" | "planned";

export const STATUS_LABEL: Record<Status, string> = {
  live: "已上线",
  building: "建设中",
  planned: "规划中",
};

/* ---------------- 平台能力 ---------------- */

export type Capability = {
  no: string;
  title: string;
  copy: string;
  status: Status;
  phase: string;
};

export const CAPABILITIES: Capability[] = [
  {
    no: "01",
    title: "统一登录 SSO",
    copy: "OIDC / OAuth 2.1 单点登录，BBS、XAdmin、门户共用一个账号，登录一次全线通行。",
    status: "building",
    phase: "P0",
  },
  {
    no: "02",
    title: "账号中心",
    copy: "资料、第三方绑定、登录设备与历史，一处管理；授权过的应用随时一键撤销。",
    status: "building",
    phase: "P0",
  },
  {
    no: "03",
    title: "Passkey 与多因素",
    copy: "WebAuthn 无密码登录作为一等公民，TOTP 与短信兜底，密码只是过渡方案。",
    status: "planned",
    phase: "P1",
  },
  {
    no: "04",
    title: "审计与风控",
    copy: "登录与授权事件全量留痕，只增不改；异地登录、异常行为主动告警。",
    status: "planned",
    phase: "P1",
  },
  {
    no: "05",
    title: "实名核验 · 核验即弃",
    copy: "对接权威数据源核验身份证与护照，只留「已核验」结果与哈希，不留任何影像。",
    status: "planned",
    phase: "P2",
  },
  {
    no: "06",
    title: "零信任接入",
    copy: "内部系统统一挂身份感知代理，按角色与 MFA 等级放行，业务自身不再做登录。",
    status: "planned",
    phase: "P3",
  },
];

/* ---------------- 核验即弃 ---------------- */

export const VERIFY_STEPS = [
  {
    no: "①",
    title: "提交核验",
    copy: "证件信息仅在这一次核验请求中使用，全程加密传输，不落任何中间存储。",
  },
  {
    no: "②",
    title: "权威源比对",
    copy: "对接公安三要素等权威数据源实时比对，我们做通道，不做证件的抄写员。",
  },
  {
    no: "③",
    title: "即时丢弃",
    copy: "比对完成即丢弃原始数据，只写下三样东西：结果、哈希、时间。",
  },
];

export const VERIFY_KEEP = [
  { field: "verified", note: "已实名 · 布尔值与核验等级" },
  { field: "hmac(证件号)", note: "单向哈希 · 仅用于查重" },
  { field: "verified_at", note: "核验时间与审计流水" },
];

export const VERIFY_DISCARD = [
  { field: "证件影像", note: "身份证、护照、工作证照片" },
  { field: "明文证件号", note: "任何可还原的证件号码" },
  { field: "人脸数据", note: "活体检测的原始帧" },
];

/* ---------------- 路线图 ---------------- */

export type Phase = {
  key: string;
  title: string;
  copy: string;
  status: Status;
};

export const ROADMAP: Phase[] = [
  {
    key: "P0",
    title: "SSO 落地",
    copy: "OIDC IdP 上线，BBS 与 XAdmin 首批接入，账号中心提供资料与密码管理。",
    status: "building",
  },
  {
    key: "P1",
    title: "安全加固",
    copy: "Passkey / TOTP 多因素，登录历史与全量审计，管理后台与应用注册。",
    status: "planned",
  },
  {
    key: "P2",
    title: "实名体系",
    copy: "核验即弃的实名核验上线；业务方只能查询「是否已实名」，拿不到证件数据。",
    status: "planned",
  },
  {
    key: "P3",
    title: "零信任",
    copy: "身份感知代理覆盖内部系统，SCIM 用户同步与细粒度授权。",
    status: "planned",
  },
];

/* ---------------- 环境与接入方 ---------------- */

export const ENVIRONMENTS = [
  {
    tag: "CN · 已备案",
    host: "id.airdb.net",
    copy: "国内环境，国内用户数据只落国内节点，敏感数据不跨境同步。",
  },
  {
    tag: "GLOBAL",
    host: "airdb.id",
    copy: "海外环境，与国内系统一一对应；.id 域名无法 ICP 备案，仅部署海外节点。",
  },
];

export type Consumer = {
  name: string;
  host: string;
  url: string;
  status: Status;
};

export const CONSUMERS: Consumer[] = [
  { name: "论坛 BBS", host: "bbs.airdb.net / bbs.airdb.dev", url: "https://bbs.airdb.dev", status: "building" },
  { name: "管理后台 XAdmin", host: "xadmin.airdb.net / airdb.io/xadmin", url: "https://airdb.io/xadmin", status: "building" },
  { name: "研发门户", host: "airdb.dev", url: "https://airdb.dev", status: "planned" },
  { name: "宝贝回家论坛", host: "bbs.baobeihuijia.com", url: "https://bbs.baobeihuijia.com", status: "planned" },
];

/* ---------------- 常见问题 ---------------- */

export type Faq = { q: string; a: string };

export const FAQS: Faq[] = [
  {
    q: "「核验即弃」之后，你们手里还有什么？",
    a: "只有三样：已实名的布尔结果与核验等级、证件号的单向哈希（仅用于查重，无法还原）、核验时间与审计流水。证件影像、明文证件号、活体检测的原始帧，在比对完成的那一刻即时丢弃，不落任何存储。",
  },
  {
    q: "业务系统能拿到我的证件信息吗？",
    a: "不能。业务方只能调用实名查询接口，得到「是否已实名」与核验等级两个字段。这不是权限问题，而是架构问题——证件数据我们自己也没有留存，想给也给不出来。",
  },
  {
    q: "国内和海外是一个账号吗？数据存在哪里？",
    a: "账号一一对应、全线互通：国内走 id.airdb.net（已备案），海外走 airdb.id。依照《个人信息保护法》，国内用户的敏感数据只落国内节点，不做跨境同步。",
  },
  {
    q: "为什么不让各系统自己做登录？",
    a: "登录这件事做一次就够了。密码策略、Passkey、风控、审计，集中在一处建设和修补，比散落在每个系统里各修各的可靠得多；业务系统只做业务，暴露的攻击面也更小。",
  },
  {
    q: "现在可以接入吗？",
    a: "SSO 正在建设中（P0 阶段）。接入走标准 OIDC：先在 GitHub 提 issue 登记排期，IdP 上线后把 discovery 地址指向 airdb.id 即可，业务逻辑无需改造。",
  },
];

/* ---------------- 常量 ---------------- */

// IdP 上线前先指向现行 SSO 入口，上线后切到 airdb.id 自身。
export const SSO_URL = "https://sso.airdb.dev";
export const GITHUB_URL = "https://github.com/airdb";
export const DEV_PORTAL_URL = "https://airdb.dev";
