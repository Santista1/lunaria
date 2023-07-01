import { Instances, Instance } from "@react-three/drei"
import { Html } from "@react-three/drei"

export default function Hallway() {
  return (
    <>
      <Instances>
        <boxGeometry />
        <meshPhongMaterial shininess={0} />
        <Wall
          position={[Math.cos(0 * (Math.PI / 180)) * 19, 0, Math.sin(0 * (Math.PI / 180)) * 19]}
          rotation={[0, 0 * (Math.PI / 180), 0]}
          text='Luna Secret Alliance'
          urls={[
            "https://res.cloudinary.com/dexin8o58/image/upload/v1687057979/Nfts/revival_iilit9.avif",
            "https://res.cloudinary.com/dexin8o58/image/upload/v1685221048/Nfts/three_j414x5.gif",
            "https://res.cloudinary.com/dexin8o58/image/upload/v1686904474/Nfts/Fg2oTqhWQAIXEmk_xylcip.avif",
            "https://res.cloudinary.com/dexin8o58/image/upload/v1686904436/Nfts/FgrgsABXkAMnxoG_skxqik.avif",
            "https://res.cloudinary.com/dexin8o58/image/upload/v1685218397/Nfts/FjLR2_eXEAAbI2J_os2zlu.avif",
            "https://res.cloudinary.com/dexin8o58/image/upload/v1686903850/Nfts/FhJkCVmXoAAx0aO_ge7dvx.avif",
            "https://res.cloudinary.com/dexin8o58/image/upload/v1685218541/Nfts/FgKEctFWIAAyFFc_fudqvi.avif",
            "https://res.cloudinary.com/dexin8o58/image/upload/v1686902344/Nfts/rebels_016_dusqpi.avif",
          ]}
        />

        <Wall
          position={[Math.cos(45 * (Math.PI / 180)) * 19, 0, Math.sin(45 * (Math.PI / 180)) * 19]}
          rotation={[0, -45 * (Math.PI / 180), 0]}
          text='Rabbi'
          urls={[
            "https://res.cloudinary.com/dexin8o58/image/upload/v1687547914/Nfts/Griftlands_LUNC_L1_mfkx8x.avif",
            "https://res.cloudinary.com/dexin8o58/image/upload/v1687563135/Nfts/1673579936098174_p46kde.avif",
            "https://res.cloudinary.com/dexin8o58/image/upload/v1687563137/Nfts/Zaradar_Quantum_Mint_Mania_t5iub8.avif",
            "https://res.cloudinary.com/dexin8o58/image/upload/v1687563130/Nfts/Zaradar_KungFu_Panda_cs2nod.avif",
            "https://res.cloudinary.com/dexin8o58/image/upload/v1687563141/Nfts/Dear_Leader_Chairman_Ed_Kim_bgnqyn.avif",
            "https://res.cloudinary.com/dexin8o58/image/upload/v1687563127/Nfts/Toby__Ed_raping_LUNC_ccoqoj.avif",
            "https://res.cloudinary.com/dexin8o58/image/upload/v1687563109/Nfts/53c1fd6215e37ebc8c6aebd00d3e89e03254c0dc_kudkj4.avif",
            "https://res.cloudinary.com/dexin8o58/image/upload/v1687563111/Nfts/7b1e48ee9de00a1cb12f09d8093e6637486165fd_hjputw.avif",
          ]}
        />
        <Wall
          position={[Math.cos(90 * (Math.PI / 180)) * 19, 0, Math.sin(90 * (Math.PI / 180)) * 19]}
          rotation={[0, -90 * (Math.PI / 180), 0]}
          text='Michi'
          urls={[
            "https://res.cloudinary.com/dexin8o58/image/upload/v1686904079/Nfts/FfxJphNWYAIUUVQ_bafg0h.avif",
            "https://res.cloudinary.com/dexin8o58/image/upload/v1686904079/Nfts/FfxJphNWYAIUUVQ_bafg0h.avif",
            "https://res.cloudinary.com/dexin8o58/image/upload/v1686904079/Nfts/FfxJphNWYAIUUVQ_bafg0h.avif",
            "https://res.cloudinary.com/dexin8o58/image/upload/v1686904079/Nfts/FfxJphNWYAIUUVQ_bafg0h.avif",
            "https://res.cloudinary.com/dexin8o58/image/upload/v1686904079/Nfts/FfxJphNWYAIUUVQ_bafg0h.avif",
            "https://res.cloudinary.com/dexin8o58/image/upload/v1686904079/Nfts/FfxJphNWYAIUUVQ_bafg0h.avif",
            "https://res.cloudinary.com/dexin8o58/image/upload/v1686904079/Nfts/FfxJphNWYAIUUVQ_bafg0h.avif",
            "https://res.cloudinary.com/dexin8o58/image/upload/v1686904079/Nfts/FfxJphNWYAIUUVQ_bafg0h.avif",
          ]}
        />
        <Wall
          position={[Math.cos(135 * (Math.PI / 180)) * 19, 0, Math.sin(135 * (Math.PI / 180)) * 19]}
          rotation={[0, -135 * (Math.PI / 180), 0]}
          text='Pholuna'
          urls={[
            "https://res.cloudinary.com/dexin8o58/image/upload/v1685998057/Nfts/snake_gccjdp.avif",
            "https://res.cloudinary.com/dexin8o58/image/upload/v1685998056/Nfts/got_lunc_oo6kot.avif",
            "https://res.cloudinary.com/dexin8o58/image/upload/v1685998057/Nfts/Lunc_for_his_and_her_pleasure_Final_p5u5jd.avif",
            "https://res.cloudinary.com/dexin8o58/image/upload/v1685998056/Nfts/got_lunc_2_puf4la.avif",
            "https://res.cloudinary.com/dexin8o58/image/upload/v1686902417/Nfts/try_lunc_today_final_yn2pq0.avif",
            "https://res.cloudinary.com/dexin8o58/image/upload/v1686902421/Nfts/Lunc_Miracle_Tonic_Final_hac9b0.avif",
            "https://res.cloudinary.com/dexin8o58/image/upload/v1686904079/Nfts/FfxJphNWYAIUUVQ_bafg0h.avif",
            "https://res.cloudinary.com/dexin8o58/image/upload/v1686904079/Nfts/FfxJphNWYAIUUVQ_bafg0h.avif",
          ]}
        />
        <Wall
          position={[Math.cos(180 * (Math.PI / 180)) * 19, 0, Math.sin(180 * (Math.PI / 180)) * 19]}
          rotation={[0, -180 * (Math.PI / 180), 0]}
          text='Michi'
          urls={[
            "https://res.cloudinary.com/dexin8o58/image/upload/v1686904079/Nfts/FfxJphNWYAIUUVQ_bafg0h.avif",
            "https://res.cloudinary.com/dexin8o58/image/upload/v1686904079/Nfts/FfxJphNWYAIUUVQ_bafg0h.avif",
            "https://res.cloudinary.com/dexin8o58/image/upload/v1686904079/Nfts/FfxJphNWYAIUUVQ_bafg0h.avif",
            "https://res.cloudinary.com/dexin8o58/image/upload/v1686904079/Nfts/FfxJphNWYAIUUVQ_bafg0h.avif",
            "https://res.cloudinary.com/dexin8o58/image/upload/v1686904079/Nfts/FfxJphNWYAIUUVQ_bafg0h.avif",
            "https://res.cloudinary.com/dexin8o58/image/upload/v1686904079/Nfts/FfxJphNWYAIUUVQ_bafg0h.avif",
            "https://res.cloudinary.com/dexin8o58/image/upload/v1686904079/Nfts/FfxJphNWYAIUUVQ_bafg0h.avif",
            "https://res.cloudinary.com/dexin8o58/image/upload/v1686904079/Nfts/FfxJphNWYAIUUVQ_bafg0h.avif",
          ]}
        />
        <Wall
          position={[Math.cos(225 * (Math.PI / 180)) * 19, 0, Math.sin(225 * (Math.PI / 180)) * 19]}
          rotation={[0, -225 * (Math.PI / 180), 0]}
          text='Michi'
          urls={[
            "https://res.cloudinary.com/dexin8o58/image/upload/v1686904079/Nfts/FfxJphNWYAIUUVQ_bafg0h.avif",
            "https://res.cloudinary.com/dexin8o58/image/upload/v1686904079/Nfts/FfxJphNWYAIUUVQ_bafg0h.avif",
            "https://res.cloudinary.com/dexin8o58/image/upload/v1686904079/Nfts/FfxJphNWYAIUUVQ_bafg0h.avif",
            "https://res.cloudinary.com/dexin8o58/image/upload/v1686904079/Nfts/FfxJphNWYAIUUVQ_bafg0h.avif",
            "https://res.cloudinary.com/dexin8o58/image/upload/v1686904079/Nfts/FfxJphNWYAIUUVQ_bafg0h.avif",
            "https://res.cloudinary.com/dexin8o58/image/upload/v1686904079/Nfts/FfxJphNWYAIUUVQ_bafg0h.avif",
            "https://res.cloudinary.com/dexin8o58/image/upload/v1686904079/Nfts/FfxJphNWYAIUUVQ_bafg0h.avif",
            "https://res.cloudinary.com/dexin8o58/image/upload/v1686904079/Nfts/FfxJphNWYAIUUVQ_bafg0h.avif",
          ]}
        />
        <Wall
          position={[Math.cos(270 * (Math.PI / 180)) * 19, 0, Math.sin(270 * (Math.PI / 180)) * 19]}
          rotation={[0, -270 * (Math.PI / 180), 0]}
          text='Michi'
          urls={[
            "https://res.cloudinary.com/dexin8o58/image/upload/v1686904079/Nfts/FfxJphNWYAIUUVQ_bafg0h.avif",
            "https://res.cloudinary.com/dexin8o58/image/upload/v1686904079/Nfts/FfxJphNWYAIUUVQ_bafg0h.avif",
            "https://res.cloudinary.com/dexin8o58/image/upload/v1686904079/Nfts/FfxJphNWYAIUUVQ_bafg0h.avif",
            "https://res.cloudinary.com/dexin8o58/image/upload/v1686904079/Nfts/FfxJphNWYAIUUVQ_bafg0h.avif",
            "https://res.cloudinary.com/dexin8o58/image/upload/v1686904079/Nfts/FfxJphNWYAIUUVQ_bafg0h.avif",
            "https://res.cloudinary.com/dexin8o58/image/upload/v1686904079/Nfts/FfxJphNWYAIUUVQ_bafg0h.avif",
            "https://res.cloudinary.com/dexin8o58/image/upload/v1686904079/Nfts/FfxJphNWYAIUUVQ_bafg0h.avif",
            "https://res.cloudinary.com/dexin8o58/image/upload/v1686904079/Nfts/FfxJphNWYAIUUVQ_bafg0h.avif",
          ]}
        />
        <Wall
          position={[Math.cos(315 * (Math.PI / 180)) * 19, 0, Math.sin(315 * (Math.PI / 180)) * 19]}
          rotation={[0, -315 * (Math.PI / 180), 0]}
          text='Lunc Monkeys'
          urls={[
            "https://res.cloudinary.com/dexin8o58/image/upload/v16862703135/Nfts/Screenshot_20230608-155159_Twitter_ww309n.avif",
            "https://res.cloudinary.com/dexin8o58/image/upload/v16862703268/Nfts/FyGetU5XsAILt4b_k1jmz9.avif",
            "https://res.cloudinary.com/dexin8o58/image/upload/v1686903271/Nfts/FyGqUGBagAAON3q_vyfxht.avif",
            "https://res.cloudinary.com/dexin8o58/image/upload/v1686903275/Nfts/Fyl3M0kWYAwebnS_xgsspd.avif",
            "https://res.cloudinary.com/dexin8o58/image/upload/v1676239383/Nfts/5B758959-5682-4A83-AA20-A429C53AF854_exp9da.avif",
            "https://res.cloudinary.com/dexin8o58/image/upload/v1676239388/Nfts/IMG_5638_vqwa7h.avif",
            "https://res.cloudinary.com/dexin8o58/image/upload/v1676239389/Nfts/IMG_5667_fhvrbt.avif",
            "https://res.cloudinary.com/dexin8o58/image/upload/v1676239388/Nfts/AACABEAC-F96C-46D9-8AC5-83C5994C7F4E_grnioz.avif",
          ]}
        />
      </Instances>
    </>
  )
}

