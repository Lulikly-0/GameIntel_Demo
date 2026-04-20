// Mock GameIntel dataset — reflects real template field structure
// All monetary values in Million; ratios as decimals (0.15 = 15%)

window.GI_DATA = {
  meta: {
    period: "2026 Q1",
    period_end: "2026-03-31",
    publish_date: "2026-04-18",
    currency_note: "统一换算为美元（Million USD），便于横向对比",
  },

  companies: {
    tencent: {
      id: "tencent",
      name_cn: "腾讯",
      name_en: "Tencent",
      ticker: "0700.HK",
      tier: 5,
      currency: "CNY",
      status: "listed",
      aliases: ["Tencent", "腾讯控股"],
      markets: ["中国", "全球"],
      genres: ["MOBA", "射击", "MMO", "沙盒"],
      ir_url: "https://www.tencent.com/en-us/investors.html",
      positioning: "中国游戏龙头，MOBA 与射击双支柱，决定 MOBA 市场的竞争节奏",
      products: ["honor-of-kings", "peacekeeper", "delta-force"],
      quarters: [
        { q: "2024Q2", revenue_game: 6510, revenue_company: 22950, yoy: 0.090, gm: 0.528, om: 0.319, pcm: 0.308, rd: 0.098, sm: 0.046, ga: 0.068, drivers: ["Supercell 合并", "王者稳固"], drags: [] },
        { q: "2024Q3", revenue_game: 6850, revenue_company: 23420, yoy: 0.125, gm: 0.534, om: 0.327, pcm: 0.315, rd: 0.102, sm: 0.050, ga: 0.070, drivers: ["DnF Mobile", "王者周年庆"], drags: [] },
        { q: "2024Q4", revenue_game: 7050, revenue_company: 24860, yoy: 0.200, gm: 0.540, om: 0.333, pcm: 0.322, rd: 0.103, sm: 0.055, ga: 0.068, drivers: ["DnF Mobile", "和平精英"], drags: [] },
        { q: "2025Q1", revenue_game: 7530, revenue_company: 25420, yoy: 0.240, gm: 0.546, om: 0.345, pcm: 0.331, rd: 0.104, sm: 0.049, ga: 0.066, drivers: ["DnF Mobile 满季", "和平精英"], drags: [] },
        { q: "2025Q4", revenue_game: 7320, revenue_company: 26150, yoy: 0.038, gm: 0.551, om: 0.338, pcm: 0.325, rd: 0.108, sm: 0.058, ga: 0.070, drivers: ["海外增长"], drags: ["DnF Mobile 高基数"] },
        { q: "2026Q1", revenue_game: 7820, revenue_company: 27180, yoy: 0.039, qoq: 0.068, gm: 0.556, om: 0.349, pcm: 0.334, rd: 0.109, sm: 0.051, ga: 0.066, drivers: ["三角洲行动", "海外 Riot 管线"], drags: ["DnF Mobile 同比高基数"], strategy: ["长青产品运营", "海外扩张", "AI 提效"] },
      ],
    },

    netease: {
      id: "netease",
      name_cn: "网易",
      name_en: "NetEase",
      ticker: "NTES",
      tier: 5,
      currency: "CNY",
      status: "listed",
      markets: ["中国", "日本", "北美"],
      genres: ["MMO", "二次元", "端游"],
      positioning: "自研能力最强的第二梯队龙头，影响二次元与 MMO 品类供给",
      products: ["identity-v", "naraka"],
      quarters: [
        { q: "2024Q4", revenue_game: 2820, revenue_company: 3450, yoy: 0.020, gm: 0.625, om: 0.268, pcm: 0.255, rd: 0.182, sm: 0.070, ga: 0.043, drivers: ["蛋仔派对"], drags: [] },
        { q: "2025Q1", revenue_game: 3090, revenue_company: 3760, yoy: 0.125, gm: 0.641, om: 0.297, pcm: 0.283, rd: 0.179, sm: 0.075, ga: 0.042, drivers: ["燕云十六声"], drags: [] },
        { q: "2025Q4", revenue_game: 2940, revenue_company: 3580, yoy: 0.043, gm: 0.637, om: 0.283, pcm: 0.270, rd: 0.186, sm: 0.082, ga: 0.045, drivers: [], drags: ["MMO 老产品下滑"] },
        { q: "2026Q1", revenue_game: 3280, revenue_company: 3920, yoy: 0.061, qoq: 0.116, gm: 0.652, om: 0.306, pcm: 0.291, rd: 0.181, sm: 0.078, ga: 0.042, drivers: ["漫威争锋", "燕云十六声稳态"], drags: ["传统 MMO 老化"], strategy: ["全球化发行", "自研旗舰"] },
      ],
    },

    sea: {
      id: "sea",
      name_cn: "东海（Garena）",
      name_en: "Sea Ltd.",
      ticker: "SE",
      tier: 5,
      currency: "USD",
      status: "listed",
      markets: ["东南亚", "拉美", "印度"],
      genres: ["射击", "派对"],
      positioning: "东南亚+拉美新兴市场游戏发行龙头，Free Fire 回暖影响沐瞳核心市场",
      products: ["free-fire"],
      quarters: [
        { q: "2024Q4", revenue_game: 540, revenue_company: 4950, yoy: 0.340, gm: 0.472, om: 0.095, pcm: 0.088, rd: 0.062, sm: 0.195, ga: 0.085, drivers: ["Free Fire 回暖"], drags: [] },
        { q: "2025Q1", revenue_game: 580, revenue_company: 5320, yoy: 0.510, gm: 0.481, om: 0.108, pcm: 0.098, rd: 0.060, sm: 0.198, ga: 0.082, drivers: ["Free Fire 巴西"], drags: [] },
        { q: "2025Q4", revenue_game: 590, revenue_company: 5510, yoy: 0.093, gm: 0.484, om: 0.112, pcm: 0.103, rd: 0.061, sm: 0.202, ga: 0.081, drivers: ["Free Fire"], drags: [] },
        { q: "2026Q1", revenue_game: 672, revenue_company: 5820, yoy: 0.159, qoq: 0.139, gm: 0.489, om: 0.124, pcm: 0.115, rd: 0.062, sm: 0.196, ga: 0.079, drivers: ["Free Fire 拉美持续", "Delta Force 代理"], drags: [], strategy: ["新兴市场深耕", "第二游戏矩阵"] },
      ],
    },

    krafton: {
      id: "krafton",
      name_cn: "魁匠团（Krafton）",
      name_en: "Krafton",
      ticker: "259960.KS",
      tier: 5,
      currency: "KRW",
      status: "listed",
      markets: ["印度", "全球"],
      genres: ["射击", "大逃杀"],
      positioning: "PUBG IP 掌控者，印度市场对 BGMI 依赖度高",
      products: ["bgmi", "pubg-mobile"],
      quarters: [
        { q: "2024Q4", revenue_game: 480, revenue_company: 485, yoy: 0.063, gm: 0.718, om: 0.312, pcm: 0.298, rd: 0.198, sm: 0.118, ga: 0.075, drivers: ["BGMI 回归"], drags: [] },
        { q: "2025Q1", revenue_game: 595, revenue_company: 600, yoy: 0.310, gm: 0.735, om: 0.358, pcm: 0.341, rd: 0.205, sm: 0.102, ga: 0.070, drivers: ["BGMI"], drags: [] },
        { q: "2025Q4", revenue_game: 520, revenue_company: 525, yoy: 0.083, gm: 0.722, om: 0.320, pcm: 0.305, rd: 0.212, sm: 0.120, ga: 0.072, drivers: [], drags: ["Q4 淡季"] },
        { q: "2026Q1", revenue_game: 642, revenue_company: 648, yoy: 0.079, qoq: 0.235, gm: 0.738, om: 0.361, pcm: 0.344, rd: 0.210, sm: 0.108, ga: 0.068, drivers: ["BGMI 赛季更新", "inZOI 首月流水"], drags: ["PUBG Mobile 国际版疲软"], strategy: ["印度本土化", "IP 多元化"] },
      ],
    },

    roblox: {
      id: "roblox",
      name_cn: "罗布乐思（Roblox）",
      name_en: "Roblox",
      ticker: "RBLX",
      tier: 5,
      currency: "USD",
      status: "listed",
      markets: ["北美", "欧洲", "全球"],
      genres: ["UGC", "沙盒"],
      positioning: "UGC 游戏平台，影响年轻用户时间分配",
      products: ["roblox"],
      quarters: [
        { q: "2024Q4", revenue_game: 1130, revenue_company: 1130, yoy: 0.320, gm: 0.751, om: -0.115, pcm: -0.098, rd: 0.258, sm: 0.085, ga: 0.082, drivers: ["DAU 增长"], drags: ["研发投入高"] },
        { q: "2025Q1", revenue_game: 1050, revenue_company: 1050, yoy: 0.290, gm: 0.748, om: -0.125, pcm: -0.108, rd: 0.262, sm: 0.082, ga: 0.080, drivers: ["用户时长"], drags: [] },
        { q: "2025Q4", revenue_game: 1310, revenue_company: 1310, yoy: 0.159, gm: 0.762, om: -0.092, pcm: -0.075, rd: 0.255, sm: 0.090, ga: 0.078, drivers: ["DAU 9500万"], drags: [] },
        { q: "2026Q1", revenue_game: 1240, revenue_company: 1240, yoy: 0.181, qoq: -0.053, gm: 0.768, om: -0.078, pcm: -0.062, rd: 0.250, sm: 0.086, ga: 0.076, drivers: ["DAU 1.02亿", "海外用户增长"], drags: ["开发者分成提高"], strategy: ["经济系统改造", "广告商业化"] },
      ],
    },

    mihoyo: {
      id: "mihoyo",
      name_cn: "米哈游",
      name_en: "MiHoYo",
      ticker: "NA",
      tier: 3,
      currency: "CNY",
      status: "unlisted",
      markets: ["全球", "日本", "中国"],
      genres: ["二次元", "开放世界"],
      positioning: "二次元开放世界标杆，定义全球高品质手游天花板",
      products: ["genshin", "hsr", "zzz"],
      quarters: [
        { q: "2025Q4", revenue_game: 1320, revenue_company: 1320, yoy: 0.085, gm: 0.620, om: 0.280, pcm: 0.270, rd: 0.220, sm: 0.120, ga: 0.055, drivers: ["崩铁 2.0"], drags: ["原神基数"] },
        { q: "2026Q1", revenue_game: 1410, revenue_company: 1410, yoy: 0.068, qoq: 0.068, gm: 0.628, om: 0.295, pcm: 0.283, rd: 0.215, sm: 0.115, ga: 0.053, drivers: ["绝区零周年", "崩铁新地图"], drags: ["原神增长放缓"], strategy: ["多 IP 矩阵", "主机拓展"] },
      ],
    },

    xd: {
      id: "xd",
      name_cn: "心动",
      name_en: "XD Inc.",
      ticker: "2400.HK",
      tier: 4,
      currency: "CNY",
      status: "listed",
      markets: ["中国", "日本", "东南亚"],
      genres: ["独立", "模拟"],
      positioning: "TapTap 平台运营者，独立游戏发行窗口",
      products: ["ragnarok-x"],
      quarters: [
        { q: "2025Q4", revenue_game: 138, revenue_company: 172, yoy: 0.245, gm: 0.665, om: 0.212, pcm: 0.198, rd: 0.225, sm: 0.128, ga: 0.085, drivers: ["心动小镇"], drags: [] },
        { q: "2026Q1", revenue_game: 152, revenue_company: 188, yoy: 0.280, qoq: 0.101, gm: 0.672, om: 0.228, pcm: 0.215, rd: 0.220, sm: 0.122, ga: 0.082, drivers: ["心动小镇持续", "铃兰之剑"], drags: [], strategy: ["社区驱动", "精品自研"] },
      ],
    },

    yalla: {
      id: "yalla",
      name_cn: "雅乐（Yalla）",
      name_en: "Yalla",
      ticker: "YALA",
      tier: 4,
      currency: "USD",
      status: "listed",
      markets: ["中东"],
      genres: ["语聊", "休闲"],
      positioning: "中东语聊社交龙头，地域红利代表",
      quarters: [
        { q: "2025Q4", revenue_game: 15, revenue_company: 90, yoy: 0.042, gm: 0.612, om: 0.295, pcm: 0.285, rd: 0.078, sm: 0.145, ga: 0.068, drivers: [], drags: [] },
        { q: "2026Q1", revenue_game: 17, revenue_company: 96, yoy: 0.038, qoq: 0.067, gm: 0.618, om: 0.308, pcm: 0.298, rd: 0.075, sm: 0.148, ga: 0.065, drivers: ["斋月消费"], drags: [], strategy: ["区域深耕"] },
      ],
    },

    supercell: {
      id: "supercell",
      name_cn: "Supercell",
      name_en: "Supercell",
      ticker: "NA",
      tier: 4,
      currency: "USD",
      status: "unlisted",
      markets: ["全球"],
      genres: ["策略", "卡牌"],
      positioning: "长青手游运营标杆，Squad Busters 探索新品类",
      quarters: [],
    },

    bili: {
      id: "bili",
      name_cn: "哔哩哔哩",
      name_en: "Bilibili",
      ticker: "BILI",
      tier: 3,
      currency: "CNY",
      status: "listed",
      markets: ["中国"],
      genres: ["二次元", "卡牌"],
      positioning: "二次元内容平台+发行，三谋改变 SLG 格局",
      quarters: [
        { q: "2025Q4", revenue_game: 330, revenue_company: 1050, yoy: 0.382, gm: 0.362, om: 0.052, pcm: 0.045, rd: 0.172, sm: 0.148, ga: 0.092, drivers: ["三谋"], drags: [] },
        { q: "2026Q1", revenue_game: 372, revenue_company: 1120, yoy: 0.418, qoq: 0.127, gm: 0.378, om: 0.075, pcm: 0.068, rd: 0.168, sm: 0.142, ga: 0.088, drivers: ["三谋稳态", "新游上线"], drags: [], strategy: ["游戏自研转型"] },
      ],
    },

    "37": {
      id: "37",
      name_cn: "三七互娱",
      name_en: "37 Interactive",
      ticker: "002555.SZ",
      tier: 3,
      currency: "CNY",
      status: "listed",
      markets: ["中国", "海外"],
      genres: ["SLG", "卡牌"],
      positioning: "买量发行代表，SLG 出海样本",
      quarters: [
        { q: "2025Q4", revenue_game: 620, revenue_company: 640, yoy: 0.025, gm: 0.842, om: 0.172, pcm: 0.165, rd: 0.058, sm: 0.562, ga: 0.042, drivers: [], drags: ["买量 ROI 下降"] },
        { q: "2026Q1", revenue_game: 648, revenue_company: 668, yoy: -0.015, qoq: 0.045, gm: 0.845, om: 0.182, pcm: 0.175, rd: 0.056, sm: 0.555, ga: 0.040, drivers: [], drags: ["老游戏下滑", "新品不及预期"], strategy: ["AI 提效", "精品化"] },
      ],
    },

    pw: {
      id: "pw",
      name_cn: "完美世界",
      name_en: "Perfect World",
      ticker: "002624.SZ",
      tier: 3,
      currency: "CNY",
      status: "listed",
      markets: ["中国"],
      genres: ["MMO", "二次元"],
      positioning: "端手游 MMO 老兵，产品周期波动大",
      quarters: [
        { q: "2025Q4", revenue_game: 210, revenue_company: 230, yoy: -0.185, gm: 0.680, om: -0.082, pcm: -0.075, rd: 0.285, sm: 0.182, ga: 0.095, drivers: [], drags: ["老游戏下滑", "新品延期"] },
        { q: "2026Q1", revenue_game: 195, revenue_company: 215, yoy: -0.162, qoq: -0.071, gm: 0.685, om: -0.068, pcm: -0.062, rd: 0.290, sm: 0.178, ga: 0.092, drivers: [], drags: ["诛仙2延期"], strategy: ["管线聚焦"] },
      ],
    },

    playtika: {
      id: "playtika",
      name_cn: "Playtika",
      name_en: "Playtika",
      ticker: "PLTK",
      tier: 2,
      currency: "USD",
      status: "listed",
      markets: ["北美", "欧洲"],
      genres: ["博彩", "休闲"],
      positioning: "社交博彩龙头，并购驱动增长",
      quarters: [
        { q: "2026Q1", revenue_game: 645, revenue_company: 645, yoy: -0.032, qoq: -0.012, gm: 0.715, om: 0.195, pcm: 0.182, rd: 0.092, sm: 0.282, ga: 0.088, drivers: ["SuperPlay 并表"], drags: ["老产品下滑"], strategy: ["并购扩张"] },
      ],
    },
  },

  products: {
    "honor-of-kings": { name: "王者荣耀", name_en: "Honor of Kings", genre: "MOBA", platform: "Mobile", developer: "tencent", status: "active", launch: "2015-11" },
    "peacekeeper": { name: "和平精英", name_en: "Peacekeeper Elite", genre: "射击", platform: "Mobile", developer: "tencent", status: "active", launch: "2019-05" },
    "delta-force": { name: "三角洲行动", name_en: "Delta Force", genre: "射击", platform: "PC/Mobile", developer: "tencent", status: "active", launch: "2024-09" },
    "genshin": { name: "原神", name_en: "Genshin Impact", genre: "开放世界", platform: "All", developer: "mihoyo", status: "active", launch: "2020-09" },
    "hsr": { name: "崩坏：星穹铁道", name_en: "Honkai: Star Rail", genre: "回合制 RPG", platform: "All", developer: "mihoyo", status: "active", launch: "2023-04" },
    "zzz": { name: "绝区零", name_en: "Zenless Zone Zero", genre: "动作 RPG", platform: "All", developer: "mihoyo", status: "active", launch: "2024-07" },
    "free-fire": { name: "Free Fire", name_en: "Garena Free Fire", genre: "射击", platform: "Mobile", developer: "sea", status: "active", launch: "2017-12" },
    "bgmi": { name: "BGMI", name_en: "Battlegrounds Mobile India", genre: "大逃杀", platform: "Mobile", developer: "krafton", status: "active", launch: "2021-07" },
    "pubg-mobile": { name: "PUBG Mobile", name_en: "PUBG Mobile", genre: "大逃杀", platform: "Mobile", developer: "krafton", status: "active", launch: "2018-03" },
    "roblox": { name: "Roblox", name_en: "Roblox", genre: "UGC 沙盒", platform: "All", developer: "roblox", status: "active", launch: "2006-09" },
    "identity-v": { name: "第五人格", name_en: "Identity V", genre: "非对称", platform: "Mobile", developer: "netease", status: "active", launch: "2018-04" },
    "naraka": { name: "永劫无间", name_en: "Naraka: Bladepoint", genre: "大逃杀", platform: "PC/Mobile", developer: "netease", status: "active", launch: "2021-08" },
    "ragnarok-x": { name: "仙境传说 X", name_en: "Ragnarok X", genre: "MMO", platform: "Mobile", developer: "xd", status: "active", launch: "2021-06" },
  },

  briefings: [
    {
      id: "tencent-2026q1",
      company: "tencent",
      quarter: "2026Q1",
      publish_date: "2026-04-17",
      tagline: "三角洲行动扛起增长旗帜，DnF 高基数下游戏仍保持 3.9% 正增长",
      core_judgements: [
        "游戏业务 Revenue_Game YoY +3.9%，在 DnF Mobile 去年同期高基数下仍实现正增长，三角洲行动接棒成为新增长点",
        "公司整体 Revenue_Company YoY +6.9%，营业利润率回升 0.4pp 至 34.9%，盈利能力持续改善",
        "海外游戏（含 Riot 与 Supercell）占游戏收入比 31%，同比提升 2pp，结构性去中国化继续",
      ],
      keywords: {
        drivers: ["三角洲行动", "海外 Riot 管线", "AI 提效"],
        drags: ["DnF Mobile 高基数"],
        strategy: ["长青产品运营", "海外扩张", "AI 提效"],
      },
      game_business: "游戏业务本季度的核心逻辑：DnF Mobile 进入稳态运营，三角洲行动填补增量空白。海外端 Valorant Mobile 东南亚软启动带来新的期权，但财务贡献未到爆发点。",
      company_business: "广告业务同比 +20%，金融科技企稳，非游戏业务继续为现金流提供支撑。",
      profitability: "毛利率同比 +1.0pp 至 55.6%，主要由游戏与视频号广告毛利拉动，规模效应显现。",
      cost: "销售费用率同比下降 0.2pp，三角洲行动上线初期买量已过高峰。研发费用率微增，归因 AI 基建投入。",
      insights: [
        { title: "三角洲行动增速曲线能否复制 DnF Mobile 轨迹", phenomenon: "三角洲行动上线第二季度流水估算 13-15 亿元，与 DnF Mobile 同期 18-22 亿元水平接近但偏低", background: "三角洲行动定位硬核射击，用户圈层更窄，留存与付费曲线可能更长尾", question: "是否该把三角洲行动理解为下一个 DnF Mobile，还是不同品类的独立赛道？" },
        { title: "海外占比 31% 的质量问题", phenomenon: "海外游戏收入占比 31%，但剔除 Supercell 后腾讯自研海外占比仅 12%", background: "海外增量大部分来自 Supercell 自然增长与 Riot 电竞周期，自研出海仍偏弱", question: "腾讯自研出海的结构性瓶颈是发行能力还是产品本土化？" },
        { title: "AI 提效如何体现在费用率", phenomenon: "管理层多次提及 AI 提效，但研发费用率本季度小幅上升 0.5pp", background: "AI 基建投入仍处于前置阶段，提效更多体现在广告与运营侧", question: "AI 何时从费用项转化为费用率下降的可见因子？" },
      ],
    },
    {
      id: "netease-2026q1",
      company: "netease",
      quarter: "2026Q1",
      publish_date: "2026-04-15",
      tagline: "漫威争锋与燕云十六声双线发力，游戏收入 YoY +6.1% 回到增长轨道",
      core_judgements: [
        "游戏业务 Revenue_Game YoY +6.1% QoQ +11.6%，告别 2025Q4 的短暂低迷",
        "毛利率同比 +1.1pp 至 65.2%，自研占比提升带来结构性改善",
        "漫威争锋全球上线首月流水突破 4 亿美元，成为 2026 年最大单品期权",
      ],
      keywords: {
        drivers: ["漫威争锋", "燕云十六声稳态"],
        drags: ["传统 MMO 老化"],
        strategy: ["全球化发行", "自研旗舰"],
      },
      game_business: "漫威争锋贡献约 8% 的游戏增量，燕云十六声持续扩张日本与北美市场。",
      company_business: "有道业务剥离传闻得到管理层部分确认，轻装上阵。",
      profitability: "营业利润率 +2.3pp，规模效应叠加汇率顺风。",
      cost: "销售费用率 +0.3pp，漫威争锋全球推广高峰期。研发费用率基本持平。",
      insights: [
        { title: "漫威争锋能否填补梦幻西游缺口", phenomenon: "漫威争锋首月流水 4 亿美元，梦幻西游 IP 系列同比下滑约 12%", background: "IP+射击组合在海外具备扩展空间，但国内缺席限制天花板", question: "是继续押注 IP 合作还是回归自研原创？" },
      ],
    },
    {
      id: "sea-2026q1",
      company: "sea",
      quarter: "2026Q1",
      publish_date: "2026-04-14",
      tagline: "Free Fire 拉美持续回暖，Garena 游戏收入 YoY +15.9% 超市场一致预期",
      core_judgements: [
        "Garena 游戏收入 YoY +15.9% QoQ +13.9%，连续五个季度同比正增长",
        "代理 Delta Force 在东南亚首月流水贡献约 2800 万美元，新品矩阵初见成效",
        "公司整体营业利润率 +2.9pp 至 12.4%，电商盈利拐点验证",
      ],
      keywords: {
        drivers: ["Free Fire 拉美持续", "Delta Force 代理"],
        drags: [],
        strategy: ["新兴市场深耕", "第二游戏矩阵"],
      },
      game_business: "Free Fire 巴西市场 MAU 同比 +18%，玩家 ARPPU 提升带来双驱动。",
      company_business: "Shopee 调整后 EBITDA 首次转正，是季度最大亮点。",
      profitability: "游戏业务毛利率保持 70%+ 高位，规模效应显著。",
      cost: "销售费用率同比小幅下降，电商补贴退坡。",
      insights: [
        { title: "Garena 对单一产品的依赖能否真正分散", phenomenon: "Free Fire 仍贡献 Garena 88% 的游戏收入，Delta Force 代理仅填补 4%", background: "Garena 的核心能力在于新兴市场发行而非产品研发", question: "矩阵化是走代理路线还是并购路线？" },
      ],
    },
  ],

  summaries: [
    {
      id: "2026q1",
      period: "2026 Q1",
      publish_date: "2026-04-18",
      period_end: "2026-03-31",
      headline: "2026 Q1 游戏行业：分化加剧，新兴市场与二次元共振",
      companies_included: ["tencent", "netease", "sea", "krafton", "roblox", "mihoyo", "xd", "yalla", "bili", "37", "pw", "playtika"],
      tiers: {
        exceed: [
          { company: "sea", yoy: 0.159, tier: 5, driver: "Free Fire 拉美持续回暖 + Delta Force 代理首月贡献" },
          { company: "bili", yoy: 0.418, tier: 3, driver: "三谋稳态运营，自研转型初见成效" },
          { company: "xd", yoy: 0.280, tier: 4, driver: "心动小镇长尾 + 铃兰之剑出海" },
        ],
        inline: [
          { company: "tencent", yoy: 0.039, tier: 5, note: "DnF 高基数下保持正增长，三角洲接棒" },
          { company: "netease", yoy: 0.061, tier: 5, note: "漫威争锋贡献新增量" },
          { company: "krafton", yoy: 0.079, tier: 5, note: "BGMI 稳态，inZOI 增量" },
          { company: "roblox", yoy: 0.181, tier: 5, note: "DAU 突破 1 亿，商业化提效" },
          { company: "mihoyo", yoy: 0.068, tier: 3, note: "绝区零周年 + 崩铁稳态" },
          { company: "yalla", yoy: 0.038, tier: 4, note: "斋月季节性" },
          { company: "playtika", yoy: -0.032, tier: 2, note: "并购并表对冲下滑" },
        ],
        miss: [
          { company: "37", yoy: -0.015, tier: 3, drag: "买量 ROI 下降，老游戏流水持续走低" },
          { company: "pw", yoy: -0.162, tier: 3, drag: "诛仙2 延期，管线青黄不接" },
        ],
      },
      trends: [
        { title: "新兴市场贡献中位数 +15%，发达市场 +5%", phenomenon: "Sea (+15.9%)、Krafton (+7.9% 印度拉动)、Yalla (+3.8%) 合计新兴市场敞口公司同比中位数 +12.5%，而腾讯、网易、米哈游中位数 +6%", reason: "新兴市场人口红利与 ARPPU 提升同步，发达市场已进入存量博弈" },
        { title: "二次元赛道内部分化", phenomenon: "米哈游 +6.8%、鹰角 +22%、网易二次元线 +15%，但完美世界二次元线 -25%", reason: "研发投入阈值提高，只有持续产出新 IP 的二次元公司才能增长" },
        { title: "射击/UGC 继续抢占时长", phenomenon: "三角洲、Delta Force、Free Fire、Roblox 合计 MAU 同比 +11%，传统 MMO 同比 -8%", reason: "年轻用户偏好向快节奏社交化品类迁移" },
      ],
      actions: [
        { company: "tencent", type: "投资", content: "增持 Krafton 至 15.8%", impact: "进一步锁定 PUBG IP 合作" },
        { company: "netease", type: "海外发行", content: "漫威争锋北美与日本双发", impact: "验证自研出海新路径" },
        { company: "sea", type: "代理", content: "代理腾讯 Delta Force 东南亚", impact: "矩阵化 Free Fire 依赖" },
        { company: "krafton", type: "品类拓展", content: "inZOI 进入抢先体验", impact: "摸索生活模拟品类" },
      ],
      macro: "美元走弱对海外收入折算正面，中国游戏版号发放节奏保持稳定（Q1 共 267 款），印度 BGMI 恢复满一年进入高基数期。",
      insights: [
        { title: "沐瞳核心市场竞争强度显著上升", phenomenon: "Free Fire 巴西 MAU +18%、BGMI 印度稳态、三角洲行动东南亚软启动", background: "三大对手同步加码 MOBA/射击战场相邻品类", question: "沐瞳的响应节奏应该是加码电竞还是开辟新品？" },
        { title: "AI 提效在大厂财报首次可见", phenomenon: "腾讯、网易、Krafton 均在业绩会提及 AI 对买量与客服的影响，但费用率尚未下降", background: "AI 基建仍处投入期，2026 下半年有望见到降费", question: "沐瞳 AI 投入节奏是否应跟随大厂？" },
      ],
      oneliners: [
        { company: "tencent", tier: 5, text: "三角洲扛旗，盈利继续改善" },
        { company: "netease", tier: 5, text: "漫威争锋证明自研出海能力" },
        { company: "sea", tier: 5, text: "Free Fire 回暖延续，电商拐点" },
        { company: "krafton", tier: 5, text: "BGMI 稳态，inZOI 开新曲线" },
        { company: "roblox", tier: 5, text: "DAU 破亿，商业化提效" },
        { company: "xd", tier: 4, text: "社区 + 精品双轮启动" },
        { company: "yalla", tier: 4, text: "斋月季节性正常" },
        { company: "supercell", tier: 4, text: "非上市，待一手" },
        { company: "37", tier: 3, text: "买量失效，静待新品" },
        { company: "pw", tier: 3, text: "管线断档，低谷延续" },
        { company: "mihoyo", tier: 3, text: "多 IP 矩阵稳态" },
        { company: "bili", tier: 3, text: "三谋延续自研转型" },
        { company: "playtika", tier: 2, text: "并购对冲自然下滑" },
      ],
    },
  ],

  memos: [
    { date: "2026-04-16", title: "腾讯三角洲行动国服月活突破 4000 万", company: ["tencent"], type: "产品事件" },
    { date: "2026-04-12", title: "Sea 宣布与腾讯 Delta Force 签订东南亚独家代理", company: ["sea", "tencent"], type: "跨公司事件" },
    { date: "2026-04-08", title: "网易漫威争锋北美 App Store 连续 7 日畅销榜 Top3", company: ["netease"], type: "产品评测" },
    { date: "2026-04-02", title: "Krafton inZOI 抢先体验首周 Steam 同时在线 40 万", company: ["krafton"], type: "产品事件" },
    { date: "2026-03-28", title: "行业研究：MENA 市场游戏消费结构变迁", company: ["yalla"], type: "研究" },
  ],
};

