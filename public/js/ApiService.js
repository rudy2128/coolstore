const dbVersion = "v1";
const categoryCollection = "category";

class ApiService {
    static get dbVersion() {
        return dbVersion;
    }
    static get categoryCollection() {
        return categoryCollection;
    }
}