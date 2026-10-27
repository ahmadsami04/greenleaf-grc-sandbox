GreenLeaf Microfinance | ISO 27001 GRC Sandbox

Project Overview

GreenLeaf Microfinance is a fictional training environment developed to support an educational ISO/IEC 27001:2022 gap assessment.

The project demonstrates a simple Node.js/Express application, Docker containerization, assessment scoping, and mock authorization documentation.

Disclaimer: This project uses fictional data only. It is not a real financial application or a production-ready authentication system.

Technologies Used

- Node.js 24
- Express
- Docker Desktop and Docker Compose
- Git and GitHub
- LibreOffice Writer

Application Endpoints

Endpoint| Description
"/login"| Demonstration login page; authentication is intentionally disabled
"/borrowers"| Displays fictional borrower records
"/health"| Application health-check endpoint

The borrower endpoint is intentionally public in this educational sandbox. It must not be used to store or expose real customer information.

Running Locally

Install Node.js and npm, then run:

npm ci
node server.js

Open "http://localhost:3000/login".

Running with Docker

Install Docker Desktop, then run:

docker compose up --build -d

Open "http://localhost:3001/login".

**Port Configuration:** The Node.js application runs on port 3000 inside the container. Docker Compose maps port 3001 on the host computer to port 3000 in the container (`3001:3000`). Therefore, use `localhost:3000` when running Node.js directly and `localhost:3001` when running through Docker Compose.

To stop the container:

docker compose down

Assessment Documentation

- "GreenLeaf_Assessment_Scope.pdf": One-page assessment scope, objectives, assets, boundaries, and sign-off placeholder.
- "AUTH.txt": Fictional authorization and permitted testing activities.
- `Policy_Inventory.pdf`: Inventory of six external security policy templates mapped to relevant ISO/IEC 27001:2022 Annex A controls.
- `Control_Mapping.xlsx`: Mapping of all 93 Annex A controls, including policy references, evidence and gap notes, recommended actions, and implementation assessment statuses.

- [Risk_Register.csv](Risk_Register.csv): Risk register containing 10 distinct risk scenarios, likelihood and impact scores, risk levels, treatment decisions, and supporting evidence notes.
- [Methodology.md](Methodology.md): Risk assessment methodology explaining the 1–5 scoring scales, risk matrix, treatments, sources, and assessment limitations.

### Task 3 Risk Assessment Summary

The fictional GreenLeaf assessment identifies 10 risks: 5 High and 5 Medium.

Risk Score = Likelihood × Impact.

The scores are educational estimates. Some risks reflect observed sandbox behavior, while others describe hypothetical scenarios involving future use with real customer information.

**Assessment Status:** This fictional ISO/IEC 27001:2022 assessment classifies all 93 Annex A controls using Implemented, Partial, or Not Implemented. Classifications are based on available sandbox evidence and external reference-policy coverage. Eleven controls are classified as Partial and 82 as Not Implemented; none are verified as fully Implemented. These ratings represent a training simulation and do not establish compliance or actual security deficiencies at a real financial institution.

Assessment Limitations

This is a controlled educational demonstration. It does not establish ISO 27001 certification or demonstrate compliance with all ISMS requirements. No real customer data, credentials, or production infrastructure should be used.

## Deployment

The GreenLeaf Microfinance sandbox is deployed on Render's free web service.

**Live Application:** https://greenleaf-grc-sandbox.onrender.com/login

**Fictional Borrower API:** https://greenleaf-grc-sandbox.onrender.com/borrowers

**Health Check:** https://greenleaf-grc-sandbox.onrender.com/health

### Deployment Configuration

- Hosting provider: Render
- Runtime: Node.js
- Branch: main
- Build command: `npm ci`
- Start command: `node server.js`
- Instance type: Free

### Verification

The public login page, fictional borrower endpoint, and health-check endpoint were manually tested successfully.

**Note:** The login form is a nonfunctional demonstration, and all borrower records are fictional.

## Task 4: ISO 27001 Gap Analysis and Remediation

The fictional GreenLeaf Microfinance assessment covers all 93 ISO/IEC 27001:2022 Annex A controls.

### Deliverables

- [Final Gap Analysis Report](Gap_Analysis_Report_Final.pdf)
- [Corrected Remediation Workbook](Gap_Analysis_Working.xlsx)
- [Risk Register](Risk_Register.csv)
- [Risk Assessment Methodology](Methodology.md)

### Assessment Results

| Priority     | Controls |
| ------------ | -------: |
| High         |        8 |
| Medium       |        8 |
| Low          |        0 |
| Needs Review |       77 |
| **Total**    |   **93** |

The remediation workbook contains proposed corrective actions, responsible roles, target dates, and linked risk IDs.

This assessment is an educational simulation. It does not constitute an ISO 27001 certification audit or establish actual compliance.

## Task 5: Security Policies and Evidence Collection

This task establishes proposed security policies and an evidence-collection checklist for the fictional GreenLeaf Microfinance environment.

### Deliverables

- [Access Control Policy](Access_Control_Policy.pdf)
- [Incident Response Policy](Incident_Response_Policy.pdf)
- [Evidence Collection Checklist](Evidence_Checklist.xlsx)

### Key Improvements

- Defined access-control responsibilities and least-privilege requirements.
- Added a proposed GreenLeaf Role Matrix and quarterly access-review requirements.
- Established incident classification, escalation, containment, recovery, and evidence-preservation procedures.
- Mapped policy requirements to specific audit evidence, responsible roles, and collection statuses.
- Linked the policies to remediation actions identified in Task 4.

### Assessment Limitations

These documents are educational drafts for a fictional environment. The policies are not formally approved, and the evidence checklist does not establish that operational controls have been implemented or verified.
