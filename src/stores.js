import { writable } from 'svelte/store';

export const FeedbackStore = writable([
  {
    id: 1,
    rating: 8,
    text: 'First of all, welcome to Linux! I, too, transferred from Mac to Linux years ago, and I think it is a great way to transition.'
  },
  {
    id: 2,
    rating: 10,
    text: 'First of all, welcome to Linux! I, too, transferred from Mac to Linux years ago, and I think it is a great way to transition.'
  },
  {
    id: 3,
    rating: 8,
    text: 'First of all, welcome to Linux! I, too, transferred from Mac to Linux years ago, and I think it is a great way to transition.'
  }
])