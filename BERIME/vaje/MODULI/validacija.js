// Export vsake funkcije posebej
export function jeVeljavnoIme(ime) {
  return ime.length >= 2 && /^[A-ZČŠŽ][a-zčšžćđA-ZČŠŽ\s-]+$/.test(ime);
}

export function jeVeljavenEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export function jeVeljavnaStarost(starost) {
  return !isNaN(starost) && starost >= 10 && starost <= 130;
}
