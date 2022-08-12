import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export default NextAuth({
    providers: [
      GoogleProvider({
        clientId: process.env.GOOGLE_ID,
        clientSecret: process.env.GOOGLE_SECRET,
      }),
    ],
    theme: {
      colorScheme: "light",
    },
    secret: '2f5d12fa717f45494ea60fb7c4adb895',
    callbacks: {
      async jwt({ token }) {
        token.userRole = "admin"
        return token
      },
    },
});