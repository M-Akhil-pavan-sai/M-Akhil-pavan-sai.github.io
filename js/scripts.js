document.addEventListener("DOMContentLoaded", function tableLoad() {
    //html cards for menu items
    for(let itemIndex=0;itemIndex<menuItems.length;itemIndex++)
    {
        let itemCard = document.createElement("div");
        let itemName = document.createElement("h3");
        let itemCost = document.createElement("p");
        let itemCategory = document.createElement("p");
        itemCategory.style.display = "none";
        let textElement = menuItems[itemIndex].id;
        itemCard.setAttribute("id",textElement);
        itemCard.setAttribute("class","item-card");
        textElement = menuItems[itemIndex].name;
        itemName.innerHTML=textElement;
        textElement = menuItems[itemIndex].cost;
        itemCost.innerHTML=textElement;
        textElement = menuItems[itemIndex].category;
        itemCategory.innerHTML = textElement;
        itemCard.appendChild(itemName);
        itemCard.appendChild(itemCost);
        itemCard.appendChild(itemCategory);
        document.getElementById("menu-container").appendChild(itemCard);
    }



    //html cards for tables
    for(let tableIndex=0;tableIndex<tables.length;tableIndex++)
    {
        let tableCard = document.createElement("div");
        let tableName = document.createElement("h3");
        let tableTotalCost = document.createElement("span");
        let tableNumberOfItems = document.createElement("span");
        let textElement = tables[tableIndex].id;
        tableCard.setAttribute("id",textElement);
        tableCard.setAttribute("class","table-card");
        textElement = tables[tableIndex].name;
        tableName.innerHTML=textElement;
        textElement = tables[tableIndex].totalCost;
        tableTotalCost.innerHTML=textElement;
        textElement= tables[tableIndex].numberOfItems;
        tableNumberOfItems.innerHTML = textElement;
        tableCard.appendChild(tableName);
        tableCard.appendChild(document.createTextNode("Rs. "));
        tableCard.appendChild(tableTotalCost);
        tableCard.appendChild(document.createTextNode(" | Total Items: "));
        tableCard.appendChild(tableNumberOfItems);
        document.getElementById("tables-container").appendChild(tableCard);
        document.getElementById(tables[tableIndex].id).addEventListener("click",()=>{displayModel(tables[tableIndex].id);})
    }



    // function on load table outer structure
    let modelCard = document.createElement("div");
    let modelHeadingContainer = document.createElement("div");
    let modelHeading = document.createElement("h2");
    let modelTable = document.createElement("table");
    modelCard.setAttribute("id","model-card");
    modelTable.setAttribute("id","table");
    modelHeading.innerHTML = "Order Details";
    modelHeadingContainer.setAttribute("id","model-heading-container");
    modelHeading.setAttribute("id","model-heading");
    let closeButton = document.createElement("button");
    closeButton.style.width = "30px";
    closeButton.style.height = "20px";
    modelHeadingContainer.style.display = "flex";
    modelHeading.style.flex = "100";
    closeButton.innerHTML = "x";
    closeButton.style.background = "red";
    closeButton.setAttribute("onclick","closeModel();");
    modelHeadingContainer.appendChild(modelHeading);
    modelHeadingContainer.appendChild(closeButton);
    modelCard.appendChild(modelHeadingContainer);
    let modelTableBody = document.createElement("tbody");
    let modelTableRow = document.createElement("tr");
    let modelDataSNo = document.createElement("th");
    let modelDataItem = document.createElement("th");
    let modelDataPrice = document.createElement("th");
    let modelDataQuantity = document.createElement("th");
    let modelDataDelete = document.createElement("th");
    modelDataSNo.innerHTML = "S.No";
    modelTableRow.appendChild(modelDataSNo);
    modelDataItem.innerHTML = "Item";
    modelTableRow.appendChild(modelDataItem);
    modelDataPrice.innerHTML = "Price";
    modelTableRow.appendChild(modelDataPrice);
    modelDataQuantity.innerHTML = "Quantity";
    modelTableRow.appendChild(modelDataQuantity);
    modelDataDelete.innerHTML = "Delete";
    modelTableRow.appendChild(modelDataDelete);
    modelTableBody.appendChild(modelTableRow);
    modelTable.appendChild(modelTableBody);
    modelCard.appendChild(modelTable);
    let total = document.createElement("p");
    total.innerHTML = "Total : ";
    total.style.textAlign = "center";
    total.style.marginTop = "5%";
    modelCard.appendChild(total);
    document.body.appendChild(modelCard);
    document.getElementById("model-card").style.display = "none";




    // adding draggable property to  items
    var tempItems = document.getElementsByClassName("item-card");
    var tempTables = document.getElementsByClassName("table-card");
    for(let i of tempItems)
    {
        i.draggable=true;
    }

    for(let i of tempItems)
    {
        i.addEventListener("dragstart",dragStart);
        i.addEventListener("dragend",dragEnd);
        i.setAttribute("autoScroll","100");
    }

    for(let t of tempTables)
    {
        t.addEventListener("dragover",dragOver);
        t.addEventListener("dragenter",dragEnter);
        t.addEventListener("dragleave",dragLeave);
        t.addEventListener("drop",dragDrop);
    }
    

});


var draggableItem = null;

function dragStart()
{
    draggableItem=this;
}


function dragEnd()
{
    draggableItem=null;
}


function dragOver(e)
{
    e.preventDefault();
}

function dragEnter()
{
}

function dragLeave()
{
}

