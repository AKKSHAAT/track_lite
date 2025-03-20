import { v4 as uuidv4 } from 'uuid';

export function getReferrerId(): string | null {
  let id = localStorage.getItem('referrer_id');
  if (! id) {
    id = uuidv4();
    localStorage.setItem('referrer_id', id);
  }
    return id;
  }
  
  export function setReferrerId(referrerId: string) {
    localStorage.setItem('referrer_id', referrerId);
  }
  