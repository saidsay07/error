const obj = {
    name: "Said",
    age: 16,
    status: false
}

try {
    if (!obj.status) {
        // throw перекидывает на блок с своей ошибкой
        throw new Error("user is not action")
    }
    console.log(obj.name)
} catch (e) {
    console.log(e)
}