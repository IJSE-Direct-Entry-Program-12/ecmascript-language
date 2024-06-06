function execute(){
    console.log("execute");
}

execute();
execute.call(undefined);
execute.apply(undefined);

// Although we can execute the "execute" function like below,
// we usually don't use the "new" operator
// for these kind of functions (Regular functions)
// IMP: This is not a rule, this is a convention
new execute();

// Constructor Functions
function Customer(){
    console.log("Customer");
}

// we usually use "new" operator with Constructor functions only
new Customer();