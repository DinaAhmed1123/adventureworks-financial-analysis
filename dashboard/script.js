const C = {
  bg: "#0A1628",
  surface: "#0F2040",
  card: "#162845",
  border: "#1E3A5F",
  accent: "#00C4B4",
  amber: "#F5A623",
  red: "#EF5350",
  green: "#66BB6A",
  blue: "#4FC3F7",
  purple: "#CE93D8",
  textPrimary: "#E8EDF5",
  textSecondary: "#8FA5BF",
  textMuted: "#506070"
};

const CHART_COLORS = [C.accent, C.amber, C.blue, C.purple, C.green, C.red];

const fmt = {
  currency(v) {
    if (v >= 1e6) return `$${(v / 1e6).toFixed(2)}M`;
    if (v >= 1e3) return `$${(v / 1e3).toFixed(1)}K`;
    return `$${v.toFixed(0)}`;
  },
  pct(v) {
    return `${Number(v).toFixed(1)}%`;
  },
  num(v) {
    if (v >= 1e6) return `${(v / 1e6).toFixed(2)}M`;
    if (v >= 1e3) return `${(v / 1e3).toFixed(1)}K`;
    return Number(v).toLocaleString();
  }
};

const yearData = [
  { year: "2005*", revenue: 3266373, profit: 1340118, orders: 1013, customers: 848 },
  { year: "2006", revenue: 6530344, profit: 2687521, orders: 3947, customers: 3194 },
  { year: "2007", revenue: 9786163, profit: 4027985, orders: 8564, customers: 6561 },
  { year: "2008*", revenue: 9775797, profit: 4025260, orders: 14135, customers: 11419 }
];

const aovData = [
  { year: "2005*", aov: 3224 },
  { year: "2006", aov: 1654 },
  { year: "2007", aov: 1143 },
  { year: "2008*", aov: 845 }
];

const monthlyData = [
  { month: "Jan", revenue: 2100 },
  { month: "Feb", revenue: 2300 },
  { month: "Mar", revenue: 2500 },
  { month: "Apr", revenue: 2700 },
  { month: "May", revenue: 3100 },
  { month: "Jun", revenue: 3400 },
  { month: "Jul", revenue: 1800 },
  { month: "Aug", revenue: 1700 },
  { month: "Sep", revenue: 1600 },
  { month: "Oct", revenue: 2200 },
  { month: "Nov", revenue: 2400 },
  { month: "Dec", revenue: 3000 }
];

const categoryData = [
  { name: "Bikes", revenue: 28538022, profit: 11499944, margin: 40.3 },
  { name: "Accessories", revenue: 700760, profit: 438576, margin: 62.6 },
  { name: "Clothing", revenue: 339896, profit: 142364, margin: 41.9 }
];

const subCategoryData = [
  { name: "Road Bikes", revenue: 14351003, profit: 5540000 },
  { name: "Mountain Bikes", revenue: 9952759, profit: 4510000 },
  { name: "Touring Bikes", revenue: 3742000, profit: 1449944 },
  { name: "Accessories", revenue: 700760, profit: 438576 },
  { name: "Clothing", revenue: 339896, profit: 142364 }
];

const marginData = [
  { name: "Accessories", margin: 62.6 },
  { name: "Clothing", margin: 41.9 },
  { name: "Road Bikes", margin: 38.6 },
  { name: "Mountain Bikes", margin: 45.3 },
  { name: "Touring Bikes", margin: 38.7 }
];

const regionData = [
  { region: "Australia", revenue: 9061001, profit: 3724900, customers: 3591, revPerCust: 2524, profitPerOrder: 287 },
  { region: "Southwest", revenue: 7905682, profit: 3230000, customers: 4400, revPerCust: 1797, profitPerOrder: 251 },
  { region: "Northwest", revenue: 3761000, profit: 1548000, customers: 2101, revPerCust: 1790, profitPerOrder: 240 },
  { region: "United Kingdom", revenue: 3387479, profit: 1391000, customers: 1913, revPerCust: 1771, profitPerOrder: 261 },
  { region: "Germany", revenue: 2894312, profit: 1191000, customers: 1649, revPerCust: 1755, profitPerOrder: 248 },
  { region: "France", revenue: 2349203, profit: 996683, customers: 1431, revPerCust: 1642, profitPerOrder: 238 }
];

const incomeData = [
  { segment: "Low (<30K)", revPerCust: 1215, profitPerCust: 496, aov: 884, freq: 1.37 },
  { segment: "Lower-Mid (30–60K)", revPerCust: 1420, profitPerCust: 585, aov: 940, freq: 1.51 },
  { segment: "Middle (60–90K)", revPerCust: 1680, profitPerCust: 692, aov: 1050, freq: 1.60 },
  { segment: "Upper-Mid (90–120K)", revPerCust: 1950, profitPerCust: 803, aov: 1200, freq: 1.63 },
  { segment: "High (120K+)", revPerCust: 2400, profitPerCust: 999, aov: 1441, freq: 1.67 }
];

const occupationData = [
  { occ: "Professional", revPerCust: 1795 },
  { occ: "Management", revPerCust: 1778 },
  { occ: "Skilled Manual", revPerCust: 1542 },
  { occ: "Clerical", revPerCust: 1380 },
  { occ: "Manual", revPerCust: 1199 }
];

const ageData = [
  { age: "18–29", revPerCust: 1180 },
  { age: "30–39", revPerCust: 1820 },
  { age: "40–49", revPerCust: 1790 },
  { age: "50–59", revPerCust: 1560 },
  { age: "60+", revPerCust: 1310 }
];

