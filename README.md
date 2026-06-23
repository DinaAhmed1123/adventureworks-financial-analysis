# AdventureWorks Financial Analysis

An end-to-end business intelligence project analyzing sales performance, product profitability, regional trends, and customer value using the AdventureWorks DW 2008 dataset. The project moves from raw data validation through SQL, exploratory analysis in Python/pandas, and an interactive dashboard — with a focus on translating data into actionable business recommendations.

---

## Table of Contents

- [Project Objective](#project-objective)
- [Executive Summary](#executive-summary)
- [Dataset](#dataset)
- [Tools & Technologies](#tools--technologies)
- [Project Workflow](#project-workflow)
- [Key Business Findings](#key-business-findings)
- [Strategic Recommendations](#strategic-recommendations)
- [Dashboard](#dashboard)
- [Repository Structure](#repository-structure)

---

## Project Objective

Analyze AdventureWorks' financial and sales data to identify the products, customer segments, and regions that drive revenue and profitability — and provide prioritized, evidence-based recommendations for improving business performance.

---

## Executive Summary

| | |
|---|---|
| Transactions analyzed | 60,398 sales records across 37 months |
| Strategic recommendations | 5 prioritized, evidence-based recommendations |
| Top-performing market | Australia — highest revenue, profit, and customer value |
| Profit concentration | Bikes generated 95%+ of total profit |
| Highest-margin category | Accessories at 62.6% profit margin |
| Key growth risk identified | AOV declined 73.8% despite strong revenue growth |
| Main conclusion | Revenue growth was strong, but profitability depended heavily on Bikes and Australia, creating concentration risk |

---

## Dataset

- **Source:** AdventureWorks DW 2008 (Kaggle)
- **Type:** Data Warehouse (star schema)
- **Key fact tables:** FactInternetSales, FactFinance, FactSalesQuota
- **Key dimension tables:** DimProduct, DimCustomer, DimGeography, DimSalesTerritory, DimDate
- **Scale:** 60,398 sales transactions | 18,484 customers | 37 months of history

---

## Tools & Technologies

| Layer | Tools |
|---|---|
| Data storage | SQLite |
| Data validation | SQL |
| Analysis | Python, pandas |
| Visualization | Python, JavaScript, React |
| Dashboard | Custom interactive dashboard (Python + JS/React) |
| Planned extension | Power BI |

---

## Project Workflow

### 1. Data Modeling & Validation (SQL)

Imported all fact and dimension tables into SQLite, identified primary and foreign keys, and validated the star schema before any analysis began.

```sql
-- Row count verification across all tables
SELECT 'FactInternetSales' AS table_name, COUNT(*) AS row_count FROM FactInternetSales
UNION ALL
SELECT 'DimCustomer', COUNT(*) FROM DimCustomer
UNION ALL
SELECT 'DimProduct', COUNT(*) FROM DimProduct;

-- Referential integrity check — orphan key detection
SELECT COUNT(*) AS orphan_products
FROM FactInternetSales f
LEFT JOIN DimProduct p ON f.ProductKey = p.ProductKey
WHERE p.ProductKey IS NULL;
```

No issues were identified across six predefined data quality validation checks: null values in critical columns, duplicate transactions, negative financial values, orphan foreign keys, date coverage gaps, and sales quota completeness.

### 2. Baseline Metrics (Python / pandas)

Established core KPIs from FactInternetSales before segmentation analysis.

```python
import sqlite3
import pandas as pd

conn = sqlite3.connect("adventureworks_financial_analysis.db")
sales = pd.read_sql("SELECT * FROM FactInternetSales", conn)

total_revenue = sales["SalesAmount"].sum()           # $29,358,677
total_profit  = (sales["SalesAmount"] - sales["TotalProductCost"]).sum()  # $12,080,883
profit_margin = total_profit / total_revenue         # 41.15%
unique_orders = sales["SalesOrderNumber"].nunique()  # 27,659
```

| Metric | Value |
|---|---|
| Total Revenue | $29,358,677 |
| Total Profit | $12,080,883 |
| Profit Margin | 41.15% |
| Total Customers | 18,484 |
| Avg Orders per Customer | 1.50 |
| Avg Sale Amount | $486.09 |

### 3. Time Trend Analysis

Merged sales with the date dimension to analyze year-over-year revenue growth, quarterly patterns, customer acquisition, and average order value (AOV) trends.

```python
sales_dates = sales.merge(dates, left_on="OrderDateKey", right_on="DateKey", how="left")

revenue_by_year = sales_dates.groupby("CalendarYear")["SalesAmount"].sum()
yoy_growth = round(revenue_by_year.pct_change() * 100, 2)

aov_by_quarter = (
    sales_dates.groupby(["CalendarYear", "CalendarQuarter"])["SalesAmount"].sum()
    / sales_dates.groupby(["CalendarYear", "CalendarQuarter"])["SalesOrderNumber"].nunique()
)
```

**Finding:** Revenue grew 99.9% (2005–2006) and 49.9% (2006–2007), driven entirely by customer volume — not higher spending. AOV fell from ~$3,200 in 2005–2006 to ~$800 by 2008, a critical signal that growth quality was declining.

### 4. Product Analysis

Built a merged product-subcategory-category table to evaluate performance at every level of the product hierarchy.

```python
# Merge product → subcategory → category
sales_product_category = (
    sales_dates
    .merge(sold_products, on="ProductKey", how="left")
    .merge(subcategory[["ProductSubcategoryKey", "ProductCategoryKey", "EnglishProductSubcategoryName"]], on="ProductSubcategoryKey", how="left")
    .merge(categories[["ProductCategoryKey", "EnglishProductCategoryName"]], on="ProductCategoryKey", how="left")
)

category_profitability = (
    sales_product_category
    .groupby("EnglishProductCategoryName")
    .agg({"SalesAmount": "sum", "Profit": "sum"})
    .assign(ProfitMargin=lambda df: df["Profit"] / df["SalesAmount"])
)
```

### 5. Regional Analysis

Merged territory data with the sales table to evaluate regional revenue, profitability, customer value, and year-over-year growth.

```python
sales_region = sales_dates.merge(
    territories[["SalesTerritoryKey", "SalesTerritoryRegion", "SalesTerritoryCountry", "SalesTerritoryGroup"]],
    on="SalesTerritoryKey", how="left"
)

region_customer_order = (
    sales_region
    .groupby("SalesTerritoryRegion")
    .agg({"SalesAmount": "sum", "Profit": "sum", "CustomerKey": "nunique", "SalesOrderNumber": "nunique"})
    .assign(
        RevenuePerCustomer=lambda df: df["SalesAmount"] / df["CustomerKey"],
        ProfitPerOrder=lambda df: df["Profit"] / df["SalesOrderNumber"]
    )
)
```

### 6. Customer Analysis

Built a full demographic profile by merging customer data (occupation, age, income, gender) with sales transactions, then normalized all metrics by customer count to identify true value drivers.

```python
customer_sales = sales_region.merge(customers, on="CustomerKey", how="left")

# Age at time of purchase
customer_sales["Age"] = customer_sales["CalendarYear"] - pd.to_datetime(customer_sales["BirthDate"]).dt.year
customer_sales["AgeGroup"] = pd.cut(customer_sales["Age"], bins=[20,29,39,49,59,100], labels=["21-29","30-39","40-49","50-59","60+"])

# Income segmentation
customer_sales["IncomeGroup"] = pd.cut(customer_sales["YearlyIncome"],
    bins=[0,30000,60000,90000,120000,200000],
    labels=["Low Income (<30K)","Lower-Middle (30K-60K)","Middle (60K-90K)","Upper-Middle (90K-120K)","High Income (120K+)"]
)
```

---

## Key Business Findings

| Insight | Finding |
|---|---|
| Revenue growth | Doubled between 2005–2006 (+99.9%), then grew 49.9% from 2006–2007 |
| Growth quality risk | AOV fell 73.8% — the company was acquiring more customers spending less per order |
| Profit driver | Bikes generated 95%+ of total profit (~$11.5M of $12.1M) |
| Highest-margin category | Accessories at 62.6% margin vs 36–46% for most bike products |
| Strongest market | Australia ranked first by revenue, profit, revenue per customer, and profit per order |
| Most valuable customers | High-income customers aged 30–49 in Professional and Management roles |
| Seasonal pattern | May, June, and December peak; July–September are consistently the weakest months |
| Gender as a variable | Only ~4% variance in customer value — not a meaningful targeting axis |

### Detail by Analysis Area

**Revenue & Growth** — Revenue growth was driven entirely by customer volume, not higher spending per order. Unique customers grew from 1,013 in 2005 to 11,377 in 2008, while AOV declined from ~$3,200 to ~$800 over the same period.

**Product Performance** — Road Bikes ($5.54M profit) and Mountain Bikes ($4.51M profit) dominate. Accessories achieved 62.6% margins but contributed only $0.70M in revenue — a significant untapped opportunity. Clothing produced the lowest revenue ($0.34M) and profit ($0.14M) of any category.

**Regional Performance** — Australia led all regions. Profit margins were tightly clustered at 41–45% across all territories, confirming that regional differences are volume-driven rather than reflecting any structural cost or efficiency advantage.

**Customer Segments** — Income was the strongest predictor of customer value. Revenue per customer rose consistently from ~$1,215 (Low Income) to ~$2,400 (High Income). The 30–39 age group outperformed all others across revenue per customer, profit per customer, AOV, and purchase frequency.

---

## Strategic Recommendations

Five prioritized recommendation areas derived directly from the analysis:

**1. Product Strategy** — Protect Road Bikes and Mountain Bikes as the profit engine. Prioritize Mountain-200 and Road-150 inventory and marketing. Evaluate whether the Clothing category justifies its resource allocation.

**2. Profitability Strategy** — Launch accessory bundling programs at the point of sale. At 62.6% margins, adding a single accessory to each bike transaction materially lifts blended profitability. Set AOV and profit-per-order as tracked KPIs alongside total revenue.

**3. Regional Growth Strategy** — Deepen investment in Australia (anchor market, highest customer value). Accelerate Southwest expansion while growth momentum is strong. Target UK and Germany with premium-product and accessory campaigns given their above-average customer value metrics.

**4. Customer Strategy** — Concentrate retention and premium marketing on high-income customers aged 30–49 in Professional and Management roles. Middle-income customers generate the most total revenue in aggregate and should not be neglected. Deprioritize gender as a segmentation axis.

**5. Risk Mitigation** — Bikes represent ~97% of total profit; Australia is the single largest market. Treat Accessories as a deliberate diversification strategy — growing accessory revenue to $2–3M would improve margins and reduce category concentration simultaneously.

---

## Dashboard

An interactive dashboard was developed to communicate the project's findings to a non-technical audience. It consolidates KPIs, trend charts, product performance, regional comparisons, customer segment breakdowns, and the strategic recommendations into a single navigable interface.

The dashboard was built using Python and React/JavaScript, with multiple iterations reviewed and refined for analytical accuracy and usability.

> Screenshots below — full dashboard code is available in `/dashboard/`.

<img width="1314" height="665" alt="Screenshot 2026-06-23 at 9 31 02 PM" src="https://github.com/user-attachments/assets/f7f3841c-94a2-4c8b-bcd4-024789bba420" />
<img width="1350" height="957" alt="Screenshot 2026-06-23 at 9 32 25 PM" src="https://github.com/user-attachments/assets/d9303afd-0f5f-4216-8859-feb7b0970f6b" />
<img width="1349" height="931" alt="Screenshot 2026-06-23 at 9 39 05 PM" src="https://github.com/user-attachments/assets/bfaf60dd-287d-4825-a8f2-9f9528c6959d" />


A Power BI version of the dashboard is currently in development and will be added to the repository when complete.

---

## Repository Structure

```
adventureworks-financial-analysis/
|
|-- data/                         # Source data files (not included — available on Kaggle)
|-- sql/                          # SQL scripts for data validation and quality checks
|-- notebooks/                    # Python/pandas analysis notebooks
|-- dashboard/                    # Dashboard source code (Python + JS/React)
|-- README.md
```

> Update this section to reflect your actual repository structure before publishing.

---

*Dataset: AdventureWorks DW 2008 — Kaggle. All revenue and profit figures are approximate. 2005 and 2008 are partial-year periods and are not directly compared with full years.*