function Wall(p) {
  return (
    <>
      <group rotation={p.rotation} position={p.position}>
        <Instance position={[0, 1.5, 4.5]} scale={[0.2, 6, 0.2]} />
        <Instance position={[0, 1.5, -4.5]} scale={[0.2, 6, 0.2]} />
        <Instance position={[0, 0, 0]} scale={[0.01, 2, 9]} />
        <Instance position={[0, 2.5, 0]} scale={[0.01, 2, 9]} />
        <Images text={p.text} urls={p.urls} />
      </group>
    </>
  )
}

function Images(p) {
  return (
    <>
      <Html
        position={[0, 4, 0]}
        rotation={[0, 270 * (Math.PI / 180), 0]}
        occlude='blending'
        zIndexRange={[2, 0]}
        transform
        pointerEvents='none'
      >
        <div class='marquee'>
          <p style={{ fontFamily: "Jura" }}>{p.text}</p>
        </div>
      </Html>
      <Image pos={[-0.05, 0, 3]} rotation={[0, 270 * (Math.PI / 180), 0]} src={p.urls[0]} />
      <Image pos={[-0.05, 0, 1]} rotation={[0, 270 * (Math.PI / 180), 0]} src={p.urls[1]} />
      <Image pos={[-0.05, 0, -1]} rotation={[0, 270 * (Math.PI / 180), 0]} src={p.urls[2]} />
      <Image pos={[-0.05, 0, -3]} rotation={[0, 270 * (Math.PI / 180), 0]} src={p.urls[3]} />
      <Image pos={[-0.05, 2.5, 3]} rotation={[0, 270 * (Math.PI / 180), 0]} src={p.urls[4]} bgcolor='black' />
      <Image pos={[-0.05, 2.5, 1]} rotation={[0, 270 * (Math.PI / 180), 0]} src={p.urls[5]} />
      <Image pos={[-0.05, 2.5, -1]} rotation={[0, 270 * (Math.PI / 180), 0]} src={p.urls[6]} />
      <Image pos={[-0.05, 2.5, -3]} rotation={[0, 270 * (Math.PI / 180), 0]} src={p.urls[7]} />
    </>
  )
}

