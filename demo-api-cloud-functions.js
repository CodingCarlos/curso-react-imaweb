const functions = require("firebase-functions");
const admin = require('firebase-admin');
const express = require('express');
var cors = require('cors')

admin.initializeApp();

const db = admin.firestore();
const app = express();

app.use(cors());

app.get('/:collection', async (request, response)=>{
  const ref = db.collection(request.params.collection);
  const snapshot = await ref.get();

  const result = []
  snapshot.forEach(doc => {
    result.push({
      ...doc.data(),
      id: doc.id, 
    });
  });

  response.send(result);
});

app.get('/:collection/:id', async (request, response)=>{
  const ref = db.collection(request.params.collection).doc(request.params.id);
  const snapshot = await ref.get();

  response.send({
    ...snapshot.data(),
    id: snapshot.id,
  });
});

app.post('/:collection', async (request, response)=>{
  if (!request.body) {
    return response.send('error');
  }

  const body = JSON.parse(request.body);
  const res = await db.collection(request.params.collection).add(body);

  response.send({
    ...body,
    id: res.id,
  });
});

exports.app = functions.https.onRequest(app);
