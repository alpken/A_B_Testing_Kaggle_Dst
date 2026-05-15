## A/B Campaign Analysis — Funnel & Cost Efficiency

A end-to-end product analytics case study comparing two ad campaigns using funnel analysis,
statistical hypothesis testing, and cost efficiency evaluation to drive a data-backed scaling decision.

---

## Business Problem

A company ran two simultaneous ad campaigns — **Control** and **Test** — and needs to decide
which to scale. Raw purchase numbers are nearly identical, so the decision
requires deeper funnel and cost analysis, not just a headline metric comparison.

---

## Dataset

**Source:** [Kaggle — A/B Testing Dataset](https://www.kaggle.com/)  
**Campaigns:** Control Campaign vs. Test Campaign  
**Key features:** Impressions, Reach, Website Clicks, Searches, View Content, Add to Cart, Purchases, Spend

**ReadMe:** [README.md](https://github.com/user-attachments/files/27706955/README.md)

**Dashboard View Link:** https://alpken.github.io/A_B_Testing_Kaggle_Dst/

---

## Project Structure

```
ab-campaign-analysis/
├── data/
│   └── final_a_b_testing.csv
├── notebooks/
│   └── A_B_Testing.ipynb       # Full analysis notebook
├── exports/
│   ├── funnel_results.csv       # For Tableau funnel charts
│   ├── conversion_rates.csv     # Stage-to-stage drop-off rates
│   ├── test_results.csv      # p-values, CIs, effect sizes
│   └── metrics.csv        # CPP, CPC by day for trend analysis
└── README.md
```

---

## Analysis Framework

### 1 — EDA & Sanity Check
Validated spend parity, campaign duration, and daily trend stability before any testing.

### 2 — Funnel Analysis
Tracked 7-stage conversion funnel: `Impressions → Reach → Clicks → Searches → View Content → Add to Cart → Purchase`  
Identified a **19pp Add-to-Cart gap** (Control: 66.88% vs. Test: 47.45%) as the critical drop-off point.

### 3 — Statistical Hypothesis Testing

| Metric | Test Used | p-value | Significant |
|---|---|---|---|
| Purchase Rate | Two-proportion Z-test | < 0.001 | ✅ |
| Click-Through Rate | Two-proportion Z-test | < 0.001 | ✅ |
| Add-to-Cart Rate | Two-proportion Z-test | < 0.001 | ✅ |
| Cost Per Purchase | Welch's t-test | 0.165 | ❌ |

Effect sizes reported via Cohen's h (proportions) and Cohen's d (means).

### Act — Cost Efficiency
| Metric | Control | Test |
|---|---|---|
| Cost per Click | $0.43 | $0.42 |
| Cost per Purchase | $4.38 | $4.92 |
| Cost per Add-to-Cart | $1.76 | $2.91 |

---

## Key Finding

> The Test Campaign attracts more clicks (11.28% CTR vs. 5.99%) but loses users at the
> landing page — evidenced by a 19pp Add-to-Cart gap. Control delivers equal purchases
> at 11% lower cost per purchase and 40% lower cost per cart addition.

---

## Recommendation

**Scale Control Campaign short-term.** Run a follow-up test isolating the landing page
variable for the Test Campaign — its stronger checkout conversion (59.13% vs. 40.21%)
suggests high-intent users; the funnel leak is likely fixable.

---

## Tech Stack

**Python** — `pandas`, `scipy`, `statsmodels`, `seaborn`, `matplotlib`  
**Tableau** — Funnel dashboard, KPI tiles, daily trend charts, cost efficiency scatter plots
