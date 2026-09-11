"use client";

import { AuthForm } from "@/modules/auth";

// Backgrounds
import PixelBlast from "@/components/PixelBlast";
// import Particles from "@/components/Particles";
// import GradientWaves from "@/components/GradientWaves";
// import DotField from "@/components/DotField";
// import DotGrid from "@/components/DotGrid";

export default function Home() {
  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-white dark:bg-black ">
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
      {/* Content */}
      <div className="relative z-10 flex min-h-screen w-full items-center justify-center pointer-events-none">
        <AuthForm />
      </div>
    </main>
  );
}
