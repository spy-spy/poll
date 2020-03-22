import { ModelStatus } from './enums';

export interface AsyncState {
  loading: boolean;
  status: ModelStatus;
  error?: string;
}

export interface Post {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

export interface Conversation {
  id: number;
  name: string
}

export interface Message {
  conversationId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}
