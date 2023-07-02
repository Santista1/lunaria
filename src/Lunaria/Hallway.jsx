import { useRef, useState } from "react"
import { useFrame } from "@react-three/fiber"
import { Html } from "@react-three/drei"

export default function Hallway() {
  return (
    <>
      <Images />
    </>
  )
}

const urls = [
  "https://res.cloudinary.com/dexin8o58/image/upload/v1688310760/Nfts/imageonline-co-watermarkedimage_5_ynvlsv",
  "https://res.cloudinary.com/dexin8o58/image/upload/v1688310761/Nfts/imageonline-co-watermarkedimage_7_ijveha",
  "https://res.cloudinary.com/dexin8o58/image/upload/v1688310761/Nfts/imageonline-co-watermarkedimage_6_epmcj9",
  "https://res.cloudinary.com/dexin8o58/image/upload/v1688310760/Nfts/imageonline-co-watermarkedimage_4_ud1onj",
  "https://res.cloudinary.com/dexin8o58/image/upload/v1688310760/Nfts/imageonline-co-watermarkedimage_9_xgwk6t",
  "https://res.cloudinary.com/dexin8o58/image/upload/v1688310761/Nfts/imageonline-co-watermarkedimage_8_nkmfbk",
  "https://res.cloudinary.com/dexin8o58/image/upload/v1688310762/Nfts/imageonline-co-watermarkedimage_11_dzelcj",
  "https://res.cloudinary.com/dexin8o58/image/upload/v1688310761/Nfts/imageonline-co-watermarkedimage_12_a6jpic",
  "https://res.cloudinary.com/dexin8o58/image/upload/v1687057979/Nfts/revival_iilit9",
  // "https://res.cloudinary.com/dexin8o58/image/upload/v1685221048/Nfts/three_j414x5.gif",
  "https://res.cloudinary.com/dexin8o58/image/upload/v1686904474/Nfts/Fg2oTqhWQAIXEmk_xylcip",
  "https://res.cloudinary.com/dexin8o58/image/upload/v1686904436/Nfts/FgrgsABXkAMnxoG_skxqik",
  "https://res.cloudinary.com/dexin8o58/image/upload/v1685218397/Nfts/FjLR2_eXEAAbI2J_os2zlu",
  "https://res.cloudinary.com/dexin8o58/image/upload/v1686903850/Nfts/FhJkCVmXoAAx0aO_ge7dvx",
  "https://res.cloudinary.com/dexin8o58/image/upload/v1685218541/Nfts/FgKEctFWIAAyFFc_fudqvi",
  "https://res.cloudinary.com/dexin8o58/image/upload/v1686902344/Nfts/rebels_016_dusqpi",
  "https://res.cloudinary.com/dexin8o58/image/upload/v1687547914/Nfts/Griftlands_LUNC_L1_mfkx8x",
  "https://res.cloudinary.com/dexin8o58/image/upload/v1687563135/Nfts/1673579936098174_p46kde",
  "https://res.cloudinary.com/dexin8o58/image/upload/v1687563137/Nfts/Zaradar_Quantum_Mint_Mania_t5iub8",
  "https://res.cloudinary.com/dexin8o58/image/upload/v1687563130/Nfts/Zaradar_KungFu_Panda_cs2nod",
  "https://res.cloudinary.com/dexin8o58/image/upload/v1687563141/Nfts/Dear_Leader_Chairman_Ed_Kim_bgnqyn",
  "https://res.cloudinary.com/dexin8o58/image/upload/v1687563127/Nfts/Toby__Ed_raping_LUNC_ccoqoj",
  "https://res.cloudinary.com/dexin8o58/image/upload/v1687563109/Nfts/53c1fd6215e37ebc8c6aebd00d3e89e03254c0dc_kudkj4",
  "https://res.cloudinary.com/dexin8o58/image/upload/v1687563111/Nfts/7b1e48ee9de00a1cb12f09d8093e6637486165fd_hjputw",
  "https://res.cloudinary.com/dexin8o58/image/upload/v1685998057/Nfts/snake_gccjdp",
  "https://res.cloudinary.com/dexin8o58/image/upload/v1685998056/Nfts/got_lunc_oo6kot",
  "https://res.cloudinary.com/dexin8o58/image/upload/v1685998057/Nfts/Lunc_for_his_and_her_pleasure_Final_p5u5jd",
  "https://res.cloudinary.com/dexin8o58/image/upload/v1685998056/Nfts/got_lunc_2_puf4la",
  "https://res.cloudinary.com/dexin8o58/image/upload/v1686902417/Nfts/try_lunc_today_final_yn2pq0",
  "https://res.cloudinary.com/dexin8o58/image/upload/v1686902421/Nfts/Lunc_Miracle_Tonic_Final_hac9b0",
  "https://res.cloudinary.com/dexin8o58/image/upload/v16862703135/Nfts/Screenshot_20230608-155159_Twitter_ww309n",
  "https://res.cloudinary.com/dexin8o58/image/upload/v16862703268/Nfts/FyGetU5XsAILt4b_k1jmz9",
  "https://res.cloudinary.com/dexin8o58/image/upload/v1686903271/Nfts/FyGqUGBagAAON3q_vyfxht",
  "https://res.cloudinary.com/dexin8o58/image/upload/v1686903275/Nfts/Fyl3M0kWYAwebnS_xgsspd",
  "https://res.cloudinary.com/dexin8o58/image/upload/v1676239383/Nfts/5B758959-5682-4A83-AA20-A429C53AF854_exp9da",
  "https://res.cloudinary.com/dexin8o58/image/upload/v1676239388/Nfts/IMG_5638_vqwa7h",
  "https://res.cloudinary.com/dexin8o58/image/upload/v1676239389/Nfts/IMG_5667_fhvrbt",
  "https://res.cloudinary.com/dexin8o58/image/upload/v1676239388/Nfts/AACABEAC-F96C-46D9-8AC5-83C5994C7F4E_grnioz",
  "https://res.cloudinary.com/dexin8o58/image/upload/v1688018385/simplelady25_n2mznk",
  "https://res.cloudinary.com/dexin8o58/image/upload/v1688018667/simplelady22_zu4ofc",
  "https://res.cloudinary.com/dexin8o58/image/upload/v1688018411/simplelady24_dxghcp",
  "https://res.cloudinary.com/dexin8o58/image/upload/v1688018385/simplelady25_n2mznk",
  "https://res.cloudinary.com/dexin8o58/image/upload/v1686904079/Nfts/FfxJphNWYAIUUVQ_bafg0h",
  "https://res.cloudinary.com/dexin8o58/image/upload/v1688326028/Nfts/IMG_7473_kcoqi8",
  "https://res.cloudinary.com/dexin8o58/image/upload/v1688326031/Nfts/IMG_0139_1_d9u78i",
  "https://res.cloudinary.com/dexin8o58/image/upload/v1688326033/Nfts/coming-soon_ynyj87",
  "https://res.cloudinary.com/dexin8o58/image/upload/v1686904079/Nfts/FfxJphNWYAIUUVQ_bafg0h",
  "https://res.cloudinary.com/dexin8o58/image/upload/v1686904079/Nfts/FfxJphNWYAIUUVQ_bafg0h",
  "https://res.cloudinary.com/dexin8o58/image/upload/v1686904079/Nfts/FfxJphNWYAIUUVQ_bafg0h",
  "https://res.cloudinary.com/dexin8o58/image/upload/v1686904079/Nfts/FfxJphNWYAIUUVQ_bafg0h",
  "https://res.cloudinary.com/dexin8o58/image/upload/v1686904079/Nfts/FfxJphNWYAIUUVQ_bafg0h",
  "https://res.cloudinary.com/dexin8o58/image/upload/v1686904079/Nfts/FfxJphNWYAIUUVQ_bafg0h",
  "https://res.cloudinary.com/dexin8o58/image/upload/v1686904079/Nfts/FfxJphNWYAIUUVQ_bafg0h",
  "https://res.cloudinary.com/dexin8o58/image/upload/v1686904079/Nfts/FfxJphNWYAIUUVQ_bafg0h",
]

