
var order2 = {
	"order_id": 2,
	"table_id": 2,
	"products": [{
                    "product": "PIZZA",
                    "quantity": 2,
                    "price": "$10.000"
		},
		{
                    "product": "HOTDOG",
                    "quantity": 1,
                    "price": "$3.000"
		},
		{
                    "product":"COKE",
                    "quantity":4,
                    "price":"$1.300"
		}
	]
};

function addOrder(order){
    
        var header = new Array();
        header.push("Product");
        header.push("Quantity");
        header.push("Price");
        
	var table = document.createElement("Table");
        table.border = "1";
        table.setAttribute("id","Table"+order.table_id);
        
        var column = 3;
        var row = table.insertRow(-1);
        var headerTable = document.createElement("th");
        headerTable.setAttribute("colspan","3");
        headerTable.innerHTML = "Order "+order.table_id;
        row.appendChild(headerTable);
        
        var row = table.insertRow(-1);
        for (var i=0;i<column;i++){
            var headerCell = document.createElement("th");
            headerCell.innerHTML = header[i];
            row.appendChild(headerCell);
        }
        
        for (var i=0;i<order.products.length;i++){
            row = table.insertRow(-1);
            var cell = row.insertCell(-1);
            cell.innerHTML = order.products[i].product;
            var cell = row.insertCell(-1);
            cell.innerHTML = order.products[i].quantity;
            var cell = row.insertCell(-1);
            cell.innerHTML = order.products[i].price;
        }
        
        var dvTable = document.getElementById("dvTables");
        dvTable.appendChild(document.createElement("br"));
        dvTable.appendChild(table);
}
        
function loadOrders(){
    addOrder(order2);
    

}


