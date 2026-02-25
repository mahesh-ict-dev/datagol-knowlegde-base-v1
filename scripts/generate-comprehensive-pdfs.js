const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

// Configuration
const BASE_URL = 'http://localhost:3000';
const OUTPUT_DIR = './build/pdfs';

// Comprehensive PDF generation configuration including all sub-sections
const COMPREHENSIVE_DOCS_TO_GENERATE = [
  // Getting Started - All sub-sections
  {
    url: '/docs/DataGOL User Guide/before-you-begin',
    filename: 'DataGOL-Getting-Started.pdf',
    title: 'DataGOL Documentation - Getting Started',
    description: 'User guide and getting started content'
  },
  {
    url: '/docs/DataGOL User Guide/signing-up',
    filename: 'DataGOL-Getting-Started-Signing-Up.pdf',
    title: 'DataGOL Documentation - Signing Up',
    description: 'How to sign up for DataGOL'
  },
  {
    url: '/docs/DataGOL User Guide/logging-in',
    filename: 'DataGOL-Getting-Started-Logging-In.pdf',
    title: 'DataGOL Documentation - Logging In',
    description: 'How to log into DataGOL'
  },
  {
    url: '/docs/DataGOL User Guide/inviting-team',
    filename: 'DataGOL-Getting-Started-Inviting-Team.pdf',
    title: 'DataGOL Documentation - Inviting Team',
    description: 'How to invite team members'
  },
  {
    url: '/docs/DataGOL User Guide/assigning-roles',
    filename: 'DataGOL-Getting-Started-Assigning-Roles.pdf',
    title: 'DataGOL Documentation - Assigning Roles',
    description: 'How to assign roles to team members'
  },
  {
    url: '/docs/DataGOL User Guide/configuring-rest-api-access',
    filename: 'DataGOL-Getting-Started-API-Access.pdf',
    title: 'DataGOL Documentation - Configuring REST API Access',
    description: 'How to configure REST API access'
  },
  {
    url: '/docs/DataGOL User Guide/configuring-supported-cloud-storage',
    filename: 'DataGOL-Getting-Started-Cloud-Storage.pdf',
    title: 'DataGOL Documentation - Configuring Cloud Storage',
    description: 'How to configure supported cloud storage'
  },
  
  // Core Concepts
  {
    url: '/docs/datagol-concepts',
    filename: 'DataGOL-Concepts.pdf',
    title: 'DataGOL Documentation - Concepts',
    description: 'Core concepts and overview'
  },
  
  // Lakehouse - All sub-sections
  {
    url: '/docs/Lakehouse/about-lakehouse',
    filename: 'DataGOL-Lakehouse.pdf',
    title: 'DataGOL Documentation - Lakehouse',
    description: 'Data lakehouse overview'
  },
  {
    url: '/docs/Lakehouse/lakehouse-workflow',
    filename: 'DataGOL-Lakehouse-Workflow.pdf',
    title: 'DataGOL Documentation - Lakehouse Workflow',
    description: 'Lakehouse workflow and processes'
  },
  {
    url: '/docs/Lakehouse/jobs',
    filename: 'DataGOL-Lakehouse-Jobs.pdf',
    title: 'DataGOL Documentation - Lakehouse Jobs',
    description: 'Managing lakehouse jobs'
  },
  {
    url: '/docs/Lakehouse/schema-change-detection',
    filename: 'DataGOL-Lakehouse-Schema-Change-Detection.pdf',
    title: 'DataGOL Documentation - Schema Change Detection',
    description: 'Schema change detection and management'
  },
  
  // Data Sources - All sub-sections
  {
    url: '/docs/Lakehouse/Data sources/About Data sources',
    filename: 'DataGOL-Data-Sources.pdf',
    title: 'DataGOL Documentation - Data Sources',
    description: 'Data sources overview and management'
  },
  {
    url: '/docs/Lakehouse/Data sources/Managing Data sources',
    filename: 'DataGOL-Data-Sources-Managing.pdf',
    title: 'DataGOL Documentation - Managing Data Sources',
    description: 'How to manage data sources'
  },
  {
    url: '/docs/Lakehouse/Data sources/Designating a partition column',
    filename: 'DataGOL-Data-Sources-Partition-Column.pdf',
    title: 'DataGOL Documentation - Designating Partition Column',
    description: 'How to designate partition columns'
  },
  {
    url: '/docs/Lakehouse/Data sources/Generating column metadata catalog with AI',
    filename: 'DataGOL-Data-Sources-AI-Metadata.pdf',
    title: 'DataGOL Documentation - AI Metadata Generation',
    description: 'Generating column metadata with AI'
  },
  
  // Pipelines - All sub-sections
  {
    url: '/docs/Lakehouse/Pipelines/About pipelines',
    filename: 'DataGOL-Pipelines.pdf',
    title: 'DataGOL Documentation - Pipelines',
    description: 'Pipelines overview'
  },
  {
    url: '/docs/Lakehouse/Pipelines/Creating Standard pipeline',
    filename: 'DataGOL-Pipelines-Standard.pdf',
    title: 'DataGOL Documentation - Creating Standard Pipeline',
    description: 'How to create standard pipelines'
  },
  {
    url: '/docs/Lakehouse/Pipelines/Creating Custom pipeline',
    filename: 'DataGOL-Pipelines-Custom.pdf',
    title: 'DataGOL Documentation - Creating Custom Pipeline',
    description: 'How to create custom pipelines'
  },
  {
    url: '/docs/Lakehouse/Pipelines/Creating Dedup pipeline',
    filename: 'DataGOL-Pipelines-Dedup.pdf',
    title: 'DataGOL Documentation - Creating Dedup Pipeline',
    description: 'How to create deduplication pipelines'
  },
  {
    url: '/docs/Lakehouse/Pipelines/Managing pipeline',
    filename: 'DataGOL-Pipelines-Managing.pdf',
    title: 'DataGOL Documentation - Managing Pipelines',
    description: 'How to manage pipelines'
  },
  {
    url: '/docs/Lakehouse/Pipelines/Pipeline details',
    filename: 'DataGOL-Pipelines-Details.pdf',
    title: 'DataGOL Documentation - Pipeline Details',
    description: 'Understanding pipeline details'
  },
  {
    url: '/docs/Lakehouse/Pipelines/Pipeline sync modes',
    filename: 'DataGOL-Pipelines-Sync-Modes.pdf',
    title: 'DataGOL Documentation - Pipeline Sync Modes',
    description: 'Understanding pipeline sync modes'
  },
  {
    url: '/docs/Lakehouse/Pipelines/Last mile pipeline flow',
    filename: 'DataGOL-Pipelines-Last-Mile.pdf',
    title: 'DataGOL Documentation - Last Mile Pipeline Flow',
    description: 'Understanding last mile pipeline flow'
  },
  
  // Orchestrations - All sub-sections
  {
    url: '/docs/Lakehouse/Orchestrations/About orchestration',
    filename: 'DataGOL-Orchestrations.pdf',
    title: 'DataGOL Documentation - Orchestrations',
    description: 'Orchestrations overview'
  },
  {
    url: '/docs/Lakehouse/Orchestrations/Creating orchestrations',
    filename: 'DataGOL-Orchestrations-Creating.pdf',
    title: 'DataGOL Documentation - Creating Orchestrations',
    description: 'How to create orchestrations'
  },
  {
    url: '/docs/Lakehouse/Orchestrations/Adding members to an orchestration',
    filename: 'DataGOL-Orchestrations-Adding-Members.pdf',
    title: 'DataGOL Documentation - Adding Members to Orchestration',
    description: 'How to add members to orchestrations'
  },
  
  // Playground - All sub-sections
  {
    url: '/docs/Playground/About Playground',
    filename: 'DataGOL-Playground.pdf',
    title: 'DataGOL Documentation - Playground',
    description: 'Playground overview'
  },
  {
    url: '/docs/Playground/Create queries in Playground',
    filename: 'DataGOL-Playground-Create-Queries.pdf',
    title: 'DataGOL Documentation - Create Queries in Playground',
    description: 'How to create queries in playground'
  },
  {
    url: '/docs/Playground/Creating queries in Playground with SQL query',
    filename: 'DataGOL-Playground-SQL-Queries.pdf',
    title: 'DataGOL Documentation - Creating SQL Queries in Playground',
    description: 'How to create SQL queries in playground'
  },
  {
    url: '/docs/Playground/Creating queries with AI assistance in Playground',
    filename: 'DataGOL-Playground-AI-Assistance.pdf',
    title: 'DataGOL Documentation - Creating Queries with AI Assistance',
    description: 'How to create queries with AI assistance'
  },
  {
    url: '/docs/Playground/Running queries from Playground',
    filename: 'DataGOL-Playground-Running-Queries.pdf',
    title: 'DataGOL Documentation - Running Queries from Playground',
    description: 'How to run queries from playground'
  },
  {
    url: '/docs/Playground/Publishing queries from Playground',
    filename: 'DataGOL-Playground-Publishing-Queries.pdf',
    title: 'DataGOL Documentation - Publishing Queries from Playground',
    description: 'How to publish queries from playground'
  },
  {
    url: '/docs/Playground/Viewing published queries',
    filename: 'DataGOL-Playground-Viewing-Published.pdf',
    title: 'DataGOL Documentation - Viewing Published Queries',
    description: 'How to view published queries'
  },
  {
    url: '/docs/Playground/Connecting external data via Playground',
    filename: 'DataGOL-Playground-External-Data.pdf',
    title: 'DataGOL Documentation - Connecting External Data via Playground',
    description: 'How to connect external data via playground'
  },
  
  // Workspaces - All sub-sections
  {
    url: '/docs/Workspaces/About workspace',
    filename: 'DataGOL-Workspaces.pdf',
    title: 'DataGOL Documentation - Workspaces',
    description: 'Workspaces overview'
  },
  {
    url: '/docs/Workspaces/Creating workspace',
    filename: 'DataGOL-Workspaces-Creating.pdf',
    title: 'DataGOL Documentation - Creating Workspace',
    description: 'How to create workspaces'
  },
  {
    url: '/docs/Workspaces/Accessing workspaces',
    filename: 'DataGOL-Workspaces-Accessing.pdf',
    title: 'DataGOL Documentation - Accessing Workspaces',
    description: 'How to access workspaces'
  },
  {
    url: '/docs/Workspaces/Editing a workspace',
    filename: 'DataGOL-Workspaces-Editing.pdf',
    title: 'DataGOL Documentation - Editing Workspace',
    description: 'How to edit workspaces'
  },
  {
    url: '/docs/Workspaces/Deleting a workspace',
    filename: 'DataGOL-Workspaces-Deleting.pdf',
    title: 'DataGOL Documentation - Deleting Workspace',
    description: 'How to delete workspaces'
  },
  {
    url: '/docs/Workspaces/Inviting users to join workspace or sharing workspace',
    filename: 'DataGOL-Workspaces-Inviting-Users.pdf',
    title: 'DataGOL Documentation - Inviting Users to Workspace',
    description: 'How to invite users to workspace'
  },
  {
    url: '/docs/Workspaces/Joining open workspaces',
    filename: 'DataGOL-Workspaces-Joining.pdf',
    title: 'DataGOL Documentation - Joining Open Workspaces',
    description: 'How to join open workspaces'
  },
  {
    url: '/docs/Workspaces/Leaving a workspace',
    filename: 'DataGOL-Workspaces-Leaving.pdf',
    title: 'DataGOL Documentation - Leaving Workspace',
    description: 'How to leave a workspace'
  },
  {
    url: '/docs/Workspaces/Managing roles and permissions of workspace',
    filename: 'DataGOL-Workspaces-Managing-Roles.pdf',
    title: 'DataGOL Documentation - Managing Workspace Roles',
    description: 'How to manage workspace roles and permissions'
  },
  {
    url: '/docs/Workspaces/Managing workspace access',
    filename: 'DataGOL-Workspaces-Managing-Access.pdf',
    title: 'DataGOL Documentation - Managing Workspace Access',
    description: 'How to manage workspace access'
  },
  {
    url: '/docs/Workspaces/Requesting access to workspaces',
    filename: 'DataGOL-Workspaces-Requesting-Access.pdf',
    title: 'DataGOL Documentation - Requesting Access to Workspaces',
    description: 'How to request access to workspaces'
  },
  {
    url: '/docs/Workspaces/Searching workspaces, workbooks, dashboards, widgets',
    filename: 'DataGOL-Workspaces-Searching.pdf',
    title: 'DataGOL Documentation - Searching Workspaces',
    description: 'How to search workspaces, workbooks, dashboards, widgets'
  },
  {
    url: '/docs/Workspaces/Setting workspace user roles',
    filename: 'DataGOL-Workspaces-Setting-User-Roles.pdf',
    title: 'DataGOL Documentation - Setting Workspace User Roles',
    description: 'How to set workspace user roles'
  },
  {
    url: '/docs/Workspaces/Workspace users - roles and permissions',
    filename: 'DataGOL-Workspaces-Users-Roles-Permissions.pdf',
    title: 'DataGOL Documentation - Workspace Users Roles and Permissions',
    description: 'Understanding workspace users roles and permissions'
  },
  
  // Workbooks - All sub-sections
  {
    url: '/docs/Workbooks/About workbook',
    filename: 'DataGOL-Workbooks.pdf',
    title: 'DataGOL Documentation - Workbooks',
    description: 'Workbooks overview'
  },
  {
    url: '/docs/Workbooks/Creating workbook',
    filename: 'DataGOL-Workbooks-Creating.pdf',
    title: 'DataGOL Documentation - Creating Workbook',
    description: 'How to create workbooks'
  },
  {
    url: '/docs/Workbooks/Extracting data from documents',
    filename: 'DataGOL-Workbooks-Extracting-Data.pdf',
    title: 'DataGOL Documentation - Extracting Data from Documents',
    description: 'How to extract data from documents'
  },
  {
    url: '/docs/Workbooks/Append or replace data in workbooks',
    filename: 'DataGOL-Workbooks-Append-Replace.pdf',
    title: 'DataGOL Documentation - Append or Replace Data in Workbooks',
    description: 'How to append or replace data in workbooks'
  },
  {
    url: '/docs/Workbooks/Publishing workbook from playground',
    filename: 'DataGOL-Workbooks-Publishing-From-Playground.pdf',
    title: 'DataGOL Documentation - Publishing Workbook from Playground',
    description: 'How to publish workbook from playground'
  },
  {
    url: '/docs/Workbooks/Switching the storage type',
    filename: 'DataGOL-Workbooks-Switching-Storage.pdf',
    title: 'DataGOL Documentation - Switching Storage Type',
    description: 'How to switch storage type'
  },
  {
    url: '/docs/Workbooks/Workbook columns',
    filename: 'DataGOL-Workbooks-Columns.pdf',
    title: 'DataGOL Documentation - Workbook Columns',
    description: 'Understanding workbook columns'
  },
  {
    url: '/docs/Workbooks/Accessing workbook pipeline information',
    filename: 'DataGOL-Workbooks-Pipeline-Info.pdf',
    title: 'DataGOL Documentation - Accessing Workbook Pipeline Information',
    description: 'How to access workbook pipeline information'
  },
  
  // AI Agents - All sub-sections
  {
    url: '/docs/AI Agents/About AI agents',
    filename: 'DataGOL-AI-Agents.pdf',
    title: 'DataGOL Documentation - AI Agents',
    description: 'AI agents overview'
  },
  {
    url: '/docs/AI Agents/AI Search agent',
    filename: 'DataGOL-AI-Agents-Search.pdf',
    title: 'DataGOL Documentation - AI Search Agent',
    description: 'Understanding AI search agent'
  },
  {
    url: '/docs/AI Agents/Business Intelligence (BI) agent - (Chart agent)',
    filename: 'DataGOL-AI-Agents-BI-Chart.pdf',
    title: 'DataGOL Documentation - BI Chart Agent',
    description: 'Understanding BI chart agent'
  },
  {
    url: '/docs/AI Agents/Custom agent',
    filename: 'DataGOL-AI-Agents-Custom.pdf',
    title: 'DataGOL Documentation - Custom Agent',
    description: 'How to create custom agents'
  },
  {
    url: '/docs/AI Agents/Data Cleaning (DC) agent',
    filename: 'DataGOL-AI-Agents-Data-Cleaning.pdf',
    title: 'DataGOL Documentation - Data Cleaning Agent',
    description: 'Understanding data cleaning agent'
  },
  {
    url: '/docs/AI Agents/Data Conversion agent (DCA)',
    filename: 'DataGOL-AI-Agents-Data-Conversion.pdf',
    title: 'DataGOL Documentation - Data Conversion Agent',
    description: 'Understanding data conversion agent'
  },
  {
    url: '/docs/AI Agents/HubSpot agent',
    filename: 'DataGOL-AI-Agents-HubSpot.pdf',
    title: 'DataGOL Documentation - HubSpot Agent',
    description: 'Understanding HubSpot agent'
  },
  {
    url: '/docs/AI Agents/Jira agent',
    filename: 'DataGOL-AI-Agents-Jira.pdf',
    title: 'DataGOL Documentation - Jira Agent',
    description: 'Understanding Jira agent'
  },
  {
    url: '/docs/AI Agents/Python agent',
    filename: 'DataGOL-AI-Agents-Python.pdf',
    title: 'DataGOL Documentation - Python Agent',
    description: 'Understanding Python agent'
  },
  {
    url: '/docs/AI Agents/RAG agent',
    filename: 'DataGOL-AI-Agents-RAG.pdf',
    title: 'DataGOL Documentation - RAG Agent',
    description: 'Understanding RAG agent'
  },
  {
    url: '/docs/AI Agents/Salesforce agent',
    filename: 'DataGOL-AI-Agents-Salesforce.pdf',
    title: 'DataGOL Documentation - Salesforce Agent',
    description: 'Understanding Salesforce agent'
  },
  {
    url: '/docs/AI Agents/SQL agent',
    filename: 'DataGOL-AI-Agents-SQL.pdf',
    title: 'DataGOL Documentation - SQL Agent',
    description: 'Understanding SQL agent'
  },
  
  // BI Analytics - All sub-sections
  {
    url: '/docs/BI%20Analytics/BI%20Workbook',
    filename: 'DataGOL-BI-Analytics.pdf',
    title: 'DataGOL Documentation - BI Analytics',
    description: 'BI analytics overview'
  },
  {
    url: '/docs/BI%20Analytics/Alerts',
    filename: 'DataGOL-BI-Analytics-Alerts.pdf',
    title: 'DataGOL Documentation - BI Analytics Alerts',
    description: 'Understanding BI analytics alerts'
  },
  {
    url: '/docs/BI%20Analytics/Column Aggregation',
    filename: 'DataGOL-BI-Analytics-Column-Aggregation.pdf',
    title: 'DataGOL Documentation - Column Aggregation',
    description: 'Understanding column aggregation'
  },
  {
    url: '/docs/BI%20Analytics/Conditional Formatting',
    filename: 'DataGOL-BI-Analytics-Conditional-Formatting.pdf',
    title: 'DataGOL Documentation - Conditional Formatting',
    description: 'Understanding conditional formatting'
  },
  {
    url: '/docs/BI%20Analytics/Theming',
    filename: 'DataGOL-BI-Analytics-Theming.pdf',
    title: 'DataGOL Documentation - BI Analytics Theming',
    description: 'Understanding BI analytics theming'
  },
  
  // BI Analytics - Dashboards
  {
    url: '/docs/BI%20Analytics/Dashboards/Dashboards',
    filename: 'DataGOL-BI-Analytics-Dashboards.pdf',
    title: 'DataGOL Documentation - BI Analytics Dashboards',
    description: 'Understanding BI analytics dashboards'
  },
  {
    url: '/docs/BI%20Analytics/Dashboards/Page Filter',
    filename: 'DataGOL-BI-Analytics-Dashboards-Page-Filter.pdf',
    title: 'DataGOL Documentation - Dashboard Page Filter',
    description: 'Understanding dashboard page filters'
  },
  {
    url: '/docs/BI%20Analytics/Dashboards/Generate dashboards/About generating dashboards with AI',
    filename: 'DataGOL-BI-Analytics-Dashboards-AI-Generation.pdf',
    title: 'DataGOL Documentation - AI Dashboard Generation',
    description: 'Understanding AI dashboard generation'
  },
  {
    url: '/docs/BI%20Analytics/Dashboards/Generate dashboards/Generating dashboards with AI',
    filename: 'DataGOL-BI-Analytics-Dashboards-Generating-AI.pdf',
    title: 'DataGOL Documentation - Generating Dashboards with AI',
    description: 'How to generate dashboards with AI'
  },
  
  // BI Analytics - Drill Down
  {
    url: '/docs/BI%20Analytics/Drill Down/Drill Down',
    filename: 'DataGOL-BI-Analytics-Drill-Down.pdf',
    title: 'DataGOL Documentation - Drill Down',
    description: 'Understanding drill down functionality'
  },
  {
    url: '/docs/BI%20Analytics/Drill Down/Drill Down - Widget',
    filename: 'DataGOL-BI-Analytics-Drill-Down-Widget.pdf',
    title: 'DataGOL Documentation - Drill Down Widget',
    description: 'Understanding drill down widget'
  },
  {
    url: '/docs/BI%20Analytics/Drill Down/Drill Down Journey',
    filename: 'DataGOL-BI-Analytics-Drill-Down-Journey.pdf',
    title: 'DataGOL Documentation - Drill Down Journey',
    description: 'Understanding drill down journey'
  },
  {
    url: '/docs/BI%20Analytics/Drill Down/Drill Down-ad hoc',
    filename: 'DataGOL-BI-Analytics-Drill-Down-Ad-Hoc.pdf',
    title: 'DataGOL Documentation - Drill Down Ad Hoc',
    description: 'Understanding drill down ad hoc'
  },
  
  // BI Analytics - Formulas & Parameters
  {
    url: '/docs/BI%20Analytics/Formulas & Parameters/BI Formula',
    filename: 'DataGOL-BI-Analytics-BI-Formula.pdf',
    title: 'DataGOL Documentation - BI Formula',
    description: 'Understanding BI formulas'
  },
  {
    url: '/docs/BI%20Analytics/Formulas & Parameters/Parameters',
    filename: 'DataGOL-BI-Analytics-Parameters.pdf',
    title: 'DataGOL Documentation - BI Analytics Parameters',
    description: 'Understanding BI analytics parameters'
  },
  
  // BI Analytics - Sharing
  {
    url: '/docs/BI%20Analytics/Sharing/Embedded Analytics',
    filename: 'DataGOL-BI-Analytics-Embedded-Analytics.pdf',
    title: 'DataGOL Documentation - Embedded Analytics',
    description: 'Understanding embedded analytics'
  },
  {
    url: '/docs/BI%20Analytics/Sharing/External Dashboards',
    filename: 'DataGOL-BI-Analytics-External-Dashboards.pdf',
    title: 'DataGOL Documentation - External Dashboards',
    description: 'Understanding external dashboards'
  },
  
  // BI Analytics - Visualizer
  {
    url: '/docs/BI%20Analytics/Visualizer/About Visualizer',
    filename: 'DataGOL-BI-Analytics-Visualizer.pdf',
    title: 'DataGOL Documentation - Visualizer',
    description: 'Visualizer overview'
  },
  {
    url: '/docs/BI%20Analytics/Visualizer/Understanding Visualizer',
    filename: 'DataGOL-BI-Analytics-Visualizer-Understanding.pdf',
    title: 'DataGOL Documentation - Understanding Visualizer',
    description: 'Understanding the visualizer'
  },
  {
    url: '/docs/BI%20Analytics/Visualizer/Creating visualization or widget',
    filename: 'DataGOL-BI-Analytics-Visualizer-Creating.pdf',
    title: 'DataGOL Documentation - Creating Visualizations',
    description: 'How to create visualizations or widgets'
  },
  {
    url: '/docs/BI%20Analytics/Visualizer/Dashboards',
    filename: 'DataGOL-BI-Analytics-Visualizer-Dashboards.pdf',
    title: 'DataGOL Documentation - Visualizer Dashboards',
    description: 'Understanding visualizer dashboards'
  },
  {
    url: '/docs/BI%20Analytics/Visualizer/Details Panel',
    filename: 'DataGOL-BI-Analytics-Visualizer-Details-Panel.pdf',
    title: 'DataGOL Documentation - Visualizer Details Panel',
    description: 'Understanding visualizer details panel'
  },
  {
    url: '/docs/BI%20Analytics/Visualizer/Select Columns',
    filename: 'DataGOL-BI-Analytics-Visualizer-Select-Columns.pdf',
    title: 'DataGOL Documentation - Visualizer Select Columns',
    description: 'How to select columns in visualizer'
  },
  {
    url: '/docs/BI%20Analytics/Visualizer/Select workbook',
    filename: 'DataGOL-BI-Analytics-Visualizer-Select-Workbook.pdf',
    title: 'DataGOL Documentation - Visualizer Select Workbook',
    description: 'How to select workbook in visualizer'
  },
  {
    url: '/docs/BI%20Analytics/Visualizer/Aggregate functions',
    filename: 'DataGOL-BI-Analytics-Visualizer-Aggregate-Functions.pdf',
    title: 'DataGOL Documentation - Visualizer Aggregate Functions',
    description: 'Understanding aggregate functions in visualizer'
  },
  
  // BI Analytics - Visualizer Save Widget
  {
    url: '/docs/BI%20Analytics/Visualizer/Save widget/Pinning visualization to dashboard',
    filename: 'DataGOL-BI-Analytics-Visualizer-Pinning.pdf',
    title: 'DataGOL Documentation - Pinning Visualization to Dashboard',
    description: 'How to pin visualization to dashboard'
  },
  {
    url: '/docs/BI%20Analytics/Visualizer/Save widget/Saving visualization as draft',
    filename: 'DataGOL-BI-Analytics-Visualizer-Saving-Draft.pdf',
    title: 'DataGOL Documentation - Saving Visualization as Draft',
    description: 'How to save visualization as draft'
  },
  
  // BI Analytics - Widgets
  {
    url: '/docs/BI%20Analytics/Widgets/Widget Types',
    filename: 'DataGOL-BI-Analytics-Widget-Types.pdf',
    title: 'DataGOL Documentation - Widget Types',
    description: 'Understanding widget types'
  },
  {
    url: '/docs/BI%20Analytics/Widgets/Widget Filters',
    filename: 'DataGOL-BI-Analytics-Widget-Filters.pdf',
    title: 'DataGOL Documentation - Widget Filters',
    description: 'Understanding widget filters'
  },
  
  // BI Analytics - Widget Configurations
  {
    url: '/docs/BI%20Analytics/Widgets/Widget configurations and settings/Widget Configuration and Settings',
    filename: 'DataGOL-BI-Analytics-Widget-Configuration.pdf',
    title: 'DataGOL Documentation - Widget Configuration and Settings',
    description: 'Understanding widget configuration and settings'
  },
  {
    url: '/docs/BI%20Analytics/Widgets/Widget configurations and settings/Area chart widget',
    filename: 'DataGOL-BI-Analytics-Widget-Area-Chart.pdf',
    title: 'DataGOL Documentation - Area Chart Widget',
    description: 'Understanding area chart widget'
  },
  {
    url: '/docs/BI%20Analytics/Widgets/Widget configurations and settings/Bar chart widget',
    filename: 'DataGOL-BI-Analytics-Widget-Bar-Chart.pdf',
    title: 'DataGOL Documentation - Bar Chart Widget',
    description: 'Understanding bar chart widget'
  },
  {
    url: '/docs/BI%20Analytics/Widgets/Widget configurations and settings/Box plot widget',
    filename: 'DataGOL-BI-Analytics-Widget-Box-Plot.pdf',
    title: 'DataGOL Documentation - Box Plot Widget',
    description: 'Understanding box plot widget'
  },
  {
    url: '/docs/BI%20Analytics/Widgets/Widget configurations and settings/Donut chart widget',
    filename: 'DataGOL-BI-Analytics-Widget-Donut-Chart.pdf',
    title: 'DataGOL Documentation - Donut Chart Widget',
    description: 'Understanding donut chart widget'
  },
  {
    url: '/docs/BI%20Analytics/Widgets/Widget configurations and settings/Funnel chart widget',
    filename: 'DataGOL-BI-Analytics-Widget-Funnel-Chart.pdf',
    title: 'DataGOL Documentation - Funnel Chart Widget',
    description: 'Understanding funnel chart widget'
  },
  {
    url: '/docs/BI%20Analytics/Widgets/Widget configurations and settings/KPI widget',
    filename: 'DataGOL-BI-Analytics-Widget-KPI.pdf',
    title: 'DataGOL Documentation - KPI Widget',
    description: 'Understanding KPI widget'
  },
  {
    url: '/docs/BI%20Analytics/Widgets/Widget configurations and settings/Line chart widget',
    filename: 'DataGOL-BI-Analytics-Widget-Line-Chart.pdf',
    title: 'DataGOL Documentation - Line Chart Widget',
    description: 'Understanding line chart widget'
  },
  {
    url: '/docs/BI%20Analytics/Widgets/Widget configurations and settings/Packed bubble chart widget',
    filename: 'DataGOL-BI-Analytics-Widget-Packed-Bubble.pdf',
    title: 'DataGOL Documentation - Packed Bubble Chart Widget',
    description: 'Understanding packed bubble chart widget'
  },
  {
    url: '/docs/BI%20Analytics/Widgets/Widget configurations and settings/Pie chart widget',
    filename: 'DataGOL-BI-Analytics-Widget-Pie-Chart.pdf',
    title: 'DataGOL Documentation - Pie Chart Widget',
    description: 'Understanding pie chart widget'
  },
  {
    url: '/docs/BI%20Analytics/Widgets/Widget configurations and settings/Pivot table widget',
    filename: 'DataGOL-BI-Analytics-Widget-Pivot-Table.pdf',
    title: 'DataGOL Documentation - Pivot Table Widget',
    description: 'Understanding pivot table widget'
  },
  {
    url: '/docs/BI%20Analytics/Widgets/Widget configurations and settings/Scatter chart widget',
    filename: 'DataGOL-BI-Analytics-Widget-Scatter-Chart.pdf',
    title: 'DataGOL Documentation - Scatter Chart Widget',
    description: 'Understanding scatter chart widget'
  },
  {
    url: '/docs/BI%20Analytics/Widgets/Widget configurations and settings/Table widget',
    filename: 'DataGOL-BI-Analytics-Widget-Table.pdf',
    title: 'DataGOL Documentation - Table Widget',
    description: 'Understanding table widget'
  },
  {
    url: '/docs/BI%20Analytics/Widgets/Widget configurations and settings/Tree map chart widget',
    filename: 'DataGOL-BI-Analytics-Widget-Tree-Map.pdf',
    title: 'DataGOL Documentation - Tree Map Chart Widget',
    description: 'Understanding tree map chart widget'
  },
  
  // Data Lineage - All sub-sections
  {
    url: '/docs/Data Lineage/About data lineage',
    filename: 'DataGOL-Data-Lineage.pdf',
    title: 'DataGOL Documentation - Data Lineage',
    description: 'Data lineage overview'
  },
  {
    url: '/docs/Data Lineage/Data source lineage',
    filename: 'DataGOL-Data-Lineage-Data-Source.pdf',
    title: 'DataGOL Documentation - Data Source Lineage',
    description: 'Understanding data source lineage'
  },
  {
    url: '/docs/Data Lineage/Pipeline lineage',
    filename: 'DataGOL-Data-Lineage-Pipeline.pdf',
    title: 'DataGOL Documentation - Pipeline Lineage',
    description: 'Understanding pipeline lineage'
  },
  {
    url: '/docs/Data Lineage/Workbook lineage',
    filename: 'DataGOL-Data-Lineage-Workbook.pdf',
    title: 'DataGOL Documentation - Workbook Lineage',
    description: 'Understanding workbook lineage'
  },
  {
    url: '/docs/Data Lineage/Managing data lineage',
    filename: 'DataGOL-Data-Lineage-Managing.pdf',
    title: 'DataGOL Documentation - Managing Data Lineage',
    description: 'How to manage data lineage'
  },
  {
    url: '/docs/Data Lineage/Impact analysis',
    filename: 'DataGOL-Data-Lineage-Impact-Analysis.pdf',
    title: 'DataGOL Documentation - Impact Analysis',
    description: 'Understanding impact analysis'
  },
  
  // Machine Learning - All sub-sections
  {
    url: '/docs/Machine Learning/About Machine Learning',
    filename: 'DataGOL-Machine-Learning.pdf',
    title: 'DataGOL Documentation - Machine Learning',
    description: 'Machine learning overview'
  },
  {
    url: '/docs/Machine Learning/Creating Classification model',
    filename: 'DataGOL-Machine-Learning-Classification.pdf',
    title: 'DataGOL Documentation - Creating Classification Model',
    description: 'How to create classification models'
  },
  {
    url: '/docs/Machine Learning/Creating Regression model',
    filename: 'DataGOL-Machine-Learning-Regression.pdf',
    title: 'DataGOL Documentation - Creating Regression Model',
    description: 'How to create regression models'
  },
  {
    url: '/docs/Machine Learning/Creating Forecasting model',
    filename: 'DataGOL-Machine-Learning-Forecasting.pdf',
    title: 'DataGOL Documentation - Creating Forecasting Model',
    description: 'How to create forecasting models'
  },
  
  // Reference Guides - All sub-sections
  {
    url: '/docs/Reference%20guides/roles-permissions',
    filename: 'DataGOL-Reference-Guides.pdf',
    title: 'DataGOL Documentation - Reference Guides',
    description: 'Reference guides overview'
  },
  {
    url: '/docs/Reference%20guides/Spark exception and troubleshooting',
    filename: 'DataGOL-Reference-Guides-Spark-Troubleshooting.pdf',
    title: 'DataGOL Documentation - Spark Exception and Troubleshooting',
    description: 'Understanding Spark exceptions and troubleshooting'
  },
  
  // Reference Guides - Formulas
  {
    url: '/docs/Reference%20guides/Formulas/Formula reference',
    filename: 'DataGOL-Reference-Guides-Formula-Reference.pdf',
    title: 'DataGOL Documentation - Formula Reference',
    description: 'Understanding formula reference'
  },
  {
    url: '/docs/Reference%20guides/Formulas/Apache Spark formula reference',
    filename: 'DataGOL-Reference-Guides-Spark-Formula-Reference.pdf',
    title: 'DataGOL Documentation - Apache Spark Formula Reference',
    description: 'Understanding Apache Spark formula reference'
  },
  {
    url: '/docs/Reference%20guides/Formulas/BI formula reference',
    filename: 'DataGOL-Reference-Guides-BI-Formula-Reference.pdf',
    title: 'DataGOL Documentation - BI Formula Reference',
    description: 'Understanding BI formula reference'
  },
  {
    url: '/docs/Reference%20guides/Formulas/JDBC formula reference',
    filename: 'DataGOL-Reference-Guides-JDBC-Formula-Reference.pdf',
    title: 'DataGOL Documentation - JDBC Formula Reference',
    description: 'Understanding JDBC formula reference'
  },
  
  // Best Practices
  {
    url: '/docs/datagol-best-practices',
    filename: 'DataGOL-Best-Practices.pdf',
    title: 'DataGOL Documentation - Best Practices',
    description: 'Best practices and recommendations'
  },
  
  // FAQs
  {
    url: '/docs/datagol-faq',
    filename: 'DataGOL-FAQs.pdf',
    title: 'DataGOL Documentation - FAQs',
    description: 'Frequently asked questions'
  },
  
  // API Guide
  {
    url: '/docs/Final_events_api_guide_full_latest',
    filename: 'DataGOL-API-Guide.pdf',
    title: 'DataGOL Documentation - API Guide',
    description: 'API documentation and reference'
  },
  
  // AS OF Feature
  {
    url: '/docs/AS OF feature',
    filename: 'DataGOL-AS-OF-Feature.pdf',
    title: 'DataGOL Documentation - AS OF Feature',
    description: 'Time travel and AS OF functionality'
  }
];

