fetch("data/data.json")
    .then(response => response.json())
    .then(data => {
        const app = document.getElementById("app");

        app.innerHTML = ""; // clear old text

        data.forEach(item => {
            const div = document.createElement("div");

            div.innerHTML = `
        <h3>${item.name}</h3>
        <p>Price: $${item.price}</p>
      `;

            app.appendChild(div);
        });
    });