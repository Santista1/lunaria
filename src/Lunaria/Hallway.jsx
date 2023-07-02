import { Html } from "@react-three/drei"

export default function Hallway() {
  return (
    <>
      <Images />
    </>
  )
}

const urls = [
  "https://res.cloudinary.com/dexin8o58/image/upload/v1687057979/Nfts/revival_iilit9.avif",
  "https://res.cloudinary.com/dexin8o58/image/upload/v1685221048/Nfts/three_j414x5.gif",
  "https://res.cloudinary.com/dexin8o58/image/upload/v1686904474/Nfts/Fg2oTqhWQAIXEmk_xylcip.avif",
  "https://res.cloudinary.com/dexin8o58/image/upload/v1686904436/Nfts/FgrgsABXkAMnxoG_skxqik.avif",
  "https://res.cloudinary.com/dexin8o58/image/upload/v1685218397/Nfts/FjLR2_eXEAAbI2J_os2zlu.avif",
  "https://res.cloudinary.com/dexin8o58/image/upload/v1686903850/Nfts/FhJkCVmXoAAx0aO_ge7dvx.avif",
  "https://res.cloudinary.com/dexin8o58/image/upload/v1685218541/Nfts/FgKEctFWIAAyFFc_fudqvi.avif",
  "https://res.cloudinary.com/dexin8o58/image/upload/v1686902344/Nfts/rebels_016_dusqpi.avif",
  "https://res.cloudinary.com/dexin8o58/image/upload/v1687547914/Nfts/Griftlands_LUNC_L1_mfkx8x.avif",
  "https://res.cloudinary.com/dexin8o58/image/upload/v1687563135/Nfts/1673579936098174_p46kde.avif",
  "https://res.cloudinary.com/dexin8o58/image/upload/v1687563137/Nfts/Zaradar_Quantum_Mint_Mania_t5iub8.avif",
  "https://res.cloudinary.com/dexin8o58/image/upload/v1687563130/Nfts/Zaradar_KungFu_Panda_cs2nod.avif",
  "https://res.cloudinary.com/dexin8o58/image/upload/v1687563141/Nfts/Dear_Leader_Chairman_Ed_Kim_bgnqyn.avif",
  "https://res.cloudinary.com/dexin8o58/image/upload/v1687563127/Nfts/Toby__Ed_raping_LUNC_ccoqoj.avif",
  "https://res.cloudinary.com/dexin8o58/image/upload/v1687563109/Nfts/53c1fd6215e37ebc8c6aebd00d3e89e03254c0dc_kudkj4.avif",
  "https://res.cloudinary.com/dexin8o58/image/upload/v1687563111/Nfts/7b1e48ee9de00a1cb12f09d8093e6637486165fd_hjputw.avif",
  "https://res.cloudinary.com/dexin8o58/image/upload/v1685998057/Nfts/snake_gccjdp.avif",
  "https://res.cloudinary.com/dexin8o58/image/upload/v1685998056/Nfts/got_lunc_oo6kot.avif",
  "https://res.cloudinary.com/dexin8o58/image/upload/v1685998057/Nfts/Lunc_for_his_and_her_pleasure_Final_p5u5jd.avif",
  "https://res.cloudinary.com/dexin8o58/image/upload/v1685998056/Nfts/got_lunc_2_puf4la.avif",
  "https://res.cloudinary.com/dexin8o58/image/upload/v1686902417/Nfts/try_lunc_today_final_yn2pq0.avif",
  "https://res.cloudinary.com/dexin8o58/image/upload/v1686902421/Nfts/Lunc_Miracle_Tonic_Final_hac9b0.avif",
  "https://res.cloudinary.com/dexin8o58/image/upload/v16862703135/Nfts/Screenshot_20230608-155159_Twitter_ww309n.avif",
  "https://res.cloudinary.com/dexin8o58/image/upload/v16862703268/Nfts/FyGetU5XsAILt4b_k1jmz9.avif",
  "https://res.cloudinary.com/dexin8o58/image/upload/v1686903271/Nfts/FyGqUGBagAAON3q_vyfxht.avif",
  "https://res.cloudinary.com/dexin8o58/image/upload/v1686903275/Nfts/Fyl3M0kWYAwebnS_xgsspd.avif",
  "https://res.cloudinary.com/dexin8o58/image/upload/v1676239383/Nfts/5B758959-5682-4A83-AA20-A429C53AF854_exp9da.avif",
  "https://res.cloudinary.com/dexin8o58/image/upload/v1676239388/Nfts/IMG_5638_vqwa7h.avif",
  "https://res.cloudinary.com/dexin8o58/image/upload/v1676239389/Nfts/IMG_5667_fhvrbt.avif",
  "https://res.cloudinary.com/dexin8o58/image/upload/v1676239388/Nfts/AACABEAC-F96C-46D9-8AC5-83C5994C7F4E_grnioz.avif",
  "https://res.cloudinary.com/dexin8o58/image/upload/v1688018385/simplelady25_n2mznk.png",
  "https://res.cloudinary.com/dexin8o58/image/upload/v1688018667/simplelady22_zu4ofc.png",
  "https://res.cloudinary.com/dexin8o58/image/upload/v1688018411/simplelady24_dxghcp.png",
  "https://res.cloudinary.com/dexin8o58/image/upload/v1688018385/simplelady25_n2mznk.png",
  "https://res.cloudinary.com/dexin8o58/image/upload/v1686904079/Nfts/FfxJphNWYAIUUVQ_bafg0h.avif",
  "https://res.cloudinary.com/dexin8o58/image/upload/v1686904079/Nfts/FfxJphNWYAIUUVQ_bafg0h.avif",
  "https://res.cloudinary.com/dexin8o58/image/upload/v1686904079/Nfts/FfxJphNWYAIUUVQ_bafg0h.avif",
  "https://res.cloudinary.com/dexin8o58/image/upload/v1686904079/Nfts/FfxJphNWYAIUUVQ_bafg0h.avif",
  "https://res.cloudinary.com/dexin8o58/image/upload/v1686904079/Nfts/FfxJphNWYAIUUVQ_bafg0h.avif",
  "https://res.cloudinary.com/dexin8o58/image/upload/v1686904079/Nfts/FfxJphNWYAIUUVQ_bafg0h.avif",
  "https://res.cloudinary.com/dexin8o58/image/upload/v1686904079/Nfts/FfxJphNWYAIUUVQ_bafg0h.avif",
  "https://res.cloudinary.com/dexin8o58/image/upload/v1686904079/Nfts/FfxJphNWYAIUUVQ_bafg0h.avif",
  "https://res.cloudinary.com/dexin8o58/image/upload/v1686904079/Nfts/FfxJphNWYAIUUVQ_bafg0h.avif",
  "https://res.cloudinary.com/dexin8o58/image/upload/v1686904079/Nfts/FfxJphNWYAIUUVQ_bafg0h.avif",
  "https://res.cloudinary.com/dexin8o58/image/upload/v1686904079/Nfts/FfxJphNWYAIUUVQ_bafg0h.avif",
  "https://res.cloudinary.com/dexin8o58/image/upload/v1686904079/Nfts/FfxJphNWYAIUUVQ_bafg0h.avif",
  "https://res.cloudinary.com/dexin8o58/image/upload/v1686904079/Nfts/FfxJphNWYAIUUVQ_bafg0h.avif",
  "https://res.cloudinary.com/dexin8o58/image/upload/v1686904079/Nfts/FfxJphNWYAIUUVQ_bafg0h.avif",
  "https://res.cloudinary.com/dexin8o58/image/upload/v1686904079/Nfts/FfxJphNWYAIUUVQ_bafg0h.avif",
  "https://res.cloudinary.com/dexin8o58/image/upload/v1686904079/Nfts/FfxJphNWYAIUUVQ_bafg0h.avif",
  "https://res.cloudinary.com/dexin8o58/image/upload/v1686904079/Nfts/FfxJphNWYAIUUVQ_bafg0h.avif",
  "https://res.cloudinary.com/dexin8o58/image/upload/v1686904079/Nfts/FfxJphNWYAIUUVQ_bafg0h.avif",
  "https://res.cloudinary.com/dexin8o58/image/upload/v1686904079/Nfts/FfxJphNWYAIUUVQ_bafg0h.avif",
  "https://res.cloudinary.com/dexin8o58/image/upload/v1686904079/Nfts/FfxJphNWYAIUUVQ_bafg0h.avif",
]

