// imports
import { getSession, signOut } from "next-auth/react";
import { NextPageContext } from "next";
import useCurrentUser from "@/hooks/useCurrentUser";

export async function getServerSideProps(context: NextPageContext) {
    const session = await getSession(context);

    // checking available session exist if its doesn't redirect to /auth
    if (!session) {
        return {
            redirect: {
                destination: "/auth",
                permanent: false,
            },
        };
    }

    return {
        props: {},
    };
}

export default function Home() {
    const { data: user } = useCurrentUser();

    return (
        <>
            <h1 className="text-8xl text-red-200">Devflix test</h1>
            <p className="text-red-200"> Logged in as : {user?.name} </p>
            <button className="h-10 w-full bg-white" onClick={() => signOut()}>
                Logout
            </button>
        </>
    );
}
