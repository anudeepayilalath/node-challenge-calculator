
const express=require("express")
const app=express();


app.get("/", (req, res)=>{
    res.send("Hey there")
})
// app.get("/calculator/:one/:two/:three", (req, res)=>{
//     let one=req.params.one
//     let two=parseInt(req.params.two)
//     let three=parseInt(req.params.three)

//     if(one==="add"){
//         let result=parseInt(two)+parseInt(three)
//         res.send(`${result}`)
//     }

//     else if(one==="substract"){
//         let result=parseInt(two)-parseInt(three)
//         res.send(`${result}`)
//     }

// })

app.get("/add", (req, res)=>{

    const value1=parseInt(req.query.value1)
    const value2=parseInt(req.query.value2)
    let result =value1+value2
    res.send(`${result}`)

})

app.get("/substract", (req, res)=>{

    const value1=parseInt(req.query.value1)
    const value2=parseInt(req.query.value2)
    let result =value1-value2
    res.send(`${result}`)

})

app.get("/multiply", (req, res)=>{

    const value1=parseInt(req.query.value1)
    const value2=parseInt(req.query.value2)
    let result =value1*value2
    res.send(`${result}`)

})

app.get("/divide", (req, res)=>{

    const value1=parseInt(req.query.value1)
    const value2=parseInt(req.query.value2)
    let result =value1/value2
    res.send(`${result}`)

})




app.listen(3000, function(){
    console.log("On Port 3000")
})