const TABS = [
  { id: "summary", label: "Executive Summary", render: tabSummary },
  { id: "trends", label: "Time & Growth", render: tabTrends },
  { id: "product", label: "Product Performance", render: tabProduct },
  { id: "profitability", label: "Profitability", render: tabProfitability },
  { id: "regional", label: "Regional", render: tabRegional },
  { id: "customer", label: "Customer Analysis", render: tabCustomer },
  { id: "risks", label: "Risks & Opportunities", render: tabRisks },
  { id: "strategy", label: "Strategic Recommendations", render: tabStrategy }
];

let activeTab = "summary";
let openGroup = "01";

function el(tag, attrs = {}, ...children) {
  const node = document.createElement(tag);
  Object.entries(attrs || {}).forEach(([key, value]) => {
    if (value === false || value == null) return;
    if (key === "class") node.className = value;
    else if (key === "style" && typeof value === "object") Object.assign(node.style, value);
    else if (key.startsWith("on") && typeof value === "function") node.addEventListener(key.slice(2).toLowerCase(), value);
    else node.setAttribute(key, value);
  });
  children.flat().forEach((child) => {
    if (child == null) return;
    node.append(child.nodeType ? child : document.createTextNode(String(child)));
  });
  return node;
}

function cssVar(color) {
  const map = {
    [C.accent]: "var(--accent)",
    [C.amber]: "var(--amber)",
    [C.red]: "var(--red)",
    [C.green]: "var(--green)",
    [C.blue]: "var(--blue)",
    [C.purple]: "var(--purple)",
    [C.textMuted]: "var(--text-muted)"
  };
  return map[color] || color;
}

function insight(children, color = C.accent) {
  const box = el("div", { class: "insight" });
  box.style.borderLeftColor = color;
  box.style.background = `${color}12`;
  if (Array.isArray(children)) box.append(...children);
  else box.innerHTML = children;
  return box;
}

function sectionTitle(text) {
  return el("div", { class: "section-title" }, text);
}

function kpiCard({ label, value, sub, color = C.accent, icon, delta }) {
  const node = el("div", { class: "kpi-card" });
  node.style.borderTopColor = color;
  const valueNode = el("div", { class: "kpi-value", "data-target": typeof value === "number" ? value : "", "data-delta": delta || "" }, typeof value === "number" ? "0" : value);
  node.append(
    el("div", { class: "kpi-label" }, icon ? `${icon} ${label}` : label),
    valueNode,
    sub ? el("div", { class: "kpi-sub" }, sub) : null
  );
  return node;
}

function miniCard({ label, value, sub, color = C.accent }) {
  const node = el("div", { class: "mini-card" });
  node.style.borderTopColor = color;
  node.append(el("div", { class: "mini-label" }, label), el("div", { class: "mini-value" }, value), el("div", { class: "mini-sub" }, sub));
  return node;
}

function chartCard({ title, insightText, insightColor, height = 240, chart }) {
  const area = el("div", { class: "chart-area" });
  area.style.setProperty("--chart-height", `${height}px`);
  area.dataset.chart = JSON.stringify(chart);
  return el("div", { class: "chart-card" }, el("div", { class: "chart-title" }, title), insightText ? insight(`<strong>↳</strong> ${insightText}`, insightColor || C.accent) : null, area);
}

function renderApp() {
  const tab = TABS.find((t) => t.id === activeTab) || TABS[0];
  const app = el("div", { class: "app" },
    el("header", { class: "header" },
      el("div", { class: "header-inner" },
        el("div", {}, el("div", { class: "eyebrow" }, "Business Intelligence Dashboard"), el("div", { class: "title" }, "AdventureWorks Financial Analysis")),
        el("div", { class: "period" }, el("div", { class: "period-label" }, "Analysis Period"), el("div", { class: "period-value" }, "FY 2005–2008 ", el("span", { style: { color: C.amber } }, "*partial years noted")))
      )
    ),
    el("nav", { class: "tabs" }, el("div", { class: "tabs-inner" }, TABS.map((t) => el("button", { class: `tab-button ${t.id === activeTab ? "active" : ""}`, "data-id": t.id, onclick: () => setTab(t.id) }, t.label)))),
    el("main", { class: "content", id: "content" }, tab.render()),
    el("footer", { class: "footer" }, el("div", {}, "AdventureWorks Financial Analysis · Portfolio Project · Values marked ", el("span", { style: { color: C.amber } }, "~"), " are approximate · ", el("span", { style: { color: C.amber } }, "*"), " = partial year data"))
  );
  document.getElementById("app").replaceChildren(app);
  animateKpis();
  renderCharts();
}

function setTab(id) {
  activeTab = id;
  renderApp();
}

