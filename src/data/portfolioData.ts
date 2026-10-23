import type { ProfileData, Project, SkillCategory, TrainingItem } from '../types';

export const profileData: ProfileData = {
  name: "Poluparthi Naveen",
  role: "Data Analyst",
  subRole: "Power BI Developer | SQL & Python",
  headline: "Turning Data Into Actionable Business Insights.",
  supportingText: "I'm a Data Analyst specializing in Power BI, SQL, and Python. I transform raw data into meaningful insights through data cleaning, KPI development, interactive dashboards, and analytical storytelling.",
  aboutText: [
    "I am an analytical, detail-oriented B.Tech graduate in Information Technology (2025) and trained Data Analyst with hands-on experience handling datasets exceeding 260,000+ transactions and 37,000+ operational records.",
    "Through rigorous training at the FLM Analytics Program, I have developed expertise across the complete data lifecycle: extracting raw data with advanced SQL, engineering automated cleaning and transformation pipelines in Python & Power Query, building robust data models, and designing interactive Power BI dashboards with custom DAX calculations.",
    "My focus is not just creating visual charts, but translating complex quantitative patterns into structured root-cause analyses, KPI monitoring frameworks, and executive-ready business recommendations that drive measurable decisions."
  ],
  location: "Hyderabad, India",
  relocation: "Open to Pune & Remote / Hybrid roles",
  email: "naveen2028d@gmail.com",
  phone: "+91-9177941918",
  linkedin: "https://linkedin.com/in/poluparthi-naveen",
  github: "https://github.com/Naveen99000",
  education: "B.Tech in Information Technology (2021 – 2025), CGPA: 7.87",
  resumeFileName: "Poluparthi_Naveen_Resume.pdf"
};

export const keyImpactMetrics = [
  {
    value: "297,000+",
    label: "Total Records Analyzed",
    subtext: "Across e-commerce & operational datasets"
  },
  {
    value: "8+",
    label: "Custom DAX Measures & Dashboards",
    subtext: "Dynamic KPI modeling & time intelligence"
  },
  {
    value: "90%+",
    label: "Anomaly Root Cause Isolated",
    subtext: "Disproved system error hypothesis"
  },
  {
    value: "~40%",
    label: "Reporting Effort Reduced",
    subtext: "Automated recurring stakeholder pipelines"
  }
];

