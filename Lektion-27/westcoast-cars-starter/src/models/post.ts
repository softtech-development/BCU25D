import { Person } from './person';

export type Post = Person & { message: string; };