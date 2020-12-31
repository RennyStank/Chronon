const admin = require('firebase-admin');
admin.initializeApp();

const db = admin.firestore();

const taskRef = db.collection("users").doc(user).collection("tasks");

const listener = taskRef.onSnapshot(querySnapshot => {
    querySnapshot.docChanges().forEach(changes => {
        if (changes.type === "added") {

        }
        if (changes.type === "modified") {

        }
        if (changes.type === "deleted") {

        }
    })
}) 


function addTask(name, timeframe) {
    const newTask = {
        name: name,
        timeframe: timeframe
    }
    const res = await taskRef.add(newTask);
}

function deleteTask(id) {
    const res = await taskRef.doc(id).delete();
}

function updateTask(fieldObject, id) {
    const res = await taskRef.doc(id).update(fieldObject);
}