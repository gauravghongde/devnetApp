export enum CharLimits {
    MIN_CHAR_LIMIT_COMMENT = 10,
    MAX_CHAR_LIMIT_COMMENT = 300,
    MIN_CHAR_LIMIT_ANSWER = 50,
    MAX_CHAR_LIMIT_ANSWER= 80000
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

export class QnaRequest {
  id: string;
  questionHeader: string;
  questionBody: string;
  questionId: string
  answerBody: string;
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

export enum EditorMode {
  UPDATE = 'UPDATE',
  ADD = 'ADD'
}

export enum EditorType {
  ANSWER = 'Answer',
  QUESTION = 'Question'
}

