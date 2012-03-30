---
layout: post
title: PostgreSQL HTTP API Draft
---

The benefit of an HTTP API would be easier access via tools that don't support the PostgreSQL protocol,
such as curl, web browsers, new programming languages, etc..

## URLs

### '/databases/:database_name'

URL for a database entity

GET with Accept returns a dump of the database.  Query parameters:


### '/databases/:database_name/query'

RPC endpoint for SQL queries on this database.  POST SQL, get a response in a format according to the Accept
header.  Uses the default schema for the database, or can change schemas in the SQL.

### '/databases/:database_name/schemas/:schema_name'

URL for a schema

GET returns the DDL schema definition of the schema

### '/databases/:database_name/schemas/:schema_name/query'

RPC endpoint for SQL queries on this schema in this database.  POST SQL and get a response in a format according to
the Accept header.

### '/databases/:database_name/schemas/:schema_name/tables/:table_name'

URL for a table

GET returns the DDL for the table (and optionally indexes if query parameter
PUT to provide a new DDL

### '/databases/:database_name/schemas/:schema_name/table/:table_name/indexes/:index_name'

URL for an index

GET returns the DDL schema definition of the table

### '/databases/:database_name/schemas/:schema_name/tables/:table_name/rows'

URL for rows in the table.

GET constructs an SQL SELECT using the query parameters and the URL and returns the result.  Query parameters:

* cols - SELECT column list
* where - Specify conditions
* group_by - Specify grouping
* order_by - Specify ordering

POST constructs an SQL INSERT or COPY using the row data in the body, based on the Content-Type.  When Content-Type
is sql, use INSERT.  If the Content-Type is csv or text use COPY semantics.

DELETE constructs an SQL DELETE using the query parameter where (same as for GET above).

#### '/databases/:database_name/schemas/:schema_name/tables/:table_name/row' (?)

Variation on rows above, where if the number of rows fetched, inserted, or deleted != 1 it returns an error and rolls
back any changes that might have been made.

### '/logins'

GET: List of login roles
POST: Add a new login role

### '/logins/:name'

* GET: Get information about a single login role
* PUT: Update a login role
* DELETE: Remove a login role

### '/groups'

* GET: List of group roles
* POST: Create a new group role

### '/groups/:name'

* GET: Information about this group role
* PUT: Update this group role
* DELETE: Remove this role

## Data Formats

The HTTP server should consider supporting XML, JSON, and SQL output formats.  It determines the output
format to use based on the "Accept" header of an HTTP request, or optionally the URI extension.  It determines
the format of the input based on the "Content-Type" header of an HTTP request, or optionally the filename
extension in the Content-Disposition header.


### SQL

SQL output should match what you see in a pg_dump.  TODO: Examples

### XML

To be designed...

### JSON

To be designed...

### SQL MIME Types

There is currently no registered mime type for SQL source code.  MIME types that look SQL-ish should be treated
as application/vnd.postgresql.sql, including but not limited to:

* application/sql
* text/sql
* application/x-sql
* text/x-sql

### Versioning

The fields defined for the PostgreSQL data model might change over time.  The mime-type can contain the
version of the schema which should be tied to the release of PostgreSQL.  For example:

Accept: application/vnd.postgresql.login-role+json;version=9.3

Means the client only wants to receive a json response compatible with the data model of PG 9.3.

### File Extensions

Applying a suffix to a URI such as .sql, .csv, or .html overrides the provided Accept: header(s) (if any) with
a matching content type for that suffix.  When the Content-Type is text/plain or application/octet-stream then
we will look at the file extension of the filename in the Content-Disposition header, if any, and override
the Content-Type based on that.

* .sql -> application/vnd.postgresql.sql
* .csv -> text/csv
* .html -> text/html


## Some features to think about

* Ability to put EXPLAIN ANALYZE and other timing/performance information in a query response
* SPDY protocol support (possibly without encryption / compression if we have a fat / secure pipe)
* Partition IDs (possibly specifying a cluster node or partition in the request)
* Virtual Hosts (direct request to a completely different DB server based on Host header)