function Pholuna() {
  const x = 3.99
  return (
    <>
      <group position={[x, 0, -15]}>
        <Html position={[0, 1.5, 0]} rotation={[0, 270 * (Math.PI / 180), 0]} occlude transform pointerEvents='none'>
          <div class='marquee'>
            <p
              style={{
                fontFamily: "Jura",
              }}
            >
              Pholuna
            </p>
          </div>
        </Html>
        <Image
          pos={[0, 0, 3]}
          rotation={[0, 270 * (Math.PI / 180), 0]}
          src='https://res.cloudinary.com/dexin8o58/image/upload/v1685998057/Nfts/snake_gccjdp.avif'
        />
        <Image
          pos={[0, 0, 1]}
          rotation={[0, 270 * (Math.PI / 180), 0]}
          src='https://res.cloudinary.com/dexin8o58/image/upload/v1685998056/Nfts/got_lunc_oo6kot.avif'
        />
        <Image
          pos={[0, 0, -1]}
          rotation={[0, 270 * (Math.PI / 180), 0]}
          src='https://res.cloudinary.com/dexin8o58/image/upload/v1685998057/Nfts/Lunc_for_his_and_her_pleasure_Final_p5u5jd.avif'
        />
        <Image
          pos={[0, 0, -3]}
          rotation={[0, 270 * (Math.PI / 180), 0]}
          src='https://res.cloudinary.com/dexin8o58/image/upload/v1685998056/Nfts/got_lunc_2_puf4la.avif'
        />
      </group>
      <group position={[x, 3, -15]}>
        <Image
          pos={[0, 0, 3]}
          rotation={[0, 270 * (Math.PI / 180), 0]}
          src='https://res.cloudinary.com/dexin8o58/image/upload/v1686902417/Nfts/try_lunc_today_final_yn2pq0.avif'
        />
        <Image
          pos={[0, 0, 1]}
          rotation={[0, 270 * (Math.PI / 180), 0]}
          src='https://res.cloudinary.com/dexin8o58/image/upload/v1686902421/Nfts/Lunc_Miracle_Tonic_Final_hac9b0.avif'
        />
      </group>
    </>
  )
}

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
