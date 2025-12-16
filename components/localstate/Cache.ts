import { InMemoryCache, makeVar } from "@apollo/client";

export const userVar = makeVar<{ id: string; name: string } | null>(null);
export const userCache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        user: {
          read() {
            return userVar();
          },
        },
      },
    },
  },
});
