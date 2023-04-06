// imports
import React from "react";
import { useRouter } from "next/router";
// import components
import FavoriteButton from "./FavoriteButton";
// import icons
import { BsFillPlayFill } from "react-icons/bs";
import { BiChevronDown } from "react-icons/bi";
// import hooks
import useInfoModal from "@/hooks/useInfoModal";
//interface
interface MovieCardProps {
    data: Record<string, any>;
}

const MovieCard: React.FC<MovieCardProps> = ({ data }) => {
    const router = useRouter();
    const { openModal } = useInfoModal();

    return (
        <div
            className="
        group
        bg-zinc-800
        col-span
        relative
        h-[13vw]
        mb-2
        "
        >
            <img
                onClick={() => openModal(data?.id)}
                className="cursor-pointer
                object-cover
                transition
                duration
                shadow-xl
                rounded-md
                group-hover:opacity-90
                sm:group-hover:opacity-0
                delay-200
                w-full
                h[12vw]
                "
                src={data.thumbnailUrl}
                alt="Thumbnail"
            />
            <div
                className="
            opacity-0
            absolute
            top-0
            transition
            duration-200
            z-10
            invisible
            sm:visible
            delay-200
            w-full
            scale-0
            group-hover:scale-110
            group-hover:-translate-y-[6vw]
            group-hover:opacity-100
            ease-in-out
            "
            >
                <img
                    className="
                cursor-pointer
                object-cover
                transition
                duration
                shadow-xl
                rounded-t-md
                w-full
                h-[12vw]
                "
                    src={data.thumbnailUrl}
                    alt="Thumbnail"
                />
                <div
                    className="
                z-10
                bg-purple-950
                p-2
                lg:p-4
                absolute
                w-full
                transition
                shadow-md
                rounded-b-md
                "
                >
                    <div className="flex flex-row items-center gap-3">
                        <button
                            className="
                            cursor-pointer
                            w-6
                            h-6
                            lg:w-10
                            lg:h-10
                            bg-white
                            rounded-full
                            flex
                            justify-center
                            items-center
                            trasition
                            hover:bg-neutral-300                            
                            "
                            onClick={() => router.push(`/watch/${data?.id}`)}
                        >
                            <BsFillPlayFill size={30} />
                        </button>
                        <FavoriteButton movieId={data?.id} />
                        <div
                            onClick={() => openModal(data?.id)}
                            className="
                            cursor-pointer
                            ml-auto
                            group/item
                            w-6 h-6
                            lg:w-10 lg:h-10
                            border-white
                            border-2
                            rounded-full
                            flex
                            justify-center 
                            items-center 
                            transition 
                            hover:border-neutral-300"
                        >
                            <BiChevronDown
                                size={30}
                                className="text-white group-hover/item:text-neutral-300"
                            />
                        </div>
                    </div>

                    <p className="text-green-400 font-semibold mt-4">
                        New <span className="text-white text-sm">2023</span>
                    </p>

                    <div className="flex flex-row mt-4 gap-2 items-center">
                        <p className="text-white text-[10] lg:text-sm">
                            {data.duration}
                        </p>
                    </div>
                    <div className="flex flex-row mt-4 gap-2 items-center">
                        <div className="flex flex-row pb-1 justify-start items-center">
                            <span className="text-zinc-400 mr-2 text-sm">
                                Genres:
                            </span>
                            <p className="text-white text-sm">{data?.genre}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MovieCard;
