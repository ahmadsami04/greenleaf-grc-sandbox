const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

// All records below are fictional demonstration data.
const borrowers = [
  {
    id: "GL-001",
    name: "Demo Borrower A",
    loanAmount: 25000,
    status: "Active",
  },
  {
    id: "GL-002",
    name: "Demo Borrower B",
    loanAmount: 15000,
    status: "Pending",
  },
];

app.get("/", (req, res) => {
  res.redirect("/login");
});

app.get("/login", (req, res) => {
  res.type("html").send(`
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>GreenLeaf Microfinance | Sandbox</title>
      </head>
      <body style="font-family: Arial, sans-serif; max-width: 650px; margin: 60px auto; padding: 20px;">
        <h1>GreenLeaf Microfinance</h1>
        <h2>Sandbox Login</h2>
        <p>This is a fictional application for an ISO 27001 gap assessment.</p>
        <form>
          <label>Username: <input type="text" autocomplete="off"></label>
          <br><br>
          <label>Password: <input type="password" autocomplete="off"></label>
          <br><br>
          <button type="button" disabled>Demo Only</button>
        </form>
        <p><a href="/borrowers">View fictional borrower information</a></p>
        <p><strong>Notice:</strong> Do not enter real credentials or personal information.</p>
      </body>
    </html>
  `);
});

app.get("/borrowers", (req, res) => {
  res.json({
    environment: "sandbox",
    notice: "Fictional demonstration data only",
    borrowers,
  });
});

app.get("/health", (req, res) => {
  res.json({ status: "ok", environment: "sandbox" });
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`GreenLeaf sandbox running on port ${PORT}`);
});