export const skillCategories: SkillCategory[] = [
  {
    id: "power-bi",
    title: "Power BI & Business Intelligence",
    iconName: "BarChart3",
    description: "End-to-end dashboard engineering, relational star-schema modeling, and executive KPI reporting.",
    skills: [
      { name: "Interactive Dashboards", highlight: true, description: "Executive KPI views with dynamic cross-filtering" },
      { name: "DAX Measures", highlight: true, description: "Calculated columns, time intelligence & iterative measures" },
      { name: "Power Query & ETL", highlight: true, description: "M-code transformations, cleansing & schema consolidation" },
      { name: "Data Modeling", description: "Star schemas, 1-to-many relationship cardinality & inactive joins" },
      { name: "Drill-Through Reports", description: "Granular transaction-level root cause drill paths" },
      { name: "KPI Reporting", description: "Target vs Actual, MoM, YoY growth variance tracking" },
      { name: "Tableau", description: "Visual exploration & worksheet storytelling (Familiar)" }
    ]
  },
  {
    id: "sql-databases",
    title: "SQL & Relational Databases",
    iconName: "Database",
    description: "Complex querying, data aggregation, window calculations, and high-performance joins.",
    skills: [
      { name: "PostgreSQL", highlight: true, description: "Enterprise analytical queries & partitioned transformations" },
      { name: "MySQL", highlight: true, description: "Operational logging queries & anomaly filtering" },
      { name: "CTEs (Common Table Expressions)", highlight: true, description: "Modular multi-stage data pipelines" },
      { name: "Window Functions", highlight: true, description: "ROW_NUMBER, DENSE_RANK, LAG/LEAD for cohort retention" },
      { name: "Complex Joins & Subqueries", description: "Multi-table relational joins, anti-joins & correlated subqueries" },
      { name: "Query Optimization", description: "Execution plan awareness, indexing, and aggregation efficiency" }
    ]
  },
  {
    id: "python",
    title: "Python Data Analysis",
    iconName: "Code2",
    description: "Programmatic data wrangling, scientific computing, and statistical visualization.",
    skills: [
      { name: "Pandas", highlight: true, description: "Dataframe transformations, grouping, pivoting & merging" },
      { name: "NumPy", highlight: true, description: "Vectorized numerical computations and array operations" },
      { name: "Matplotlib & Seaborn", highlight: true, description: "Distribution plots, correlation heatmaps & boxplots" },
      { name: "Data Transformation", description: "Missing value imputation, outlier detection & type casting" },
      { name: "Automation Scripts", description: "Scheduled data cleaning and CSV/Excel pipeline automation" }
    ]
  },
  {
    id: "analytics-techniques",
    title: "Analytics Techniques & Methodology",
    iconName: "LineChart",
    description: "Quantitative analytical frameworks to extract actionable strategic insights.",
    skills: [
      { name: "Exploratory Data Analysis (EDA)", highlight: true, description: "Summary statistics, skewness & data distribution audits" },
      { name: "RFM Segmentation", highlight: true, description: "Recency, Frequency, Monetary customer value clustering" },
      { name: "Cohort Analysis", highlight: true, description: "User retention tracking across monthly signup tranches" },
      { name: "A/B Testing Analysis", description: "Hypothesis testing, significance levels & conversion comparisons" },
      { name: "Root Cause Analysis", highlight: true, description: "Hypothesis validation and deep dive into anomaly drivers" },
      { name: "Data Quality Validation", description: "Null handling, duplicate resolution & referential integrity checks" }
    ]
  },
  {
    id: "tools-workflow",
    title: "Tools & Productivity",
    iconName: "Wrench",
    description: "Industry-standard productivity suites and developer environments.",
    skills: [
      { name: "Advanced Microsoft Excel", highlight: true, description: "Pivot Tables, XLOOKUP, INDEX-MATCH, SUMIFS, Power Pivot" },
      { name: "Git & GitHub", highlight: true, description: "Version control, commit hygiene & portfolio repository hosting" },
      { name: "Jupyter Notebook", description: "Interactive exploratory data analysis and documentation" },
      { name: "VS Code", description: "Scripting, query authoring, and workspace management" },
      { name: "PowerPoint", description: "Executive summary decks & client-ready presentation storytelling" }
    ]
  }
];