function tabSummary() {
  const headlines = [
    { icon: "🚴", text: "Bikes drive 97.2% of total revenue (~$28.5M) and 95.2% of total profit (~$11.5M).", color: C.accent },
    { icon: "🌏", text: "Australia is the #1 region by revenue, profit, revenue per customer, and profit per order.", color: C.blue },
    { icon: "👤", text: "High-income customers aged 30–49 generate up to 2× the revenue per customer vs low-income segments.", color: C.purple },
    { icon: "📦", text: "Accessories carry ~62.6% margins — the highest of any category — but represent only 2.4% of revenue.", color: C.amber },
    { icon: "⚠️", text: "Concentration risk: near-total dependence on Bikes and Australia leaves the business exposed to category and geographic shocks.", color: C.red },
    { icon: "📈", text: "Revenue grew 99.9% in 2005→2006 and 49.9% in 2006→2007 — but growth was volume-driven while AOV fell from ~$3,200 to ~$845.", color: C.green }
  ];
  return el("div", { class: "stack stack-large" },
    el("div", { class: "grid grid-kpis" },
      kpiCard({ label: "Total Revenue", value: 29358677, sub: "FY 2005–2008 combined", color: C.accent, icon: "💰" }),
      kpiCard({ label: "Total Profit", value: 12080884, sub: "Combined gross profit", color: C.green, icon: "📊" }),
      kpiCard({ label: "Profit Margin", value: 41.15, sub: "Portfolio-wide margin", color: C.blue, delta: "pct", icon: "%" }),
      kpiCard({ label: "Total Orders", value: 27659, sub: "All regions & years", color: C.purple, icon: "🛒" }),
      kpiCard({ label: "Total Customers", value: 18484, sub: "Unique customer accounts", color: C.amber, icon: "👥" }),
      kpiCard({ label: "Avg Order Value", value: 486, sub: "Portfolio AOV (volume-diluted)", color: C.red, icon: "🎯" })
    ),
    el("div", {}, sectionTitle("Key Business Insights"), el("div", { class: "grid grid-insights" }, headlines.map((h) => insight(`<span style="margin-right:8px">${h.icon}</span>${h.text}`, h.color)))),
    el("div", { class: "card methodology" }, sectionTitle("Methodology"), el("p", {}, "This dashboard is derived from a completed AdventureWorks Financial Analysis project using SQL and structured data exploration. Revenue, profit, order, and customer figures are sourced directly from database aggregations. Values marked ", el("strong", { style: { color: C.amber } }, "~"), " are approximate based on summarized project findings. Years marked ", el("strong", { style: { color: C.amber } }, "*"), " (2005, 2008) represent partial-year data and should not be compared directly to full years. All strategic recommendations are the author's original analysis."))
  );
}

function tabTrends() {
  return el("div", { class: "stack" },
    chartCard({ title: "Annual Revenue & Profit Trend", insightText: "Revenue nearly doubled in 2005→2006, then grew 49.9% in 2006→2007. 2005 and 2008 are partial years — not directly comparable to full years.", height: 220, chart: { type: "bar", data: yearData, xKey: "year", keys: ["revenue", "profit"], names: ["Revenue", "Profit"], colors: [C.accent, C.green], yFmt: "moneyM", grouped: true, refs: ["2005*", "2008*"] } }),
    chartCard({ title: "Average Order Value Decline (AOV)", insightText: "AOV fell from ~$3,224 in 2005 to ~$845 in 2008 — growth was entirely volume-driven, not value-driven. This is a growth quality risk.", insightColor: C.amber, height: 200, chart: { type: "area", data: aovData, xKey: "year", key: "aov", name: "Avg Order Value", color: C.amber, yFmt: "money0" } }),
    chartCard({ title: "Seasonal Revenue Pattern (Monthly Average Index)", insightText: "Strongest months: June, May, December. Weakest: September, August, July. A summer mid-year lull followed by strong Q2 and year-end peaks.", insightColor: C.blue, height: 200, chart: { type: "bar", data: monthlyData, xKey: "month", keys: ["revenue"], names: ["Revenue Index"], colorsBy: monthlyData.map((d) => ["Jun", "May", "Dec"].includes(d.month) ? C.accent : ["Sep", "Aug", "Jul"].includes(d.month) ? C.red : C.blue), yFmt: "plain", grouped: false } })
  );
}

function tabProduct() {
  return el("div", { class: "stack" },
    el("div", { class: "grid grid-three" },
      miniCard({ label: "Bikes Revenue", value: "~$28.5M", sub: "97.2% of total revenue", color: C.accent }),
      miniCard({ label: "Accessories Margin", value: "~62.6%", sub: "Highest margin category", color: C.amber }),
      miniCard({ label: "Clothing Revenue", value: "~$0.34M", sub: "~1.2% of total revenue", color: C.textMuted })
    ),
    chartCard({ title: "Revenue vs Profit by Category", insightText: "Bikes dominate in absolute dollars. Accessories punch far above their revenue weight due to ~62.6% margins. Clothing is marginal in both revenue and profit.", height: 220, chart: { type: "bar", data: categoryData, xKey: "name", keys: ["revenue", "profit"], names: ["Revenue", "Profit"], colors: [C.blue, C.accent], yFmt: "moneyM", grouped: true, horizontal: true } }),
    chartCard({ title: "Top Sub-Category Profit Contribution", insightText: "Road Bikes lead at ~$5.54M profit, followed by Mountain Bikes at ~$4.51M. Mountain-200 and Road-150 are the flagship product lines within these categories.", height: 220, chart: { type: "bar", data: subCategoryData, xKey: "name", keys: ["revenue", "profit"], names: ["Revenue", "Profit"], colors: [C.blue, C.accent], yFmt: "moneyM", grouped: true, rotate: -20 } })
  );
}

function tabProfitability() {
  return el("div", { class: "stack" },
    insight("<strong>Revenue ≠ Profitability.</strong> Bikes generate the most profit dollars, but Accessories generate the highest profit margins. Growing accessory attachment rates is the fastest path to improving overall portfolio margin without adding volume.", C.amber),
    chartCard({ title: "Profit Margin by Sub-Category", insightText: "Accessories at ~62.6% margin are nearly 20 percentage points above Road and Touring Bikes. Bundling accessories with bike purchases can meaningfully lift blended margins.", insightColor: C.amber, height: 230, chart: { type: "bar", data: marginData, xKey: "name", keys: ["margin"], names: ["Margin %"], colorsBy: marginData.map((d) => d.name === "Accessories" ? C.amber : C.blue), yFmt: "pct0", domainMax: 70, horizontal: true } }),
    chartCard({ title: "Absolute Profit by Category ($M)", insightText: "Despite lower margins, Bikes contribute ~$11.5M of the total $12.1M profit — the concentration is extreme. Any disruption to the Bikes category puts 95%+ of profit at risk.", insightColor: C.red, height: 200, chart: { type: "bar", data: categoryData, xKey: "name", keys: ["profit"], names: ["Profit"], colorsBy: CHART_COLORS, yFmt: "moneyM" } }),
    el("div", { class: "card bundle" }, sectionTitle("Accessory Bundle Opportunity"), el("div", { class: "bundle-grid" }, ["Helmets", "Tires & Tubes", "Hydration Packs", "Bike Racks", "Bike Stands", "Bottles & Cages"].map((item) => el("div", { class: "bundle-item" }, item))))
  );
}

