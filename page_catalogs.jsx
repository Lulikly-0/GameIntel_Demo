// Directory pages for summaries, briefings, and companies

function CatalogHero({ eyebrow, title, subtitle, count }) {
  return (
    <div className="page-hero">
      <div>
        <div className="eyebrow">{eyebrow}</div>
        <h1 className="page-title" style={{ marginTop: 6 }}>{title}</h1>
        <div className="page-subtitle">{subtitle}</div>
      </div>
      <span className="period-chip">{count} 条</span>
    </div>
  );
}

function FilterSelect({ label, value, onChange, options }) {
  return (
    <label style={{ display: "flex", alignItems: "center", gap: 8 }}>
      <span className="mono dim" style={{ fontSize: 11 }}>{label}</span>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        style={{
          border: "1px solid var(--line)",
          borderRadius: 999,
          padding: "8px 12px",
          background: "var(--card)",
          color: "var(--ink-2)",
          fontSize: 13,
          outline: "none",
        }}
      >
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>{opt.label}</option>
        ))}
      </select>
    </label>
  );
}

function FilterInput({ label, value, onChange, placeholder }) {
  return (
    <label style={{ display: "flex", alignItems: "center", gap: 8 }}>
      <span className="mono dim" style={{ fontSize: 11 }}>{label}</span>
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        style={{
          border: "1px solid var(--line)",
          borderRadius: 999,
          padding: "8px 12px",
          background: "var(--card)",
          color: "var(--ink-2)",
          fontSize: 13,
          outline: "none",
          width: 170,
        }}
      />
    </label>
  );
}

function CatalogToolbar({ children }) {
  return (
    <div
      className="card card-pad"
      style={{
        display: "flex",
        gap: 12,
        flexWrap: "wrap",
        alignItems: "center",
        marginBottom: 18,
      }}
    >
      {children}
    </div>
  );
}

function quarterSortValue(q) {
  const m = /^(\d{4})Q([1-4])$/.exec(q || "");
  return m ? Number(m[1]) * 10 + Number(m[2]) : 0;
}

function latestQuarterOfCompany(company) {
  const quarters = company.quarters || [];
  return quarters[quarters.length - 1] || null;
}

const COMPANY_CN_INITIALS = {
  tencent: "TX",
  netease: "WY",
  krafton: "KJ",
  roblox: "LBL",
  sea: "DH",
  mihoyo: "MHY",
  xd: "XD",
  yalla: "YL",
  supercell: "SC",
  bili: "BLBL",
  "37": "SQHY",
  pw: "WMSJ",
  playtika: "PLTK",
};

function companyMatchesQuery(company, query) {
  const q = query.trim().toUpperCase();
  if (!q) return true;
  const en = (company.name_en || "").toUpperCase();
  const cn = (company.name_cn || "").toUpperCase();
  const ticker = (company.ticker || "").toUpperCase();
  const cnInitials = (COMPANY_CN_INITIALS[company.id] || "").toUpperCase();
  return en.startsWith(q) || cn.includes(q) || ticker.startsWith(q) || cnInitials.startsWith(q);
}

