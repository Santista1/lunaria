import { Html } from "@react-three/drei"

export default function Images() {
  return (
    <>
      <LuncMonkeys />
      <LSA />
      {/* <Pholuna />
      <Michi /> */}
      <Rabbi />
    </>
  )
}

function LSA() {
  const x = 14.99
  return (
    <>
      <group position={[x, 0, 0]}>
        <Html
          position={[0, 1.5, 0]}
          rotation={[0, 270 * (Math.PI / 180), 0]}
          occlude='blending'
          zIndexRange={[2, 0]}
          transform
          pointerEvents='none'
        >
          <div class='marquee'>
            <p
              style={{
                fontFamily: "Jura",
              }}
            >
              Luna Secret Alliance
            </p>
          </div>
        </Html>
        <Image
          pos={[0, 0, 3]}
          rotation={[0, 270 * (Math.PI / 180), 0]}
          src='https://res.cloudinary.com/dexin8o58/image/upload/v1687057979/Nfts/revival_iilit9.avif'
        />
        <Image
          pos={[0, 0, 1]}
          rotation={[0, 270 * (Math.PI / 180), 0]}
          src='https://res.cloudinary.com/dexin8o58/image/upload/v1685221048/Nfts/three_j414x5.gif'
        />
        <Image
          pos={[0, 0, -1]}
          rotation={[0, 270 * (Math.PI / 180), 0]}
          src='https://res.cloudinary.com/dexin8o58/image/upload/v1686904474/Nfts/Fg2oTqhWQAIXEmk_xylcip.avif'
        />
        <Image
          pos={[0, 0, -3]}
          rotation={[0, 270 * (Math.PI / 180), 0]}
          src='https://res.cloudinary.com/dexin8o58/image/upload/v1686904436/Nfts/FgrgsABXkAMnxoG_skxqik.avif'
        />
      </group>
      <group position={[x, 3, 0]}>
        <Image
          pos={[0, 0, 3]}
          rotation={[0, 270 * (Math.PI / 180), 0]}
          src='https://res.cloudinary.com/dexin8o58/image/upload/v1685218397/Nfts/FjLR2_eXEAAbI2J_os2zlu.avif'
          bgcolor='black'
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
          src='https://res.cloudinary.com/dexin8o58/image/upload/v1686902344/Nfts/rebels_016_dusqpi.avif'
        />
      </group>
    </>
  )
}

function LuncMonkeys() {
  return (
    <>
      <group position={[14.99, 6, 0]}>
        <Html
          position={[0, 1.5, 0]}
          rotation={[0, 270 * (Math.PI / 180), 0]}
          occlude='blending'
          zIndexRange={[2, 0]}
          transform
          pointerEvents='none'
        >
          <div class='marquee'>
            <p
              style={{
                fontFamily: "Jura",
              }}
            >
              Lunc Monkeys
            </p>
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
          src='https://res.cloudinary.com/dexin8o58/image/upload/v1686903275/Nfts/Fyl3M0kWYAwebnS_xgsspd.avif'
        />
      </group>
      <group position={[14.99, 9, 0]}>
        <Image
          pos={[0, 0, 3]}
          rotation={[0, 270 * (Math.PI / 180), 0]}
          src='https://res.cloudinary.com/dexin8o58/image/upload/v1676239383/Nfts/5B758959-5682-4A83-AA20-A429C53AF854_exp9da.avif'
        />
        <Image
          pos={[0, 0, 1]}
          rotation={[0, 270 * (Math.PI / 180), 0]}
          src='https://res.cloudinary.com/dexin8o58/image/upload/v1676239388/Nfts/IMG_5638_vqwa7h.avif'
        />
        <Image
          pos={[0, 0, -1]}
          rotation={[0, 270 * (Math.PI / 180), 0]}
          src='https://res.cloudinary.com/dexin8o58/image/upload/v1676239389/Nfts/IMG_5667_fhvrbt.avif'
        />
        <Image
          pos={[0, 0, -3]}
          rotation={[0, 270 * (Math.PI / 180), 0]}
          src='https://res.cloudinary.com/dexin8o58/image/upload/v1676239388/Nfts/AACABEAC-F96C-46D9-8AC5-83C5994C7F4E_grnioz.avif'
        />
      </group>
    </>
  )
}