function tabRegional() {
  return el("div", { class: "stack" },
    chartCard({ title: "Regional Revenue & Profit Comparison", insightText: "Australia leads all regions in revenue (~$9.1M), profit (~$3.7M), and revenue per customer. Southwest is the second-largest and shows strong growth potential.", height: 230, chart: { type: "bar", data: regionData, xKey: "region", keys: ["revenue", "profit"], names: ["Revenue", "Profit"], colors: [C.blue, C.accent], yFmt: "moneyM", grouped: true, rotate: -15 } }),
    chartCard({ title: "Revenue per Customer by Region", insightText: "Australia leads in revenue per customer at ~$2,524 — significantly above other regions. UK and Germany also index high, suggesting premium-product affinity. Note: Central, Northeast, and Southeast excluded due to very small customer counts.", insightColor: C.blue, height: 220, chart: { type: "bar", data: regionData, xKey: "region", keys: ["revPerCust"], names: ["Revenue / Customer"], colorsBy: regionData.map((d) => d.region === "Australia" ? C.accent : C.blue), yFmt: "money0", horizontal: true } }),
    el("div", { class: "grid grid-auto" },
      miniCard({ label: "Regional Margins", value: "41–45%", sub: "Stable across all regions", color: C.green }),
      miniCard({ label: "Australia Revenue", value: "~$9.1M", sub: "30.9% of total revenue", color: C.accent }),
      miniCard({ label: "Southwest Revenue", value: "~$7.9M", sub: "2nd largest, strong growth", color: C.blue })
    )
  );
}

function tabCustomer() {
  return el("div", { class: "stack" },
    chartCard({ title: "Revenue & Profit per Customer by Income Segment", insightText: "High-income customers (120K+) generate ~$2,400 revenue and ~$999 profit per customer — nearly 2× the low-income segment. Both frequency and AOV rise with income.", height: 230, chart: { type: "line", data: incomeData, xKey: "segment", keys: ["revPerCust", "profitPerCust"], names: ["Revenue / Customer", "Profit / Customer"], colors: [C.accent, C.green], yFmt: "money0" } }),
    el("div", { class: "grid grid-two" },
      chartCard({ title: "Revenue per Customer by Occupation", insightText: "Professionals and Managers are the most valuable occupations. Manual workers generate ~33% less revenue per customer.", insightColor: C.purple, height: 200, chart: { type: "bar", data: occupationData, xKey: "occ", keys: ["revPerCust"], names: ["Rev / Customer"], colorsBy: occupationData.map((d) => ["Professional", "Management"].includes(d.occ) ? C.accent : C.blue), yFmt: "money0", horizontal: true } }),
      chartCard({ title: "Revenue per Customer by Age Group", insightText: "The 30–49 age band is the sweet spot. Customers aged 30–39 and 40–49 generate the highest revenue per customer, making them the primary targeting priority.", insightColor: C.blue, height: 200, chart: { type: "bar", data: ageData, xKey: "age", keys: ["revPerCust"], names: ["Rev / Customer"], colorsBy: ageData.map((d) => ["30–39", "40–49"].includes(d.age) ? C.accent : C.blue), yFmt: "money0" } })
    ),
    insight("<strong>Gender note:</strong> Gender impact on revenue per customer is ~4% — a weak targeting variable. Gender-based campaigns are unlikely to meaningfully improve customer value and resources are better directed toward income and age segmentation.", C.textMuted)
  );
}

function tabRisks() {
  const risks = [
    { label: "Bike Revenue Concentration", value: "97.2%", desc: "~$28.5M of ~$29.4M total revenue comes from Bikes alone.", color: C.red, severity: "Critical" },
    { label: "Bike Profit Concentration", value: "95.2%", desc: "~$11.5M of ~$12.1M total profit sourced from one category.", color: C.red, severity: "Critical" },
    { label: "Geographic Concentration", value: "~30.9%", desc: "Australia is the single largest market. Regional disruption = major revenue impact.", color: C.amber, severity: "High" },
    { label: "Product Line Concentration", value: "Top 2 lines", desc: "Mountain-200 and Road-150 account for a disproportionate share of category performance.", color: C.amber, severity: "High" },
    { label: "AOV Decline", value: "−73.8%", desc: "AOV fell from ~$3,224 to ~$845 as volume-driven growth diluted average transaction value.", color: C.amber, severity: "Medium" },
    { label: "Accessories Under-Penetration", value: "~2.4% rev", desc: "Accessories have the highest margins (~62.6%) but represent only 2.4% of revenue — a major missed opportunity.", color: C.green, severity: "Opportunity" }
  ];
  return el("div", { class: "stack" },
    insight("<strong>Primary Risk:</strong> AdventureWorks is a one-category, one-region business. Bikes + Australia account for the overwhelming majority of both revenue and profit. A category disruption or regional economic shock would be existential without diversification.", C.red),
    el("div", { class: "grid", style: { gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))" } }, risks.map((r) => {
      const card = el("div", { class: "risk-card" });
      card.style.borderLeftColor = r.color;
      card.append(el("div", { class: "risk-head" }, el("div", { class: "risk-label" }, r.label), el("div", { class: "badge", style: { background: `${r.color}22`, color: r.color } }, r.severity)), el("div", { class: "risk-value", style: { color: r.color } }, r.value), el("div", { class: "risk-desc" }, r.desc));
      return card;
    })),
    chartCard({ title: "Revenue Concentration Risk: Category Split", insightText: "The near-total dominance of Bikes in both revenue and profit leaves no buffer. Accessories growth is the most actionable path to diversification.", insightColor: C.red, height: 200, chart: { type: "pie", data: [{ name: "Bikes ~$28.5M", value: 28538022 }, { name: "Accessories ~$0.7M", value: 700760 }, { name: "Clothing ~$0.34M", value: 339896 }], colors: [C.red, C.amber, C.blue] } })
  );
}

