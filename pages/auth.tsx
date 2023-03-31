// imports
import Input from "@/components/input";
import { useCallback, useState } from "react";

// Auth method
const Auth = () => {
    // useStates
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [variant, setVariant] = useState("login");
    // Callback
    const toggleVariant = useCallback(() => {
        setVariant((currentVariant) =>
            currentVariant === "login" ? "register" : "login"
        );
    }, []);

    return (
        <div className="relative h-full w-full bg-[url('/images/hero-bg.jpg')] bg-no-repeat bg-center bg-fixed bg-cover">
            <div className=" bg-black w-full h-full sm:bg-opacity-50">
                <nav className="px-12 py-5">
                    <img
                        src="/images/bg-logo.png"
                        alt="logo"
                        className="h-16"
                    />
                    <div className="flex justify-center">
                        <div className="bg-black bg-opacity-70 px-16 py-16 self-center mt-2 lg:w-2/5 lg:max-w-md rounded-md w-full">
                            {/* only show if create account */}
                            <h2 className="text-white text-4xl mb-8 font-bold">
                                {variant === "login"
                                    ? "Sign in"
                                    : "Create an account"}
                            </h2>
                            <div className="flex flex-col gap-4">
                                {variant === "register" && (
                                    <Input
                                        label="Username"
                                        onChange={(event: any) =>
                                            setName(event.target.value)
                                        }
                                        id="name"
                                        value={name}
                                    />
                                )}
                                <Input
                                    label="Email"
                                    onChange={(event: any) =>
                                        setEmail(event.target.value)
                                    }
                                    id="email"
                                    type="email"
                                    value={email}
                                />
                                <Input
                                    label="Password"
                                    onChange={(event: any) =>
                                        setPassword(event.target.value)
                                    }
                                    id="password"
                                    type="password"
                                    value={password}
                                />
                                <div>
                                    <button className="bg-purple-800 py-3 text-white rounded-md w-full mt-10 hover:bg-purple-950 transition">
                                        {variant === "login"
                                            ? "Login"
                                            : "Create Account"}
                                    </button>
                                    <p className="text-neutral-500 mt-4">
                                        {variant === "login"
                                            ? "New to Devflix?"
                                            : "Already have an account?"}
                                        <span
                                            onClick={toggleVariant}
                                            className="text-white ml-1 hover:underline cursor-pointer"
                                        >
                                            {variant === "login"
                                                ? "Sign up now."
                                                : "Login"}
                                        </span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    );
};

export default Auth;