function Rabbi() {
  return (
    <>
      <group position={[14.99, 0, 0]}>
        <Html
          position={[0, 1.5, 10]}
          rotation={[0, 270 * (Math.PI / 180), 0]}
          occlude='blending'
          zIndexRange={[2, 0]}
          transform
          pointerEvents='none'
        >
          <div class='marquee'>
            <p
              style={{
                fontFamily: "Jura",
              }}
            >
              Rabbi
            </p>
          </div>
        </Html>
        <Image
          pos={[0, 0, 3 + 4]}
          rotation={[0, 270 * (Math.PI / 180), 0]}
          src='https://res.cloudinary.com/dexin8o58/image/upload/v1687547914/Nfts/Griftlands_LUNC_L1_mfkx8x.avif'
        />
        <Text text='Owner: Rabbi' pos={[0, -0.9, 7]} rot={[0, 270 * (Math.PI / 180), 0]} />
      </group>
    </>
  )
}

// function Pholuna() {
//   const x = 3.99
//   return (
//     <>
//       <group position={[x, 0, -15]}>
//         <Html position={[0, 1.5, 0]} rotation={[0, 270 * (Math.PI / 180), 0]} occlude transform pointerEvents='none'>
//           <div class='marquee'>
//             <p
//               style={{
//                 fontFamily: "Jura",
//               }}
//             >
//               Pholuna
//             </p>
//           </div>
//         </Html>
//         <Image
//           pos={[0, 0, 3]}
//           rotation={[0, 270 * (Math.PI / 180), 0]}
//           src='https://res.cloudinary.com/dexin8o58/image/upload/v1685998057/Nfts/snake_gccjdp.avif'
//         />
//         <Image
//           pos={[0, 0, 1]}
//           rotation={[0, 270 * (Math.PI / 180), 0]}
//           src='https://res.cloudinary.com/dexin8o58/image/upload/v1685998056/Nfts/got_lunc_oo6kot.avif'
//         />
//         <Image
//           pos={[0, 0, -1]}
//           rotation={[0, 270 * (Math.PI / 180), 0]}
//           src='https://res.cloudinary.com/dexin8o58/image/upload/v1685998057/Nfts/Lunc_for_his_and_her_pleasure_Final_p5u5jd.avif'
//         />
//         <Image
//           pos={[0, 0, -3]}
//           rotation={[0, 270 * (Math.PI / 180), 0]}
//           src='https://res.cloudinary.com/dexin8o58/image/upload/v1685998056/Nfts/got_lunc_2_puf4la.avif'
//         />
//       </group>
//       <group position={[x, 3, -15]}>
//         <Image
//           pos={[0, 0, 3]}
//           rotation={[0, 270 * (Math.PI / 180), 0]}
//           src='https://res.cloudinary.com/dexin8o58/image/upload/v1686902417/Nfts/try_lunc_today_final_yn2pq0.avif'
//         />
//         <Image
//           pos={[0, 0, 1]}
//           rotation={[0, 270 * (Math.PI / 180), 0]}
//           src='https://res.cloudinary.com/dexin8o58/image/upload/v1686902421/Nfts/Lunc_Miracle_Tonic_Final_hac9b0.avif'
//         />
//       </group>
//     </>
//   )
// }

// function Michi() {
//   const x = 3.99
//   return (
//     <>
//       <group position={[-x, 0, -15]}>
//         <Html position={[0, 1.5, 0]} rotation={[0, 90 * (Math.PI / 180), 0]} occlude transform pointerEvents='none'>
//           <div class='marquee'>
//             <p
//               style={{
//                 fontFamily: "Jura",
//               }}
//             >
//               Michi
//             </p>
//           </div>
//         </Html>
//         <Image
//           pos={[0, 0, 3]}
//           rotation={[0, 90 * (Math.PI / 180), 0]}
//           src='https://res.cloudinary.com/dexin8o58/image/upload/v1686904079/Nfts/FfxJphNWYAIUUVQ_bafg0h.avif'
//         />
//       </group>
//     </>
//   )
// }

function Image({ src, pos, rotation, bgcolor }) {
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
          backgroundColor: bgcolor,
          userSelect: "none",
        }}
      >
        <img
          style={{
            filter: "contrast(1.2)",
          }}
          src={src}
        />
      </Html>
    </>
  )
}

function Text({ text, pos, rot }) {
  return (
    <Html position={pos} rotation={rot} transform pointerEvents='none'>
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
