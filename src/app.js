const mongodb = require("mongodb")
const mongoClient = mongodb.MongoClient
const connectionUrl = 'mongodb://127.0.0.1:27017'
const dbname = "task_2"

mongoClient.connect(connectionUrl,(error, res1) => {
    if (error) {
        return console.log("error has occured")
    }
    console.log("all data ok")
    const db = res1.db(dbname)
    /////////////////////////////////////////////////////////////

    db.collection('users').insertOne({
        name: "karima",
        city: "taiz"
    },
     (error, data) => {
        if (error) {
            console.log("un able to insert data")
        }
        console.log(data.insertedId)
    }

    )
    //////////////////////////////////////////////////
    db.collection('users').insertOne({
        name: "Mohammed",
        city: "taiz"
    },
     (error, data) => {
        if (error) {
            console.log("un able to insert data")
        }
        console.log(data.insertedId)
    }

    )
    ///////////////////////////////////////////////
    db.collection('users').insertMany(
        [{
            name: "Asem",
            age: 27
        },
        {
            name: "Omar",
            age: 25
        },
        {
            name: "Ali",
            age: 22
        },{
            name: "Mahmood",
            age: 27  
        },{
            name: "Murad",
            age: 40  
        },{
            name: "Amjad",
            age: 29  
        },{
            name: "Aya",
            age: 20  
        },{
            name: "Majed",
            age: 27  
        },{
            name: "Fadwa",
            age: 27  
        },{
            name: "Ahlam",
            age: 27  
        }],(error,data)=>{
            if(error){
                console.log("unable to insert data")
            }
            console.log(data.insertCount)
        
        }
    )
    //////////////////////////////////////////////////
  
    db.collection('users').find({age:27}).toArray((error , users)=>{
            if (error) {
                return console.log('error has occured')
            }
            console.log(users)
          })
          
 
//////////////////////////////////////////////////////////  
      db.collection('users').find({age:27}).limit(3).toArray((error , users)=>{
        if (error) {
            return console.log('error has occured')
        }
        console.log(users)
      })
      /////////////////////////////////////////////////////


     db.collection("users").updateOne({_id:mongodb.ObjectId("66b4066fcb6ee4ac011b2e62")},{
        $set:{name: "Ameer" },
        $inc: {age: 4}
     }).
     then((data1)=>{console.log(data1.modifiedCount)})
     .catch((error)=> {console.log(error)})
//*************************************************** */

db.collection("users").updateOne({_id:mongodb.ObjectId("66b4066fcb6ee4ac011b2e65")},{
    $set:{name: "waleed" },
    $inc: {age: 4}
 }).
 then((data1)=>{console.log(data1.modifiedCount)})
 .catch((error)=> {console.log(error)})
//*************************************************** */

 
 db.collection("users").updateOne({_id:mongodb.ObjectId("66b4066fcb6ee4ac011b2e69")},{
    $set:{name: "Maram" },
    $inc: {age: 4}
 }).
 then((data1)=>{console.log(data1.modifiedCount)})
 .catch((error)=> {console.log(error)})

 //*************************************************** */

//  db.collection("users").updateOne({_id:mongodb.ObjectId("66b4066fcb6ee4ac011b2e6a")},{
//     $set:{name: "Wafa" },
//     $inc: {age: 4}
//  }).
//  then((data1)=>{console.log(data1.modifiedCount)})
//  .catch((error)=> {console.log(error)})
  
    /////////////////////////////////////////////////////////////////////

    // db.collection('users').updateMany(({}),{
    //     $inc: {age: 10}
    // }).
    // then((data1)=>{console.log(data1.modifiedCount)})
    // .catch((error)=> {console.log(error)})

//     ////////////////////////////////////////////////////////////////////

// //     

    db.collection('users').deleteMany({age:41})
    .then((data1)=>{console.log(data1.deletedCount)})
   .catch((error)=> {console.log(error)})


})