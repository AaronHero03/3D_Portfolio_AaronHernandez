import CanvasLoader from "../components/CanvasLoader";
import HackerRoom from "../components/HackerRoom";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { PerspectiveCamera } from "@react-three/drei";
import { Leva } from "leva";
import { useControls } from "leva";
import { useMediaQuery } from "react-responsive";

const Hero = () => {
	// const x = useControls("HackerRoom", {
	// 	positionX: {
	// 		value: 2.5,
	// 		min: -10,
	// 		max: 10,
	// 	},
	// 	positionY: {
	// 		value: 2.5,
	// 		min: -15,
	// 		max: 10,
	// 	},
	// 	positionZ: {
	// 		value: 2.5,
	// 		min: -10,
	// 		max: 10,
	// 	},
	// 	rotationX: {
	// 		value: 2.5,
	// 		min: -10,
	// 		max: 1,
	// 	},
	// 	rotationY: {
	// 		value: 2.5,
	// 		min: -3,
	// 		max: 3,
	// 	},
	// 	rotationZ: {
	// 		value: 2.5,
	// 		min: -1,
	// 		max: 1,
	// 	},
	// 	scale: {
	// 		value: 1,
	// 		min: 0.1,
	// 		max: 0.5,
	// 	},
	// });
	const isSmall = useMediaQuery({ maxWidth: 300 });
	const isMobile = useMediaQuery({ maxWidth: 639 });
	const isTablet = useMediaQuery({ minWidth: 640, maxWidth: 1023 });

	return (
		<section className="min-h-screen flex flex-col relative ">
			<div
				className="w-full mx-auto flex flex-col sm:mt-36 mt-20
				c-space gap-3"
			>
				<p className="sm:text-3xl text-xl font-medium text-white text-center font-generalsans">
					Hi, I am Aaron
					<span className="waving-hand"> 👋</span>
				</p>
				<p className="hero_tag text-gray_gradient">
					Building Products & Brands
				</p>
			</div>

			<div className="w-full h-full absolute inset-0">
				<Canvas className="w-full h-full">
					<Suspense fallback={<CanvasLoader />}>
						<PerspectiveCamera
							makeDefault
							position={[0, 0, 30]}
						></PerspectiveCamera>
						<HackerRoom
							/*scale={[x.scale, x.scale, x.scale]}
							position={[
								x.positionX,
								x.positionY,
								x.positionZ,
							]}
							rotation={[
								x.rotationX,
								x.rotationY,
								x.rotationZ,
							]}*/
							scale={isMobile ? 0.12 : 0.13}
							position={
								isMobile
									? [0.3, -9.0, -3.3]
									: [0.3, -15.0, -3.3]
							}
							rotation={[0, -Math.PI, 0]}
						/>
						<ambientLight intensity={1} />
						<directionalLight
							position={[10, 10, 10]}
							intensity={0.5}
						/>
					</Suspense>
				</Canvas>
			</div>
		</section>
	);
};

export default Hero;
