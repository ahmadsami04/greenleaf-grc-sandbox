# GreenLeaf Microfinance Risk Assessment Methodology

## 1. Purpose

This methodology describes how risks are identified, scored, and treated within the fictional GreenLeaf Microfinance sandbox.

## 2. Likelihood Scale

1 - Rare
2 - Unlikely
3 - Possible
4 - Likely
5 - Almost Certain

## 3. Impact Scale

1 - Negligible
2 - Minor
3 - Moderate
4 - Major
5 - Severe

## 4. Risk Calculation

Risk Score = Likelihood × Impact

## 5. Risk Classification

1–4: Low
5–9: Medium
10–16: High
17–25: Critical

## 6. Risk Treatment

Accept: Document and monitor an acceptable risk.
Mitigate: Reduce risk through security controls.
Avoid: Stop the activity causing the risk.
Transfer: Share certain consequences with another party.

## 7. Sources and Limitations

The risk assessment uses the following sources:

- GreenLeaf sandbox server.js for application routes, authentication behavior, and fictional borrower records.
- compose.yaml for Docker port configuration.
- Control_Mapping.xlsx for the ISO 27001:2022 Annex A control gaps documented in Task 2.
- OWASP Top 10 for general web application security risk guidance: https://owasp.org/www-project-top-ten/

Likelihood and impact scores are qualitative estimates using the 1–5 scales defined above. The risk classification thresholds are defined for this training project and are not prescribed by ISO 27001.

Risks based on observed sandbox behavior are distinguished from hypothetical risks involving future deployment with real customer information. No real borrower information or production systems were assessed.

Risk treatment decisions are recommendations for this simulation. Formal risk acceptance would require approval from an authorized risk owner.
