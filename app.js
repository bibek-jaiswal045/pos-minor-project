const custTable = document.getElementById('customers-table');
const dashTable = document.getElementById('dash-table');
const prodTable = document.getElementById('products-table');
const catTable = document.getElementById('categories-table');
const supTable = document.getElementById('suppliers-table');
let showLoader = false;
window.addEventListener('DOMContentLoaded', (event) => {
    // Function to fetch and display products
    const fetchProducts = () => {
        showLoader = true;
        loader();
        fetch('https://fakestoreapi.com/products')
            .then(response => response.json())
            .then(data => {
                prodTable.innerHTML = `
                    <thead>
                        <tr>
                            <th>S.N.</th>
                            <th>Name</th>
                            <th>Image</th>
                            <th>Price($)</th>
                            <th>Category</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${data.map((element, index) => `
                            <tr>
                                <td>${index + 1}</td>
                                <td class="prodTitle">${element.title}</td>
                                <td><img src="${element.image}" alt="Product Image" /></td>
                                <td>${element.price}</td>
                                <td>${element.category}</td>
                                <td>
                                    <span class="material-symbols-outlined edit">edit</span>
                                    <span class="material-symbols-outlined clone">content_copy</span>
                                    <span class="material-symbols-outlined danger">delete</span>
                                </td>
                            </tr>
                        `).join('')}
                    </tbody>
                `;
            })
            .catch(error => alert('Error:', error))
            .finally(() => {
                showLoader = false;
                loader();
            });
    };

    // Function to fetch and display categories
    const fetchCategories = () => {
        showLoader = true;
        loader();
        fetch('https://world.openfoodfacts.org/categories.json')
            .then(response => response.json())
            .then(data => {
                catTable.innerHTML = `
                    <thead>
                        <tr>
                            <th>S.N.</th>
                            <th>Name</th>
                            <th>Total Products</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${data.tags.slice(0, 20).map((element, index) => `
                            <tr>
                                <td>${index + 1}</td>
                                <td class="prodTitle">${element.name}</td>
                                <td>${element.products}</td>
                                <td>
                                    <span class="material-symbols-outlined edit">edit</span>
                                    <span class="material-symbols-outlined clone">content_copy</span>
                                    <span class="material-symbols-outlined danger">delete</span>
                                </td>
                            </tr>
                        `).join('')}
                    </tbody>
                `;
            })
            .catch(error => alert('Error:', error))
            .finally(() => {
                showLoader = false;
                loader();
            });
    };

    // Function to fetch and display customers or suppliers
    const fetchCustomersOrSuppliers = () => {
        showLoader = true;
        loader();
        fetch('https://randomuser.me/api/?results=20')
            .then(response => response.json())
            .then(data => {
                let tableName= dashTable;
                if (custBool) {
                    tableName = custTable;
                } else if (suppBool) {
                    tableName = supTable;
                } else {
                    tableName = dashTable;
                }
                tableName.innerHTML = `
                    <thead>
                        <tr>
                            <th>S.N.</th>
                            <th>Image</th>
                            <th>${custBool ? 'Name' : 'Suppliers'}</th>
                            <th>Country</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${data.results.slice(0, dashBool ? 5 : 20).map((element, index) => `
                            <tr>
                                <td>${index + 1}</td>
                                <td><img src="${element.picture.large}" alt="User Image" /></td>
                                <td class="prodTitle">${custBool ? `${element.name.title}. ${element.name.first} ${element.name.last}` : element.email}</td>
                                <td>${element.location.country}</td>
                                <td>
                                    <span class="material-symbols-outlined edit">edit</span>
                                    <span class="material-symbols-outlined clone">content_copy</span>
                                    <span class="material-symbols-outlined danger">delete</span>
                                </td>
                            </tr>
                        `).join('')}
                    </tbody>
                `;
            })
            .catch(error => alert('Error:', error))
            .finally(() => {
                showLoader = false;
                loader();
                console.log('final ' + showLoader);
            });
    };

    // Conditional logic to determine which data to fetch
    if (prodBool) {
        fetchProducts();
    } else if (catBool) {
        fetchCategories();
    } else if (custBool || suppBool || dashBool) {
        fetchCustomersOrSuppliers();
    }
});

const loader = () => {
    const loaderTable = document.getElementById('load-table');
    if (showLoader) {
        loaderTable.style.display = 'block';
        loaderTable.style.border="16px solid #f3f3f3";
        loaderTable.style.borderRadius="50%";
        loaderTable.style.borderTop="16px solid #3498db";
        loaderTable.style.width="120px";
        loaderTable.style.margin="25% auto";
        loaderTable.style.height="120px";
        loaderTable.style.animation = "spin 2s linear infinite";
        const styleSheet = document.createElement('style');
        styleSheet.innerHTML = `
            @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
            }
        `;
        document.head.appendChild(styleSheet);
        } else {
        loaderTable.style.display = 'none';
    }
}