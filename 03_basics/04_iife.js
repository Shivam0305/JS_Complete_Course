// Immediatly invoked function Expression(IIFE)

//we can execute immediatly through iife function.
// we can use iife because of remove polution from the global function

(function chai(){
    //named iife
    console.log(`DB CONNECTED TWO`);
})();

(() => {
    //unnamed iife
    console.log(`DB Connected three`);
}
)();

((name) => {
    console.log(`DB is connected three ${name}`);
})('shivam')