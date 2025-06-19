import { Float, useGLTF } from "@react-three/drei";

const ReactLogo = (props) => {
	const { nodes, materials } = useGLTF(
		import.meta.env.BASE_URL + "models/react.glb"
	);
	return (
		<Float dispose={null}>
			<group position={[8, 8, 0]} scale={1} {...props}>
				<mesh
					castShadow
					receiveShadow
					geometry={
						nodes["React-Logo_Material002_0"].geometry
					}
					material={materials["Material.002"]}
					position={[10, 0.079, 0.181]}
					rotation={[0, 0, -Math.PI / 2]}
					scale={[0.3, 0.3, 0.55]}
				/>
			</group>
		</Float>
	);
};

useGLTF.preload(import.meta.env.BASE_URL + "models/react.glb");

export default ReactLogo;
