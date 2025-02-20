document.addEventListener("DOMContentLoaded", () => {
    const trendList = document.getElementById("trend-list");

    // Fetch trends from backend API
    fetch("http://localhost:5000/api/trends")
        .then(response => response.json())
        .then(data => {
            trendList.innerHTML = ""; // Clear loading text
            data.forEach(trend => {
                const trendItem = document.createElement("div");
                trendItem.classList.add("trend-item");
                trendItem.innerHTML = `
                    <h3>${trend.name}</h3>
                    <p>Popularity: ${trend.popularity}%</p>
                `;
                trendList.appendChild(trendItem);
            });
        })
        .catch(error => {
            trendList.innerHTML = "<p>Error loading trends.</p>";
            console.error("Error fetching trends:", error);
        });
});