function SummaryDirectoryPage() {
  const D = window.GI_DATA;
  const [yearFilter, setYearFilter] = React.useState("all");
  const [quarterFilter, setQuarterFilter] = React.useState("all");

  const summaries = [...D.summaries].sort((a, b) => (b.publish_date || "").localeCompare(a.publish_date || ""));
  const parsePeriod = (period) => {
    const m = /^(\d{4})\s+(Q[1-4]|FY)$/.exec(period || "");
    return { year: m?.[1] || "", quarter: m?.[2] || "" };
  };
  const yearOptions = [
    { value: "all", label: "全部年份" },
    ...Array.from(new Set(summaries.map((s) => parsePeriod(s.period).year).filter(Boolean)))
      .sort((a, b) => Number(b) - Number(a))
      .map((year) => ({ value: year, label: year })),
  ];
  const quarterOptions = [
    { value: "all", label: "全部季度" },
    ...["Q1", "Q2", "Q3", "Q4", "FY"].map((q) => ({ value: q, label: q })),
  ];
  const filtered = summaries.filter((s) => {
    const parsed = parsePeriod(s.period);
    const yearOk = yearFilter === "all" || parsed.year === yearFilter;
    const quarterOk = quarterFilter === "all" || parsed.quarter === quarterFilter;
    return yearOk && quarterOk;
  });

  return (
    <div className="page">
      <Crumbs items={[{ label: "首页", href: "#/" }, { label: "季度总结目录" }]} />
      <CatalogHero
        eyebrow="Quarterly Summary Library"
        title="季度总结"
        subtitle="默认按最新发布排序；可按年份和季度筛选想看的行业总结。"
        count={filtered.length}
      />
      <CatalogToolbar>
        <FilterSelect label="年份" value={yearFilter} onChange={setYearFilter} options={yearOptions} />
        <FilterSelect label="季度" value={quarterFilter} onChange={setQuarterFilter} options={quarterOptions} />
        <button className="pill" style={{ border: 0, cursor: "pointer" }} onClick={() => { setYearFilter("all"); setQuarterFilter("all"); }}>重置筛选</button>
      </CatalogToolbar>

      <div className="grid grid-2">
        {filtered.map((s) => (
          <a key={s.id} href={`#/summary/${s.id}`}>
            <div className="card card-pad" style={{ minHeight: 230 }}>
              <div className="card-title">
                <h3>{s.period}</h3>
                <span className="meta">{s.publish_date}</span>
              </div>
              <h2 style={{ fontSize: 22, lineHeight: 1.25, margin: "6px 0 12px" }}>{s.headline}</h2>
              <div className="muted" style={{ fontSize: 13, lineHeight: 1.6, marginBottom: 14 }}>
                覆盖 {s.companies_included.length} 家公司 · 数据截至 {s.period_end}
              </div>
              <div className="tier-row">
                <span className="tier-group">超预期 <span className="count">{s.tiers.exceed.length}</span></span>
                <span className="tier-group">符合 <span className="count">{s.tiers.inline.length}</span></span>
                <span className="tier-group">低于 <span className="count">{s.tiers.miss.length}</span></span>
              </div>
              <div style={{ marginTop: 14, color: "var(--c1)", fontWeight: 700, fontSize: 13 }}>进入季度总结 →</div>
            </div>
          </a>
        ))}
      </div>
      {!filtered.length && <div className="card card-pad muted">没有匹配的季度总结。</div>}
    </div>
  );
}

function BriefingDirectoryPage() {
  const D = window.GI_DATA;
  const [companyFilter, setCompanyFilter] = React.useState("all");
  const [quarterFilter, setQuarterFilter] = React.useState("all");

  const briefings = [...D.briefings].sort((a, b) => {
    const qDiff = quarterSortValue(b.quarter) - quarterSortValue(a.quarter);
    return qDiff || (b.publish_date || "").localeCompare(a.publish_date || "");
  });
  const companiesWithBriefings = Array.from(new Set(briefings.map((b) => b.company)))
    .map((id) => D.companies[id])
    .filter(Boolean)
    .sort((a, b) => a.name_en.localeCompare(b.name_en));
  const companyOptions = [
    { value: "all", label: "全部公司" },
    ...companiesWithBriefings.map((c) => ({ value: c.id, label: c.name_cn })),
  ];
  const quarterOptions = [
    { value: "all", label: "全部季度" },
    ...Array.from(new Set(briefings.map((b) => b.quarter)))
      .sort((a, b) => quarterSortValue(b) - quarterSortValue(a))
      .map((q) => ({ value: q, label: q })),
  ];
  const filtered = briefings.filter((b) => {
    const companyOk = companyFilter === "all" || b.company === companyFilter;
    const quarterOk = quarterFilter === "all" || b.quarter === quarterFilter;
    return companyOk && quarterOk;
  });

  return (
    <div className="page">
      <Crumbs items={[{ label: "首页", href: "#/" }, { label: "财报 Briefing 目录" }]} />
      <CatalogHero
        eyebrow="Earnings Briefing Library"
        title="财报 Briefing"
        subtitle="默认最新 Briefing 在最上方；可按公司和季度筛选。"
        count={filtered.length}
      />
      <CatalogToolbar>
        <FilterSelect label="公司" value={companyFilter} onChange={setCompanyFilter} options={companyOptions} />
        <FilterSelect label="季度" value={quarterFilter} onChange={setQuarterFilter} options={quarterOptions} />
        <button className="pill" style={{ border: 0, cursor: "pointer" }} onClick={() => { setCompanyFilter("all"); setQuarterFilter("all"); }}>重置筛选</button>
      </CatalogToolbar>

      <div className="grid grid-3">
        {filtered.map((b) => {
          const c = D.companies[b.company];
          const q = c?.quarters?.find((item) => item.q === b.quarter);
          return (
            <a key={b.id} href={`#/briefing/${b.id}`}>
              <div className="briefing-card" style={{ minHeight: 230 }}>
                <div className="head">
                  <CompanyAvatar company={c} size={28} />
                  <div>
                    <div style={{ fontWeight: 700, fontSize: 14 }}>{c.name_cn}</div>
                    <div className="mono dim" style={{ fontSize: 11 }}>{c.ticker} · {b.quarter}</div>
                  </div>
                  <TierBadge tier={c.tier} />
                </div>
                <div className="tagline">{b.tagline}</div>
                {q && (
                  <div className="metric-row" style={{ gridTemplateColumns: "1fr 1fr", margin: "12px 0" }}>
                    <div className="metric"><div className="label">游戏收入 YoY</div><div className="value" style={{ fontSize: 18 }}>{fmtPct(q.yoy, { signed: true })}</div></div>
                    <div className="metric"><div className="label">毛利率</div><div className="value" style={{ fontSize: 18 }}>{fmtPct(q.gm)}</div></div>
                  </div>
                )}
                <div className="kw-row" style={{ marginBottom: 12 }}>
                  {b.keywords.drivers.slice(0, 2).map((k, i) => <Kw key={i} type="driver">▲ {k}</Kw>)}
                  {b.keywords.drags.slice(0, 1).map((k, i) => <Kw key={i} type="drag">▼ {k}</Kw>)}
                </div>
                <div className="foot">
                  <span>{b.publish_date}</span>
                  <a>阅读 Briefing →</a>
                </div>
              </div>
            </a>
          );
        })}
      </div>
      {!filtered.length && <div className="card card-pad muted">没有匹配的 Briefing。</div>}
    </div>
  );
}

