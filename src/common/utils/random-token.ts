import { randomBytes } from 'crypto';

export const generateRandomToken = () => {
  const token = randomBytes(32).toString('hex');
  const expiresAt = new Date(Date.now() + 15 * 60 * 1000);

  return { token, expiresAt };
};