function tabStrategy() {
  const groups = recommendationGroups();
  return el("div", { class: "stack" },
    el("div", { class: "strategy-hero" },
      el("div", { class: "strategy-card" }, el("div", { class: "strategy-title" }, "Strategic Recommendations"), el("div", { class: "strategy-subtitle" }, "Interactive executive action plan focused on sustainable growth, profitability improvement, customer value, and risk reduction.")),
      el("div", { class: "strategy-goal" }, el("div", { class: "strategy-goal-label" }, "🎯 Our Goal"), el("div", { class: "strategy-goal-text" }, "Build a more profitable, higher-value, and more balanced AdventureWorks business."))
    ),
    groups.map((g) => recommendationCard(g)),
    el("div", { class: "fine-print" }, "All values are approximate (~) unless stated otherwise. 2005 and 2008 are partial-year periods.")
  );
}

function recommendationGroups() {
  return [
    { num: "01", title: "Product Strategy", subtitle: "Protect core product lines and reduce weak category drag.", color: C.accent, visual: "🚲", metrics: ["Road + Mountain Bikes", "~$10M+ profit", "Mountain-200 / Road-150"], impact: ["Higher total profit", "Core product focus", "Lower underperformer cost"], items: [{ action: "Protect & grow Road Bikes and Mountain Bikes", detail: "These two sub-categories generate ~$10M+ in combined profit. Prioritise inventory, marketing spend, and product development here." }, { action: "Prioritise Mountain-200 and Road-150 product lines", detail: "Top-performing individual lines. Ensure consistent availability, strong merchandising, and upsell/cross-sell placement." }, { action: "Review or reduce the Clothing category", detail: "Only ~$0.34M revenue and ~$0.14M profit. Resources may generate higher returns if redirected to Accessories or core Bike lines." }] },
    { num: "02", title: "Profitability Strategy", subtitle: "Increase profit per order through accessories and smarter pricing.", color: C.amber, visual: "🪖 + 🚲", metrics: ["~62.6% accessory margin", "+$63 gross profit per $100 bundle", "Track AOV & profit/order"], impact: ["Higher AOV", "Better profit/order", "More margin-efficient growth"], items: [{ action: "Increase accessory attachment rates at point of sale", detail: "Each accessory sold alongside a bike adds high-margin revenue without proportional cost increase." }, { action: "Bundle helmets, tires & tubes, hydration packs, bike racks, stands, and bottles with bike purchases", detail: "Accessories carry ~62.6% margins. A $100 accessory bundle adds ~$63 in gross profit vs ~$40 from an equivalent bike revenue increase." }, { action: "Track AOV and profit per order as primary KPIs", detail: "Revenue growth alone is misleading if AOV continues to decline. Shift focus to value quality, not just volume." }] },
    { num: "03", title: "Regional Growth Strategy", subtitle: "Defend strong regions and expand high-potential markets.", color: C.blue, visual: "🌍", metrics: ["Australia = anchor market", "Southwest = growth region", "UK & Germany = premium potential"], impact: ["Stronger market leadership", "Higher regional value", "Sustainable revenue growth"], items: [{ action: "Prioritise Australia — protect and deepen the relationship", detail: "Highest revenue, profit, revenue per customer, and profit per order. Australia is the anchor market and must be defended." }, { action: "Accelerate Southwest expansion", detail: "Second-largest region with strong growth trajectory. Invest in customer acquisition and fulfilment capacity here." }, { action: "Use UK and Germany for premium-product and accessory campaigns", detail: "Both regions show above-average customer value, suggesting receptivity to premium offers and accessory bundles." }] },
    { num: "04", title: "Customer Strategy", subtitle: "Target highest-value customer segments and improve lifetime value.", color: C.purple, visual: "👥", metrics: ["Age 30–49", "High income", "Professional / Management"], impact: ["Higher revenue/customer", "More repeat purchases", "Higher lifetime value"], items: [{ action: "Target high-income customers aged 30–49 as the primary acquisition segment", detail: "This cohort generates ~2× the revenue per customer of the lowest-income segment and has higher AOV and purchase frequency." }, { action: "Prioritise Professional and Management occupations in digital and direct campaigns", detail: "Revenue per customer: Professional ~$1,795, Management ~$1,778 — well above Manual at ~$1,199." }, { action: "Avoid gender as a primary targeting variable", detail: "Gender explains only ~4% variance in customer value. Gender-based campaigns are unlikely to justify the investment." }] },
    { num: "05", title: "Risk Mitigation Strategy", subtitle: "Reduce concentration risk and build a more balanced business.", color: C.red, visual: "⚠️", metrics: ["Reduce Bikes dependence", "Diversify beyond Australia", "Reverse 73.8% AOV decline"], impact: ["Lower business risk", "More balanced revenue mix", "Stronger sustainable growth"], items: [{ action: "Reduce dependence on Bikes and Australia through deliberate category diversification", detail: "No single product category or geography should account for >70% of revenue. Set a 3-year diversification target." }, { action: "Grow Accessories as both a margin and diversification strategy", detail: "At ~62.6% margins, growing Accessories from $0.7M to $2M+ would add ~$800K in gross profit and reduce concentration risk." }, { action: "Improve AOV through bundles, tiered discounts, and cross-selling", detail: "AOV declined 73.8% over the analysis period. Bundles, minimum-spend incentives, and loyalty programmes can reverse this trend." }] }
  ];
}

