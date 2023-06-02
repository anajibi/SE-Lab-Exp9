export function addApi(number1, number2) {
    return fetch(`http://localhost:8080/api/add/${number1}/${number2}`, {method: "post"}).then(response => response.json());
}

export function subtractApi(number1, number2) {
    return fetch(`http://localhost:8080/api/subtract/${number1}/${number2}`, {method: "post"}).then(response => response.json());
}