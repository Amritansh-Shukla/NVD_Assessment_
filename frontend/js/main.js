fetch("http://localhost:3000/api/cves/list?limit=10")
  .then((response) => response.json())
  .then((data) => {
    const table = document.getElementById("cveTable");
    data.data.forEach((cve) => {
      table.innerHTML += `
        <tr>
          <td>${cve.cve_id}</td>
          <td>${cve.description}</td>
          <td>${cve.base_score}</td>
        </tr>`;
    });
  })
  .catch((err) => console.error("Error fetching CVE data:", err));
