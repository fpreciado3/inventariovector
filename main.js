import Product from "./product.js";
import Order from "./order.js";

const products = new Order()
const btnAdd = document.getElementById("btnAdd");
const btnDelete = document.getElementById("btnDelete");
const btnSearch = document.getElementById("btnSearch");
const btnList = document.getElementById("btnList");
const btnListI = document.getElementById("btnListI");
const btnInsert = document.getElementById("btnInsert");

        btnAdd.addEventListener('click', () => {
            let inpCode = document.getElementById("code").value;
            let inpName = document.getElementById("name").value;
            let inpQuantity = document.getElementById("quantity").value;
            let inpCost = document.getElementById("cost").value;
            let product = new Product(inpCode, inpName, inpQuantity, inpCost);
            
            let table = document.querySelector("table");
            let row = table.insertRow(1);
            row.setAttribute("id", `row${product.getCode()}`);
            let colCode = row.insertCell(0);
            let colName = row.insertCell(1);
            let colQuantity = row.insertCell(2);
            let colCost = row.insertCell(3);
            let colTotal = row.insertCell(4);

            colCode.innerHTML = product.getCode();
            colName.innerHTML = product.getName();
            colQuantity.innerHTML = product.getQuantity();
            colCost.innerHTML = `$${product.getCost()}`
            colTotal.innerHTML = `$${product.getTotal()}`;

            products.add(product);
            console.log(products);

            document.querySelector('#tOrder').innerHTML = `$${products.getCompleteTotal()}`;
        }); 
        
        btnDelete.addEventListener('click', () => {
            let inpCode = document.getElementById("deleteCode").value;
            let row = document.querySelector(`#row${inpCode}`);
            row.remove();
           
            products.delete(inpCode);
            return console.log(products);
        });

        btnSearch.addEventListener('click', () => {
            let inpCode = document.getElementById("searchCode").value;
            let search = document.getElementById("search");
            let product = products.find(inpCode);

            if(product == null) {
                search.innerHTML = `¡Producto no encontrado!`;
            } else { 
                let name = product.getName();
                let quantity = product.getQuantity();
                let cost = product.getCost();
                let total = product.getTotal();
                
                search.innerHTML = `¡Producto encontrado! Código: ${inpCode} Nombre: ${name} Cantidad: ${quantity} Costo: $${cost} Total: $${total}`
            }
        });

        btnList.addEventListener('click', () => {
            let list = document.getElementById("list");

            list.innerHTML = products.list();
        })

        btnListI.addEventListener('click', () => {
            let listI = document.getElementById("list");

            listI.innerHTML = products.listInverse();
        })

        btnInsert.addEventListener('click', () => { 
            let inpCode = document.getElementById("code").value;
            let inpName = document.getElementById("name").value;
            let inpQuantity = document.getElementById("quantity").value;
            let inpCost = document.getElementById("cost").value;
            let inpPosition = document.getElementById("pos").value;
            let product = new Product(inpCode, inpName, inpQuantity, inpCost);
    
            let table = document.querySelector("table");
            let row = table.insertRow(parseInt(inpPosition)+1);
            let colCode = row.insertCell(0);
            let colName = row.insertCell(1);
            let colQuantity = row.insertCell(2);
            let colCost = row.insertCell(3);
            let colTotal = row.insertCell(4);

            colCode.innerHTML = product.getCode();
            colName.innerHTML = product.getName();
            colQuantity.innerHTML = product.getQuantity();
            colCost.innerHTML = `$${product.getCost()}`;
            colTotal.innerHTML = `$${product.getTotal()}`;


            products.insert(product, inpPosition);
            console.log(products);
        });