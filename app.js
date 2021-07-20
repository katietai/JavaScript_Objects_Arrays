console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
const numbers =[2, 45, 16, 17, 18, 46, 129];
const arraySum = (numbers) =>{
    let sum = 0;
    numbers.forEach((num) => {
        sum += num;
    })
    return sum;
}
console.log(arraySum(numbers));
// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");
let book={
    title : "A Silver Crown",
    pages : 232,
    readCount : 1,
};
book.info = () =>{
    return '${book.title}, ${book.pages} pages, Read ${book.readCount} times.';
};
console.log(book.info());



