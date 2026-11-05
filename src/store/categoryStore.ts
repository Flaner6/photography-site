import { BehaviorSubject } from 'rxjs';

/**
 * We use a BehaviorSubject because it stores the current value and 
 * immediately emits it to any new subscribers (perfect for React mounts).
 */
export const categorySubject = new BehaviorSubject<string>('All');

// Action to update the store
export const setCategory = (category: string) => {
  categorySubject.next(category);
};