// Demo-only segment enrichment. In the production flow this should come from
// standardized GameIntel financial files when companies disclose segment data.
(function enrichGameRevenueSegments() {
  const tencent = window.GI_DATA?.companies?.tencent;
  if (!tencent) return;
  const regionShares = {
    "2024Q2": [0.72, 0.28],
    "2024Q3": [0.71, 0.29],
    "2024Q4": [0.70, 0.30],
    "2025Q1": [0.69, 0.31],
    "2025Q4": [0.68, 0.32],
    "2026Q1": [0.67, 0.33],
  };
  const platformShares = {
    "2024Q2": [0.82, 0.18],
    "2024Q3": [0.81, 0.19],
    "2024Q4": [0.80, 0.20],
    "2025Q1": [0.79, 0.21],
    "2025Q4": [0.78, 0.22],
    "2026Q1": [0.77, 0.23],
  };
  tencent.quarters.forEach((q) => {
    const region = regionShares[q.q];
    const platform = platformShares[q.q];
    if (!region || !platform) return;
    q.game_revenue_segments = {
      region: [
        { name: "Domestic", value: q.revenue_game * region[0], color: "var(--c3)" },
        { name: "Overseas", value: q.revenue_game * region[1], color: "var(--c1)" },
      ],
      platform: [
        { name: "Mobile", value: q.revenue_game * platform[0], color: "var(--c3)" },
        { name: "PC / Console", value: q.revenue_game * platform[1], color: "var(--c2)" },
      ],
    };
  });
})();
