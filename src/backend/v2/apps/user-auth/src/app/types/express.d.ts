import { UserRole } from '@DefendStack-backend/enums';

declare global {
  interface User {
    user_id: number;

    username: string;

    role: UserRole;
  }

  namespace Express {
    interface Request {
      user?: User;
    }
  }
}
