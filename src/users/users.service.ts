import { Injectable, Inject } from '@nestjs/common';
import { eq } from 'drizzle-orm';
import { users } from '../database/schema';
import { db } from '../database/connection';

@Injectable()
export class UsersService {
  constructor(
    @Inject('DATABASE_CONNECTION')
    private readonly database: typeof db,
  ) {}

  async findAll() {
    return await this.database.select().from(users);
  }

  async findOne(id: string) {
    const result = await this.database
      .select()
      .from(users)
      .where(eq(users.id, id))
      .limit(1);
    
    return result[0] || null;
  }

  async findByEmail(email: string) {
    const result = await this.database
      .select()
      .from(users)
      .where(eq(users.email, email))
      .limit(1);
    
    return result[0] || null;
  }

  async create(userData: {
    email: string;
    firstName: string;
    lastName: string;
    phone?: string;
  }) {
    const result = await this.database
      .insert(users)
      .values(userData)
      .returning();
    
    return result[0];
  }

  async update(id: string, userData: Partial<{
    email: string;
    firstName: string;
    lastName: string;
    phone: string;
    isActive: boolean;
  }>) {
    const result = await this.database
      .update(users)
      .set({ ...userData, updatedAt: new Date() })
      .where(eq(users.id, id))
      .returning();
    
    return result[0] || null;
  }

  async delete(id: string) {
    const result = await this.database
      .delete(users)
      .where(eq(users.id, id))
      .returning();
    
    return result[0] || null;
  }
}
