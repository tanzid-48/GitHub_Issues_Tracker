
const loadAllIssue = () => {
    const url = "https://phi-lab-server.vercel.app/api/v1/lab/issues";
    fetch(url)
        .then(res => res.json())
        .then(json => {
            displayAllIssue(json.data)

        })

}
const displayAllIssue = (issues) => {
    const cardContainer = document.getElementById('card-container');
    cardContainer.innerHTML = "";

    issues.forEach(issue => {
        const card = document.createElement("div");
        card.className = "bg-white  border-t-green-500 border-t-4 rounded-xl shadow-md p-4 border border-gray-100";
        card.innerHTML = `
                <div class="flex justify-between items-center mb-3">
                    <div class=""> <img class="w-8 h-8" src="./assets/Open-Status.png" alt=""></div>
                    <span class="bg-red-100 text-red-500 text-sm font-semibold px-3 py-1 rounded-full">${issue.priority}</span>
                </div>

                <!-- title and description -->
                <h3 class="font-bold text-lg mb-1">${issue.title}</h3>
                <p class="paragraph text-sm mb-3">${issue.description}
                </p>

               
            <!-- labels -->
            <div class="flex gap-2 mb-3">
                ${issue.labels
                    .map(
                        label =>
                            `<span class="bg-red-100   text-xs font-semibold px-2 py-1 rounded">${label}</span>`
                    )
                    .join("")}
            </div>


                <hr class="border-gray-200 mb-3">

                <!-- footer -->
     
 <div class=" space-y- text-xs paragraph">
                <span>#${issue.id} by ${issue.author}</span>
                <p>${issue.createdAt}</p>
            </div>
         
        `;

        cardContainer.appendChild(card)

    });



}

loadAllIssue()