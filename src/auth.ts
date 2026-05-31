import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import connectDB from "@/lib/mongodb";
import User from "@/models/User";

export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [
    Credentials({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        await connectDB();

        const user = await User.findOne({ email: credentials?.email }).select("+password");

        if (!user) throw new Error("Invalid credentials");

        const isValid = await bcrypt.compare(credentials?.password as string, user.password);

        if (!isValid) throw new Error("Invalid credentials");

        return {
          id: user._id.toString(),
          name: user.name,
          email: user.email,
          image: user.avatar,
        };
      },
    }),
  ],
  callbacks: {
    async session({ session, token }) {
      if (session.user) {
        (session.user as any).id = token.sub;
      }
      return session;
    },
  },
  pages: {
    signIn: "/login",
  },
  session: {
    strategy: "jwt",
  },
});
