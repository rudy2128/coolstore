function saveCategory(proId,title,price,qty) {
    let newData = {
        proId: proId,
        title: title,
        price: price,
        qty:qty
    }
    firebase.database().ref(ApiService.dbVersion).child(ApiService.categoryCollection).push(newData);
}