function dragDrop()
{
    let tableObjectId = this.id;
    let itemObjectId = draggableItem.id;
    for(let table of tables)
    {
        if(table.id==tableObjectId)
        {
            table.numberOfItems = table.numberOfItems+1;
            table.totalCost = table.totalCost + parseInt(draggableItem.children[1].innerHTML);
            this.children[2].innerHTML = table.numberOfItems;
            this.children[1].innerHTML = table.totalCost;
            if(table.orders[itemObjectId])
            {
                table.orders[itemObjectId] += 1;
            }
            else
            {
                table.orders[itemObjectId] = 1;
            }
            break;
        }
    }
}

//updating quantity of items
function changeNumberOfItems(updatingTable) {
    let calculatingCost = 0;
    let totalResult = document.getElementById("totalResult");
    let newNumberOfItems = 0;
    for(let tableRow of document.getElementsByClassName("tempRows"))
    {
        calculatingCost = calculatingCost + (tableRow.children[2].innerHTML*tableRow.children[3].value);
        updatingTable.orders[tableRow.children[0].innerHTML] = parseInt(tableRow.children[3].value);
        newNumberOfItems = parseInt(newNumberOfItems) + parseInt(tableRow.children[3].value);
    }
    updatingTable.numberOfItems = newNumberOfItems;
    updatingTable.totalCost = calculatingCost;
    totalResult.innerHTML = calculatingCost;
    for(let tableCardUpdate of document.getElementsByClassName("table-card"))
    {
        if(tableCardUpdate.children[0].innerHTML==updatingTable.name)
        {
            tableCardUpdate.children[1].innerHTML = calculatingCost;
            tableCardUpdate.children[2].innerHTML = newNumberOfItems;
        }
    }
}

//delete ordered item in model
function deleteOrderedItem(deletingRowNumber, deletingTable) {
    for(let tempRow of document.getElementsByClassName("tempRows"))
    {
        if(tempRow.children[0].innerHTML==deletingRowNumber)
        {
            deletingTable.orders[parseInt(deletingRowNumber)] = 0;
            delete deletingTable.orders[parseInt(deletingRowNumber)];
            tempRow.remove();
            changeNumberOfItems(deletingTable);
            break;
        }
    }
}


//close model
function closeModel()
{
    document.getElementById("model-card").style.display = "none";
    document.body.style.backgroundColor = "white";
    document.getElementById("myItemInput").style.backgroundColor = "white";
    document.getElementById("myTableInput").style.backgroundColor = "white";
    var divsToRemove = document.getElementsByClassName("tempRows");
    for (var i = divsToRemove.length-1; i >= 0; i--) {
    divsToRemove[i].remove();
    }
    document.getElementById("totalResult").remove();
}

//displayModel 
function displayModel(idOfTable)
{
    document.body.style.backgroundColor = "rgba(82, 82, 82, 0.644)";
    document.getElementById("myItemInput").style.backgroundColor = "rgba(152,152,152, 0.644)";
    document.getElementById("myTableInput").style.backgroundColor = "rgba(152,152,152, 0.644)";
    document.getElementById("model-card").style.display = "block";
    let modelHeading = document.getElementById("model-heading");
    let calculatingCost=0;
    let text;
    for(let table of tables)
    {
        if(table.id==idOfTable)
        {
           
            whichTable = table;
            text = table.name;
        }
    }
    for(let i in whichTable.orders)
    {
        let tr = document.createElement("tr");
        tr.setAttribute("class","tempRows");
        let td1 = document.createElement("td");
        let td2 = document.createElement("td");
        let td3 = document.createElement("td");
        let td4 = document.createElement("input");
        let td5 = document.createElement("td");
        let buttonIcon = document.createElement("img");
        buttonIcon.setAttribute("src","https://img.icons8.com/ios-glyphs/20/000000/filled-trash.png");
        let deleteButton = document.createElement("button");
        deleteButton.appendChild(buttonIcon);
        td4.setAttribute("type","number");
        td4.setAttribute("min","1");
        td4.addEventListener("input",()=>{changeNumberOfItems(whichTable);});
        let settingItem = null;
        for(let it of menuItems)
        {
            if(it.id==i)
            {
                settingItem = it;
            }
        }
        td1.innerHTML = i;
        td2.innerHTML = settingItem.name;
        td3.innerHTML = settingItem.cost;
        td4.value = whichTable.orders[i];
        td5.appendChild(deleteButton);
        td5.addEventListener("click",()=>{deleteOrderedItem(td1.innerHTML,whichTable);});
        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        tr.appendChild(td4);
        tr.appendChild(td5);
        document.getElementById("table").appendChild(tr);
        calculatingCost += (settingItem.cost*whichTable.orders[i]);
    }
    let tempText = " | Order Details";
    modelHeading.innerHTML = text+tempText;
    let totalResult = document.createElement("p");
    totalResult.setAttribute("id","totalResult");
    totalResult.innerHTML = calculatingCost;
    document.getElementById("model-card").appendChild(totalResult);
}


//search Item
function searchItem() {
    let allItemCards = document.getElementsByClassName("item-card");
    let inputItemName = document.getElementById("myItemInput").value.toUpperCase();
    for(let item of allItemCards)
    {
        if(item.children[0].innerHTML.toUpperCase().includes(inputItemName) || item.children[2].innerHTML.toUpperCase().includes(inputItemName))
        {
            item.style.display = "block";
        }
        else
        {
            item.style.display = "none";
        }
    }
}

//search table
function searchTable() {
    let allTableCards = document.getElementsByClassName("table-card");
    let inputTableName = document.getElementById("myTableInput").value.toUpperCase();
    for(let table of allTableCards)
    {
        if(table.children[0].innerHTML.toUpperCase().includes(inputTableName))
        {
            table.style.display = "block";
        }
        else
        {
            table.style.display = "none";
        }
    }
}
