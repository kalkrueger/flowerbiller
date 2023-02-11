
function sortByProduct(prods) {
    return prods.sort((a, b) => {
        if (a.product !== b.product) return a.product.localeCompare(b.product);
        if (a.var !== b.variety) return a.variety.localeCompare(b.variety);
        if (a.size !== b.size) return parseInt(a.size) < parseInt(b.size);
        if (a.pricePerUnit !== b.pricePerUnit) return a.pricePerUnit - b.pricePerUnit;
        if (a.totalQty !== b.totalQty) return a.totalQty - b.totalQty;
        if (a.ven !== b.ven) return a.ven.localeCompare(b.ven);
        return 0;
    });
}

function sortByTotalQty(prods) {
    return prods.sort((a, b) => {
        if (a.totalQty !== b.totalQty) return a.totalQty - b.totalQty;
        if (a.ven !== b.ven) return a.ven.localeCompare(b.ven);
        if (a.prod !== b.prod) return a.prod.localeCompare(b.prod);
        if (a.var !== b.var) return a.var.localeCompare(b.var);
        if (a.len !== b.len) return parseInt(a.len) < parseInt(b.len);
        if (a.pricePerUnit !== b.pricePerUnit) return a.pricePerUnit - b.pricePerUnit;
        return 0;
    });
}

function sortByCustomer(items) {
    return items.sort((a, b) => {
        if (a.customer !== b.customer) return a.customer.localeCompare(b.customer)
        return 0;
    })
}

function sortByVenSH(items) {
    return items.sort((a, b) => {
        if (a.venSH !== b.venSH) return a.venSH.localeCompare(b.venSH)
        return 0;
    })
}

const sort = {
    "product": sortByProduct,
    "totalQty": sortByTotalQty,
    "customer": sortByCustomer,
    "venSH": sortByVenSH
}

export default sort;