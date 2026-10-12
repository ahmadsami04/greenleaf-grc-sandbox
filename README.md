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

To stop the container:

docker compose down

Assessment Documentation

- "GreenLeaf_Assessment_Scope.pdf": One-page assessment scope, objectives, assets, boundaries, and sign-off placeholder.
- "AUTH.txt": Fictional authorization and permitted testing activities.

Assessment Limitations

This is a controlled educational demonstration. It does not establish ISO 27001 certification or demonstrate compliance with all ISMS requirements. No real customer data, credentials, or production infrastructure should be used.

Deployment

Cloud deployment instructions and the live demonstration URL will be added after deployment verification.