function Images() {
  const array1 = []
  const array2 = []

  for (let i = 0; i < urls.length; i++) {
    array1.push(
      <Image
        angle={i * (360 / urls.length)}
        height={0}
        imageAngle={270}
        distance={19}
        src={urls[i]}
        size='300px'
        text='Lunc Monkeys'
      />
    )
  }

  const group = useRef()

  useFrame((state, delta) => {
    group.current.rotation.y += delta * 0.1
  })

  for (let i = 0; i < urls.length / 4; i++) {
    array2.push(
      <Image
        angle={i * (1390 / urls.length)}
        height={5}
        imageAngle={90}
        distance={8}
        src={urls[i]}
        size='400px'
        text={null}
      />
    )
  }
  return (
    <>
      {array1}
      <group ref={group} rotation={[0, 10 * (Math.PI / 180), 0]}>
        {array2}
      </group>
    </>
  )
}

function Image(p) {
  const [hovered, hover] = useState(false)
  return (
    <>
      <group
        position={[
          Math.cos(p.angle * (Math.PI / 180)) * p.distance,
          p.height,
          Math.sin(p.angle * (Math.PI / 180)) * p.distance,
        ]}
        rotation={[0, -p.angle * (Math.PI / 180), 0]}
      >
        <Html
          onClick={() => null}
          distanceFactor={2}
          rotation={[0, p.imageAngle * (Math.PI / 180), 0]}
          transform
          // zIndexRange={[2, 0]}
          occlude='blending'
          pointerEvents='none'
          style={{
            width: p.size,
            height: p.size,
            display: "flex",
            justifyContent: "center",
            backgroundColor: "black",
            userSelect: "none",
          }}
          onPointerOver={() => hover(true)}
          onPointerOut={() => hover(false)}
        >
          <img
            style={{
              filter: "contrast(1.2)",
            }}
            src={p.src + ".webp"}
          />
          {hovered && (
            <>
              <p style={{ position: "absolute", bottom: "300px", fontFamily: "Jura", color: "#fdf29f", fontSize: 30 }}>
                {p.text}
              </p>
              <p style={{ position: "absolute", top: "300px", fontFamily: "Jura", color: "#fdf29f", fontSize: 30 }}>
                {p.text}
              </p>{" "}
            </>
          )}
        </Html>
      </group>
    </>
  )
}

// function Text({ text, pos, rot }) {
//   return (
//     <Html position={pos} rotation={rot} transform pointerEvents='none'>
//       <p
//         style={{
//           fontSize: "5px",
//           color: "#fdf29f",
//         }}
//       >
//         {text}
//       </p>
//     </Html>
//   )
// }