async function generateComprehensivePDFs() {
  console.log('🚀 Starting Comprehensive PDF generation...');
  console.log(`📊 Generating ${COMPREHENSIVE_DOCS_TO_GENERATE.length} PDF documents`);
  
  // Create output directory if it doesn't exist
  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
    console.log(`📁 Created output directory: ${OUTPUT_DIR}`);
  }

  // Launch browser
  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const results = {
    successful: [],
    failed: []
  };

  try {
    for (const doc of COMPREHENSIVE_DOCS_TO_GENERATE) {
      console.log(`\n📄 Generating PDF for: ${doc.title}`);
      console.log(`   📝 Description: ${doc.description}`);
      
      const page = await browser.newPage();
      
      // Set viewport for consistent rendering
      await page.setViewport({ width: 1200, height: 800 });
      
      // Navigate to the page
      const fullUrl = `${BASE_URL}${doc.url}`;
      console.log(`   🔗 Loading: ${fullUrl}`);
      
      try {
        await page.goto(fullUrl, { 
          waitUntil: 'networkidle0',
          timeout: 30000 
        });

        // Wait for content to load
        await new Promise(resolve => setTimeout(resolve, 2000));

        // Check for error messages
        const hasError = await page.evaluate(() => {
          const body = document.body.innerText;
          return body.includes('Page Not Found') || body.includes('404') || body.includes('We could not find');
        });

        if (hasError) {
          console.log(`   ❌ ERROR: Page not found or 404 error`);
          results.failed.push({
            ...doc,
            error: 'Page not found or 404 error'
          });
          await page.close();
          continue;
        }

        // Generate PDF
        const pdfPath = path.join(OUTPUT_DIR, doc.filename);
        
        await page.pdf({
          path: pdfPath,
          format: 'A4',
          printBackground: true,
          margin: {
            top: '20mm',
            right: '15mm',
            bottom: '20mm',
            left: '15mm'
          },
          displayHeaderFooter: true,
          headerTemplate: `
            <div style="font-size: 10px; text-align: center; width: 100%; color: #666;">
              <span>${doc.title}</span>
            </div>
          `,
          footerTemplate: `
            <div style="font-size: 10px; text-align: center; width: 100%; color: #666;">
              <span class="pageNumber"></span> / <span class="totalPages"></span>
            </div>
          `
        });

        // Check file size
        const stats = fs.statSync(pdfPath);
        const sizeKB = Math.round(stats.size / 1024);
        
        console.log(`   ✅ Generated: ${doc.filename} (${sizeKB} KB)`);
        results.successful.push({
          ...doc,
          sizeKB: sizeKB
        });

      } catch (error) {
        console.log(`   ❌ ERROR: ${error.message}`);
        results.failed.push({
          ...doc,
          error: error.message
        });
      }

      await page.close();
    }

    // Summary
    console.log('\n🎉 PDF generation completed!');
    console.log('='.repeat(60));
    console.log(`✅ Successful: ${results.successful.length}`);
    console.log(`❌ Failed: ${results.failed.length}`);
    
    if (results.successful.length > 0) {
      console.log('\n📋 Successfully Generated PDFs:');
      results.successful.forEach(result => {
        console.log(`   📄 ${result.filename} (${result.sizeKB} KB) - ${result.description}`);
      });
    }
    
    if (results.failed.length > 0) {
      console.log('\n❌ Failed PDFs:');
      results.failed.forEach(result => {
        console.log(`   📄 ${result.filename} - ${result.error}`);
      });
    }
    
    console.log(`\n📁 PDFs saved to: ${OUTPUT_DIR}`);
    
    // List all generated files
    const files = fs.readdirSync(OUTPUT_DIR);
    const pdfFiles = files.filter(file => file.endsWith('.pdf'));
    console.log(`\n📊 Total PDF files in directory: ${pdfFiles.length}`);

  } catch (error) {
    console.error('❌ Error generating PDFs:', error);
    throw error;
  } finally {
    await browser.close();
  }
}

// Run the script
if (require.main === module) {
  generateComprehensivePDFs()
    .then(() => {
      console.log('\n✨ Comprehensive PDF generation completed!');
      process.exit(0);
    })
    .catch((error) => {
      console.error('💥 Script failed:', error);
      process.exit(1);
    });
}

module.exports = { generateComprehensivePDFs, COMPREHENSIVE_DOCS_TO_GENERATE };
