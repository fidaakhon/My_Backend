class ApiResponse {
    constructor( message= "Success", data, statusCode) {
        this.success = statusCode < 400;
        this.message = message;
        this.data = data;
    }
}

export { ApiResponse }