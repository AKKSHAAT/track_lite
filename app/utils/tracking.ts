export function getReferrerId(): string | null {
    return localStorage.getItem('referrer_id');
  }
  
  export function setReferrerId(referrerId: string) {
    localStorage.setItem('referrer_id', referrerId);
  }
  