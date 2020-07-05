export class CharLimits {
    MIN_CHAR_LIMIT_COMMENT: number = 10;
    MAX_CHAR_LIMIT_COMMENT: number = 300;
    MIN_CHAR_LIMIT_ANSWER: number = 50;
    MAX_CHAR_LIMIT_ANSWER: number = 80000;
}

export class ResponseTypes {
    static SUCCESS = 'SUCCESS';
    static FAILED = 'FAILED';
}

export class User {
    id: string;
    username: string;
    password: string;
    firstName: string;
    lastName: string;
    email?: string;
    jwt?: string;
  }
  
export class Comment {
    id: string;
    body: string;
    username: string;
    postedAt: Date;
    vote: Vote;
    usersInteracted: any;
}

export class Vote {
    upVotes: number;
    downVotes: number;
    voteStatus: number;
}

export class Post {
    id: string;
    questionHeader: string;
    questionBody: string;
    answerBody: string;
    username: string; 
    postedAt: string;
    questionId: string;
    noOfAnswers: number;
    vote: Vote;
    usersInteracted: Map<string, number>;
    comments: Comment[];
}

export class QuestionWithAnswers {
    question: Post;
    listOfAnswers: Post[];
}

