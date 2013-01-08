

## Update Rules

- When there is no GROUP BY clause, the output table must have the primary key(s) of the input table(s) as its
  primary key
- When there is a GROUP BY clause, the GROUP BY columns become the primary key of the output table
- When a row is inserted/updated/deleted from an input table, the affected columns of the output table
  can be determined by looking at how input rows match to the output primary key (either PK on GROUP BY)
  and recalculating all rows in the output table matching that primary key.
- It may be possible to ignore updates that don't change columns not used in the query
- For UPDATE operations where the PK fields are affected, both the old and new output rows have to be
  refreshed.

##

Examples

CREATE TABLE foo(id INT PK, a VARCHAR, b INT)
CREATE TABLE bar AS SELECT a,b FROM foo

=>

CREATE TABLE bar(id INT PK, a VARCHAR, b INT)
ON INSERT foo

## Links

 - http://tech.jonathangardner.net/wiki/PostgreSQL/Materialized_Views - Example of doing materialized views manually
 - http://code.google.com/p/flexviews/ - MySQL add-on to do materialized views
