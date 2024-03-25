// 泛型

// 泛型函数
function toArray<T>(...args: T[]): Array<T> {
    return [...args]
}

console.log(toArray(1,2,3))

// 泛型type
type A<T> = string | number | T
let a: A<boolean> = true

// 泛型interface

interface Data<T> {
    msg: T
}


function concat<T=number, K=string>(a: T, b: K): [T, K] {
    return [a, b]
}

const axios = {
    get<T>(url: string): Promise<T> {
        return new Promise((resolve, reject) => {
            let xhr: XMLHttpRequest = new XMLHttpRequest();
            xhr.open('GET', url)
            xhr.onreadystatechange = () => {
                if(xhr.readyState == 4 && xhr.status == 200) {
                    resolve(JSON.parse(xhr.responseText))
                }
            }
            xhr.send(null);
        })
    }
}

interface Response {
    message: string,
    code: number
}

axios.get<Response>('./data.json').then(
    res => {
        console.log(res.message)
    }
)