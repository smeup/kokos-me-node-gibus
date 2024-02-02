# Example converted rules

The already converted rules.
Every .tsv is a file containing the rules to convert and achieved by extracting them from `GIBUS_RULES` table.

## rules.tsv
- [rules.tsv](./rules.tsv) - The file containing the rules to convert

```sql
select trim(COMP) AS COMP, PRGR, trim(REGO) as REGO, trim(IF_TRUE) as IF_TRUE, trim(IF_FALSE) as IF_FALSE 
from GIBUS_RULES 
where ASSI in ('ACCESSORI' , 'FT_GRO_INF_T01')
order by COMP, PRGR; 
```