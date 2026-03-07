
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
                    <span class="bg-red-100 text-red-500 text-sm font-semibold px-3 py-1 rounded-full">HIGH</span>
                </div>

                <!-- title and description -->
                <h3 class="font-bold text-lg mb-1">Fix Navigation Menu On Mobile Devices</h3>
                <p class="paragraph text-sm mb-3">The navigation menu doesn't collapse properly on mobile devices...
                </p>

                <!-- labels -->
                <div class="flex flex-wrap gap-2 mb-3">
                    <span class="bg-red-100 text-red-500 text-sm px-3 font-semibold py-1 rounded-full flex items-center gap-1">
                        <i class="fa-solid fa-bug"></i> BUG
                    </span>
                    <span class="bg-yellow-100 text-yellow-500 font-semibold text-sm px-2 py-1 rounded-full flex items-center gap-1">
                       
                      <i class="fa-solid fa-handshake-angle"></i> HELP WANTED
                    </span>
                </div>

                <hr class="border-gray-200 mb-3">

                <!-- footer -->
                <div class="text-gray-400 text-sm">
                    <p>#1 by john_doe</p>
                    <p>1/15/2024</p>
                </div>

            </div>
        `;

        cardContainer.append(card)

    });



}







loadAllIssue()