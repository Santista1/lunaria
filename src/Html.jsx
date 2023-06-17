import { Html } from "@react-three/drei"

export default function Images() {
  return (
    <>
      <group position={[-2.89, 0, 0]}>
        <Image
          position={[0, 0, 3]}
          rotation={[0, 90 * (Math.PI / 180), 0]}
          src='https://res.cloudinary.com/dexin8o58/image/upload/v1676239383/5B758959-5682-4A83-AA20-A429C53AF854_exp9da.avif'
        />
        <Image
          position={[0, 0, 1]}
          rotation={[0, 90 * (Math.PI / 180), 0]}
          src='https://res.cloudinary.com/dexin8o58/image/upload/v1676239388/IMG_5638_vqwa7h.avif'
        />
        <Image
          position={[0, 0, -1]}
          rotation={[0, 90 * (Math.PI / 180), 0]}
          src='https://res.cloudinary.com/dexin8o58/image/upload/v1676239389/IMG_5667_fhvrbt.avif'
        />
        <Image
          position={[0, 0, -3]}
          rotation={[0, 90 * (Math.PI / 180), 0]}
          src='https://res.cloudinary.com/dexin8o58/image/upload/v1676239388/AACABEAC-F96C-46D9-8AC5-83C5994C7F4E_grnioz.avif'
        />
      </group>
      <group position={[2.89, 0, 0]}>
        <Image
          position={[0, 0, 3]}
          rotation={[0, 270 * (Math.PI / 180), 0]}
          src='https://res.cloudinary.com/dexin8o58/image/upload/v16862703135/Screenshot_20230608-155159_Twitter_ww309n.avif'
        />
        <Image
          position={[0, 0, 1]}
          rotation={[0, 270 * (Math.PI / 180), 0]}
          src='https://res.cloudinary.com/dexin8o58/image/upload/v16862703268/FyGetU5XsAILt4b_k1jmz9.avif'
        />
        <Image
          position={[0, 0, -1]}
          rotation={[0, 270 * (Math.PI / 180), 0]}
          src='https://res.cloudinary.com/dexin8o58/image/upload/v16862703271/FyGqUGBagAAON3q_vyfxht.avif'
        />
        <Image
          position={[0, 0, -3]}
          rotation={[0, 270 * (Math.PI / 180), 0]}
          src='https://res.cloudinary.com/dexin8o58/image/upload/v1686903275/Fyl3M0kWYAwebnS_xgsspd.avif'
        />
      </group>
      <group position={[2.89, 0, -15]}>
        <Image
          position={[0, 0, 3]}
          rotation={[0, 90 * (Math.PI / 180), 0]}
          src='https://res.cloudinary.com/dexin8o58/image/upload/v1685218397/FjLR2_eXEAAbI2J_os2zlu.avif'
        />
        <Image
          position={[0, 0, 1]}
          rotation={[0, 90 * (Math.PI / 180), 0]}
          src='https://res.cloudinary.com/dexin8o58/image/upload/v1685218541/FgKEctFWIAAyFFc_fudqvi.avif'
        />
        <Image
          position={[0, 0, -1]}
          rotation={[0, 90 * (Math.PI / 180), 0]}
          src='https://res.cloudinary.com/dexin8o58/image/upload/v1685221244/782ed0d298ebfffca45a5d6a91a4a167_tnmbyn.avif'
        />
        <Image
          position={[0, 0, -3]}
          rotation={[0, 90 * (Math.PI / 180), 0]}
          src='https://res.cloudinary.com/dexin8o58/image/upload/v1686902344/rebels_016_dusqpi.avif'
        />
      </group>
      <group position={[-2.89, 0, -15]}>
        <Image
          position={[0, 0, 3]}
          rotation={[0, 90 * (Math.PI / 180), 0]}
          src='https://res.cloudinary.com/dexin8o58/image/upload/v1676239383/5B758959-5682-4A83-AA20-A429C53AF854_exp9da.avif'
        />
        <Image
          position={[0, 0, 1]}
          rotation={[0, 90 * (Math.PI / 180), 0]}
          src='https://res.cloudinary.com/dexin8o58/image/upload/v1676239388/IMG_5638_vqwa7h.avif'
        />
        <Image
          position={[0, 0, -1]}
          rotation={[0, 90 * (Math.PI / 180), 0]}
          src='https://res.cloudinary.com/dexin8o58/image/upload/v1676239389/IMG_5667_fhvrbt.avif'
        />
        <Image
          position={[0, 0, -3]}
          rotation={[0, 90 * (Math.PI / 180), 0]}
          src='https://res.cloudinary.com/dexin8o58/image/upload/v1676239388/AACABEAC-F96C-46D9-8AC5-83C5994C7F4E_grnioz.avif'
        />
      </group>
    </>
  )
}

function Image({ src, position, rotation }) {
  return (
    <Html
      onClick={() => null}
      distanceFactor={2}
      rotation={rotation}
      position={position}
      transform
      occlude='blending'
      zIndexRange={[2, 0]}
      pointerEvents='none'
    >
      <img
        style={{
          imageRendering: "crisp-edges",
          maxWidth: "300px",
          maxHeight: "300px",
          filter: "contrast(1.3)",
        }}
        src={src}
      />
    </Html>
  )
}
