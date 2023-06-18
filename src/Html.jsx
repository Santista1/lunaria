import { Html } from "@react-three/drei"

export default function Images() {
  const x = 3.99
  return (
    <>
      <LuncMonkeys />
      <group position={[-x, 3, 0]}>
        <Image
          pos={[0, 0, 3]}
          rotation={[0, 90 * (Math.PI / 180), 0]}
          src='https://res.cloudinary.com/dexin8o58/image/upload/v1687057979/Nfts/revival_iilit9.avif'
        />
        <Image
          pos={[0, 0, 1]}
          rotation={[0, 90 * (Math.PI / 180), 0]}
          src='https://res.cloudinary.com/dexin8o58/image/upload/v1685221048/Nfts/three_j414x5.gif'
        />
        <Image
          pos={[0, 0, -1]}
          rotation={[0, 90 * (Math.PI / 180), 0]}
          src='https://res.cloudinary.com/dexin8o58/image/upload/v1686904474/Nfts/Fg2oTqhWQAIXEmk_xylcip.avif'
        />
        <Image
          pos={[0, 0, -3]}
          rotation={[0, 90 * (Math.PI / 180), 0]}
          src='https://res.cloudinary.com/dexin8o58/image/upload/v1686904436/Nfts/FgrgsABXkAMnxoG_skxqik.avif'
        />
      </group>
      <group position={[-x, 0, 0]}>
        <Html position={[0, 1.5, 0]} rotation={[0, 90 * (Math.PI / 180), 0]} occlude transform pointerEvents='none'>
          <div class='marquee'>
            <p>Luna Secret Alliance</p>
          </div>
        </Html>
        <Image
          pos={[0, 0, 3]}
          rotation={[0, 270 * (Math.PI / 180), 0]}
          src='https://res.cloudinary.com/dexin8o58/image/upload/v1685218397/FjLR2_eXEAAbI2J_os2zlu.avif'
        />
        <Image
          pos={[0, 0, 1]}
          rotation={[0, 270 * (Math.PI / 180), 0]}
          src='https://res.cloudinary.com/dexin8o58/image/upload/v1686903850/Nfts/FhJkCVmXoAAx0aO_ge7dvx.avif'
        />
        <Image
          pos={[0, 0, -1]}
          rotation={[0, 270 * (Math.PI / 180), 0]}
          src='https://res.cloudinary.com/dexin8o58/image/upload/v1685218541/Nfts/FgKEctFWIAAyFFc_fudqvi.avif'
        />
        <Image
          pos={[0, 0, -3]}
          rotation={[0, 270 * (Math.PI / 180), 0]}
          src='https://res.cloudinary.com/dexin8o58/image/upload/v1686902344/rebels_016_dusqpi.avif'
        />
      </group>
    </>
  )
}

function LuncMonkeys() {
  const x = 3.99
  return (
    <>
      <group position={[x, 0, 0]}>
        <Html position={[0, 1.5, 0]} rotation={[0, 270 * (Math.PI / 180), 0]} occlude transform pointerEvents='none'>
          <div class='marquee'>
            <p>Lunc Monkeys</p>
          </div>
        </Html>
        <Image
          pos={[0, 0, 3]}
          rotation={[0, 270 * (Math.PI / 180), 0]}
          src='https://res.cloudinary.com/dexin8o58/image/upload/v16862703135/Nfts/Screenshot_20230608-155159_Twitter_ww309n.avif'
        />
        <Image
          pos={[0, 0, 1]}
          rotation={[0, 270 * (Math.PI / 180), 0]}
          src='https://res.cloudinary.com/dexin8o58/image/upload/v16862703268/Nfts/FyGetU5XsAILt4b_k1jmz9.avif'
        />
        <Image
          pos={[0, 0, -1]}
          rotation={[0, 270 * (Math.PI / 180), 0]}
          src='https://res.cloudinary.com/dexin8o58/image/upload/v1686903271/Nfts/FyGqUGBagAAON3q_vyfxht.avif'
        />
        <Image
          pos={[0, 0, -3]}
          rotation={[0, 270 * (Math.PI / 180), 0]}
          src='https://res.cloudinary.com/dexin8o58/image/upload/v1686903275/Fyl3M0kWYAwebnS_xgsspd.avif'
        />
      </group>
      <group position={[x, 3, 0]}>
        <Image
          pos={[0, 0, 3]}
          rotation={[0, 270 * (Math.PI / 180), 0]}
          src='https://res.cloudinary.com/dexin8o58/image/upload/v1676239383/5B758959-5682-4A83-AA20-A429C53AF854_exp9da.avif'
        />
        <Text pos={[0, -0.9, 3]} rot={[0, 270 * (Math.PI / 180), 0]} text='Owner: OG Price: -' />
        <Image
          pos={[0, 0, 1]}
          rotation={[0, 270 * (Math.PI / 180), 0]}
          src='https://res.cloudinary.com/dexin8o58/image/upload/v1676239388/IMG_5638_vqwa7h.avif'
        />
        <Text pos={[0, -0.9, 1]} rot={[0, 270 * (Math.PI / 180), 0]} text='Owner: OG Price: -' />

        <Image
          pos={[0, 0, -1]}
          rotation={[0, 270 * (Math.PI / 180), 0]}
          src='https://res.cloudinary.com/dexin8o58/image/upload/v1676239389/IMG_5667_fhvrbt.avif'
        />
        <Text pos={[0, -0.9, -1]} rot={[0, 270 * (Math.PI / 180), 0]} text='Owner: OG Price: -' />
        <Image
          pos={[0, 0, -3]}
          rotation={[0, 270 * (Math.PI / 180), 0]}
          src='https://res.cloudinary.com/dexin8o58/image/upload/v1676239388/AACABEAC-F96C-46D9-8AC5-83C5994C7F4E_grnioz.avif'
        />
        <Text pos={[0, -0.9, -3]} rot={[0, 270 * (Math.PI / 180), 0]} text='Owner: OG Price: -' />
      </group>
    </>
  )
}

function Image({ src, pos, rotation }) {
  return (
    <>
      <Html
        onClick={() => null}
        distanceFactor={2}
        rotation={rotation}
        position={pos}
        transform
        zIndexRange={[2, 0]}
        occlude='blending'
        pointerEvents='none'
        style={{
          width: "300px",
          height: "300px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <img
          style={{
            filter: "contrast(1.4)",
          }}
          src={src}
        />
      </Html>
    </>
  )
}

function Text({ text, pos, rot }) {
  return (
    <Html position={pos} rotation={rot} occlude transform pointerEvents='none'>
      <p
        style={{
          fontSize: "5px",
          color: "#fdf29f",
        }}
      >
        {text}
      </p>
    </Html>
  )
}
