const asyncHandler = (requestHandler) => {
    (req, res, next) => {
        Promise.resolve(requestHandler(req, res, next)).catch((err) => next(err))
    }
}

export { asyncHandler }





//Async handler through try catch block

// const asyncHandler1 = (fn) => (req, res, next) => {
//     try {
//         Promise.resolve(fn(req, res, next)).catch((err) => next(err))
//     } catch (error) {
//         next(error)
//     }
// };