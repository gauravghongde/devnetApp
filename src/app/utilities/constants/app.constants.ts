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
    jwt?: string;
  }
  
export class Comment {
    commentId: string;
    commentBody: string;
    byUser: string;
    postedAt: Date;
    upVotes: number;
    downVotes: number;
    usersInteracted: any;
}

export class Post {
    postId: string;
    questionHeader: string;
    questionBody: string;
    answerBody: string;
    byUser: string; 
    postedAt: Date;
    upVotes: number;
    downVotes: number;
    commentObj: Comment[];
}

export class QuestionWithAnswers {
    question: Post;
    listOfAnswers: Post[];
}