function Images() {
  const array = []

  for (let i = 0; i < urls.length; i++) {
    array.push(<Image angle={i * (360 / urls.length)} src={urls[i]} />)
  }
  return <>{array}</>
}

function Image(p) {
  return (
    <>
      <group
        position={[Math.cos(p.angle * (Math.PI / 180)) * 19, 0, Math.sin(p.angle * (Math.PI / 180)) * 19]}
        rotation={[0, -p.angle * (Math.PI / 180), 0]}
      >
        <Html
          onClick={() => null}
          distanceFactor={2}
          rotation={[0, 270 * (Math.PI / 180), 0]}
          transform
          zIndexRange={[2, 0]}
          occlude='blending'
          pointerEvents='none'
          style={{
            width: "300px",
            height: "300px",
            display: "flex",
            justifyContent: "center",
            backgroundColor: p.bgcolor,
            userSelect: "none",
          }}
        >
          <img
            style={{
              filter: "contrast(1.2)",
            }}
            src={p.src}
          />
          <p style={{ position: "absolute", bottom: "300px", fontFamily: "Jura", color: "#fdf29f", fontSize: 30 }}>
            Lunc Monkeys
          </p>
          <p style={{ position: "absolute", top: "300px", fontFamily: "Jura", color: "#fdf29f", fontSize: 30 }}>
            Monkey 1
          </p>
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
