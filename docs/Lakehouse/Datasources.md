---
sidebar_position: 1
tags: [Lakehouse, Connector]
---

From the **Data Source** section you can connect to a wide range of data platforms. This module supports integration with popular services such as MySQL, MS SQL Server, DB2, and Postgres databases through a user-friendly authentication and authorization workflow.

You can integrate a new data source into the Lakehouse seamlessly by following these detailed steps. This guide will help you add a new database and manage its content effectively.

### Adding data sources

:::tip [NOTE]

Only an Account admin or Lakehouse admin can add data source.

:::

Do the following to add a datasource.

1.  From the left navigation panel, click **Lakehouse** and then click **Datasource**.
    
2.  From the upper right corner of the page, click the **+ New Database** button to start the process of adding a new database.
    
    ![Add-datasource](/img/Datasource/image-20250505-070559.png)
        
3.  Choose a database provider from the list, for example, **MySQL**.
    
    ![Choose Database example MySQL](/img/Datasource/image-20250511-072035.png)
    
4.  Enter the required integration details for the selected database provider, such as connection name, database name, host, port, username, and password etc. You can add any of the following Datasources. Click the required datasource link from the following for integration details:
    
    -   [S3 Datasource](https://saasxl.atlassian.net/wiki/external/MzQ4ZGQ4YjJjNzAyNDZlMjk2ZWNmYWU2YTA1ODU1MWI#Adding-S3-data-source "https://saasxl.atlassian.net/wiki/external/MzQ4ZGQ4YjJjNzAyNDZlMjk2ZWNmYWU2YTA1ODU1MWI#Adding-S3-data-source")
        
    -   [PostgreSQL or Microsoft SQL](https://saasxl.atlassian.net/wiki/external/MzQ4ZGQ4YjJjNzAyNDZlMjk2ZWNmYWU2YTA1ODU1MWI#Adding-Microsoft-SQL-or-PostgreSQL-as-a-datasource "https://saasxl.atlassian.net/wiki/external/MzQ4ZGQ4YjJjNzAyNDZlMjk2ZWNmYWU2YTA1ODU1MWI#Adding-Microsoft-SQL-or-PostgreSQL-as-a-datasource")
        
    -   [Folder](https://saasxl.atlassian.net/wiki/external/MzQ4ZGQ4YjJjNzAyNDZlMjk2ZWNmYWU2YTA1ODU1MWI#Adding-Folder-as-a-datasource "https://saasxl.atlassian.net/wiki/external/MzQ4ZGQ4YjJjNzAyNDZlMjk2ZWNmYWU2YTA1ODU1MWI#Adding-Folder-as-a-datasource")
        
    -   [Hubspot](https://saasxl.atlassian.net/wiki/external/MzQ4ZGQ4YjJjNzAyNDZlMjk2ZWNmYWU2YTA1ODU1MWI#Adding-HubSpot-as-datasource "https://saasxl.atlassian.net/wiki/external/MzQ4ZGQ4YjJjNzAyNDZlMjk2ZWNmYWU2YTA1ODU1MWI#Adding-HubSpot-as-datasource")
        
    -   [MariaDB](https://saasxl.atlassian.net/wiki/external/MzQ4ZGQ4YjJjNzAyNDZlMjk2ZWNmYWU2YTA1ODU1MWI#Adding-MariaDB-as-datasource "https://saasxl.atlassian.net/wiki/external/MzQ4ZGQ4YjJjNzAyNDZlMjk2ZWNmYWU2YTA1ODU1MWI#Adding-MariaDB-as-datasource")
        
    -   [Salesforce](https://saasxl.atlassian.net/wiki/external/MzQ4ZGQ4YjJjNzAyNDZlMjk2ZWNmYWU2YTA1ODU1MWI#Adding-Salesforce-as-datasource "https://saasxl.atlassian.net/wiki/external/MzQ4ZGQ4YjJjNzAyNDZlMjk2ZWNmYWU2YTA1ODU1MWI#Adding-Salesforce-as-datasource")
        
    -   [Snowflake](https://saasxl.atlassian.net/wiki/external/MzQ4ZGQ4YjJjNzAyNDZlMjk2ZWNmYWU2YTA1ODU1MWI#Adding-Snowflake-as-datasource "https://saasxl.atlassian.net/wiki/external/MzQ4ZGQ4YjJjNzAyNDZlMjk2ZWNmYWU2YTA1ODU1MWI#Adding-Snowflake-as-datasource")
        
    -   [MongoDB Atlas](https://saasxl.atlassian.net/wiki/external/MzQ4ZGQ4YjJjNzAyNDZlMjk2ZWNmYWU2YTA1ODU1MWI#Adding-MongoDB-Atlas-datasource "https://saasxl.atlassian.net/wiki/external/MzQ4ZGQ4YjJjNzAyNDZlMjk2ZWNmYWU2YTA1ODU1MWI#Adding-MongoDB-Atlas-datasource")
        
    -   [Netsuite](https://saasxl.atlassian.net/wiki/external/MzQ4ZGQ4YjJjNzAyNDZlMjk2ZWNmYWU2YTA1ODU1MWI#Adding-NetSuite-as-datasource "https://saasxl.atlassian.net/wiki/external/MzQ4ZGQ4YjJjNzAyNDZlMjk2ZWNmYWU2YTA1ODU1MWI#Adding-NetSuite-as-datasource")
        
    -   [Netsuite Reporting](https://saasxl.atlassian.net/wiki/external/MzQ4ZGQ4YjJjNzAyNDZlMjk2ZWNmYWU2YTA1ODU1MWI#Adding-NetSuite-Reporting-as-datasource "https://saasxl.atlassian.net/wiki/external/MzQ4ZGQ4YjJjNzAyNDZlMjk2ZWNmYWU2YTA1ODU1MWI#Adding-NetSuite-Reporting-as-datasource")
        
    -   [NetSuite-JDBC](https://saasxl.atlassian.net/wiki/external/MzQ4ZGQ4YjJjNzAyNDZlMjk2ZWNmYWU2YTA1ODU1MWI#Adding-NetSuite-JDBC-as-datasource "https://saasxl.atlassian.net/wiki/external/MzQ4ZGQ4YjJjNzAyNDZlMjk2ZWNmYWU2YTA1ODU1MWI#Adding-NetSuite-JDBC-as-datasource")
        
    -   [Pipedrive](https://saasxl.atlassian.net/wiki/external/MzQ4ZGQ4YjJjNzAyNDZlMjk2ZWNmYWU2YTA1ODU1MWI#Adding-Pipedrive-as-datasource "https://saasxl.atlassian.net/wiki/external/MzQ4ZGQ4YjJjNzAyNDZlMjk2ZWNmYWU2YTA1ODU1MWI#Adding-Pipedrive-as-datasource")
        
    -   [Amplitude](https://saasxl.atlassian.net/wiki/external/MzQ4ZGQ4YjJjNzAyNDZlMjk2ZWNmYWU2YTA1ODU1MWI#Adding-Amplitude-as-datasource "https://saasxl.atlassian.net/wiki/external/MzQ4ZGQ4YjJjNzAyNDZlMjk2ZWNmYWU2YTA1ODU1MWI#Adding-Amplitude-as-datasource")
        
    -   [ChargeBee](https://saasxl.atlassian.net/wiki/external/MzQ4ZGQ4YjJjNzAyNDZlMjk2ZWNmYWU2YTA1ODU1MWI#Adding--ChargeBee-as-datasource "https://saasxl.atlassian.net/wiki/external/MzQ4ZGQ4YjJjNzAyNDZlMjk2ZWNmYWU2YTA1ODU1MWI#Adding--ChargeBee-as-datasource")
        
    -   [Shopify](https://saasxl.atlassian.net/wiki/external/MzQ4ZGQ4YjJjNzAyNDZlMjk2ZWNmYWU2YTA1ODU1MWI#Adding-Shopify-as-datasource "https://saasxl.atlassian.net/wiki/external/MzQ4ZGQ4YjJjNzAyNDZlMjk2ZWNmYWU2YTA1ODU1MWI#Adding-Shopify-as-datasource")
        
    -   [Monday](https://saasxl.atlassian.net/wiki/external/MzQ4ZGQ4YjJjNzAyNDZlMjk2ZWNmYWU2YTA1ODU1MWI#Adding-Monday-as-datasource "https://saasxl.atlassian.net/wiki/external/MzQ4ZGQ4YjJjNzAyNDZlMjk2ZWNmYWU2YTA1ODU1MWI#Adding-Monday-as-datasource")
        
    -   [DB2](https://saasxl.atlassian.net/wiki/external/MzQ4ZGQ4YjJjNzAyNDZlMjk2ZWNmYWU2YTA1ODU1MWI#Adding--DB2-as-datasource "https://saasxl.atlassian.net/wiki/external/MzQ4ZGQ4YjJjNzAyNDZlMjk2ZWNmYWU2YTA1ODU1MWI#Adding--DB2-as-datasource")
        
    -   [Quickbooks](https://saasxl.atlassian.net/wiki/external/MzQ4ZGQ4YjJjNzAyNDZlMjk2ZWNmYWU2YTA1ODU1MWI#Adding-Quickbooks-as-datasource "https://saasxl.atlassian.net/wiki/external/MzQ4ZGQ4YjJjNzAyNDZlMjk2ZWNmYWU2YTA1ODU1MWI#Adding-Quickbooks-as-datasource")
        
    -   [Surveymonkey](https://saasxl.atlassian.net/wiki/external/MzQ4ZGQ4YjJjNzAyNDZlMjk2ZWNmYWU2YTA1ODU1MWI#Adding-SurveyMonkey-as-datasource "https://saasxl.atlassian.net/wiki/external/MzQ4ZGQ4YjJjNzAyNDZlMjk2ZWNmYWU2YTA1ODU1MWI#Adding-SurveyMonkey-as-datasource")
        
    -   [Cvent](https://saasxl.atlassian.net/wiki/external/MzQ4ZGQ4YjJjNzAyNDZlMjk2ZWNmYWU2YTA1ODU1MWI#Adding-Cvent-as-datasource "https://saasxl.atlassian.net/wiki/external/MzQ4ZGQ4YjJjNzAyNDZlMjk2ZWNmYWU2YTA1ODU1MWI#Adding-Cvent-as-datasource")
        
    -   [SFTP Bulk](https://saasxl.atlassian.net/wiki/external/MzQ4ZGQ4YjJjNzAyNDZlMjk2ZWNmYWU2YTA1ODU1MWI#Adding--SFTP-Bulk-as-datasource "https://saasxl.atlassian.net/wiki/external/MzQ4ZGQ4YjJjNzAyNDZlMjk2ZWNmYWU2YTA1ODU1MWI#Adding--SFTP-Bulk-as-datasource")
        
    -   [SAP HANA](https://saasxl.atlassian.net/wiki/external/MzQ4ZGQ4YjJjNzAyNDZlMjk2ZWNmYWU2YTA1ODU1MWI#Adding-SAP-HANA--as-datasource "https://saasxl.atlassian.net/wiki/external/MzQ4ZGQ4YjJjNzAyNDZlMjk2ZWNmYWU2YTA1ODU1MWI#Adding-SAP-HANA--as-datasource")
        
    -   [Azure File](https://saasxl.atlassian.net/wiki/external/MzQ4ZGQ4YjJjNzAyNDZlMjk2ZWNmYWU2YTA1ODU1MWI#Adding-Azure-File-as-datasource "https://saasxl.atlassian.net/wiki/external/MzQ4ZGQ4YjJjNzAyNDZlMjk2ZWNmYWU2YTA1ODU1MWI#Adding-Azure-File-as-datasource")
        
5.  Click **Submit**. Once you have connected a data source, the system immediately fetches its schema. After this schema retrieval process is complete you can browse and interact with the tables and data within that data source.
    

### Adding S3 data source  
:::danger Caution

The Spark environment, at the company level, allows for only one set of S3 access credentials to be configured at any given time. Consequently, Spark can be set up to access data from either DataGOL's S3 account or a single, specific client's S3 account.

Simultaneous access to data residing in multiple, different S3 accounts (like DataGOL's _and_ a client's at the same time) is NOT supported with the current configuration.

:::

:::info Prerequisite for adding S3 data source

Before you add a S3 datasource, ensure to add the following beforehand from the Company section of the Home page.

-   AWS Access Keys
    
-   AWS Secret Key
    
-   Region
    
-   Root Directory
    

Do the following:

1.  On the **Home** page of DataGOL, from the left navigation panel, click **Company**.
    
2.  Click the **Keys** tab.
    
3.  In the **AWS Settings** box, click the edit ![image-20250314-100532.png](blob:https://saasxl.atlassian.net/46395012-bf51-4d76-b199-f10fa9746295) button and specify the following details:
    
    -   **AWS Access Keys**
        
    -   **AWS Secret Key**
        
    -   **Region**
        
4.  In the **Root Directory** text box, specify the root directory.
    
:::

:::tip NOTE

s3 is available only in Amazon AWS infrastructure. S3 is not available as part of Microsoft Azure.

:::
1.  From the left navigation panel, click **Lakehouse** and then click **Datasource**.
    
2.  From the upper right corner of the page, click the **+ New Database** button to start the process of adding a new database.
    
3.  Specify the following details to add S3 data source and then click **Submit**. Once you have connected a data source, the system immediately fetches its schema. After this schema retrieval process is complete you can browse and interact with the tables and data.
    
    ![Add s3 File CSV](/img/Datasource/image-20250511-072605.png)
    
4.  Click **Submit**.
    

| **Field**             | **Description**                                                                                                                                       |
|:-----------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------|
|:-----------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Connection name**   | Enter a unique name for the connection.                                                                                                              |
| **File Format**       | Specify any of the following file formats: `CSV`, `Parquet`, `JSON`, `Delta` (Coming soon)                                                           |
| **Path to S3 bucket** | Specify the path of the S3 bucket where the files exist.                                                                                             |
|                       | Example: If file is present in `s3a://catalog/db/source/test.csv` then path will be `catalog/db`.                                                   |
|                       | Example format: `s3a://catalog/db/`                                                                                                                  |
| **Separator**         | Specify the separator character.                                                                                                                     |
| **Header**            | Toggle to indicate if the first row of your CSV contains column headers.                                                                             |
| **Infer Schema**      | Toggle to automatically determine the data type of each column in your data.                                                                         |
| **Compression**       | Select the file compression mode from the following options: `Uncompressed`, `gzip`, `lzo`, `brotli`, `lz4`, `zstd`                                 |
| **Null Value**        | *(No description provided)*                                                                                                                           |

:::info  **Limitations** 

We can have only one s3 account at company Level, As in Spark we can give only one Credentials while configuring.
:::

s3 can be off DataGOL s3 account or the Clients s3 Account, But it can be only one.

### Adding Microsoft SQL or PostgreSQL as a datasource

1.  From the left navigation panel, click **Lakehouse** and then click **Datasource**.
    
2.  From the upper right corner of the page, click the **+ New Database** button to start the process of adding a new database.
    
3.  Specify the following details to add Microsoft SQL or PostgreSQL and then click **Submit**. Once you have connected a data source, the system immediately fetches its schema. After this schema retrieval process is complete you can browse and interact with the tables and data.

|        MySQL    | PostgreSQL  |
|:-------------------------:|:-------------------------:|
|![Add MySQL](/img/Datasource/image-20250506-175842.png)| ![Add PostgreSQL](/img/Datasource/image-20250511-112352.png)|

| Field | Description |
|:---|:---|
| **Connection name** | Enter a unique name for the connection. |
| **Database** | Specify the name of the existing database that you want to connect. |
| **Host name** | Specify the hostname or IP address of the server wherein the database is located. |
| **Port name** | Enter the port number used by the database server. |
| **Schema** | Specify the schema name for your PostgreSQL or Microsoft SQL connection. If left blank, the default schema will be used (**“public”** for Postgres and **“dbo”** for Microsoft SQL). |
| **Properties** | Specify additional settings by entering key/value pairs. Each pair represents a unique property and its value. |
| **Case Sensitive** | Specify whether your PostgreSQL or Microsoft SQL Server datasource has case-sensitive table names. This option allows for seamless integration with databases that use Camel Case or other naming conventions. |   

5.  Click **Submit**. 

### Adding Folder as a datasource

1.  From the left navigation panel, click **Lakehouse** and then click **Datasource**.
    
2.  From the upper right corner of the page, click the **+ New Database** button to start the process of adding a new database.
    
3.  Specify the following details to add folder and then click **Submit**. Once you have connected a data source, the system immediately fetches its schema. After this schema retrieval process is complete you can browse and interact with the tables and data.
    
    ![Add folder](/img/Datasource/image-20250511-072755.png)

| Field | Description |
|:---|:---|
| **Connection name** | Enter a unique name for the connection. |
| **File Format** | Specify any of the following file formats: CSV, Parquet, JSON, Excel |
| **Separator** | Specify the separator character. |
| **Header** | Toggle to indicate if the first row of your CSV contains column headers. This field is displayed only when the file format is CSV. |
| **Infer Schema** | Toggle to automatically determine the data type of each column in your data. This field is displayed only when the file format is CSV. |
| **Compression** | Select the file compression mode from any of the following options: **Uncompressed**, **gzip**, **lzo**, **brotli**, **lz4**, and **zstd**. |
| **Null Value** | A set of case-sensitive strings that should be interpreted as null values. For example, if the value 'NA' should be interpreted as null, enter 'NA' in this field. |



5.  Click **Submit**. 

After creating a data source, add a new folder to define a unique data table. Any files uploaded to this folder will be automatically merged to populate the table's data.

![Define-unique-data-table](/img/Datasource/att_195_for_220692503.png)

To upload, download, or delete files within a specific folder, click the folder name or access the settings menu. The **Files** tab will provide you with the necessary options.

![Define-unique-data-table1](/img/Datasource/att_224_for_220692503.png)

:::tip NOTE

-   Adding files of different schemas in the same folder is not supported.
    
-   Multi tab excel files are not supported in this release.
    
-   Folder names cannot be only numbers. Validation is yet to be added.

:::

### Adding HubSpot as datasource

:::info **Prerequisite for adding HubSpot**

The following connector information is required from the client:

-   Access Token
    
-   Start Date
    

Do the following:

1.  Login to your HubSpot account [Hubspot Login](https://app.hubspot.com/login/legacy?hubs_signup-url=knowledge.hubspot.com%2Faccount-management%2Fwhy-can-t-i-log-into-hubspot&hubs_signup-cta=cta_button&hsCtaTracking=d82c5d82-821c-4c0d-86f5-6c34dced0e6d%7C16494015-d90f-47fc-adc3-593e2e1bdfa0 "https://app.hubspot.com/login/legacy?hubs_signup-url=knowledge.hubspot.com%2Faccount-management%2Fwhy-can-t-i-log-into-hubspot&hubs_signup-cta=cta_button&hsCtaTracking=d82c5d82-821c-4c0d-86f5-6c34dced0e6d%7C16494015-d90f-47fc-adc3-593e2e1bdfa0")
    
2.  Set up Hubspot for Airbyte Open Source: Private app setup (Recommended): If you are authenticating via a Private App, you will need to use your access token to set up the connector. Refer to the [official HubSpot documentation](https://developers.hubspot.com/docs/api/private-apps "https://developers.hubspot.com/docs/api/private-apps") for a detailed guide.
    
3.  After private app setup is complete In your HubSpot account, click the **settings icon** in the main navigation bar.
    
4.  In the left sidebar menu, navigate to **Integrations** > **Private apps**.
    
5.  Click the **name** of your app.
    
6.  Click the **Auth** tab and then click **Show token** to reveal your access token.
    
7.  Click **Copy** to copy the token to your clipboard.
:::

1.  From the left navigation panel, click **Lakehouse** and then click **Datasource**.
    
2.  From the upper right corner of the page, click the **+ New Database** button to start the process of adding a new database.
    
3.  Specify the following details to add HubSpot and then click **Submit**. Once you have connected a data source, the system immediately fetches its schema. After this schema retrieval process is complete you can browse and interact with the tables and data.
    
![Add_Hubspot](/img/Datasource/image-20250511-080246.png)

| Field | Description |
|---|---|
| **Connection name** | Enter a unique name for the connection. |
| **Access token** | Specify the HubSpot access token. |
| **Start Date** | Enter the date in the MM-DD-YYYY format. DataGOL will replicate the data updated on and after this date. If this field is blank, DataGOL will replicate the data for last two years. |

4.  Click **Submit**. 

### Adding MariaDB as datasource

1.  From the left navigation panel, click **Lakehouse** and then click **Datasource**.
    
2.  From the upper right corner of the page, click the **+ New Database** button to start the process of adding a new database.
    
3.  Specify the following details to add MariaDB and then click **Submit**. Once you have connected a data source, the system immediately fetches its schema. After this schema retrieval process is complete you can browse and interact with the tables and data.
    
| Field | Description |
|---|---|
| **Connection name** | Enter a unique name for the connection. |
| **Database name** | Specify the name of the existing database you want to connect to. |
| **Hostname** | Provide the hostname or IP address of the server where the database resides. |
| **Port** | Enter the port number used by the database server. |
| **Username/Password** | Provide the credentials to access the database server. |
| **Properties** | Specify additional settings by entering key/value pairs. Each pair represents a unique property and its value. |

4.  Click **Submit**. 
| Field | Description |
|---|---|
| **Connection name** | Enter a unique name for the connection. |
| **Database name** | Specify the name of the existing database you want to connect to. |
| **Hostname** | Provide the hostname or IP address of the server where the database resides. |
| **Port** | Enter the port number used by the database server. |
| **Username/Password** | Provide the credentials to access the database server. |
| **Properties** | Specify additional settings by entering key/value pairs. Each pair represents a unique property and its value. |

4.  Click **Submit**. 

### Adding Salesforce as datasource

:::info **Prequisites for adding Salesforce**
:::info **Prequisites for adding Salesforce**

The following connector information is required from the client:

-   Client ID
    
-   Client Secret
    
-   Refresh Token
    
-   Domain: eg [**salesforce.your-domain.com**](http://salesforce.your-domain.com/ "http://salesforce.your-domain.com/")
    
-   Start Date
    

To obtain these credentials, follow [this walkthrough](https://medium.com/@bpmmendis94/obtain-access-refresh-tokens-from-salesforce-rest-api-a324fe4ccd9b "https://medium.com/@bpmmendis94/obtain-access-refresh-tokens-from-salesforce-rest-api-a324fe4ccd9b") with the following modifications:

1.  If your Salesforce URL is not in the `X.salesforce.com` format, use your Salesforce domain name. For example, if your Salesforce URL is `awesomecompany.force.com` then use that instead of `awesomecompany.salesforce.com`.
    
2.  Use the user credentials when logging in to generate OAuth tokens.
:::
    

1.  From the left navigation panel, click **Lakehouse** and then click **Datasource**.
    
2.  From the upper right corner of the page, click the **+ New Database** button to start the process of adding a new database.
    
3.  Specify the following details to add Salesforce and then click **Submit**. Once you have connected a data source, the system immediately fetches its schema. After this schema retrieval process is complete you can browse and interact with the tables and data.
    
    ![Add_Salesforce](/img/Datasource/image-20250511-085826.png)

| Field | Description |
|---|---|
| **Connection name** | Enter a unique name for the Salesforce connection. |
| **Client ID/Client secret** | Enter your Salesforce developer application's Client ID and Secret. |
| **Refresh Token** | Enter your application's [Salesforce Refresh Token](https://developer.salesforce.com/docs/atlas.en-us.mobile_sdk.meta/mobile_sdk/oauth_refresh_token_flow.htm) used for Airbyte to access your Salesforce account. |
| **Domain** | The Domain for your Salesforce account, e.g. [datagol.salesforce.com](http://datagol.salesforce.com/), [salesforce.your-domain.com](http://salesforce.your-domain.com/) |
| **Start Date** | Enter the date in the MM-DD-YYYY format. DataGOL will replicate the data updated on and after this date. If this field is blank, DataGOL will replicate the data for last two years. |    

4.  Click **Submit**. 

### Adding Snowflake as datasource

1.  From the left navigation panel, click **Lakehouse** and then click **Datasource**.
    
2.  From the upper right corner of the page, click the **+ New Database** button to start the process of adding a new database.
    
3.  Specify the following details to add Snowflake and then click **Submit**. Once you have connected a data source, the system immediately fetches its schema. After this schema retrieval process is complete you can browse and interact with the tables and data.
    
   ![Add_Snowflake](/img/Datasource/image-20250511-112121.png)

| Field | Description |
|---|---|
| **Connection Name** | Enter a unique name for this connection. This will help you identify it later. |
| **Database Name** | Specify the name of the existing database you want to connect to. |
| **Schema Name** | Specify the schema name for your connection. |
| **Hostname** | Provide the hostname or IP address of the server where the database resides. |
| **Port** | Enter the port number used by the database server. |
| **Username/Password** | Provide the credentials to access the database server. |
| **Properties** | Specify additional settings by entering key/value pairs. Each pair represents a unique property and its value. |

4.  Click **Submit**. 

### Adding MongoDB Atlas datasource

1.  From the left navigation panel, click **Lakehouse** and then click **Datasource**.
    
2.  From the upper right corner of the page, click the **+ New Database** button to start the process of adding a new database.
    
3.  Specify the following details to add MongoDB Atlas and then click **Submit**. Once you have connected a data source, the system immediately fetches its schema. After this schema retrieval process is complete you can browse and interact with the tables and data.  
    
   ![Add_MongoDB](/img/Datasource/image-20250511-111912.png)

| Field | Description |
|---|---|
| **Connection Name** | Enter a unique name for this connection. This will help you identify it later. |
| **Database Name** | Specify the name of the existing database you want to connect to. |
| **Schema Name** | Specify the schema name for your connection. |
| **Hostname** | Provide the hostname or IP address of the server where the database resides. |
| **Port** | Enter the port number used by the database server. |
| **Username/Password** | Provide the credentials to access the database server. |
| **Properties** | Specify additional settings by entering key/value pairs. Each pair represents a unique property and its value. |

4.  Click **Submit**. 

### Adding NetSuite as datasource

:::info **Prequisites for adding NetSuite**
:::info **Prequisites for adding NetSuite**

The following connector information is required from the client:

-   Realm ID
    
-   Consumer Key
    
-   Consumer Secret
    
-   Token Key
    
-   Token Secret
    
-   Start Date
    
-   Window in Days (Default: 30 days)
    

Do the following:

**1. Create NetSuite account**

1.  Create [account](https://system.netsuite.com/pages/customerlogin.jsp?country=US "https://system.netsuite.com/pages/customerlogin.jsp?country=US") on Oracle NetSuite.
1.  Create [account](https://system.netsuite.com/pages/customerlogin.jsp?country=US "https://system.netsuite.com/pages/customerlogin.jsp?country=US") on Oracle NetSuite.
    
2.  Confirm your Email.
2.  Confirm your Email.
    

**2. Setup NetSuite account**

**a. Obtain Realm info**

1.  Login into your NetSuite [account](https://system.netsuite.com/pages/customerlogin.jsp?country=US "https://system.netsuite.com/pages/customerlogin.jsp?country=US")
    
2.  Go to **Setup** » **Company** » **Company Information**.
2.  Go to **Setup** » **Company** » **Company Information**.
    
3.  Copy your Account ID (Realm). It should look like **1234567** for the `Production` env. or **1234567_SB2** for a `Sandbox`.      
3.  Copy your Account ID (Realm). It should look like **1234567** for the `Production` env. or **1234567_SB2** for a `Sandbox`.      

**b. Enable features**

1.  Go to **Setup** » **Company** » **Enable Features**.
1.  Go to **Setup** » **Company** » **Enable Features**.
    
2.  Click on **SuiteCloud** tab.
2.  Click on **SuiteCloud** tab.
    
3.  Scroll down to **SuiteScript** section.
3.  Scroll down to **SuiteScript** section.
    
4.  Enable checkbox for `CLIENT SUITESCRIPT` and `SERVER SUITESCRIPT`.
4.  Enable checkbox for `CLIENT SUITESCRIPT` and `SERVER SUITESCRIPT`.
    
5.  Scroll down to **Manage Authentication** section.
5.  Scroll down to **Manage Authentication** section.
    
6.  Enable checkbox `TOKEN-BASED AUTHENTICATION`.
6.  Enable checkbox `TOKEN-BASED AUTHENTICATION`.
    
7.  Scroll down to **SuiteTalk (Web Services)**.
7.  Scroll down to **SuiteTalk (Web Services)**.
    
8.  Enable checkbox `REST WEB SERVISES`.
8.  Enable checkbox `REST WEB SERVISES`.
    
9.  Save the changes.
9.  Save the changes.
    

**c. Create Integration (obtain Consumer Key and Consumer Secret)**

1.  Go to **Setup** » **Integration** » **Manage Integrations** » **New**.
1.  Go to **Setup** » **Integration** » **Manage Integrations** » **New**.
    
2.  Fill the **Name** field (we recommend to put `airbyte-rest-integration` for a name).
2.  Fill the **Name** field (we recommend to put `airbyte-rest-integration` for a name).
    
3.  Make sure the **State** is `enabled`.
3.  Make sure the **State** is `enabled`.
    
4.  Enable checkbox `Token-Based Authentication` in **Authentication** section.
4.  Enable checkbox `Token-Based Authentication` in **Authentication** section.
    
5.  Save changes.
5.  Save changes.
    
6.  After that, **Consumer Key** and **Consumer Secret** will be showed once (copy them to the safe place).
6.  After that, **Consumer Key** and **Consumer Secret** will be showed once (copy them to the safe place).
    

**d. Setup Role**

1.  Go to **Setup** » **Users/Roles** » **Manage Roles** » **New**.
1.  Go to **Setup** » **Users/Roles** » **Manage Roles** » **New**.
    
2.  Fill the **Name** field (we recommend to put `airbyte-integration-role` for a name).
2.  Fill the **Name** field (we recommend to put `airbyte-integration-role` for a name).
    
3.  Scroll down to **Permissions** tab.
3.  Scroll down to **Permissions** tab.
    
4.  (REQUIRED) Click on `Transactions` and manually `add` all the dropdown entities with either `full` or `view` access level.
    
5.  (REQUIRED) Click `Reports` and manually `add` all the dropdown entities with either `full` or `view` access level.
    
6.  (REQUIRED) Click `Lists` and manually `add` all the dropdown entities with either `full` or `view` access level.
    
7.  (REQUIRED) Click on `Setup` and manually `add` all the dropdown entities with either `full` or `view` access level.
    

-   Make sure you have done all the `REQUIRED` steps correctly, to avoid sync issues in the future.
-   Make sure you have done all the `REQUIRED` steps correctly, to avoid sync issues in the future.
    
-   Edit these parameters again when you `rename` or `customise` any `Object` in NetSuite for `airbyte-integration-role` to reflect such changes.
-   Edit these parameters again when you `rename` or `customise` any `Object` in NetSuite for `airbyte-integration-role` to reflect such changes.
    

**e. Setup User**

1.  Go to **Setup** » **Users/Roles** » **Manage Users**.
1.  Go to **Setup** » **Users/Roles** » **Manage Users**.
    
2.  In column `Name` click on the user’s name you want to give access to the `airbyte-integration-role`.
2.  In column `Name` click on the user’s name you want to give access to the `airbyte-integration-role`.
    
3.  Then click on **Edit** button under the user’s name.
3.  Then click on **Edit** button under the user’s name.
    
4.  Scroll down to **Access** tab at the bottom.
4.  Scroll down to **Access** tab at the bottom.
    
5.  Select from dropdown list the `airbyte-integration-role` role which you created in step 2.4.
5.  Select from dropdown list the `airbyte-integration-role` role which you created in step 2.4.
    
6.  Save changes.
6.  Save changes.
    

**f. Create Access Token for role**

1.  Go to **Setup** » **Users/Roles** » **Access Tokens** » **New**.
1.  Go to **Setup** » **Users/Roles** » **Access Tokens** » **New**.
    
2.  Select an **Application Name**.
2.  Select an **Application Name**.
    
3.  Under **User** select the user you assigned the `airbyte-integration-role` in the step **2.4**.
3.  Under **User** select the user you assigned the `airbyte-integration-role` in the step **2.4**.
    
4.  Inside **Role** select the one you gave to the user in the step **2.5**.
4.  Inside **Role** select the one you gave to the user in the step **2.5**.
    
5.  Under **Token Name** you can give a descriptive name to the Token you are creating (we recommend to put `airbyte-rest-integration-token` for a name).
5.  Under **Token Name** you can give a descriptive name to the Token you are creating (we recommend to put `airbyte-rest-integration-token` for a name).
    
6.  Save changes. After that, **Token ID** and **Token Secret** will be showed once (copy them to the safe place).

:::
    
6.  Save changes. After that, **Token ID** and **Token Secret** will be showed once (copy them to the safe place).

:::
    
1.  From the left navigation panel, click **Lakehouse** and then click **Datasource**.
    
2.  From the upper right corner of the page, click the **+ New Database** button to start the process of adding a new database.
    
3.  Specify the following details to add NetSuite and then click **Submit**. Once you have connected a data source, the system immediately fetches its schema. After this schema retrieval process is complete you can browse and interact with the tables and data.
    
    ![Add_NetSuite](/img/Datasource/image-20250511-111639.png)
    
| Field | Description |
|---|---|
| **Connection Name** | Enter a unique name for this connection. This will help you identify it later. |
| **Realm (Account ID)** | Netsuite realm e.g. 2344535 for `production` or 2344535_SB1, as for the `sandbox` |
| **Consumer Key** | Consumer key associated with your integration |
| **Consumer Secret** | Consumer secret associated with your integration |
| **Token Key (Token ID)** | Access token key |
| **Token Secret*** | Access token secret |
| **Start Date*** | Enter the date in the MM-DD-YYYY format. DataGOL will replicate the data updated on and after this date. |
| **Window in Days** | The amount of days used to query the data with date chunks. Set smaller value, if you have lots of data. |

4.  Click **Submit**. 

### Adding NetSuite Reporting as datasource

1.  From the left navigation panel, click **Lakehouse** and then click **Datasource**.
    
2.  From the upper right corner of the page, click the **+ New Database** button to start the process of adding a new database.
    
3.  Specify the following details to add NetSuite Reporting and then click **Submit**. Once you have connected a data source, the system immediately fetches its schema. After this schema retrieval process is complete you can browse and interact with the tables and data.
    
    ![Add_Netsuite_Reporting](/img/Datasource/image-20250511-111558.png)
| Field | Description |
|---|---|
| **Connection Name** | Enter a unique name for the connection. |
| **Consumer Key** | Specify the Consumer Key for authentication. |
| **Token Key / Secret** | Specify the Token key and secret for authenticating the access. |
| **Start Date** | Specify the date from which to begin replicating extracting data. |

4.  Click **Submit**. 

### Adding NetSuite-JDBC as datasource

1.  From the left navigation panel, click **Lakehouse** and then click **Datasource**.
    
2.  From the upper right corner of the page, click the **+ New Database** button to start the process of adding a new database.
    
3.  Specify the following details to add NetSuite-JDBC and then click **Submit**. Once you have connected a data source, the system immediately fetches its schema. After this schema retrieval process is complete you can browse and interact with the tables and data.
    
    ![NetSuite-JDBC](/img/Datasource/image-20250511-111519.png)

| Field | Description |
|---|---|
| **Connection Name** | Enter a unique name for the connection. |
| **Account ID** | Specify the account ID. |
| **Role ID** | Specify the role ID. |
| **Username/password** | Provide the credentials for the account. |
| **Hostname** | Specify the host address of the database server. |
| **Port** | Specify the port number of the database server. |

4.  Click **Submit**. 

### Adding Pipedrive as datasource

:::info **Prerequisite for adding Pipedrive**
:::info **Prerequisite for adding Pipedrive**

The following connector information is required from the client:

-   API Token
    
-   Start Date

Do the following:

1.  Login to your [Pipedrive account](https://app.pipedrive.com/auth/login "https://app.pipedrive.com/auth/login").
    
2.  Enable API Token: If you do not see API next to the `Your companies` section, it is due to the permission sets handled by the company's admin. The company's admin can give you access to your API token by enabling it for you from the settings in Pipedrive web app.
    
    For more information, access [enabling API for company users](https://pipedrive.readme.io/docs/enabling-api-for-company-users "https://pipedrive.readme.io/docs/enabling-api-for-company-users").
    
3.  Find the API token:
    
    You can get the API token manually from the Pipedrive web app by going to account name (on the top right) > **Company settings** > **Personal preferences** > **API**.
    
    See [How to find the API Token](https://pipedrive.readme.io/docs/how-to-find-the-api-token "https://pipedrive.readme.io/docs/how-to-find-the-api-token") for detailed information.
    
4.  You can get the API token manually from the Pipedrive web app by going to _account name (on the top right)  > **Company settings** > **Personal preferences** > **API**_ or by clicking [here](https://app.pipedrive.com/settings/api "https://app.pipedrive.com/settings/api") (in case you have multiple companies open at the same time, this link will redirect you to the API token of the last opened company).

:::


:::


1.  From the left navigation panel, click **Lakehouse** and then click **Datasource**.
    
2.  From the upper right corner of the page, click the **+ New Database** button to start the process of adding a new database.
    
3.  Specify the following details to add Pipedrive and then click **Submit**. Once you have connected a data source, the system immediately fetches its schema. After this schema retrieval process is complete you can browse and interact with the tables and data.
    
    ![Add_Pipedrive](/img/Datasource/image-20250511-095929.png)
    
| Field | Description |
|---|---|
| **Connection Name** | Enter a unique name for the connection. |
| **API Token** | The Pipedrive API Token. This is a mandatory field. |
| **Start Date** | Enter the date in the MM-DD-YYYY format. DataGOL will replicate the data updated on and after this date. This is a mandatory field. |  

4.  Click **Submit**. 

### Adding Amplitude as datasource

:::info **Prequisites for adding Amplitude**
:::info **Prequisites for adding Amplitude**

The following connector information is required from the client:

-   API Key
    
-   Secret Key
    
-   Start Date
    

Do the following:
Do the following:

1.  Log on to your [Amplitude account](https://amplitude.com/ "https://amplitude.com/").
    
2.  Navigate to **Settings** > **Organization** **Settings** _>_ **Projects** and click the name of the project you want to view or edit. This opens the **General** tab, where you will find the following information about your project:
    
    -   API Key
        
    -   Secret Key
        

Create a project first, if you don’t have one already. Refer to [Create a project in Amplitude](https://amplitude.com/docs/get-started/create-project "https://amplitude.com/docs/get-started/create-project").

:::

:::

1.  From the left navigation panel, click **Lakehouse** and then click **Datasource**.
    
2.  From the upper right corner of the page, click the **+ New Database** button to start the process of adding a new database.
    
3.  Specify the following details to add Amplitude and then click **Submit**. Once you have connected a data source, the system immediately fetches its schema. After this schema retrieval process is complete you can browse and interact with the tables and data.
    
    ![Add_Amplitude](/img/Datasource/image-20250511-100205.png)
    
 Field | Description |
|---|---|
| **Connection Name** | Enter a unique name for the connection. |
| **API Key** | Amplitude API Key. See the docs for more information on how to generate this key. |
| **Secret Key** | Amplitude Secret Key. |
| **Start Date** | Enter the date in the MM-DD-YYYY format. DataGOL will replicate the data updated on and after this date. |

4.  Click **Submit**. 

### Adding ChargeBee as datasource

:::info **Prequisites for adding Chargebee**
:::info **Prequisites for adding Chargebee**

The following connector information is required from the client:

-   API key
    
-   Site
    
-   Start date
    

Do the following to

1.  Log on to your [Chargebee account](https://app.chargebee.com/login?_gl=1*1jmfwgg*_gcl_aw*R0NMLjE3MzY3MTc3NjIuQ2p3S0NBaUE3WTI4QmhBbkVpd0FBZE9KVUxmOWJPYmJITFlxQnp4WFNwVjllby1HWEtQS1JBZC02Ymp6STctOWF0aE9nU0tHbU1xUGN4b0NXVE1RQXZEX0J3RQ..*_gcl_au*MjAxMTI4MDM5Ni4xNzM2NzE3NzQ3*_up*MQ..*_gs*MQ..&gclid=CjwKCAiA7Y28BhAnEiwAAdOJULf9bObbHLYqBzxXSpV9eo-GXKPKRAd-6bjzI7-9athOgSKGmMqPcxoCWTMQAvD_BwE "https://app.chargebee.com/login?_gl=1*1jmfwgg*_gcl_aw*R0NMLjE3MzY3MTc3NjIuQ2p3S0NBaUE3WTI4QmhBbkVpd0FBZE9KVUxmOWJPYmJITFlxQnp4WFNwVjllby1HWEtQS1JBZC02Ymp6STctOWF0aE9nU0tHbU1xUGN4b0NXVE1RQXZEX0J3RQ..*_gcl_au*MjAxMTI4MDM5Ni4xNzM2NzE3NzQ3*_up*MQ..*_gs*MQ..&gclid=CjwKCAiA7Y28BhAnEiwAAdOJULf9bObbHLYqBzxXSpV9eo-GXKPKRAd-6bjzI7-9athOgSKGmMqPcxoCWTMQAvD_BwE").
    
2.  To create and configure the API keys, select **Settings** > **Configure Chargebee** > **API Keys and Webhooks**
    
3.  Click on the **API Keys** tab. Any existing API keys are listed.

    ![Chargebee](/img/Datasource/image-20250112-214950.png)
:::

1.  From the left navigation panel, click **Lakehouse** and then click **Datasource**.
    
2.  From the upper right corner of the page, click the **+ New Database** button to start the process of adding a new database.
    
3.  Specify the following details to add Chargebee and then click **Submit**. Once you have connected a data source, the system immediately fetches its schema. After this schema retrieval process is complete you can browse and interact with the tables and data.
    
    ![Add_Chargebee](/img/Datasource/image-20250511-100812.png) 

| Field | Description |
|---|---|
| **Connection Name** | Enter a unique name for the connection. |
| **API Key** | ChargeBee API Key. |
| **Site** | The site prefix for your ChargeBee instance. |
| **Start Date** | Enter the date in the MM-DD-YYYY format. DataGOL will replicate the data updated on and after this date. |    

4.  Click **Submit**. 

### Adding Shopify as datasource

:::info **Prerequisite for adding Shopify**
:::info **Prerequisite for adding Shopify**

The following connector information is required from the client:

-   Shopify Store
    
-   API password
    
-   Start Date
    

Do the following:

1.  Login to your [Shopify account](https://www.shopify.com/ "https://www.shopify.com/").
    
2.  Once logged in, your store name is often part of the URL in your browser's address bar. For example:
    
    `https://your-store-name.myshopify.com/admin`
    
3.  In the dashboard, navigate to **Settings** > **App and sales channels** > **Develop apps** > **Create an app**.
    
4.  Select a name for your new app.
    
5.  Select **Configure Admin API scopes**.
    
6.  Grant access to the [following list of scopes](http://52.203.24.77:8000/workspaces/ee182db1-4c12-467e-8730-881aa8d3d04b/source/new-source/9da77001-af33-4bcd-be46-6252bf9342b9#scopes-required-for-custom-app "http://52.203.24.77:8000/workspaces/ee182db1-4c12-467e-8730-881aa8d3d04b/source/new-source/9da77001-af33-4bcd-be46-6252bf9342b9#scopes-required-for-custom-app"). Only select scopes prefixed with `read_`, not `write_` (e.g. `read_locations`,`read_price_rules`, etc ).
    
7.  Click **Install app** to give this app access to your data.
    
8.  Once installed, go to **API Credentials** to copy the **Admin API Access Token**. You are now ready to set up the source in Airbyte.
    

Refer [Where can I get Shopify API password](https://www.shopping-cart-migration.com/faq/faq/40-where-can-i-get-shopify-api-key-and-api-password "https://www.shopping-cart-migration.com/faq/faq/40-where-can-i-get-shopify-api-key-and-api-password") [How to get the Shopify API password](https://youtu.be/-v_FbEvRD98 "https://youtu.be/-v_FbEvRD98")
:::
:::

1.  From the left navigation panel, click **Lakehouse** and then click **Datasource**.
    
2.  From the upper right corner of the page, click the **+ New Database** button to start the process of adding a new database.
    
3.  Specify the following details to add Shopify and then click **Submit**. Once you have connected a data source, the system immediately fetches its schema. After this schema retrieval process is complete you can browse and interact with the tables and data.
    
    ![Add_Shopify](/img/Datasource/image-20250511-101024.png)

| Field | Description |
|---|---|
| **Connection Name** | Enter a unique name for the connection. |
| **Shopify Store** | The name of your Shopify store found in the URL. |
| **Authorization Method** | The authorization method to use to retrieve data from Shopify. |
| **API Password** | The API Password for your private application in the `Shopify` store. |
| **Start Date** | Enter the date in the MM-DD-YYYY format. DataGOL will replicate the data updated on and after this date. |

4.  Click **Submit**. 

### Adding Monday as datasource

:::info **Prerequisite for adding Monday**
:::info **Prerequisite for adding Monday**

The following connector information is required from the client:

-   API Token
    

Do the following:

1.  Login to your [monday account](http://monday.com/ "http://monday.com").
    
2.  **Admin tab**  
    If you are an **admin** user on your [monday.com](http://monday.com/ "http://monday.com/") account, follow these steps to access your API token:
    
    1.  Log into your [monday.com](http://monday.com/ "http://monday.com/") account.
        
    2.  Click on your avatar/profile picture in the top right corner.
        
    3.  Select **Administration** > **Connections** > **API**.
        
    4.  Copy your personal token. Note that you can always regenerate a new token, but doing so will cause any previous tokens to expire.
        
3.  **Developer tab**  
    If you are a **member user** or an **admin** on your [monday.com](http://monday.com/ "http://monday.com/") account, follow these steps to access your API token:
    
    1.  Log into your [monday.com](http://monday.com/ "http://monday.com/") account.
        
    2.  Click on your profile picture in the top right corner.
        
    3.  Select **Developers**. This will open the _Developer Center_ in another tab.
        
    4.  Click **My Access Tokens** > **Show**.
        
    5.  Copy your personal token. Note that you can always regenerate a new token, but doing so will cause any previous tokens to expire.
:::        
:::        

1.  From the left navigation panel, click **Lakehouse** and then click **Datasource**.
    
2.  From the upper right corner of the page, click the **+ New Database** button to start the process of adding a new database.
    
3.  Specify the following details to add Monday and then click **Submit**. Once you have connected a data source, the system immediately fetches its schema. After this schema retrieval process is complete you can browse and interact with the tables and data.
    
    ![Add_Monday](/img/Datasource/image-20250511-101736.png)
        
| Field | Description |
|---|---|
| **Connection Name** | Enter a unique name for the connection. |
| **Authorization Method** | The authorization method to use to retrieve data from Monday. |
| **API Token** | API Token for making authenticated requests. |

4.  Click **Submit**. 

### Adding DB2 as datasource

1.  From the left navigation panel, click **Lakehouse** and then click **Datasource**.
    
2.  From the upper right corner of the page, click the **+ New Database** button to start the process of adding a new database.
    
3.  Specify the following details to add DB2 and then click **Submit**. Once you have connected a data source, the system immediately fetches its schema. After this schema retrieval process is complete you can browse and interact with the tables and data.
    
    ![Add_DB2](/img/Datasource/image-20250511-111410.png)

| Field | Description |
|---|---|
| **Connection Name** | Enter a unique name for the connection. |
| **Database Name** | Specify the name of the existing database you want to connect to. |
| **Host Name** | Specify the host address of the database server. |
| **Port** | Specify the port number of the database server. |
| **Username / Password** | Provide the credentials for the account. |
| **Properties** | Specify additional settings by entering key/value pairs. Each pair represents a unique property and its value. |

4.  Click **Submit**. 

### Adding Quickbooks as datasource

:::info **Prerequisite for adding Quickbooks**
:::info **Prerequisite for adding Quickbooks**

The following connector information is required from the client:

-   Access Token
    
-   Client ID
    
-   Client Secret
    
-   Realm ID
    
-   Refresh Token
    
-   Token Expiry Date
    
-   Start Date
    

Do the following:

**Set up QuickBooks**

1.  Create an [Intuit Developer account](https://developer.intuit.com/app/developer/qbo/docs/get-started "https://developer.intuit.com/app/developer/qbo/docs/get-started")
    
2.  Create a workspace and then create an application by filing the required details in the form.
    
    0:00  /  1:00
    
    1x
    
3.  Obtain credentials. The easiest way to get these credentials is by using Quickbook's [OAuth 2.0 playground](https://developer.intuit.com/app/developer/qbo/docs/develop/authentication-and-authorization/oauth-2.0-playground "https://developer.intuit.com/app/developer/qbo/docs/develop/authentication-and-authorization/oauth-2.0-playground")
    
    0:00  /  0:48
    
    1x
    

**Note:**

-   Access token expires every 60 min/hour and a new access token is automatically fetched by Airbyte using the refresh token. A Refresh token is valid for 101 days but expires every 24 hrs. A new Refresh token is automatically generated using the old refresh token and will be updated. After every 101 days a new refresh token has to be fetched from the [2.0 playground](https://developer.intuit.com/app/developer/qbo/docs/develop/authentication-and-authorization/oauth-2.0-playground "https://developer.intuit.com/app/developer/qbo/docs/develop/authentication-and-authorization/oauth-2.0-playground").
    
-   Quickbooks connector works only for Quickbooks online account. It doesn’t work for Quickbooks Desktop Account. If you are using a Quickbooks Desktop Account please migrate your account to Quickbooks online. Refer [Migrate to Quickbooks online from desktop](https://quickbooks.intuit.com/learn-support/en-us/help-article/import-export-data-files/move-quickbooks-desktop-file-quickbooks-online/L6af3Z0Fb_US_en_US "https://quickbooks.intuit.com/learn-support/en-us/help-article/import-export-data-files/move-quickbooks-desktop-file-quickbooks-online/L6af3Z0Fb_US_en_US")
    

1.  From the left navigation panel, click **Lakehouse** and then click **Datasource**.
    
2.  From the upper right corner of the page, click the **+ New Database** button to start the process of adding a new database.
    
3.  Specify the following details to add Quickbooks and then click **Submit**. Once you have connected a data source, the system immediately fetches its schema. After this schema retrieval process is complete you can browse and interact with the tables and data.
    
   ![sample](/img/Datasource/image-20250511-103419.png) 
| Field | Description |
|---|---|
| **Connection Name** | Enter a unique name for the connection. |
| **Auth Type** | Specify the authentication type. |
| **Access Token** | Specify the Quickbooks access token. |
| **Client ID** | Identifies which app is making the request. Obtain this value from the Keys tab on the app profile via My Apps on the developer site. There are two versions of this key: development and production. |
| **Realm ID** | Labeled Company ID. The Make API Calls panel is populated with the realm id and the current access token. |
| **Client secret** | Obtain this value from the **Keys** tab on the app profile via **My Apps** on the developer site. There are two versions of this key: development and production. |
| **Refresh Token** | Specify a token that can be used when refreshing the access token. |
| **Token Expiry Date** | Specify the expiry date of the token. |
| **Start Date** | Enter the date in the MM-DD-YYYY format. DataGOL will replicate the data updated on and after this date. If this field is blank, DataGOL will replicate the data for last two years. |
| **Sandbox** | Use the toggle to specify whether to use the sandbox or production environment. |

4.  Click **Submit**. 

### Adding SurveyMonkey as datasource

:::info **Prerequisite for adding SurveyMonkey**
:::info **Prerequisite for adding SurveyMonkey**

The following connector information is required from the client:

-   Access Token
    
-   Origin datacenter of the survey monkey account (Default: USA)
    
-   Start Date
    

Do the following:

1.  Login to your survey monkey account [Survey Monkey Login](https://www.surveymonkey.com/mp/sign-in/ "https://www.surveymonkey.com/mp/sign-in/")
    
2.  Create an app.
    
3.  After creating an app, navigate to the created app settings, and check the credentials section for the access token. Ensure to have a higher daily API limit to read data without any issues.
    

0:00  /  0:26

1x
:::
:::

1.  From the left navigation panel, click **Lakehouse** and then click **Datasource**.
    
2.  From the upper right corner of the page, click the **+ New Database** button to start the process of adding a new database.
    
3.  Specify the following details to add SurveyMonkey and then click **Submit**. Once you have connected a data source, the system immediately fetches its schema. After this schema retrieval process is complete you can browse and interact with the tables and data.
    
    ![Add_SurveyMonkey](/img/Datasource/image-20250511-104259.png)
    
| Field | Description |
|---|---|
| **Connection Name** | Enter a unique name for the connection. |
| **Access Token** | Specify the SurveyMonkey access token. |
| **Start Date** | Enter the date in the MM-DD-YYYY format. DataGOL will replicate the data updated on and after this date. If this field is blank, DataGOL will replicate the data for last two years. |
| **Origin datacenter of the SurveyMonkey account** | Depending on the originating datacenter of the SurveyMonkey account, the API access URL may be different. |

4.  Click **Submit**. 

### Adding Cvent as datasource

:::info **Prerequisite for adding Cvent**
:::info **Prerequisite for adding Cvent**

The following connector information is required from the client:

-   Client ID
    
-   Client Secret
    

Do the following:

1.  Login to your [Cvent account](https://www.cvent.com/ "https://www.cvent.com") and go to **Abstracts** > **Users** > **Login**.
    
2.  Access the Cvent Developer Portal:
    
    -   Visit Cvent’s **Developer Portal**. You can typically access it by searching for "Cvent Developer Portal" or by navigating directly to [developer.cvent.com](http://developer.cvent.com/ "http://developer.cvent.com/").
        
3.  Create a New Application:
    
    -   Once you are logged into the Developer Portal, look for an option to create a new application.
        
    -   You'll need to provide some details about your application, such as:
        
        -   Name of the application.
            
        -   Description of the application.
            
        -   Redirect URL (if applicable).
            
4.  Get Your Client ID and Client Secret:
    
    -   After registering your application, you will be provided with:
        
        -   **Client ID**: A unique identifier for your application.
            
        -   **Client Secret**: A secret key that is used for securely authenticating API requests on behalf of your app.
:::
            
:::
            
1.  From the left navigation panel, click **Lakehouse** and then click **Datasource**.
    
2.  From the upper right corner of the page, click the **+ New Database** button to start the process of adding a new database.
    
3.  Specify the following details to add Cvent and then click **Submit**. Once you have connected a data source, the system immediately fetches its schema. After this schema retrieval process is complete you can browse and interact with the tables and data.
    
   ![Add_Cvent](/img/Datasource/image-20250511-111305.png)  

| Field | Description |
|---|---|
| **Connection Name** | Enter a unique name for the connection. |
| **Client ID** | A unique identifier for your application. |
| **Client secret** | A secret key that is used for securely authenticating API requests on behalf of your app. |
| **Start Date** | Enter the date in the MM-DD-YYYY format. DataGOL will replicate the data updated on and after this date. If this field is blank, DataGOL will replicate the data for last two years. |
    
### Adding SFTP Bulk as datasource

:::info **Prerequisite for adding SFTP Bulk**
:::info **Prerequisite for adding SFTP Bulk**

The following connector information is required from the client:

-   Username
    
-   Password
    
-   Host
    
-   Port
    
-   File Type
    
-   Stream Name
    
-   Folder Path
    
-   CSV Separator
    
-   Start Date
    

Do the following:

1.  Login to a SFTP server using your credentials.
    
2.  Create a folder in the server and drop your files there.
    

1.  From the left navigation panel, click **Lakehouse** and then click **Datasource**.
    
2.  From the upper right corner of the page, click the **+ New Database** button to start the process of adding a new database.
    
3.  Specify the following details to add SFTP Bulk and then click **Submit**. Once you have connected a data source, the system immediately fetches its schema. After this schema retrieval process is complete you can browse and interact with the tables and data.
    
   ![Add_SFTP_Hulk](/img/Datasource/image-20250511-111209.png)

| Field | Description |
|---|---|
| **Connection Name** | Enter a unique name for the connection. |
| **File Type** | Currently, only CSV files are supported. |
| **Username / Password** | Specify the client credentials. |
| **Host Address** | Specify the SFTP server address. |
| **Port** | Specify the port number of the SFTP server. |
| **Stream Name** | Enter name of the output table you want to create. Specify the desired name for the data stream (table) in the destination warehouse. This can be any name and is independent of the actual CSV file names. Sync modes (incremental/full refresh) are configured at the _stream_ level, not at the pipeline level. |
| **Folder Path** | Provide the absolute path to the folder on the SFTP server containing the CSV files (e.g., `/home/Ubuntu/SFTP/credit`). Ensure this path is accurate. |
| **Start Date** | Specify the date from which to begin replicating data. This allows for historical data selection. |
| **CSV separator** | Specify the delimiter used in the CSV files (comma is the default). Other separators like spaces can also be configured. |
4.  Click **Submit**. 
    
### Adding SAP HANA as datasource

1.  From the left navigation panel, click **Lakehouse** and then click **Datasource**.
    
2.  From the upper right corner of the page, click the **+ New Database** button to start the process of adding a new database.
    
3.  Specify the following details to add SAP HANA and then click **Submit**. Once you have connected a data source, the system immediately fetches its schema. After this schema retrieval process is complete you can browse and interact with the tables and data.
    
    ![Add_SAP_HANA](/img/Datasource/image-20250511-110627.png) 

| Field | Description |
|---|---|
| **Connection Name** | Enter a unique name for the connection. |
| **Database Name** | Specify the name of the existing data that you want to connect. |
| **Schema Name** | Specify the schema name. |
| **Hostname** | Provide the hostname of the server where the database resides. |
| **Port** | Specify the port number used by the database server. |
| **Username/Password** | Specify the credentials to access the server. |
    
### Adding Azure File as datasource

1.  From the left navigation panel, click **Lakehouse** and then click **Datasource**.
    
2.  From the upper right corner of the page, click the **+ New Database** button to start the process of adding a new database.
    
3.  Specify the following details to add Azure File and then click **Submit**. Once you have connected a data source, the system immediately fetches its schema. After this schema retrieval process is complete you can browse and interact with the tables and data.
    
    ![Add_SAP_HANA](/img/Datasource/image-20250511-110915.png)  

| Field | Description |
|---|---|
| **Connection name** | Enter a unique name for the connection. |
| **File Format** | Specify any of the following file formats: **CSV** **Parquet** **JSON** |
| **Path to Azure container** | Path of the Azure Blob where the files exist. For example: [containername@storageaccountname.dfs.core.windows.net](mailto:containername@storageaccountname.dfs.core.windows.net)/path |
| **Separator** | Specify the separator character to separate the data. For example: “,” |
| **Header** | Toggle to indicate if the first row of your CSV contains column headers. |
| **Infer Schema** | Toggle to automatically determine the data type of each column in your data. |
| **Multiline** | Toggle to format the JSON output across multiple lines. |
| **Compression** | Select the file compression mode. |
| **Start date** | Enter the date in the MM-DD-YYYY format. DataGOL will replicate the data updated on and after this date. If this field is blank, DataGOL will replicate the data for last two years. |

### **Viewing the created data source**

1.  From the DataGOL **Home** page, left navigation panel, select **Lakehouse** > **Datasource**.
    
    Open image-20250507-094141.png
    
    ![image-20250507-094141.png](blob:https://saasxl.atlassian.net/7937daf0-3b4e-4bac-abfe-a5d377d6d329)
    
2.  Select the provider that you chose during the setup and then the click the newly created datasources from the list. The following tabs are shown in the corresponding datasource page.
    
    1.  **Summary**  
        The **Summary** tab serves as a central point for managing your added data source. Here, you can:
        
        -   **Describe:** Add or modify a description for the data source for easy identification and context.
            
        -   **Configure:** Edit the initial settings you established when adding the datasource.
            
        -   **Trace:** View the data lineage to understand the datasource's origins and transformations. Refer to [Data source lineage](https://saasxl.atlassian.net/wiki/spaces/documentation/pages/220692503/DataGOL+Documentation#Data-Source-Lineage "https://saasxl.atlassian.net/wiki/spaces/documentation/pages/220692503/DataGOL+Documentation#Data-Source-Lineage")
            
        
        Open image-20250507-101452.png
        
        ![image-20250507-101452.png](blob:https://saasxl.atlassian.net/a1e6faab-5226-4d40-a8d0-02e12e39e1c8)
        
    2.  **Tables**: The **Tables** tab provides a comprehensive view of the tables within your chosen datasource. Here's what you can do:
        
        -   **Browse tables:** See a list of all tables in the datasource.
            
        -   **Access table information:** Click on a table name to open the Table Info page, where you can find:
            
            -   **Qualified name:** The full, unique identifier of the table.
                
            -   **Partition details:** Information about how the table is partitioned, if applicable.
                
            -   **Column details:** A breakdown of each column, including its name and data type.
                
            -   **Column count:** The total number of columns in the table.
                
            -   **Creation timestamp:** The date and time the table was created.
                
            -   **Owner:** The user or role that owns the table.
                
        -   **Utilize more options:** Click the more options icon for a specific table to:
            
            -   **View table info:** Directly access the detailed information page for that table.
                
            -   **Copy link:** Obtain a shareable link to the table for easy referencing.
                
        
        Open image-20250511-122810.png
        
        ![image-20250511-122810.png](blob:https://saasxl.atlassian.net/16d02648-f075-4812-83a1-f4cca48411a6)
        
    3.  **ER diagram:** An ER diagram visually maps out a database's table structure, showing individual tables and how they relate to one another. This provides a clear and concise model of data organization and connections within the system.  
          
        
        Open image-20250511-123907.png
        
        ![image-20250511-123907.png](blob:https://saasxl.atlassian.net/39ad3273-5bd9-4c9d-a3c8-aae812feeb9c)
        
          
        Clicking a table in the ER diagram reveals its detailed structure. Additionally, selecting the table name link provides further in-depth information about that specific table
        
    4.  **Schema changes:** The **Schema Changes** tab tracks modifications to the database structure, detailing additions like new tables and their timestamps. Clicking **View Details** shows comprehensive change information and a corresponding ER diagram, if available. Use **Mark as Verified** to confirm these changes.
        
        Open image-20250511-124514.png
        
        ![image-20250511-124514.png](blob:https://saasxl.atlassian.net/490f6c86-1abf-47ae-ad26-d2ae12a62079)
        
    5.  **Table Info**: Clicking a table link on the Summary tab opens the Table Info page, which displays the table's overview. From here, you can also navigate directly to the table's data source details. This page allows you to edit the table's name and description, select a classification, and even delete the table.
        
    6.  **Column Info**: On the **Tables** tab, clicking a table link navigates you to the **Column Info** tab, displaying column metadata and editable settings.  
        You can classify individual columns by clicking the edit icon in the Classifications column. Similarly, edit icons in the Description column allow you to provide descriptions for each column.  
        Additionally, the **AI Generate** button can be used to automatically generate column metadata. Refer to [Generating the column metadata catalog with AI](https://saasxl.atlassian.net/wiki/spaces/documentation/pages/220692503/DataGOL+Documentation#Generating-the-column-metadata-catalog-with-AI "https://saasxl.atlassian.net/wiki/spaces/documentation/pages/220692503/DataGOL+Documentation#Generating-the-column-metadata-catalog-with-AI")
        
    7.  **Data**: The **Data** tab offers a glimpse into your table's contents, showcasing the first 100 rows for immediate review.
        

### Generating the column metadata catalog with AI

1.  Navigate to the data source page for which you want to AI generate the metadata catalog.
    
2.  Go to the **Tables** tab and click the link of the specific table you wish to catalog.  
      
    
    Open image-20250507-103150.png
    
    ![image-20250507-103150.png](blob:https://saasxl.atlassian.net/84827db9-c31a-4feb-b56d-e4921adc3462)
    
3.  In the **Table Info** page, click the **Column** **info** tab.
    
4.  Click the **AI generate** button. The AI will then generate the metadata catalog for the selected table.
    
    Open image-20250507-104429.png
    
    ![image-20250507-104429.png](blob:https://saasxl.atlassian.net/e99f70fe-d98e-438d-979a-081095acff84)
    

### Designating a partition column

1.  Navigate to the data source page for which you want to AI generate the metadata catalog.
    
2.  Go to the **Tables** tab and click the link of the specific table you wish to catalog.
    
3.  In the **Table Info** page, click the **Column** **info** tab.
    
4.  From the extreme right click the more options icon corresponding to a column and select the **Make partition column** option. This option is available only for columns with following data types: **int**, **bigint**, **timestamp**, **long,** and **date**.
    
    Open image-20250511-132102.png
    
    ![image-20250511-132102.png](blob:https://saasxl.atlassian.net/1ac819ff-64a9-4ab6-9f76-0466fca78539)
    
5.  In the **Partition Column Settings** box, select the Enable checkbox. You can also click **Advance Settings** and specify the partition size.
    
    Open image-20250511-134329.png
    
    ![image-20250511-134329.png](blob:https://saasxl.atlassian.net/fc8477e8-99e0-4522-9374-5dc7f3e9bdf1)
    
    The column that is specified as the partition column is ticked in the listed.
    
    Open image-20250511-134600.png
    
    ![image-20250511-134600.png](blob:https://saasxl.atlassian.net/6f7e373a-fb2e-4160-a835-b5200c35b57b)
    

The designated column will be used as the partition column by Apache Spark while processing datasets. Only a single column can be used as a Partition Column. (This setting is available only for RDBMS datasources). The default partition size is 50K.

A warning is displayed if you attempt to change the partition column since this action can impact the pipeline and retrieval efficiency.

Open image-20250511-134755.png

![image-20250511-134755.png](blob:https://saasxl.atlassian.net/89ab2a25-b2bb-44af-80c1-aa1516496db5)

### Managing Data Sources

-   Data sources can be sorted by creation date, displaying either the latest or oldest entries.
    
    Open image-20250511-141933.png
    
    ![image-20250511-141933.png](blob:https://saasxl.atlassian.net/ed1dc27d-7d92-40f6-8a9f-39c2c914a2fa)
    
-   Data sources can be filtered according to the provider (e.g., MySQL) and the owner.
    
    Open image-20250511-142432.png
    
    ![image-20250511-142432.png](blob:https://saasxl.atlassian.net/4489b5ef-416a-41da-bdf8-db37346ea2dc)
    
-   Data sources can be displayed in either a list view or a box view, according to user preference.
    
    Open image-20250511-142552.png
    
    ![image-20250511-142552.png](blob:https://saasxl.atlassian.net/e3b9e52f-ce30-4e2b-b149-d2bf62f7e680)
    
-   A specific data source can be located by entering the initial characters of its name into a search function.
    
    Open image-20250511-143153.png
    
    ![image-20250511-143153.png](blob:https://saasxl.atlassian.net/ecc04db6-0d75-4266-ac71-6480248b81f2)
    
-   Within the box view, the schema for a data source can be fetched/updated by clicking the **sync now** icon.
    
    Open image-20250511-142929.png
    
    ![image-20250511-142929.png](blob:https://saasxl.atlassian.net/c4b072a8-0402-47f5-a1a0-b2d3c7e2861b)
    
-   The more options icon in the box view provides access to functionalities such as editing data source settings, viewing data lineage, and deleting the data source.
    
    Open image-20250511-143112.png
    
    ![image-20250511-143112.png](blob:https://saasxl.atlassian.net/54098028-28b4-42f2-947c-b6d3d51963bc)
