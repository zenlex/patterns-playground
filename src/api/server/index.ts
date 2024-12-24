import { db } from './db';
import { z } from 'zod';
import {publicProcedure, router} from '../../trpc/init';

const appRouter = router({
  userList: publicProcedure.query(async () => {
    const users = await db.user.findMany();

    return users;
  }),
  userById: publicProcedure.input(z.number()).query(async (opts) => {
    const {input} = opts;
    const user = await db.user.findById(input);
    return user;

  }),

  createUser: publicProcedure.input(z.object({
    name: z.string(),
  })).mutation(async (opts) => {
    const {input} = opts;
    const user = await db.user.create(input);

    return user;
  }),
});

export type AppRouter = typeof appRouter;
