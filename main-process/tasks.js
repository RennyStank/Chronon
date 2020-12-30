const admin = require('firebase-admin');
admin.initializeApp();

const db = admin.firestore();


function addTask(user, name, timeframe) {
    const newTask = {
        name: name,
        timeframe: timeframe
    }
    const res = await db.collection("users").doc(user).collection("tasks").add(newTask);
}

function deleteTask(id, user) {
    const res = await db.collection("users").doc(user). collection("tasks").doc(id).delete();
}