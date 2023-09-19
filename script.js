const getSumBtn = document.createElement("button");
const table = document.querySelector(".table");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
	let sum = 0;
	const price = document.querySelectorAll(".price");
	for(let i =0;i<price.length;i++){
		const val = Number(price[i].innerText);
		sum += val;
	}
    console.log(sum);
	const row = document.createElement("tr");
	const col1 = document.createElement("td");
	const col2 = document.createElement("td");
	col2.innerText = sum;
	row.append(col1,col2);
	table.append(row);
	
//Add your code here
  
};

getSumBtn.addEventListener("click", getSum);

