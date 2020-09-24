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

const generateRandom = () => {
    let N = 6;
    return Array(N+1).join((Math.random().toString(36)+'00000000000000000').slice(2, 18)).slice(0, N);
}

exports.createTeam = functions.region('europe-west2').https.onCall(async(data, context) => {
    try {
        const doc = await admin.firestore().collection("quiz").doc("teams").get();
        if(doc.exists) {
            const teams = doc.data();
            const teamIds = [];

            for (const [key] of Object.entries(teams)) {
                teamIds.push(key);
            }
            
            let valid = false;
            let teamId = generateRandom();

            while(!valid) {
                if(!teamIds.includes(teamId)) {
                    valid = true;
                }
            }

            await admin.firestore().collection("quiz").doc("teams").update({
                [teamId]: {name: data.teamName},
            })

            return teamId;
        }
    } catch(e) {
        console.error(e);
    }

    return null;
});