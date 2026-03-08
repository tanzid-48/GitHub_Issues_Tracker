let allIssues = [];
const allBtn = document.getElementById('all-btn');
const openBtn = document.getElementById('open-btn');
const closedBtn = document.getElementById('closed-btn');
const issuesCount = document.getElementById('issues')

const loadAllIssue = () => {
    const url = "https://phi-lab-server.vercel.app/api/v1/lab/issues";
    fetch(url)
        .then(res => res.json())
        .then(json => {
              allIssues = json.data; 
            displayAllIssue(allIssues);
            updateIssueCounts(allIssues); 

        });
}

const updateIssueCounts = (issues) => {
    const total = issues.length;
    const open = issues.filter(issue => issue.status === "open").length;
    const closed = issues.filter(issue => issue.status === "closed").length;

        issuesCount.innerText = `${total} issue`
};


const setActiveButton = (activeBtn) => {
    [allBtn, openBtn, closedBtn].forEach(btn => {
        btn.classList.remove('btn-primary');
        btn.classList.add('btn-ghost');
    });
    activeBtn.classList.add('btn-primary');
    activeBtn.classList.remove('btn-ghost');
};
allBtn.addEventListener('click', () => {
    displayAllIssue(allIssues);
    setActiveButton(allBtn);
    updateIssueCounts(allIssues); 
});
openBtn.addEventListener('click', () => {
    const openIssue = allIssues.filter(issue => issue.status === "open");
    displayAllIssue(openIssue);
    setActiveButton(openBtn);
    updateIssueCounts(openIssue); 
});
closedBtn.addEventListener('click', () => {
    const closedIssue = allIssues.filter(issue => issue.status === "closed");
    displayAllIssue(closedIssue);
    setActiveButton(closedBtn);
    updateIssueCounts(closedIssue); 
});

const displayAllIssue = (issues) => {
    const cardContainer = document.getElementById('card-container');
    cardContainer.innerHTML = "";

    issues.forEach(issue => {
        const statusIcon =
            issue.status === "open"
                ? '<i class="fa-solid fa-circle-check text-green-500 text-xl"></i>'
                : '<i class="fa-solid fa-circle-xmark text-red-500 text-xl"></i>';

        const priorityColor =
            issue.priority === "high"
                ? "bg-red-100 text-red-500"
                : issue.priority === "medium"
                    ? "bg-yellow-100 text-yellow-600"
                    : "bg-green-100 text-green-600";
    const borderColor = issue.status === "open" ? "border-t-green-500" : "border-t-purple-500";
  const card = document.createElement("div");
            card.className = `bg-white ${borderColor} border-t-4 rounded-xl shadow-md p-4 border border-gray-100`;
        card.innerHTML = `
<div class="flex justify-between items-center mb-3">
            <div>${statusIcon}</div>

            <span class="${priorityColor} text-sm font-semibold px-3 py-1 rounded-full">
                ${issue.priority}
            </span>
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

loadAllIssue();
setActiveButton(allBtn);