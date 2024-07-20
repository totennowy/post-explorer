import { ModelPost } from './modelPost';

export type ModelPostWithAuthor = Omit<ModelPost, 'userId'> & {
  author: string;
};
