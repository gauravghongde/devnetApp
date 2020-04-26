export var QNA_MOCK: any = {
    "question": {
        "postId": "q32ae1518",
        "questionHeader": "Using an Angular 2 http.post without subscribing? Or am I thinking of it wrong?",
        "questionBody": "**Is there a way to just tell the server to update data without subscribing? Skipping a return statement and a subscription seems to render the http call inert.**\n\nIn my case, my DB guy created a bunch of stored procedures that return nothing and sometimes I want to do something simple like this in my service:\n\n    public setItem(item: IRequestItem) {\n            this.http.post('api/items', item);\n        }\n\nand call it like this in my component:\n\n    save() {\n            var comp = this;\n            this.items.forEach(function(item) {\n                comp.service.setItem(item)\n            });\n        }\n\nInstead I have to do something like this in the service: \n\n    public setItem(item: IRequestItem) {\n            return this.http.post('api/items', item);\n        }\n\nAnd then call it like this in the conponent:\n\n    save() {\n            var comp = this;\n            this.items.forEach(function(item) {\n                comp.service.setItem(item).subscribe(r => console.log(r));\n            });\n        }\n\nWhich would return lots of these:\n\n    Response {_body: \"\", status: 204, ok: true, statusText: \"No Content\", headers: Headers…}\n    _body : \"\"\n    headers : Headers\n    ok : true\n    status : 204\n    statusText : \"No Content\"\n    type : 2\n    url : \"http://localhost:56018/api/items\"\n    __proto__ : Object\n\nI'm just learning so maybe I'm looking at it wrong. Can I interpret something in that Response object that will let me know if the operation failed or succeeded? Or is there another syntax that will just return a success or failure instead of the confusing \"No Content\" response?",
        "answerBody": null,
        "postedBy": "test",
        "postedAt": "2020-03-15T03:58:25.366Z",
        "forQuestion": null,
        "upVotes": 2,
        "downVotes": 0,
        "voteStatus": 0,
        "usersInteracted": {
            "test": 2,
            "foo": 2
        },
        "commentObj": [
            {
                "commentId": "c15ccc325",
                "commentBody": "A ```<button>``` or ```<a>``` can show and **hide** multiple elements by referencing them with a JQuery selector in its href or data-target attribute. Multiple <button> or <a> can show and hide an element if they each reference it with their href or data-target attribute",
                "byUser": "test",
                "postedAt": "2020-03-21T12:25:44.303Z",
                "upVotes": 1,
                "downVotes": 0,
                "voteStatus": 2,
                "usersInteracted": {
                    "gsg7397": 2
                }
            },
            {
                "commentId": "c15ccc357",
                "commentBody": "Note that Bootstrap’s current implementation does not cover the various keyboard interactions described in the WAI-ARIA Authoring Practices 1.1 accordion pattern - you will",
                "byUser": "foo",
                "postedAt": "2020-03-22T12:25:44.303Z",
                "upVotes": 1,
                "downVotes": 0,
                "voteStatus": 0,
                "usersInteracted": {
                    "test": 2
                }
            }
        ]
    },
    "listOfAnswers": [
        {
            "postId": "a399076a",
            "questionHeader": null,
            "questionBody": null,
            "answerBody": "Your code is correct.There is a bug in springfox-swagger-ui/springfox-swagger2 version 2.8.0 and it seems 2.9.2 as well. I suspect you are using a version effected by this bug.I simply downgraded to 2.7.0 and it worked perfectly.",
            "postedBy": "test",
            "postedAt": "2020-03-21T12:28:00.968Z",
            "forQuestion": "q32ae1518",
            "upVotes": 1,
            "downVotes": 1,
            "voteStatus": 2,
            "usersInteracted": {
                "gsg7397": 2,
                "foo": 1
            },
            "commentObj": [
                {
                    "commentId": "c2dc596fb",
                    "commentBody": "C1 for Q2",
                    "byUser": "foo",
                    "postedAt": "2020-03-21T13:05:58.733Z",
                    "upVotes": 1,
                    "downVotes": 0,
                    "voteStatus": 2,
                    "usersInteracted": {
                        "gsg7397": 2
                    }
                },
                {
                    "commentId": "c9f56e9ff",
                    "commentBody": "C2 for A1",
                    "byUser": "gsg7397",
                    "postedAt": "2020-03-21T13:10:03.593Z",
                    "upVotes": 1,
                    "downVotes": 1,
                    "voteStatus": 1,
                    "usersInteracted": {
                        "gsg7397": 1,
                        "test": 2
                    }
                }
            ]
        },
        {
            "postId": "a3bae5278",
            "questionHeader": null,
            "questionBody": null,
            "answerBody": "This is the ans given by gaurav ghongde just for test.",
            "postedBy": "gsg7397",
            "postedAt": "2020-03-21T12:36:12.062Z",
            "forQuestion": "q32ae1518",
            "upVotes": 0,
            "downVotes": 0,
            "voteStatus": 0,
            "usersInteracted": {},
            "commentObj": []
        }
    ]
};