export const featuredProjects: Project[] = [
  {
    id: "ecommerce-analytics",
    title: "Interactive KPI Dashboard — E-commerce Analytics",
    subtitle: "Quantitative Analytics & Client-Ready Executive Dashboard",
    category: "Business Intelligence & Customer Segmentation",
    technologies: ["Power BI", "DAX", "PostgreSQL", "Python", "Excel"],
    metrics: [
      { label: "Transactions Analyzed", value: "260,000+" },
      { label: "Custom DAX Measures", value: "8+" },
      { label: "Manual Effort Reduction", value: "~40%" },
      { label: "Segmentation", value: "RFM & Cohorts" }
    ],
    summary: "End-to-end analytical solution processing 260,000+ transaction records using PostgreSQL CTEs and Python Pandas, culminating in an executive Power BI dashboard with 8+ custom DAX measures for real-time revenue, retention, and conversion tracking.",
    businessProblem: "The e-commerce business faced stagnant customer retention and lacked unified visibility into customer purchase cadences, revenue concentration, and cohort attrition. Stakeholders spent hours every week manually aggregating fragmented Excel spreadsheets, delaying operational decisions.",
    dataPreparation: [
      "Extracted 260,000+ raw e-commerce transaction logs from PostgreSQL database.",
      "Engineered multi-stage CTEs and SQL window functions (LAG, LEAD, DENSE_RANK) to calculate inter-purchase durations and customer order sequences.",
      "Implemented Python (Pandas) cleansing pipelines to normalize currency timestamps, resolve missing customer identifiers, and filter invalid order cancellations.",
      "Consolidated multi-source transactional and customer attribute tables into a clean star schema with dedicated Date, Customer, and Product dimension tables."
    ],
    analyticalApproach: [
      "Engineered 8+ custom DAX measures in Power BI including Customer Lifetime Value (CLV), Repeat Purchase Rate, MoM Revenue Growth, and Dynamic Rolling Averages.",
      "Designed an RFM (Recency, Frequency, Monetary) segmentation model to categorize customer cohorts into Champions, At-Risk, and Dormant tiers.",
      "Conducted longitudinal Cohort Analysis to pinpoint the exact 30-day and 60-day customer drop-off milestones.",
      "Constructed A/B testing evaluation frameworks to validate the impact of promotional campaigns on conversion velocity."
    ],
    keyKPIs: [
      "Gross Revenue & MoM Growth Rate ($ / %)",
      "Customer Retention Rate & 30-Day Cohort Drop-off",
      "Average Order Value (AOV) by Category & Segment",
      "Conversion Rate Across Funnel Stages",
      "RFM Segment Contribution to Total Margin"
    ],
    businessValue: [
      "Automated recurring weekly and monthly reporting pipelines, reducing manual reporting effort by an estimated 40%.",
      "Uncovered high-value RFM segment responsible for over 62% of repeat revenue, enabling targeted re-engagement campaigns.",
      "Delivered an executive-ready Power BI dashboard with dynamic drill-through capabilities allowing leadership to inspect SKU-level anomalies in seconds."
    ],
    sqlSnippet: `-- Customer Order Sequencing & Retention Window Query
WITH CustomerOrders AS (
    SELECT 
        customer_id,
        order_id,
        order_date,
        order_amount,
        ROW_NUMBER() OVER(PARTITION BY customer_id ORDER BY order_date ASC) as order_sequence,
        LAG(order_date, 1) OVER(PARTITION BY customer_id ORDER BY order_date ASC) as previous_order_date
    FROM transactions
    WHERE order_status = 'Completed'
),
OrderIntervals AS (
    SELECT 
        customer_id,
        order_id,
        order_date,
        order_amount,
        order_sequence,
        EXTRACT(DAY FROM (order_date - previous_order_date)) as days_since_last_order
    FROM CustomerOrders
)
SELECT 
    DATE_TRUNC('month', order_date) AS order_cohort,
    COUNT(DISTINCT customer_id) AS active_customers,
    ROUND(AVG(days_since_last_order), 1) AS avg_repurchase_days,
    ROUND(SUM(order_amount)::numeric, 2) AS total_revenue
FROM OrderIntervals
GROUP BY 1
ORDER BY 1 DESC;`,
    daxSnippet: `// Custom DAX Measure: Customer Retention Rate
Customer Retention Rate % = 
VAR CurrentPeriodCustomers = 
    CALCULATETABLE(
        VALUES('Transactions'[CustomerID]),
        'Transactions'[OrderDate] IN VALUES('Date'[Date])
    )
VAR PriorPeriodCustomers = 
    CALCULATETABLE(
        VALUES('Transactions'[CustomerID]),
        DATEADD('Date'[Date], -1, MONTH)
    )
VAR ReturningCustomers = 
    COUNTROWS(
        INTERSECT(CurrentPeriodCustomers, PriorPeriodCustomers)
    )
VAR TotalPriorCustomers = 
    COUNTROWS(PriorPeriodCustomers)
RETURN
    DIVIDE(ReturningCustomers, TotalPriorCustomers, 0)`,
    githubUrl: "https://github.com/Naveen99000/ecommerce-analytics-dashboard",
    chartType: "revenue-cohort"
  },
  {
    id: "operational-anomaly-analytics",
    title: "Operational Performance Analytics & Anomaly Detection",
    subtitle: "Insight-Driven Root Cause Problem Solving & Anomaly Diagnosis",
    category: "Operational Intelligence & Root Cause Analysis",
    technologies: ["MySQL", "Power BI", "Python", "Excel"],
    metrics: [
      { label: "Operational Logs", value: "37,000+" },
      { label: "Root Cause Isolated", value: "90%+" },
      { label: "Hypothesis Shift", value: "System -> User" },
      { label: "Monitoring Dashboards", value: "Real-time" }
    ],
    summary: "Investigated 37,000+ operational records to diagnose widespread cancellation spikes. Through SQL trend segmentation and root-cause analysis, uncovered that 90%+ of cancellations were user-initiated rather than technical system outages, fundamentally re-orienting leadership's remediation priorities.",
    businessProblem: "Stakeholders suspected technical server outages and processing latency as the root cause behind a surge in workflow cancellations. Engineering teams were preparing extensive infrastructure overhauls based on inaccurate categorization in the operational logs.",
    dataPreparation: [
      "Extracted 37,000+ operational status events and timestamped workflow records from MySQL database.",
      "Conducted data audit in Python (Pandas) to analyze event log consistency, identifying significant ambiguities in status reason tagging.",
      "Built SQL segmentation scripts to cross-reference cancellation event timestamps against server telemetry and user interaction session logs.",
      "Developed automated data validation checks to prevent future error misclassification at the point of ingestion."
    ],
    analyticalApproach: [
      "Conducted structured Root Cause Analysis (5-Whys framework backed by quantitative frequency distributions).",
      "Segmented cancellation timestamps by user session duration, device type, and checkout step completion status.",
      "Discovered that over 90% of logged cancellations occurred during user-prompted navigation changes and voluntary exits, not system-level timeouts.",
      "Constructed Power BI tracking dashboards with real-time KPI alerts for operational anomalies."
    ],
    keyKPIs: [
      "User-Initiated vs System-Initiated Cancellation Ratio (%)",
      "Time-to-Cancellation from Workflow Step Initiation",
      "Operational Anomaly Frequency by Hour & Day",
      "Data Classification Error Rate",
      "Post-Remediation Workflow Completion Rate"
    ],
    businessValue: [
      "Prevented misallocated engineering expenditure by disproving the technical outage hypothesis with concrete empirical data.",
      "Fundamentally reshaped the remediation strategy toward UI/UX friction points, user confirmation prompts, and checkout clarity.",
      "Delivered real-time Power BI monitoring dashboards and automated Excel alerts enabling operational managers to monitor genuine system health."
    ],
    sqlSnippet: `-- Root Cause Segmentation of Cancellation Logs
SELECT 
    status_category,
    cancellation_source,
    COUNT(*) AS total_events,
    ROUND(COUNT(*) * 100.0 / SUM(COUNT(*)) OVER(), 2) AS percentage_share,
    ROUND(AVG(session_duration_seconds), 1) AS avg_session_duration_sec,
    SUM(CASE WHEN error_code IS NULL OR error_code = 'SUCCESS_USER_CANCEL' THEN 1 ELSE 0 END) AS verified_user_initiated
FROM operational_event_logs
WHERE event_status = 'CANCELLED'
GROUP BY status_category, cancellation_source
ORDER BY total_events DESC;`,
    daxSnippet: `// DAX Measure: User vs System Cancellation Ratio
User Cancellation % = 
VAR UserCancellations = 
    CALCULATE(
        COUNTROWS('OperationalLogs'),
        'OperationalLogs'[CancellationType] = "User-Initiated"
    )
VAR TotalCancellations = 
    CALCULATE(
        COUNTROWS('OperationalLogs'),
        'OperationalLogs'[Status] = "Cancelled"
    )
RETURN
    DIVIDE(UserCancellations, TotalCancellations, 0)`,
    githubUrl: "https://github.com/Naveen99000/operational-anomaly-analytics",
    chartType: "anomaly-breakdown"
  }
];

