import { FaRocket, FaStar, FaSun, FaMoon } from "react-icons/fa";
import { GoRocket } from "react-icons/go";
import { HiOutlineLightningBolt } from "react-icons/hi";
import OrbitingIcon from "./OrbitingIcon";
import OrbitLines from "./OrbitLines";
import memojiImage from "@/assets/images/memoji-computer.png";
import Image from "next/image";

const OrbitSystem = () => {
  const icons = [
    { icon: <FaSun />, radius: 100, angle: 0, speed: 10 },
    { icon: <FaMoon />, radius: 100, angle: 90, speed: 10 },
    { icon: <FaStar />, radius: 150, angle: 180, speed: 15 },
    { icon: <FaRocket />, radius: 200, angle: 270, speed: 20 },
  ];

  const orbitRadii = [...new Set(icons.map((i) => i.radius))];

  return (
    <div className="w-full">
      <div className="flex items-center justify-center">
        <div
          style={{
            position: "relative",
            width: "500px",
            height: "500px",
            margin: "0 auto",
            borderRadius: "50%",
            overflow: "clip",
          }}
          // className="[mask-image:radial-gradient(black_10%,transparent,transparent,black_31%)]"
        >
          <OrbitLines radii={orbitRadii} size={500} color="#888" />

          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              fontSize: "40px",
              color: "white",
            }}
            className="text-white"
          >
            <div className="flex items-center justify-center">
              <Image
                src={memojiImage}
                width={100}
                height={100}
                alt="profile-image"
                className="drop-shadow-xl drop-shadow-sky-400/60 pb-5"
              />
            </div>
          </div>
          {/* radius 100 Orbit */}
          <OrbitingIcon radius={100} angle={0} speed={30} direction="counter">
            <FaSun className="size-4 opacity-[0.5] text-emerald-300 animate-spin" />
          </OrbitingIcon>
          <OrbitingIcon radius={100} angle={90} speed={30} direction="counter">
            <HiOutlineLightningBolt className="size-4 opacity-[0.5] text-emerald-300 animate-spin" />
          </OrbitingIcon>
          <OrbitingIcon radius={100} angle={180} speed={30} direction="counter">
            <HiOutlineLightningBolt className="size-4 opacity-[0.5] text-emerald-300 animate-spin" />
          </OrbitingIcon>
          <OrbitingIcon radius={100} angle={270} speed={30} direction="counter">
            <HiOutlineLightningBolt className="size-4 opacity-[0.5] text-emerald-300 animate-spin" />
          </OrbitingIcon>
          {/* radius 100 Orbit */}
          {/* radius 150 Orbit */}
          <OrbitingIcon
            radius={150}
            angle={290}
            speed={30}
            direction="clockwise"
          >
            <FaStar className="size-5 opacity-[0.5] text-emerald-300" />
          </OrbitingIcon>
          <OrbitingIcon
            radius={150}
            angle={200}
            speed={30}
            direction="clockwise"
          >
            <FaStar className="size-5 opacity-[0.5] text-emerald-300" />
          </OrbitingIcon>
          <OrbitingIcon
            radius={150}
            angle={110}
            speed={30}
            direction="clockwise"
          >
            <FaStar className="size-5 opacity-[0.5] text-emerald-300" />
          </OrbitingIcon>
          <OrbitingIcon
            radius={150}
            angle={20}
            speed={30}
            direction="clockwise"
          >
            <FaStar className="size-5 opacity-[0.5] text-emerald-300" />
          </OrbitingIcon>
          {/* radius 150 Orbit */}
          {/* radius 200 Orbit */}
          <OrbitingIcon radius={200} angle={-20} speed={30} direction="counter">
            <GoRocket className="size-8 opacity-[0.5] rotate-3 text-emerald-300" />
          </OrbitingIcon>
          <OrbitingIcon radius={200} angle={70} speed={30} direction="counter">
            <GoRocket className="size-8 opacity-[0.5] rotate-3 text-emerald-300" />
          </OrbitingIcon>
          <OrbitingIcon radius={200} angle={160} speed={30} direction="counter">
            <GoRocket className="size-8 opacity-[0.5] rotate-3 text-emerald-300" />
          </OrbitingIcon>
          <OrbitingIcon radius={200} angle={250} speed={30} direction="counter">
            <GoRocket className="size-8 opacity-[0.5] rotate-3 text-emerald-300" />
          </OrbitingIcon>
          {/* radius 200 Orbit */}
        </div>
      </div>
    </div>
  );
};

export default OrbitSystem;
