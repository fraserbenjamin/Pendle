/* eslint-disable promise/always-return */

const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();

const loadAnswers = new Promise((resolve) => {
    const docRef = admin.firestore().collection("quiz").doc("answers");

    docRef.get().then((doc) => {
        if (doc.exists) {
            resolve(doc.data().value);
        } else {
            resolve([]);
        }
    }).catch((error) => {
        console.log("Error getting document:", error);
        resolve([]);
    });
});

const loadTeams = new Promise((resolve) => {
    const docRef = admin.firestore().collection("quiz").doc("teams");

    docRef.get().then((doc) => {
        if (doc.exists) {
            resolve(doc.data().list);
        } else {
            resolve({});
        }
    }).catch((error) => {
        console.log("Error getting document:", error);
        resolve({});
    });
});

const markQuestions = (team, answers) => {
    let score = 0;

    for (const [key, value] of Object.entries(team)) {
        if(value === answers[key]) score ++;
    }

    return score;
}

exports.calculateQuizScore = functions.region('europe-west2').https.onCall((data, context) => {
    return Promise.all([loadTeams, loadAnswers]).then((values) => {
        const teams = values[0];
        const answers = values[1];

        console.log(`${Object.keys(teams).length} teams`);
        console.log(`${answers.length} questions`);

        let scores = {};

        for (const [key, value] of Object.entries(teams)) {
            scores[key] = markQuestions(value, answers);
        }

        admin.firestore().collection("quiz").doc("scores").set(scores)
        return {
            scores,
            teams,
            answers
        };
    });
});