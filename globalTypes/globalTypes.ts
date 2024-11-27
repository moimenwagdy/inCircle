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
  userId: string;
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
}

export interface message {
  _id: string;
  conversationId: string;
  senderId: string;
  content: string;
  readBy: string[];
  createdAt: Date;
}

export interface postImageUpload {
  fileName: string;
  success: boolean;
  url: string;
}

export interface userSuggetion {
  _id: string;
  username: string;
  profile: { avatar: string };
}