function recommendationCard(g) {
  const isOpen = openGroup === g.num;
  const card = el("div", { class: `accordion ${isOpen ? "open" : ""}`, onclick: () => { openGroup = isOpen ? "" : g.num; renderApp(); } });
  card.style.borderColor = isOpen ? g.color : C.border;
  if (isOpen) card.style.boxShadow = `0 0 0 1px ${g.color}33, 0 18px 40px rgba(0,0,0,0.25)`;
  card.append(
    el("div", { class: "accordion-main" },
      el("div", {}, el("div", { class: "rec-head" }, el("div", { class: "rec-num", style: { background: `${g.color}22`, color: g.color } }, g.num), el("div", {}, el("div", { class: "rec-title" }, g.title), el("div", { class: "rec-subtitle" }, g.subtitle))), el("div", { class: "rec-visual" }, g.visual), el("div", { class: "metric-grid" }, g.metrics.map((m) => el("div", { class: "metric-pill", style: { borderColor: `${g.color}44`, background: `${g.color}10` } }, m)))),
      el("div", { class: "rec-col" }, el("div", { class: "rec-col-title", style: { color: g.color } }, "Key Actions"), el("div", { class: "actions" }, g.items.map((item) => el("div", { class: "action-row" }, el("div", { class: "check", style: { background: g.color } }, "✓"), el("div", {}, el("div", { class: "action-title" }, item.action), el("div", { class: "action-detail" }, item.detail)))))),
      el("div", { class: "rec-col" }, el("div", { class: "rec-col-title", style: { color: g.color } }, "Expected Impact"), g.impact.map((impact, i) => el("div", { class: "impact-row" }, el("div", { class: "impact-icon" }, i === 0 ? "📈" : i === 1 ? "🎯" : "💰"), el("div", { class: "impact-text" }, impact))))
    ),
    el("div", { class: "accordion-footer", style: { background: `${g.color}10` } }, el("span", {}, isOpen ? "Click to collapse details" : "Click to expand evidence and details"), el("span", { style: { color: g.color, fontWeight: 800 } }, isOpen ? "−" : "+"))
  );
  return card;
}

