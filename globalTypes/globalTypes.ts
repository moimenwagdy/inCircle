export interface user {
  _id: string;
  username: string;
  email: string;
  passwordHash: string;
  profile: { bio: string; avatar: string };
  following: string[];
  followers: string[];
  createdAt: Date;
  age: number;
  verified: boolean;
  status: string;
  gender: string;
}

export interface post {
  _id: string;
  content: string;
  media: string[];
  authorId: string;
  comments: comment[];
  likes: string[];
  createdAt: Date;
  feeling: string;
  author: author;
}
export interface newPostType {
  _id: string;
  content: string;
  media: string[];
  authorId: string;
  comments: comment[];
  likes: string[];
  createdAt: Date;
  feeling: string;
}

export interface author {
  profile: { avatar: string };
  username: string;
  _id: string;
}

export interface comment {
  _id: string;
  userID: string;
  postId: string;
  comment: string;
  likes: string[];
  createdAt: Date;
}

export interface friendReq {
  _id: string;
  fromUserId: string;
  toUserId: string;
  status: string;
  createdAt: Date;
}

export interface conversation {
  _id: string;
  participants: string[];
  lastMessageId: string;
  createdAt: Date;
  updatedAt: Date;
  lastMessage: string;
}

export interface message {
  _id: string;
  conversationID: string;
  senderID: string;
  content: string;
  readBy: string[];
  createdAt: Date;
}

export interface participant {
  _id: string;
  username: string;
  profile: { avatar: string; bio: string };
}

export interface conversationItemResponse {
  _id: string;
  participants: participant[];
  lastMessageId: string;
  createdAt: Date;
  updatedAt: Date;
  lastMessage: message;
  participantsIDS: string[];
}

export interface postImageUpload {
  fileName: string;
  success: boolean;
  url: string;
}

export interface usersuggestion {
  _id: string;
  username: string;
  profile: { avatar: string };
}
export interface likeRsopnse {
  added: boolean;
  message: string;
  removed: boolean;
}
export interface notification {
  _id: string;
  toUserId: string;
  fromUserId: string;
  type: string;
  content: string;
  link: string;
  isRead: boolean;
  createdAt: Date;
  updatedAt: Date;
}
