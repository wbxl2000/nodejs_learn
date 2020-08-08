// async function test() {
//     return 'hello';
// }

async function test() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            var name = 'qer';
            resolve(name);
        }, 1000);
    })
}

async function main() {
    var data = await test();
    console.log(data);
}

main();