export const trainingAndEducation: TrainingItem[] = [
  {
    role: "Data Analyst Trainee",
    institution: "FLM Analytics Program",
    period: "January 2025 – June 2025",
    type: "training",
    location: "Hyderabad, India",
    topics: [
      "Advanced SQL (PostgreSQL, MySQL, CTEs, Window Functions, Indexing)",
      "Power BI Architecture (DAX, Power Query ETL, Star Schema Modeling)",
      "Python for Data Science (Pandas, NumPy, Matplotlib, Seaborn)",
      "Quantitative Business Analytics (Cohort, RFM Segmentation, A/B Testing)",
      "Executive Storytelling & Client-Ready Reporting"
    ],
    highlights: [
      "Completed intensive hands-on analytics training focused on end-to-end data pipelines and real-world business datasets.",
      "Engineered automated ETL workflows, multi-table star schemas, and production-ready Power BI reporting dashboards.",
      "Delivered client-style presentations translating complex statistical findings into actionable executive recommendations."
    ]
  },
  {
    role: "B.Tech — Information Technology",
    institution: "Sri Venkateswara College of Engineering and Technology",
    period: "2021 – 2025",
    type: "education",
    grade: "CGPA: 7.87 / 10.0",
    location: "Hyderabad, India",
    topics: [
      "Database Management Systems (RDBMS & SQL)",
      "Data Structures & Algorithms",
      "Object-Oriented Programming (Python & Java)",
      "Software Engineering & System Architecture",
      "Probability, Statistics & Quantitative Methods"
    ],
    highlights: [
      "Solid engineering foundation with coursework emphasizing database systems, programming, and quantitative analysis.",
      "Graduated with 7.87 CGPA demonstrating consistent academic rigor and technical problem-solving capabilities."
    ]
  }
];

