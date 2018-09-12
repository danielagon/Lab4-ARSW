
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

var orders = [];

function addOrder(){
    var order = {"orderAmountsMap":{"HAMBURGER":4,"COKE":4},"tableNumber":2};

    axios.post('/orders',order)
        .then(function(){
            console.log("Aggregate order");
        })    
        .catch(function(error){
            console.log(error);
            alert("There is a problem with our servers. We apologize for the inconvince, please try again later");
        });
        window.location.reload();
}
        
function loadOrders(){
    
    axios.get('/orders')
        .then(function (response){
            orders = response.data;
    
            for (j in orders){
    
                var dvTable = document.getElementById("Tables");

                var header = new Array();
                    header.push("Product");
                    header.push("Quantity");
                    header.push("Price");

                var table = document.createElement("table");
                table.border = "1";
                table.setAttribute("id","Table"+j);

                var column = 3;
                var row = table.insertRow(-1);
                var headerTable = document.createElement("th");
                headerTable.setAttribute("colspan","3");
                headerTable.innerHTML = "Order "+j;
                row.appendChild(headerTable);

                var row = table.insertRow(-1);
                for (var i=0;i<column;i++){
                    var headerCell = document.createElement("th");
                    headerCell.innerHTML = header[i];
                    row.appendChild(headerCell);
                }

                for (var i=0;i<Object.keys(orders[j].orderAmountsMap).length;i++){
                    row = table.insertRow(-1);
                    var cell = row.insertCell(-1);
                    cell.innerHTML = Object.keys(orders[j].orderAmountsMap)[i];
                    var cell = row.insertCell(-1);
                    cell.innerHTML = orders[j].orderAmountsMap[Object.keys(orders[j].orderAmountsMap)[i]];
                    /*
                    var cell = row.insertCell(-1);
                    cell.innerHTML = orders.products[i].price;*/
                }

                dvTable.appendChild(document.createElement("br"));
                dvTable.appendChild(table);
            }
        })
        .catch(function (error){
            console.log(error);
            alert("There is a problem with our servers. We apologize for the inconvince, please try again later");
        });
}

function removeOrderById(id){
    axios.delete('/orders',id)
        .then(function (){
            document.getElementById("Table"+id).remove();
        })
        .catch(function(error){
            console.log(error);
            alert("There is a problem with our servers. We apologize for the inconvince, please try again later");
        });
}

