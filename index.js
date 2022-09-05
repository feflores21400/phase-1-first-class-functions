function receivesAFunction(callback){
    callback()
}

function returnsANamedFunction(){
    return function ANamedFunction() {

    }
}

function returnsAnAnonymousFunction(){
    return function(){}
}

// describe("returnsAnAnonymousFunction()",() =>
// var fn;

// before(()=>{
//  fn = returnAnAnonymousFunction();
// });

//it("returns a function", () =>{
//  expect (fn).to.be.a("function");  
//})

//it("returns an anonymous function",()=>{
//   expect(fm.name).to.eql(""); 
//})

//    describe("receivesAFunction(callback)", () => {
//        it("receives a function and calls it", () => {
//          const spy = chai.spy();
    
 //         receivesAFunction(spy);
    
 //         expect(spy).to.have.been.called();
 //       });
 //     });