// Sample illustrative data for Recharts interactive visualizations (clearly labeled as illustrative)
export const heroSampleChartData = [
  { month: "Jan", revenue: 42000, orders: 1240, aov: 33.8, retention: 64 },
  { month: "Feb", revenue: 48500, orders: 1390, aov: 34.9, retention: 66 },
  { month: "Mar", revenue: 53200, orders: 1480, aov: 35.9, retention: 68 },
  { month: "Apr", revenue: 61000, orders: 1650, aov: 37.0, retention: 71 },
  { month: "May", revenue: 69800, orders: 1820, aov: 38.4, retention: 74 },
  { month: "Jun", revenue: 78500, orders: 1980, aov: 39.6, retention: 77 }
];

export const project1CohortData = [
  { cohort: "Month 0", retained: 100, churned: 0 },
  { cohort: "Month 1", retained: 68, churned: 32 },
  { cohort: "Month 2", retained: 54, churned: 46 },
  { cohort: "Month 3", retained: 47, churned: 53 },
  { cohort: "Month 4", retained: 43, churned: 57 },
  { cohort: "Month 5", retained: 41, churned: 59 }
];

export const project1RfmData = [
  { segment: "Champions", percentage: 24, revenueShare: 42, color: "#06B6D4" },
  { segment: "Loyal Customers", percentage: 28, revenueShare: 29, color: "#38BDF8" },
  { segment: "Potential Loyalists", percentage: 20, revenueShare: 15, color: "#3B82F6" },
  { segment: "At Risk", percentage: 16, revenueShare: 9, color: "#F59E0B" },
  { segment: "Dormant", percentage: 12, revenueShare: 5, color: "#64748B" }
];

export const project2AnomalyData = [
  { category: "User-Initiated (Misclassified)", count: 33670, percentage: 91.0, color: "#06B6D4" },
  { category: "True Technical / System Error", count: 1850, percentage: 5.0, color: "#EF4444" },
  { category: "Network Timeout / Latency", count: 1110, percentage: 3.0, color: "#F59E0B" },
  { category: "Third-Party API Disconnect", count: 370, percentage: 1.0, color: "#8B5CF6" }
];
