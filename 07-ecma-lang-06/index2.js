const employee = {
    id: "E001",
    name: "Kasun Sampath",
    contacts: ["011-1234567", "033-1234567", "055-1234567"],
    [Symbol.iterator]: function* () {
        // yield employee.contacts[0];
        // yield employee.contacts[1];
        // yield employee.contacts[2];
        for(const contact of employee.contacts)
            yield contact;
    }
}

function executor(resolve, reject) {
    setTimeout(() => {
        resolve(employee);
    }, 5000);
}

const promiseRef = new Promise(executor);

for (const contact of await promiseRef) console.log(contact);