fetch("data/data.json")
    .then(response => response.json())
    .then(data => {
        const app = document.getElementById("app");

        data.forEach(item => {
            const div = document.createElement("div");

            div.innerHTML = `
        <h3>${item.name}</h3>
        <p>Price: $${item.price}</p>
        <hr/>
      `;

            app.appendChild(div);
        });
    });