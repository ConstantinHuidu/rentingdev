import { connectToDB } from "@/helpers/db";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { verifyPassword } from "@/helpers/auth";

export const authOptions = {
    session: {
        jwt:true,
    },
    providers: [
        CredentialsProvider({
            async authorize(credentials, req) {
                const client = await connectToDB();

                const usersColection = client.db().collection("users");

                const user = await usersColection.findOne({
                    email: credentials.email,
                })
                if (!user) {
                    client.close();
                    throw new Error('There is no user register!')
                }

                const isValid = await verifyPassword(credentials.password, user.password);

                if (!isValid) {
                    client.close();
                    throw new Error('The password is not correct!')
                }
                client.close();
                return{
                    email:user.email,
                    name: user.name,
                    id: user.id,
                }
              },
        })
    ]
}

export default NextAuth(authOptions);