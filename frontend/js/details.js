// Extract the CVE ID from the query parameter in the URL
const urlParams = new URLSearchParams(window.location.search);
const cveId = urlParams.get("id"); // 'id' is the query parameter name

const container = document.getElementById("cveDetailsContainer");

// Function to fetch and display CVE details
async function fetchCveDetails() {
  if (!cveId) {
    container.innerHTML = "<p>Error: No CVE ID provided!</p>";
    return;
  }

  try {
    const response = await fetch(`http://localhost:3000/api/cves/${cveId}`);
    if (!response.ok) {
      throw new Error("CVE details not found");
    }

    const cve = await response.json();

    // Render the CVE details
    container.innerHTML = `
      <h2>CVE ID: ${cve.cve_id}</h2>
      <p><strong>Description:</strong> ${cve.description || "N/A"}</p>
      <p><strong>Base Score:</strong> ${cve.base_score || "N/A"}</p>
      <p><strong>Published Date:</strong> ${cve.published_date}</p>
      <p><strong>Last Modified Date:</strong> ${cve.last_modified_date}</p>
    `;
  } catch (error) {
    console.error("Error fetching CVE details:", error.message);
    container.innerHTML = `<p>Error: Unable to fetch CVE details. ${error.message}</p>`;
  }
}

// Fetch the CVE details when the page loads
fetchCveDetails();
