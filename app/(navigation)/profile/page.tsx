"use client";

import { signOut, useSession } from "next-auth/react";
import Image from "next/image";

// Icons
import { IoIosLogOut } from "react-icons/io";

// Backgrounds
import PixelBlast from "@/components/PixelBlast";
// import Particles from "@/components/Particles";
// import GradientWaves from "@/components/GradientWaves";
// import DotField from "@/components/DotField";
// import DotGrid from "@/components/DotGrid";

export default function ProfilePage() {
  const { data: session } = useSession();

  return (
    <main className="flex min-h-screen items-center justify-center">
      <div className="absolute inset-0 z-0">
        <PixelBlast
          variant="square"
          pixelSize={4}
          color="#6cda93"
          patternScale={2}
          patternDensity={0.85}
          pixelSizeJitter={0}
          enableRipples
          rippleSpeed={0.4}
          rippleThickness={0.12}
          rippleIntensityScale={1.5}
          liquid={false}
          liquidStrength={0.12}
          liquidRadius={1.2}
          liquidWobbleSpeed={5}
          speed={0.5}
          edgeFade={0.25}
          transparent
        />

        {/* <Particles
          particleColors={["#ffffff"]}
          particleCount={500}
          particleSpread={10}
          speed={0.05}
          particleBaseSize={100}
          moveParticlesOnHover
          alphaParticles={false}
          disableRotation={false}
          pixelRatio="1"
        /> */}

        {/* <GradientWaves
          horizonColor="#5227FF"
          waveColor="#FF9FFC"
          crestColor="#FFFFFF"
          speed={0.4}
          amplitude={2.5}
          waveScale={0.8}
          waveRatio={0.9}
          swell={35}
          turbulence={20}
          tilt={1.11}
          zoom={1.35}
          height={5.5}
          fogDepth={15}
          detail="medium"
          brightness={1}
          opacity={1}
          // mouseInteraction
          mouseInteraction={false}
          parallaxStrength={0.5}
          grain
          grainIntensity={0.05}
        /> */}

        {/* <DotField
          dotRadius={1.5}
          dotSpacing={14}
          bulgeStrength={67}
          glowRadius={50}
          // sparkle={false}
          sparkle={true}
          waveAmplitude={0}
          cursorRadius={500}
          cursorForce={0.03}
          // bulgeOnly={false}
          bulgeOnly={true}
          gradientFrom="#A855F7"
          gradientTo="#B497CF"
          glowColor="#120F17"
        /> */}

        {/* <DotGrid
          dotSize={5}
          gap={15}
          baseColor="#2F293A"
          activeColor="#5227FF"
          proximity={100}
          shockRadius={250}
          shockStrength={5}
          resistance={750}
          returnDuration={1.5}
        /> */}
      </div>

      <div className="relative z-10 flex min-h-screen w-full items-center justify-center px-4 pointer-events-none">
        <div className="pointer-events-auto relative w-105 max-w-[calc(100vw-2rem)] rounded-lg border bg-white/80 p-5 text-center shadow-[0_8px_30px_rgb(0,0,0,0.12)] backdrop-blur-xs dark:bg-[#0a0a0a]/80">
          <button
            type="button"
            onClick={() => signOut({ callbackUrl: "/" })}
            aria-label="Log out"
            className="absolute right-4 top-4 cursor-pointer text-lg transition-colors hover:text-red-500"
          >
            <IoIosLogOut />
          </button>

          <Image
            src={session?.user?.image ?? "/avatar-placeholder.jpg"}
            alt={session?.user?.name ?? "User"}
            width={96}
            height={96}
            className="mx-auto mb-4 h-12 w-12 rounded-full object-cover"
          />
          <div className="">
            <div className="bg-[#131313] text-left p-2 rounded-t-md font-semibold">
              Current Session
            </div>
            <div className="rounded-b-md p-4 text-left dark:bg-white/5">
              <pre className="overflow-x-auto text-sm">
                {JSON.stringify(session, null, 2)}
              </pre>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
