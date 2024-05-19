const sum_salary = [
    {
        id: 1,name: 'Sokheng',salary: 300,age: 19
    },
    {
        id: 1, name: 'Thearith',salary: 400,age: 18
    },
    {
        id: 1,name: 'Kimhong',salary: 600,age: 17
    },
    {
        id: 1,name: 'Phanha',salary: 700,age: 20
    },
    {
        id: 1,name: 'sara',salary: 300,age: 21
    },
]

const map = sum_salary.map((item)=>{
    return `<h1 class="h1">$${item.salary}${" "}${item.name}</h1>`;
})
maps = map.join("");
document.body.innerHTML = maps;
console.log(map.join(""));
