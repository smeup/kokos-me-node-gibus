# Example converted rules

The already converted rules.
Every .tsv is a file containing the rules to convert and achieved by extracting them from `GIBUS_RULES` table.

## onerules.tsv
- [onerule.tsv](./onerule.tsv) - The file containing the rules to convert
Contain only one rule to convert

## rules.tsv 
- [rules.tsv](./rules.tsv) - ACCESSORI e FT_GRO_INF_T01 

```sql
select trim(COMP) AS COMP, PRGR, trim(REGO) as REGO, trim(IF_TRUE) as IF_TRUE, trim(IF_FALSE) as IF_FALSE 
from W_SMMB.GIBUS_RULES 
where ASSI in ('ACCESSORI' , 'FT_GRO_INF_T01')
order by COMP, PRGR; 
```

## rules_2.tsv 
- [rules_2.tsv](./rules_2.tsv) - Fwd: Richiesta assiemi e configurazioni per Kokos 1 feb 2024, 09:20

```sql
select trim(COMP) AS COMP, PRGR, trim(REGO) as REGO, trim(IF_TRUE) as IF_TRUE, trim(IF_FALSE) as IF_FALSE 
from W_SMMB.GIBUS_RULES 
where ASSI in (
    'AC0089', 'AC0098', 'AC0100', 'AC0104', 'AC0107', 'AC0108', 'AC0109', 'AC0111', 'AC0115', 'AC0131', 
    'CP0002', 'GS0024', 'GS0035', 'GS0036', 'GS0038', 'GS0042', 'GS0047', 'GS0048', 'GS0050', 'GS0059', 
    'GS0070', 'GS0084', 'GS0091', 'TS0058', 'TS0070', 'TS0078', 'TS0092', 'TS0098', 'TS0113', 'TS0121'
)
order by COMP, PRGR;
```