function animateKpis() {
  document.querySelectorAll(".kpi-value[data-target]").forEach((node) => {
    const target = Number(node.dataset.target);
    const isPct = node.dataset.delta === "pct";
    const start = performance.now();
    function step(now) {
      const p = Math.min((now - start) / 1000, 1);
      const value = target * p;
      if (isPct) node.textContent = `${value.toFixed(1)}%`;
      else if (target >= 1e6) node.textContent = `$${(value / 1e6).toFixed(2)}M`;
      else if (target >= 1e3 && target < 1e4) node.textContent = value.toFixed(0);
      else if (value >= 1e3) node.textContent = `${(value / 1e3).toFixed(1)}K`;
      else node.textContent = value.toFixed(2);
      if (p < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  });
}

function renderCharts() {
  document.querySelectorAll(".chart-area[data-chart]").forEach((area) => {
    const config = JSON.parse(area.dataset.chart);
    area.replaceChildren();
    if (config.type === "bar") drawBar(area, config);
    if (config.type === "line") drawLine(area, config);
    if (config.type === "area") drawArea(area, config);
    if (config.type === "pie") drawPie(area, config);
  });
}

function svg(width = 900, height = 260) {
  return document.createElementNS("http://www.w3.org/2000/svg", "svg");
}

function sEl(tag, attrs = {}) {
  const node = document.createElementNS("http://www.w3.org/2000/svg", tag);
  Object.entries(attrs).forEach(([k, v]) => node.setAttribute(k, v));
  return node;
}

function formatter(name) {
  if (name === "moneyM") return (v) => `$${(v / 1e6).toFixed(1)}M`;
  if (name === "money0") return (v) => `$${Number(v).toLocaleString()}`;
  if (name === "pct0") return (v) => `${v}%`;
  if (name === "plain") return (v) => `${Math.round(Number(v)).toLocaleString()}`;
  return (v) => `${v}`;
}

function valueFormatter(name) {
  if (name === "moneyM") return (v) => `$${(v / 1e6).toFixed(2)}M`;
  if (name === "money0") return (v) => `$${Number(v).toLocaleString()}`;
  if (name === "pct0") return (v) => `${v}%`;
  return (v) => `${v}`;
}

function chartBase(area, margin) {
  const width = 900;
  const height = 260;
  const root = svg();
  root.setAttribute("viewBox", `0 0 ${width} ${height}`);
  root.setAttribute("preserveAspectRatio", "none");
  area.append(root);
  return { root, width, height, plotW: width - margin.left - margin.right, plotH: height - margin.top - margin.bottom };
}

function niceTicks(max, count = 5) {
  if (max <= 0) return [0, 1];
  return Array.from({ length: count + 1 }, (_, i) => max * (i / count));
}

function addLegend(root, items, x, y) {
  let cursor = x;
  items.forEach((item) => {
    root.append(sEl("rect", { x: cursor, y, width: 10, height: 10, rx: 2, fill: item.color }));
    root.append(text(cursor + 16, y + 9, item.name, { fill: C.textSecondary, size: 12 }));
    cursor += item.name.length * 7 + 42;
  });
}

function text(x, y, value, opts = {}) {
  const t = sEl("text", { x, y, fill: opts.fill || C.textSecondary, "font-size": opts.size || 11, "text-anchor": opts.anchor || "middle" });
  if (opts.rotate) t.setAttribute("transform", `rotate(${opts.rotate} ${x} ${y})`);
  t.textContent = value;
  return t;
}

function drawBar(area, config) {
  const margin = config.horizontal ? { top: 18, right: 28, bottom: 36, left: 112 } : { top: 22, right: 26, bottom: config.rotate ? 70 : 38, left: 66 };
  const { root, width, height, plotW, plotH } = chartBase(area, margin);
  const keys = config.keys;
  const maxValue = config.domainMax || Math.max(...config.data.flatMap((d) => keys.map((k) => d[k]))) * 1.12;
  const fmtAxis = formatter(config.yFmt);
  const fmtValue = valueFormatter(config.yFmt);
  const colorFor = (i, j) => config.colorsBy ? config.colorsBy[i % config.colorsBy.length] : (config.colors && config.colors[j]) || CHART_COLORS[j % CHART_COLORS.length];

  if (keys.length > 1) addLegend(root, keys.map((k, i) => ({ name: config.names[i], color: colorFor(0, i) })), margin.left, 8);

  if (config.horizontal) {
    niceTicks(maxValue).forEach((tick) => {
      const x = margin.left + (tick / maxValue) * plotW;
      root.append(sEl("line", { x1: x, x2: x, y1: margin.top, y2: margin.top + plotH, class: "grid-line" }));
      root.append(text(x, height - 12, fmtAxis(tick), { size: 11 }));
    });
    const rowH = plotH / config.data.length;
    config.data.forEach((d, i) => {
      const yBase = margin.top + i * rowH;
      root.append(text(margin.left - 10, yBase + rowH / 2 + 4, d[config.xKey], { anchor: "end", fill: C.textPrimary, size: 12 }));
      keys.forEach((k, j) => {
        const gap = 4;
        const barH = Math.min(18, (rowH - 12) / keys.length);
        const x = margin.left;
        const y = yBase + rowH / 2 - ((barH + gap) * keys.length - gap) / 2 + j * (barH + gap);
        const w = (d[k] / maxValue) * plotW;
        const rect = sEl("rect", { class: "bar", x, y, width: Math.max(1, w), height: barH, rx: 4, fill: colorFor(i, j), opacity: 0.88 });
        attachTip(rect, d[config.xKey], [{ name: config.names[j], value: fmtValue(d[k]), color: colorFor(i, j) }]);
        root.append(rect);
      });
    });
  } else {
    niceTicks(maxValue).forEach((tick) => {
      const y = margin.top + plotH - (tick / maxValue) * plotH;
      root.append(sEl("line", { x1: margin.left, x2: margin.left + plotW, y1: y, y2: y, class: "grid-line" }));
      root.append(text(margin.left - 10, y + 4, fmtAxis(tick), { anchor: "end", size: 11 }));
    });
    const groupW = plotW / config.data.length;
    config.data.forEach((d, i) => {
      const xBase = margin.left + i * groupW;
      const labelX = xBase + groupW / 2;
      root.append(text(labelX, height - (config.rotate ? 28 : 12), d[config.xKey], { size: 11, rotate: config.rotate || 0, anchor: config.rotate ? "end" : "middle" }));
      if (config.refs && config.refs.includes(d[config.xKey])) {
        root.append(sEl("line", { x1: labelX, x2: labelX, y1: margin.top, y2: margin.top + plotH, stroke: C.amber, "stroke-dasharray": "4 4" }));
        root.append(text(labelX + 5, margin.top + 12, "Partial", { fill: C.amber, size: 10, anchor: "start" }));
      }
      keys.forEach((k, j) => {
        const gap = 6;
        const totalGap = gap * (keys.length - 1);
        const innerW = groupW * 0.68;
        const barW = (innerW - totalGap) / keys.length;
        const x = xBase + (groupW - innerW) / 2 + j * (barW + gap);
        const h = (d[k] / maxValue) * plotH;
        const y = margin.top + plotH - h;
        const rect = sEl("rect", { class: "bar", x, y, width: barW, height: h, rx: 4, fill: colorFor(i, j), opacity: 0.88 });
        attachTip(rect, d[config.xKey], [{ name: config.names[j], value: fmtValue(d[k]), color: colorFor(i, j) }]);
        root.append(rect);
      });
    });
  }
}

function drawLine(area, config) {
  const margin = { top: 24, right: 28, bottom: 54, left: 66 };
  const { root, height, plotW, plotH } = chartBase(area, margin);
  const maxValue = Math.max(...config.data.flatMap((d) => config.keys.map((k) => d[k]))) * 1.12;
  const fmtAxis = formatter(config.yFmt);
  const fmtValue = valueFormatter(config.yFmt);
  addLegend(root, config.keys.map((k, i) => ({ name: config.names[i], color: config.colors[i] })), margin.left, 8);
  niceTicks(maxValue).forEach((tick) => {
    const y = margin.top + plotH - (tick / maxValue) * plotH;
    root.append(sEl("line", { x1: margin.left, x2: margin.left + plotW, y1: y, y2: y, class: "grid-line" }));
    root.append(text(margin.left - 10, y + 4, fmtAxis(tick), { anchor: "end", size: 11 }));
  });
  const xFor = (i) => margin.left + (plotW / (config.data.length - 1)) * i;
  config.data.forEach((d, i) => root.append(text(xFor(i), height - 17, d[config.xKey], { size: 10 })));
  config.keys.forEach((k, seriesIndex) => {
    const points = config.data.map((d, i) => [xFor(i), margin.top + plotH - (d[k] / maxValue) * plotH]);
    root.append(sEl("path", { d: `M ${points.map((p) => p.join(" ")).join(" L ")}`, fill: "none", stroke: config.colors[seriesIndex], "stroke-width": 2.5 }));
    points.forEach((p, i) => {
      const dot = sEl("circle", { class: "dot", cx: p[0], cy: p[1], r: 5, fill: config.colors[seriesIndex] });
      attachTip(dot, config.data[i][config.xKey], [{ name: config.names[seriesIndex], value: fmtValue(config.data[i][k]), color: config.colors[seriesIndex] }]);
      root.append(dot);
    });
  });
}

function drawArea(area, config) {
  const margin = { top: 18, right: 28, bottom: 38, left: 66 };
  const { root, height, plotW, plotH } = chartBase(area, margin);
  const maxValue = Math.max(...config.data.map((d) => d[config.key])) * 1.12;
  const fmtAxis = formatter(config.yFmt);
  const fmtValue = valueFormatter(config.yFmt);
  const defs = sEl("defs");
  const gradient = sEl("linearGradient", { id: "aovGradStatic", x1: 0, y1: 0, x2: 0, y2: 1 });
  gradient.appendChild(sEl("stop", { offset: "5%", "stop-color": config.color, "stop-opacity": 0.3 }));
  gradient.appendChild(sEl("stop", { offset: "95%", "stop-color": config.color, "stop-opacity": 0 }));
  defs.appendChild(gradient);
  root.appendChild(defs);
  niceTicks(maxValue).forEach((tick) => {
    const y = margin.top + plotH - (tick / maxValue) * plotH;
    root.append(sEl("line", { x1: margin.left, x2: margin.left + plotW, y1: y, y2: y, class: "grid-line" }));
    root.append(text(margin.left - 10, y + 4, fmtAxis(tick), { anchor: "end", size: 11 }));
  });
  const xFor = (i) => margin.left + (plotW / (config.data.length - 1)) * i;
  const points = config.data.map((d, i) => [xFor(i), margin.top + plotH - (d[config.key] / maxValue) * plotH]);
  const linePath = `M ${points.map((p) => p.join(" ")).join(" L ")}`;
  const areaPath = `${linePath} L ${points.at(-1)[0]} ${margin.top + plotH} L ${points[0][0]} ${margin.top + plotH} Z`;
  root.append(sEl("path", { d: areaPath, fill: "url(#aovGradStatic)" }));
  root.append(sEl("path", { d: linePath, fill: "none", stroke: config.color, "stroke-width": 2.5 }));
  config.data.forEach((d, i) => {
    root.append(text(xFor(i), height - 12, d[config.xKey], { size: 11 }));
    const dot = sEl("circle", { class: "dot", cx: points[i][0], cy: points[i][1], r: 5, fill: config.color });
    attachTip(dot, d[config.xKey], [{ name: config.name, value: fmtValue(d[config.key]), color: config.color }]);
    root.append(dot);
  });
}

function drawPie(area, config) {
  const { root } = chartBase(area, { top: 8, right: 8, bottom: 8, left: 8 });
  const cx = 315;
  const cy = 130;
  const r = 78;
  const total = config.data.reduce((sum, d) => sum + d.value, 0);
  const legendLabels = ["Bikes ~96.5%", "Accessories ~2.4%", "Clothing ~1.1%"];
  let angle = -Math.PI / 2;
  config.data.forEach((d, i) => {
    const slice = (d.value / total) * Math.PI * 2;
    const end = angle + slice;
    const x1 = cx + Math.cos(angle) * r;
    const y1 = cy + Math.sin(angle) * r;
    const x2 = cx + Math.cos(end) * r;
    const y2 = cy + Math.sin(end) * r;
    const large = slice > Math.PI ? 1 : 0;
    const path = sEl("path", { class: "pie-slice", d: `M ${cx} ${cy} L ${x1} ${y1} A ${r} ${r} 0 ${large} 1 ${x2} ${y2} Z`, fill: config.colors[i] });
    attachTip(path, d.name, [{ name: "Revenue", value: `$${(d.value / 1e6).toFixed(2)}M`, color: config.colors[i] }]);
    root.append(path);
    angle = end;
  });
  legendLabels.forEach((label, i) => {
    const y = 88 + i * 34;
    root.append(sEl("rect", { x: 520, y: y - 12, width: 12, height: 12, rx: 3, fill: config.colors[i] }));
    root.append(text(542, y - 2, label, { anchor: "start", fill: C.textPrimary, size: 13 }));
    root.append(text(542, y + 14, `$${(config.data[i].value / 1e6).toFixed(2)}M revenue`, { anchor: "start", fill: C.textSecondary, size: 11 }));
  });
}

let tooltip;

function attachTip(node, title, rows) {
  node.addEventListener("mousemove", (event) => showTip(event, title, rows));
  node.addEventListener("mouseleave", hideTip);
}

function showTip(event, title, rows) {
  if (!tooltip) {
    tooltip = el("div", { class: "tooltip" });
    document.body.append(tooltip);
  }
  tooltip.innerHTML = "";
  tooltip.append(el("div", { class: "tooltip-title" }, title));
  rows.forEach((row) => tooltip.append(el("div", { style: { color: row.color } }, `${row.name}: ${row.value}`)));
  tooltip.style.left = `${event.clientX + 14}px`;
  tooltip.style.top = `${event.clientY + 14}px`;
}

function hideTip() {
  if (tooltip) tooltip.remove();
  tooltip = null;
}

window.addEventListener("resize", () => renderCharts());
renderApp();
