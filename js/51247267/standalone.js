const obj = {
  "answers": [
    [
        {
            "id": "215",
            "parent_answer_id": "214",
            "question_id": "300",
            "content": "zksjbviul",
            "question_content": "gggg",
            "is_like": "0",
        },

        {
            "id": "214",
            "parent_answer_id": "213",
            "question_id": "300",
            "content": "ksdgzbvjzh,",
            "question_content": "gggg",
        },

        {
            "id": "213",
            "parent_answer_id": "0",
            "question_id": "300",
            "content": "kuqebvjzd",
            "question_content": "gggg",
        },

        {
            "id": "212",
            "parent_answer_id": "0",
            "question_id": "300",
            "content": "iauvhiuds",
            "question_content": "gggg",
        },

        {
            "id": "211",
            "parent_answer_id": "0",
            "question_id": "300",
            "content": "fdfs",
            "question_content": "gggg",
        }
    ]
  ]
}

// console.log(obj)

answers = obj.answers[0]

const results = {}

const mergeTopLevel = (ans, resultsMap) => {
  const { id } = ans;

  let tmp = results[id];
  if (!tmp) tmp = { children: {} };

  resultsMap[id] = { ...tmp, ...ans };
}

const mergeChild = (ans, resultsMap) => {
  const { id, parent_answer_id } = ans;

  let tmp = resultsMap[id];
  if (!tmp) tmp = { children: {} };

  mergeTopLevel(ans, tmp.children);
}

answers.map(ans => {
  const { id, parent_answer_id } = ans;

  if (parent_answer_id !== '0') {
    mergeChild(ans, results);
  } else {
    mergeTopLevel(ans, results)
  }
})

console.log(results)