function CompanyDirectoryPage() {
  const D = window.GI_DATA;
  const [tierFilter, setTierFilter] = React.useState("all");
  const [letterFilter, setLetterFilter] = React.useState("");

  const companies = Object.values(D.companies);
  const tierOptions = [
    { value: "all", label: "全部关注度" },
    ...[5, 4, 3, 2, 1].filter((tier) => companies.some((c) => c.tier === tier)).map((tier) => ({ value: String(tier), label: `T${tier}` })),
  ];
  const letterQuery = letterFilter.trim().toUpperCase();
  const filtered = companies
    .filter((c) => tierFilter === "all" || String(c.tier) === tierFilter)
    .filter((c) => companyMatchesQuery(c, letterQuery))
    .sort((a, b) => (b.tier - a.tier) || a.name_en.localeCompare(b.name_en));

  return (
    <div className="page">
      <Crumbs items={[{ label: "首页", href: "#/" }, { label: "公司主页目录" }]} />
      <CatalogHero
        eyebrow="Company Directory"
        title="公司主页"
        subtitle="按关注度 Tier 和英文首字母手动输入筛选公司；点击进入单公司主页。"
        count={filtered.length}
      />
      <CatalogToolbar>
        <FilterSelect label="关注度" value={tierFilter} onChange={setTierFilter} options={tierOptions} />
        <FilterInput label="公司" value={letterFilter} onChange={setLetterFilter} placeholder="输入 N / W / 网易..." />
        <button className="pill" style={{ border: 0, cursor: "pointer" }} onClick={() => { setTierFilter("all"); setLetterFilter(""); }}>重置筛选</button>
      </CatalogToolbar>

      <div className="comp-grid">
        {filtered.map((c) => {
          const q = latestQuarterOfCompany(c);
          return (
            <a key={c.id} href={`#/company/${c.id}`}>
              <div className="comp-card" style={{ minHeight: 118, alignItems: "flex-start" }}>
                <CompanyAvatar company={c} size={36} />
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div className="name" style={{ fontSize: 16 }}>{c.name_cn}</div>
                  <div className="meta">{c.name_en} · {c.ticker === "NA" ? "未上市" : c.ticker}</div>
                  <div className="muted" style={{ fontSize: 12, lineHeight: 1.55, marginTop: 8 }}>{c.positioning}</div>
                  {q && (
                    <div className="kw-row" style={{ marginTop: 10 }}>
                      <Kw type={q.yoy >= 0 ? "driver" : "drag"}>{q.q} 游戏 YoY {fmtPct(q.yoy, { signed: true })}</Kw>
                      <Kw type="strategy">毛利率 {fmtPct(q.gm)}</Kw>
                    </div>
                  )}
                </div>
                <TierBadge tier={c.tier} />
              </div>
            </a>
          );
        })}
      </div>
      {!filtered.length && <div className="card card-pad muted">没有匹配的公司。</div>}
    </div>
  );
}

Object.assign(window, { SummaryDirectoryPage, BriefingDirectoryPage, CompanyDirectoryPage });
